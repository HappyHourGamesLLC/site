// src/pages/services.tsx
import { FC, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Brush, Users, Gamepad, Terminal, BarChart3, Layers, Megaphone, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

const Services: FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const router = useRouter();

  const services: ServiceSection[] = [
    {
      id: "programming",
      icon: <Code size={48} className="text-purple-400" />,
      title: "Game Programming",
      shortDescription: "Expert implementation of gameplay systems, AI, physics, and networking solutions for your projects.",
      fullDescription: "Our experienced programming team can handle all aspects of your game's technical needs, from core gameplay mechanics to advanced systems integration. We specialize in creating efficient, maintainable code that scales with your project needs while maintaining performance across platforms.",
      features: [
        "Gameplay systems programming",
        "AI and behavior systems",
        "Physics and collision implementation",
        "Networking and multiplayer infrastructure",
        "Performance optimization",
        "Cross-platform development",
        "Technical design and architecture"
      ],
    },
    {
      id: "art",
      icon: <Brush size={48} className="text-purple-400" />,
      title: "Art & Animation",
      shortDescription: "High-quality 2D/3D art production, character design, environment art, and animation services.",
      fullDescription: "Our talented art team delivers eye-catching visuals that enhance your game's identity and player experience. From concept art to final assets and animations, we maintain high quality standards while adhering to technical requirements and project constraints.",
      features: [
        "2D and 3D asset creation",
        "Character design and modeling",
        "Environment and prop design",
        "Texture creation and materials",
        "Animation and rigging",
        "VFX and particle systems",
        "UI/UX design and implementation"
      ],
    },
    {
      id: "design",
      icon: <Gamepad size={48} className="text-purple-400" />,
      title: "Game Design",
      shortDescription: "Comprehensive game design services including mechanics, levels, systems, and narrative design.",
      fullDescription: "Our design team brings gameplay concepts to life with thoughtful, player-centric approaches. We focus on creating engaging experiences through well-crafted mechanics, balanced systems, and meaningful player progression that keeps your audience invested.",
      features: [
        "Core gameplay mechanics design",
        "Level and encounter design",
        "Economy and progression systems",
        "Narrative and quest design",
        "Player feedback and game feel",
        "Balancing and tuning",
        "Prototyping and iterative design"
      ],
    },
    {
      id: "engine",
      icon: <Terminal size={48} className="text-purple-400" />,
      title: "Engine Development",
      shortDescription: "Custom engine solutions, tools development, and technical infrastructure for your games.",
      fullDescription: "Our engine specialists can enhance your existing technology stack or develop custom solutions to address specific project needs. We create efficient workflows through specialized tools, pipeline improvements, and robust technical architecture.",
      features: [
        "Custom engine extensions and plugins",
        "Development tools and editor enhancements",
        "Pipeline optimization and automation",
        "Technical asset management systems",
        "Build systems and deployment workflow",
        "Performance profiling and optimization",
        "Platform-specific adaptations"
      ],
    },
    {
      id: "qa",
      icon: <BarChart3 size={48} className="text-purple-400" />,
      title: "QA & Testing",
      shortDescription: "Comprehensive quality assurance, performance testing, and bug tracking to ensure polished releases.",
      fullDescription: "Our dedicated QA team provides thorough testing throughout your development cycle, helping to identify issues early and ensuring a polished final product. We implement efficient tracking systems and reporting processes that integrate with your workflow.",
      features: [
        "Functional testing and bug reporting",
        "Performance and compatibility testing",
        "Automated testing systems",
        "Regression testing",
        "User experience testing",
        "Platform certification pre-checks",
        "Load and stress testing for online games"
      ],
    },
    {
      id: "porting",
      icon: <Megaphone size={48} className="text-purple-400" />,
      title: "Porting Support",
      shortDescription: "Expert assistance with bringing your game to additional platforms with optimization and platform-specific features.",
      fullDescription: "We help developers extend their game's reach by porting to new platforms while maintaining quality and performance. Our team handles technical adaptations, platform-specific optimizations, and ensures compliance with each platform's unique requirements.",
      features: [
      "Cross-platform development expertise",
      "Performance optimization for target hardware",
      "Platform-specific feature implementation",
      "UI/UX adaptation for different input methods",
      "Compliance and certification guidance",
      "Quality assurance across platforms",
      "Resolution and aspect ratio optimization"
      ],
    },
    {
      id: "full-development",
      icon: <Layers size={48} className="text-purple-400" />,
      title: "Full Project Development",
      shortDescription: "End-to-end game development from concept to launch, with a focus on quality and sustainability.",
      fullDescription: "From initial concept to final release, we can handle every aspect of your game's development. Our full-service approach ensures a cohesive vision and efficient execution, with transparent communication and milestone-based development.",
      features: [
        "Concept development and validation",
        "Full production management",
        "Integrated design, art, and programming",
        "Regular builds and milestone deliveries",
        "Transparent progress tracking",
        "QA and platform certification",
        "Launch preparation and support"
      ],
    },
    {
      id: "team-scaling",
      icon: <Users size={48} className="text-purple-400" />,
      title: "Team Scaling",
      shortDescription: "Flexible team augmentation to meet your project's needs with skilled professionals.",
      fullDescription: "When your project requires additional expertise or capacity, our team scaling service provides skilled professionals who integrate seamlessly with your existing workflow. We offer flexible arrangements from individual specialists to complete department support.",
      features: [
        "Skilled developers in all disciplines",
        "Seamless integration with your workflow",
        "Flexible team size and duration",
        "Consistent communication channels",
        "Scaling up or down as needed",
        "Knowledge transfer protocols",
        "Dedicated project management"
      ],
    }
  ];

  const scrollToHash = () => {
    const hash = router.asPath.split('#')[1];
    if (hash && sectionRefs.current[hash]) {
      // Add a small delay to ensure the page is fully rendered
      setTimeout(() => {
        sectionRefs.current[hash]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 5);
    }
  };
  
  // Handle hash scrolling when route changes
  useEffect(() => {
    if (router.isReady) {
      scrollToHash();
    }
  }, [router.isReady, router.asPath]);

  // Intersection observer setup
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const serviceRows = Array.from({ length: Math.ceil(services.length / 2) }, (_, i) => i);
    
    serviceRows.forEach(rowIndex => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const firstServiceIndex = rowIndex * 2;
            const secondServiceIndex = firstServiceIndex + 1;
            
            // Update visibility for both services in this row
            setIsVisible(prev => ({
              ...prev,
              [`row-${rowIndex}`]: true
            }));
            
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1
        }
      );
      
      if (sectionRefs.current[`row-${rowIndex}`]) {
        observer.observe(sectionRefs.current[`row-${rowIndex}`]!);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [services]);

  // Group services into pairs for displaying side by side
  const serviceRows = [];
  for (let i = 0; i < services.length; i += 2) {
    serviceRows.push(services.slice(i, i + 2));
  }

  // Alternatively, you can use a type assertion
  const handleRef = (rowIndex: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[`row-${rowIndex}`] = el;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Co-Development Services | Happy Hour Games</title>
        <meta name="description" content="Expert game development services including programming, art, design, QA, and full production with our sustainable, no-crunch approach." />
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
              Co-Development <span className="text-purple-400">Services</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Expert game development services delivered with our no-crunch approach, 
              ensuring quality, reliability, and sustainable timelines for your projects.
            </p>
            <a href="#services" className="btn-primary">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Choose Happy Hour Games</h2>
              <p className="text-gray-300 mb-6">
                At Happy Hour Games, we approach co-development differently. Our commitment to 
                sustainable development practices means we deliver high-quality work on time without 
                the burnout and quality issues that come with crunch culture.
              </p>
              <p className="text-gray-300 mb-6">
                We integrate seamlessly with your team, providing transparent communication and regular 
                deliverables that keep your project on track. Our experienced developers across all 
                disciplines bring creativity and technical expertise to solve your most challenging problems.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold">Reliable Delivery</h3>
                    <p className="text-gray-300">We set realistic timelines and consistently meet our commitments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold">Quality Focus</h3>
                    <p className="text-gray-300">Our well-rested teams deliver higher-quality work with fewer revisions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold">Transparent Process</h3>
                    <p className="text-gray-300">Clear communication and visibility into our progress at every stage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold">Flexible Engagement</h3>
                    <p className="text-gray-300">From specific project components to full-scale development.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section id="services" className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-purple-400">Services</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of game development services that can be tailored to your specific project needs.
            </p>
          </div>
          
          <div className="space-y-20">
            {serviceRows.map((row, rowIndex) => (
              <div 
                key={`row-${rowIndex}`} 
                ref={handleRef(rowIndex)}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-8
                  transition-all duration-1000 ease-out
                  ${isVisible[`row-${rowIndex}`] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}
                `}
              >
                {row.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    service={service}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-purple-400">Process</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A transparent, efficient approach to co-development built around sustainable practices.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-purple-800 transform md:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-gray-300">
                      We start by understanding your project needs, goals, and constraints to determine how 
                      we can best support your development process.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-3.5 md:-translate-x-4 flex items-center justify-center">
                    1
                  </div>
                  <div className="flex-1 md:pl-12 md:mt-0 mt-4"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 md:block hidden"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-3.5 md:-translate-x-4 flex items-center justify-center">
                    2
                  </div>
                  <div className="flex-1 md:pl-12 md:mt-0 mt-4">
                    <h3 className="text-xl font-bold mb-2">Scoping & Planning</h3>
                    <p className="text-gray-300">
                      We define the scope of work, create detailed specifications, and establish 
                      realistic timelines based on sustainable development practices.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Integration & Kickoff</h3>
                    <p className="text-gray-300">
                      Our team members integrate with your workflows, tools, and communication channels, 
                      ensuring a smooth collaboration from day one.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-3.5 md:-translate-x-4 flex items-center justify-center">
                    3
                  </div>
                  <div className="flex-1 md:pl-12 md:mt-0 mt-4"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 md:block hidden"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-3.5 md:-translate-x-4 flex items-center justify-center">
                    4
                  </div>
                  <div className="flex-1 md:pl-12 md:mt-0 mt-4">
                    <h3 className="text-xl font-bold mb-2">Development & Iteration</h3>
                    <p className="text-gray-300">
                      Regular builds, milestone deliveries, and constant communication ensure 
                      you always know where your project stands and can provide feedback.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">QA & Refinement</h3>
                    <p className="text-gray-300">
                      Comprehensive quality assurance ensures deliverables meet your standards, 
                      with iterative refinement based on your feedback.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-3.5 md:-translate-x-4 flex items-center justify-center">
                    5
                  </div>
                  <div className="flex-1 md:pl-12 md:mt-0 mt-4"></div>
                </div>
                
                {/* Step 6 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 md:block hidden"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-3.5 md:-translate-x-4 flex items-center justify-center">
                    6
                  </div>
                  <div className="flex-1 md:pl-12 md:mt-0 mt-4">
                    <h3 className="text-xl font-bold mb-2">Delivery & Transition</h3>
                    <p className="text-gray-300">
                      Clean handover of deliverables with comprehensive documentation and knowledge 
                      transfer to ensure your team can seamlessly continue development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 bg-opacity-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Great Together</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to discuss how we can help with your game development needs? Our team is ready to bring your vision to life with our sustainable, high-quality approach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="btn-primary px-8 py-3">
              Get in Touch
            </Link>
            <Link href="/about" className="btn-secondary px-8 py-3">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  service: ServiceSection;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg h-full flex flex-col border border-gray-700 hover:border-purple-700 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="mr-4">{service.icon}</div>
        <h3 className="text-2xl font-bold">{service.title}</h3>
      </div>
      
      <p className="text-lg text-gray-300 mb-4">{service.shortDescription}</p>
      <p className="text-gray-400 mb-6 text-sm">{service.fullDescription}</p>
      
      <div className="mb-6 flex-grow">
        <h4 className="text-lg font-semibold mb-2 text-purple-300">What We Offer</h4>
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle size={14} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* 
      <Link href={`/contact?service=${service.id}`} className="btn-primary inline-flex items-center justify-center text-center">
        Contact Us
        <ArrowRight size={16} className="ml-2" />
      </Link>
      */}
    </div>
  );
};

export default Services;