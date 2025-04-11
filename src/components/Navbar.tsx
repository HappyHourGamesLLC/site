import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  isButton?: boolean;
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useRouter();

  // Navigation items
  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    //{ name: 'Games', href: '/games' },
    //{ name: 'Investors', href: '/investors' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact', isButton: true }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Handle scroll effect for navbar
  const handleScroll = useCallback(() => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a nav item is active
  const isActive = (pathname: string): boolean => {
    if (pathname === '/') {
      return router.pathname === pathname;
    }
    return router.pathname.startsWith(pathname);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-gray-900 bg-opacity-80 py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center group"
            >

            <span className="text-purple-400 mr-2 transition-transform duration-300 group-hover:scale-110">HH</span>
            <span className="transition-colors duration-300 group-hover:text-purple-300">Happy Hour Games</span>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={`
                  ${item.isButton ? 'btn-primary' : 'nav-link'} 
                  ${!item.isButton && isActive(item.href) ? 'text-purple-400' : ''}
                  transition-all duration-300
                `}
                >

                {item.name}

              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={24} className="transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Menu size={24} className="transition-transform duration-300 hover:scale-110" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div 
        className={`
          md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={`
                  mobile-nav-link py-2 
                  ${isActive(item.href) ? 'text-purple-400' : ''}
                  ${item.isButton ? 'mt-2 btn-primary text-center' : ''}
                `}
                onClick={() => setIsMenuOpen(false)}
                >

                {item.name}

              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;