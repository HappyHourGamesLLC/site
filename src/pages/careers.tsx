// src/pages/careers.tsx
import { FC, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Coffee, Briefcase, MessageSquare, Users, CheckCircle, ChevronDown, ChevronUp, MapPin, Clock, Calendar, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred?: string[];
  postedDate: string;
}

const Careers: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Job listings data
  const jobs: JobPosition[] = [
    {
      id: 'game-programmer',
      title: 'Senior Game Programmer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for an experienced game programmer to join our team and help develop our flagship title, Project Victorian. You will be responsible for implementing core gameplay systems and optimizing performance.',
      responsibilities: [
        'Develop and maintain game features and systems',
        'Collaborate with designers to implement gameplay mechanics',
        'Profile and optimize code for performance',
        'Participate in code reviews and share knowledge with the team',
        'Help define technical standards and best practices'
      ],
      requirements: [
        '5+ years of professional game development experience',
        'Strong programming skills in C++ or C#',
        'Experience with Unity or Unreal Engine',
        'Knowledge of game architecture patterns and optimization techniques',
        'Excellent problem-solving and communication skills'
      ],
      preferred: [
        'Experience with roguelike or action game development',
        'Background in networked multiplayer games',
        'Understanding of procedural content generation'
      ],
      postedDate: 'April 5, 2025'
    },
    {
      id: 'game-artist',
      title: 'Game Artist (Environment)',
      department: 'Art',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are seeking a talented environment artist to create atmospheric Victorian/Gothic settings for Project Victorian. You will work closely with the art director to establish the visual identity of our game world.',
      responsibilities: [
        'Create high-quality environment assets and textures',
        'Design atmospheric and immersive game spaces',
        'Optimize art assets for performance across target platforms',
        'Collaborate with level designers to enhance gameplay through environmental design',
        'Contribute to the overall visual style of the game'
      ],
      requirements: [
        '3+ years of experience in game art development',
        'Strong portfolio demonstrating environment art skills',
        'Proficiency with 3D modeling software (Maya, Blender, etc.)',
        'Experience with PBR workflows and texture creation',
        'Understanding of game art optimization techniques'
      ],
      preferred: [
        'Experience with Gothic or Victorian art styles',
        'Knowledge of procedural material creation',
        'Background in lighting and atmosphere creation'
      ],
      postedDate: 'March 28, 2025'
    },
    {
      id: 'game-designer',
      title: 'Game Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our team as a game designer to help create engaging gameplay systems and mechanics for Project Victorian. You will collaborate with programmers and artists to bring our vision to life.',
      responsibilities: [
        'Design and balance core gameplay systems',
        'Create engaging player progression and reward structures',
        'Document game features and systems for the development team',
        'Prototype and iterate on gameplay mechanics',
        'Analyze player feedback and suggest improvements'
      ],
      requirements: [
        '3+ years of game design experience',
        'Strong understanding of action roguelike and bullet hell genres',
        'Experience with game balancing and economy design',
        'Excellent communication and documentation skills',
        'Ability to prototype and iterate on ideas quickly'
      ],
      preferred: [
        'Experience with top-down action games',
        'Understanding of procedural content generation',
        'Knowledge of PvPvE gameplay systems'
      ],
      postedDate: 'April 1, 2025'
    },
    {
      id: 'community-manager',
      title: 'Community Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for a community manager to build and nurture our player community. You will be the bridge between our development team and players, fostering a positive and engaged community around our games.',
      responsibilities: [
        'Develop and implement community engagement strategies',
        'Manage social media accounts and Discord server',
        'Create and curate community content',
        'Gather and synthesize player feedback for the development team',
        'Organize community events and activities'
      ],
      requirements: [
        '2+ years of community management experience',
        'Excellent written and verbal communication skills',
        'Experience with social media management tools',
        'Understanding of gaming communities and culture',
        'Strong interpersonal and conflict resolution skills'
      ],
      preferred: [
        'Experience managing gaming communities',
        'Background in content creation',
        'Familiarity with analytics and reporting tools'
      ],
      postedDate: 'March 15, 2025'
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: <Clock size={40} className="text-purple-400" />,
      title: "Flexible Work Hours",
      description: "Set your own schedule and work when you're most productive. We care about results, not when you clock in."
    },
    {
      icon: <MapPin size={40} className="text-purple-400" />,
      title: "Remote-First Environment",
      description: "Work from anywhere in the world. Our team is fully distributed, with optional co-working opportunities."
    },
    {
      icon: <Calendar size={40} className="text-purple-400" />,
      title: "Unlimited PTO",
      description: "Take the time you need to rest and recharge. We trust our team to balance their work and personal life."
    },
    {
      icon: <Heart size={40} className="text-purple-400" />,
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs to support your physical and mental well-being."
    },
    {
      icon: <Coffee size={40} className="text-purple-400" />,
      title: "Professional Development",
      description: "Budget for courses, conferences, and resources to help you grow your skills and advance your career."
    },
    {
      icon: <Users size={40} className="text-purple-400" />,
      title: "Collaborative Culture",
      description: "Work with talented individuals who share your passion for creating exceptional games without crunch."
    }
  ];

  // Filter jobs based on active tab
  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase() === activeTab);

  // Toggle job expansion
  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  // Intersection observer for animations
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
        <title>Careers | Happy Hour Games</title>
        <meta name="description" content="Join Happy Hour Games and help us create exceptional games in a healthy, balanced work environment. Explore our current openings and benefits." />
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
              Join Our <span className="text-purple-400">Team</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Help us create exceptional games in a healthy, balanced work environment where creativity thrives without crunch.
            </p>
            <a href="#openings" className="btn-primary inline-flex items-center">
              View Open Positions
              <ChevronDown className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12">
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-300 mb-6">
                At Happy Hour Games, we believe that great games come from happy, well-rested teams. 
                Our studio culture prioritizes work-life balance, creative freedom, and personal growth, 
                enabling our team to do their best work without burning out.
              </p>
              <p className="text-gray-300 mb-6">
                We've built a collaborative environment where every team member's voice is heard and valued. 
                Our flat structure encourages open communication, idea sharing, and mutual support.
              </p>
              <p className="text-gray-300">
                When you join Happy Hour Games, you become part of a team that's not just creating games, 
                but also working to change the industry for the better by proving that exceptional games 
                can be made without crunch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-900" ref={sectionRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join <span className="text-purple-400">Us</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer a range of benefits designed to support your well-being, creativity, and professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`
                  bg-gray-800 p-8 rounded-lg shadow-lg
                  transition-all duration-700 ease-out
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20
                  ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative Positions */}
      <section id="join-us" className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Join Our <span className="text-purple-400">Team</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            While we may not have specific openings listed at the moment, we're always interested in 
            connecting with talented individuals who share our vision of creating exceptional games 
            in a healthy work environment.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Speculative Applications</h3>
              <p className="text-gray-300 mb-4">
                If you're passionate about game development and our no-crunch philosophy resonates with you, 
                we'd love to hear from you. Send us your resume and we'll keep it on file for when positions open up.
              </p>
              <p className="text-gray-300 mb-6">
                We consider applications for various roles including programming, art, design, QA, 
                and production. When a suitable position becomes available, we'll reach out to 
                candidates whose skills and experience align with our needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-900 bg-opacity-30 p-2 rounded-full mr-3 flex-shrink-0">
                    <Mail size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Your Resume</h4>
                    <p className="text-gray-400">Send your resume and cover letter to <a href="mailto:careers@thehappyhour.games" className="text-purple-400 hover:text-purple-300">careers@thehappyhour.games</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-900 bg-opacity-30 p-2 rounded-full mr-3 flex-shrink-0">
                    <MessageSquare size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Join Our Discord</h4>
                    <p className="text-gray-400">Connect with our team on <a href="https://discord.gg/KAmAc5SuZC" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Discord</a> to learn more about our studio culture</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">What We Look For</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-purple-400 mr-2 mt-1" />
                  <span className="text-gray-300">Passion for creating exceptional games</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-purple-400 mr-2 mt-1" />
                  <span className="text-gray-300">Alignment with our no-crunch philosophy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-purple-400 mr-2 mt-1" />
                  <span className="text-gray-300">Excellent communication and collaboration skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-purple-400 mr-2 mt-1" />
                  <span className="text-gray-300">Creative problem solving and adaptability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-purple-400 mr-2 mt-1" />
                  <span className="text-gray-300">Willingness to learn and grow with our team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-purple-400 mr-2 mt-1" />
                  <span className="text-gray-300">Portfolio or samples of your work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Application <span className="text-purple-400">Process</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We've designed a streamlined, transparent hiring process to help you showcase your talents 
              while getting to know our team and culture.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-purple-800 transform md:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Application Review</h3>
                    <p className="text-gray-300">
                      Our team carefully reviews your application, resume, and portfolio to evaluate your skills and experience.
                      We aim to respond to all applications within one week.
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
                    <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
                    <p className="text-gray-300">
                      A casual 30-45 minute video call with a team member to discuss your experience, 
                      our company culture, and answer any questions you might have.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Skills Assessment</h3>
                    <p className="text-gray-300">
                      Depending on the role, we may ask you to complete a small project or skills assessment.
                      We respect your time and design these to be completed within 3-4 hours.
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
                    <h3 className="text-xl font-bold mb-2">Team Interview</h3>
                    <p className="text-gray-300">
                      Meet with 2-3 team members you'd be working with to discuss technical topics,
                      collaboration, and to get a feel for the team dynamic.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-300">
                      If there's a mutual fit, we'll extend an offer and work with you to ensure a smooth
                      onboarding process into our team and culture.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform -translate-x-3.5 md:-translate-x-4 flex items-center justify-center">
                    5
                  </div>
                  <div className="flex-1 md:pl-12 md:mt-0 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Explore our open positions and become part of a team that's creating exceptional games while prioritizing well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#openings" className="btn-primary px-8 py-3">
              View Open Positions
            </a>
            <Link href="/contact" className="btn-secondary px-8 py-3">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked <span className="text-purple-400">Questions</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about working at Happy Hour Games.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you really not have crunch?</h3>
              <p className="text-gray-300">
                Yes, we're serious about our no-crunch policy. We've built our entire development process and company culture around sustainable work practices. We prioritize realistic planning, clear communication, and appropriate scheduling to avoid the need for crunch. Our team members work regular hours and are encouraged to maintain a healthy work-life balance.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What is your remote work policy?</h3>
              <p className="text-gray-300">
                We are a fully remote-first company, with team members working from around the world. We've built our workflows and communication around asynchronous collaboration, while still maintaining regular team meetings and contact points. We provide all the tools and support needed to work effectively from anywhere.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you handle career growth?</h3>
              <p className="text-gray-300">
                We're committed to helping our team members grow professionally. Each team member has access to a professional development budget, regular performance reviews with clear growth paths, and opportunities to take on new challenges and responsibilities. We also encourage knowledge sharing within the team through workshops and presentations.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What is your interview process like?</h3>
              <p className="text-gray-300">
                We've designed our interview process to be thorough but respectful of your time. After an initial application review, candidates typically have a first conversation with a team member, followed by a skills assessment relevant to the role, and then a team interview. We aim to make decisions quickly and provide feedback to all candidates.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you maintain company culture with a remote team?</h3>
              <p className="text-gray-300">
                We make intentional efforts to build and maintain our culture remotely. This includes regular virtual social events, optional in-person meetups when possible, a strong focus on clear and kind communication, and an emphasis on recognizing team members' contributions. We also have dedicated channels for non-work discussions and shared interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

// Helper component for the ChevronRight icon that wasn't defined above
const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
