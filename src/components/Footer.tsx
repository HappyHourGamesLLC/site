// components/Footer.tsx
import { FC, useState, FormEvent } from 'react';
import Link from 'next/link';
import {X, Mail, Heart, ArrowRight } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const Footer: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const quickLinks: FooterLink[] = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' }
    //{ name: 'Games', href: '/games' }
  ];

  const infoLinks: FooterLink[] = [
    //{ name: 'Investors', href: '/investors' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    //{ name: 'Privacy Policy', href: '/privacy' }
  ];

  const socialLinks: SocialLink[] = [
    { name: 'Twitter', icon: <X size={20} />, href: 'https://twitter.com/happyhourgames' },
    //{ name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com/happyhourgames' },
    //{ name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/happyhourgames' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:hello@thehappyhour.games' }
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="transition-all duration-300 hover:translate-x-1">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-purple-400 mr-2">HH</span> Happy Hour Games
            </h3>
            <p className="text-gray-400 mb-6">
              Creating high-quality games with a sustainable, healthy work environment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.name}
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="transition-all duration-300 hover:translate-x-1">
            <h3 className="text-lg font-bold mb-4 group flex items-center">
              Quick Links
              <div className="ml-2 w-6 h-px bg-purple-500 transform transition-transform duration-300 group-hover:w-12"></div>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                    >

                    <ArrowRight size={14} className="mr-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.name}

                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Information */}
          <div className="transition-all duration-300 hover:translate-x-1">
            <h3 className="text-lg font-bold mb-4 group flex items-center">
              Information
              <div className="ml-2 w-6 h-px bg-purple-500 transform transition-transform duration-300 group-hover:w-12"></div>
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                    >

                    <ArrowRight size={14} className="mr-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.name}

                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center">
            &copy; {new Date().getFullYear()} Happy Hour Games. All rights reserved. 
            <span className="ml-2 flex items-center text-sm text-gray-400">
              Made with <Heart size={14} className="mx-1 text-purple-500" /> in a crunch-free environment
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;