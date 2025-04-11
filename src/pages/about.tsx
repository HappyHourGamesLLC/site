// src/pages/about.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef, useEffect, useState } from 'react';
import { Heart, Coffee, Clock, Users, Lightbulb, Target, Award, ThumbsUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import the TeamValues component
import TeamValues from '@/components/TeamValues';

// Founder profile type
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

const About: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Team members information
  const teamMembers: TeamMember[] = [
    {
      name: "Carlos Correa",
      role: "Founder & CEO",
      bio: "Veteran game developer with a passion for creating sustainable work environments in the industry.",
      image: "/images/carlos_pic.jpg",
      socialLinks: {
        twitter: "https://twitter.com/razor950",
        linkedin: "https://linkedin.com/in/razor950"
      }
    },
    {
      name: "Yamilett Pimentel",
      role: "Art Director",
      bio: "Experienced artist with a background in creating visually stunning game characters and worlds.",
      image: "/images/yami_pic.jpeg",
      socialLinks: {
        instagram: "https://github.com/",
      }
    },
    {
      name: "Edward Gonzalez",
      role: "Technical Director",
      bio: "Seasoned programmer with expertise in game engine development and a focus on creating efficient, maintainable code.",
      image: "/images/ed94_pic.jpeg",
      socialLinks: {
        github: "https://github.com/Ed94",
        twitter: "https://twitter.com/Ed__dev"
      }
    },
    {
      name: "Alex Batista",
      role: "Game Programmer",
      bio: "Creative mind with a knack for crafting engaging gameplay mechanics and player experiences that delight and challenge.",
      image: "/images/alex_pic.jpeg",
      socialLinks: {
        twitter: "https://twitter.com/alex_batista",
        linkedin: "https://linkedin.com/in/alex-batista-01/"
      }
    },
    {
      name: "Haczar Criollo",
      role: "Lead Producer & Game Designer",
      bio: "Experienced game developer with a passion for innovative gameplay systems and sustainable production practices. Specializes in creating engaging player experiences while maintaining healthy team dynamics.",
      image: "/images/haczar_pic.jpeg",
      socialLinks: {
        twitter: "https://twitter.com/haczar_criollo",
        github: "https://github.com/haczar",
        linkedin: "https://www.linkedin.com/in/haczarcriollo/"
      }
    }
  ];

  // Intersection observer for animation
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
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>About | Happy Hour Games</title>
        <meta name="description" content="Learn about Happy Hour Games, our mission, team, and unique approach to game development without crunch." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-transparent to-gray-900 absolute z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-purple-400">Us</span>
            </h1>
            <p className="text-xl mb-6 text-gray-200">
              Happy Hour Games is a pioneering video game development studio dedicated to creating 
              top-tier, engaging games while prioritizing the well-being of our team.
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col  items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Happy Hour Games was founded by a team of experienced game developers who shared a 
                vision of creating exceptional games without sacrificing the well-being of the team. 
                After years of observing and experiencing the challenges of traditional game development, 
                we decided to establish a studio that prioritizes sustainable workflows and work-life balance.
              </p>
              <p className="text-gray-300 mb-6">
                Our collective experience has equipped us with the knowledge and skills to create 
                exceptional gaming experiences while fostering a healthy work environment. We believe 
                that a happy, well-rested team is more creative, productive, and capable of delivering 
                high-quality games that players will love.
              </p>
              <p className="text-gray-300">
              Today, we're focused on developing our next innovative project while building a studio culture that values creativity, collaboration, and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values (Moved from Home page) */}
      <TeamValues />
      {/* Our Mission */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Our <span className="text-purple-400">Mission</span></h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We're on a mission to create exceptional games that players love while 
            demonstrating that a healthy work environment leads to better creativity, 
            productivity, and ultimately, higher-quality games.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
              <Heart size={48} className="text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sustainable Development</h3>
              <p className="text-gray-300">
                We've developed a unique workflow that effectively eliminates crunch, 
                ensures clear communication, and promotes a healthy work-life balance.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
              <Coffee size={48} className="text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Creative Excellence</h3>
              <p className="text-gray-300">
                We prioritize quality over quantity, focusing on creating innovative, 
                engaging games that deliver exceptional experiences to players.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
              <Users size={48} className="text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Industry Change</h3>
              <p className="text-gray-300">
                We aim to lead by example, demonstrating that a sustainable, ethical 
                approach to game development can produce outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Approach (Enhanced with more details) */}
      <section className="py-16 bg-gray-800" ref={sectionRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-purple-400">Approach</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              At Happy Hour Games, we've developed a unique approach to game development 
              that prioritizes both product quality and team well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-500 
              transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-900/20">
              <div className="flex items-center mb-6">
                <Clock size={32} className="text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold">No-Crunch Policy</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our no-crunch policy ensures employees maintain a healthy work-life balance, 
                which ultimately results in a more motivated and productive team. We emphasize 
                effective planning, iterative design, and regular progress evaluations to 
                minimize the need for overtime and reduce stress.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Flexible work hours and remote work options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Realistic scheduling with buffer time for challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Mental health resources and stress management tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Regular team check-ins and open communication channels</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-500 
              transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-900/20">
              <div className="flex items-center mb-6">
                <Lightbulb size={32} className="text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold">Iterative Development</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We believe in iterating early and often to ensure we're building games that players 
                will love. Our development process focuses on establishing and validating core gameplay 
                loops before investing heavily in content and assets.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Early prototype phase to validate game concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Regular playtesting throughout development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Player feedback integration from early stages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Agile methodology with sustainable sprint planning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional approaches */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-500 
              transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-900/20">
              <div className="flex items-center mb-6">
                <Target size={32} className="text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold">Player-Centric Design</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We place players at the center of our design process, focusing on creating meaningful 
                and engaging experiences that resonate. By understanding our audience deeply, we can 
                craft games that truly connect with players.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Comprehensive player research before and during development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Accessibility considerations built into design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>User experience testing at all development stages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Community engagement and transparent development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-500 
              transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-900/20">
              <div className="flex items-center mb-6">
                <Award size={32} className="text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold">Quality Focus</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We believe that quality is non-negotiable. Rather than rushing to market or adding 
                unnecessary features, we focus on polishing core gameplay and creating memorable experiences 
                that players will value and remember.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Comprehensive quality assurance throughout development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Emphasis on performance and technical stability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Polish and refinement phases before release</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Balanced monetization that respects player experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team - Enhanced with Social Links */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-purple-400">Team</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Meet the talented individuals behind Happy Hour Games who share our vision 
              of creating exceptional games in a healthy work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`
                  bg-gray-800 rounded-lg overflow-hidden shadow-lg
                  transition-all duration-700 ease-out
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20
                  ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-60 w-full group">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    sizes="300px"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-4">{member.bio}</p>
                  
                  {/* Social media links */}
                  {member.socialLinks && (
                    <div className="flex space-x-3 mt-4">
                      {member.socialLinks.twitter && (
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.github && (
                        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Impact - New Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-purple-400">Impact</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              At Happy Hour Games, we strive to make a positive impact on both our players and the industry.
              Here's how we're making a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <ThumbsUp className="text-purple-400 mr-3" size={24} />
                Player Experience
              </h3>
              <p className="text-gray-300 mb-4">
                We create games that respect our players' time and intelligence. By focusing on
                meaningful gameplay and fair monetization practices, we aim to build lasting
                relationships with our community.
              </p>
              <p className="text-gray-300">
                Our approach to game design emphasizes quality over quantity, creating
                memorable experiences that players will want to revisit and share with others.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="text-purple-400 mr-3" size={24} />
                Industry Change
              </h3>
              <p className="text-gray-300 mb-4">
                By demonstrating that exceptional games can be created without crunch, we hope
                to inspire change across the industry. We openly share our development processes
                and work culture to help other studios adopt healthier practices.
              </p>
              <p className="text-gray-300">
                We're committed to breaking the cycle of burnout and promoting sustainable
                careers in game development for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Join Us CTA */}
      <section className="py-16 bg-purple-900 bg-opacity-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          We're always looking for talented individuals who share our vision of creating 
          exceptional games in a healthy, balanced work environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/careers" className="btn-primary px-8 py-3">
            View Career Opportunities
          </Link>
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;