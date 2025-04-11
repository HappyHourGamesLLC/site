// src/components/ServicesGrid.tsx
import { FC, useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Code, Brush, Users, Gamepad, Terminal, BarChart3, Layers, Megaphone } from 'lucide-react';

interface ServiceCard {
  id: string; // Add this field
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServicesGrid: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services: ServiceCard[] = [
    {
      id: "programming",
      icon: <Code size={40} className="text-purple-400" />,
      title: "Game Programming",
      description: "Expert implementation of gameplay systems, AI, physics, and networking solutions for your projects.",
      link: "/services/programming"
    },
    {
      id: "art",
      icon: <Brush size={40} className="text-purple-400" />,
      title: "Art & Animation",
      description: "High-quality 2D/3D art production, character design, environment art, and animation services.",
      link: "/services/art"
    },
    {
      id: "design",
      icon: <Gamepad size={40} className="text-purple-400" />,
      title: "Game Design",
      description: "Comprehensive game design services including mechanics, levels, systems, and narrative design.",
      link: "/services/design"
    },
    {
      id: "engine",
      icon: <Terminal size={40} className="text-purple-400" />,
      title: "Engine Development",
      description: "Custom engine solutions, tools development, and technical infrastructure for your games.",
      link: "/services/engine"
    },
    {
      id: "qa",
      icon: <BarChart3 size={40} className="text-purple-400" />,
      title: "QA & Testing",
      description: "Comprehensive quality assurance, performance testing, and bug tracking to ensure polished releases.",
      link: "/services/qa"
    },
    {
      id: "porting",
      icon: <Megaphone size={40} className="text-purple-400" />,
      title: "Porting Support",
      description: "Expert assistance with bringing your game to devices with optimizations and platform-specific features.",
      link: "/services/porting"
    },      
    {
      id: "full-development",
      icon: <Layers size={40} className="text-purple-400" />,
      title: "Full Project Development",
      description: "End-to-end game development from concept to launch, with a focus on quality and sustainability.",
      link: "/services/full-development"
    },
    {
      id: "team-scaling",
      icon: <Users size={40} className="text-purple-400" />,
      title: "Team Scaling",
      description: "Flexible team augmentation to meet your project's needs with skilled professionals.",
      link: "/services/team-scaling"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-4xl font-bold mb-4">Co-Development <span className="text-purple-400">Services</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Partner with Happy Hour Games for specialized game development services delivered with our 
            no-crunch approach, ensuring quality, reliability, and sustainable timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <Link href="/services" className="btn-primary px-8 py-3">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceCard;
  index: number;
  isVisible: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, index, isVisible }) => {
  return (
    <Link href={`/services#${service.id}`} scroll={false}>
      <div 
        className={`
          bg-gray-800 p-8 rounded-lg shadow-lg
          transition-all duration-700 ease-out
          hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20
          cursor-pointer
          ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}
        `}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="mb-6 transform transition-transform duration-500 hover:scale-110">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-300 mb-4">{service.description}</p>
        <span className="text-purple-400 flex items-center group">
          Learn more 
          <svg 
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ServicesGrid;