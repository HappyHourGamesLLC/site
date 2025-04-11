import React, { FC, useRef, useEffect, useState } from 'react';
import { Users, Clock, Lightbulb } from 'lucide-react';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const TeamValues: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const values: ValueCard[] = [
    {
      icon: <Clock size={48} className="text-purple-400" />,
      title: "No-Crunch Culture",
      description: "We prioritize work-life balance with sustainable workflows. Our team thrives without the burnout of crunch time.",
      delay: 100
    },
    {
      icon: <Lightbulb size={48} className="text-purple-400" />,
      title: "Iterative Development",
      description: "We iterate early and often, refining gameplay loops through testing to deliver exceptional player experiences.",
      delay: 200
    },
    {
      icon: <Users size={48} className="text-purple-400" />,
      title: "Player-Centric Approach",
      description: "We value player feedback, incorporating it early in development to create games that truly resonate with audiences.",
      delay: 300
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to keep observing
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

  // Function to render Value Card with animation
  const renderValueCard = (value: ValueCard, index: number): React.ReactElement => {
    return (
      <div
        key={index}
        className={`
          bg-gray-800 p-8 rounded-lg 
          transition-all duration-700 ease-out
          ${isVisible 
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-12'
          }
        `}
        style={{ 
          transitionDelay: `${value.delay}ms`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="mb-6 transform transition-transform duration-500 hover:scale-110">
          {value.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">
          {value.title}
        </h3>
        <p className="text-gray-300">
          {value.description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          className={`
            text-center mb-16 
            transition-all duration-700 
            ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}
          `}
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-purple-400 relative">
              Values
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At Happy Hour Games, we believe great games come from healthy, balanced teams.
            Our approach redefines game development without sacrificing quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => renderValueCard(value, index))}
        </div>
      </div>
    </section>
  );
};

export default TeamValues;