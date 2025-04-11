// components/NewsSection.tsx
import { FC, useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
  tags?: string[];
}

const NewsSection: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const newsItems: NewsItem[] = [
    {
      date: "April 2, 2025",
      title: "Project Victorian Enters Prototype Phase",
      excerpt: "We're excited to announce that our flagship title Project Victorian has entered its prototype phase...",
      slug: "project-victorian-prototype-phase",
      imageUrl: "/images/news/prototype-phase.jpg",
      tags: ["Development", "Project Victorian"]
    },
    {
      date: "March 15, 2025",
      title: "Happy Hour Games Secures Seed Funding",
      excerpt: "Happy Hour Games has successfully secured seed funding to support the development of our first title...",
      slug: "seed-funding-announcement",
      imageUrl: "/images/news/funding.jpg",
      tags: ["Company", "Funding"]
    },
    {
      date: "February 28, 2025",
      title: "Introducing Our Development Philosophy",
      excerpt: "At Happy Hour Games, we believe in sustainable development practices. Here's how we're building games differently...",
      slug: "development-philosophy",
      imageUrl: "/images/news/philosophy.jpg",
      tags: ["Culture", "Development"]
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
    <section className="py-24 bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 
            className={`
              text-4xl font-bold
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'}
            `}
          >
            Latest <span className="text-purple-400 relative inline-block">
              News
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
            </span>
          </h2>
          
          <Link
            href="/news"
            className={`
              group flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300
              ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}
            `}
            style={{ transitionDelay: '200ms' }}
            >
            View All News 
                          <ArrowRight 
              size={18} 
              className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
            />

          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsItems.map((news, index) => (
            <div 
              key={index} 
              className={`
                bg-gray-900 rounded-lg overflow-hidden shadow-lg
                transition-all duration-700 ease-out
                hover:-translate-y-2 hover:shadow-xl
                ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              {news.imageUrl && (
                <div className="relative w-full h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                    style={{ backgroundImage: `url(${news.imageUrl})` }}
                  ></div>
                  {news.tags && news.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      {news.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs px-2 py-1 bg-purple-900 bg-opacity-80 text-purple-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center text-sm text-purple-400 mb-2">
                  <Calendar size={14} className="mr-1" />
                  {news.date}
                </div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-purple-400">
                  {news.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {news.excerpt}
                </p>
                <Link
                  href={`/news/${news.slug}`}
                  className="group inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                  Read More 
                                      <ArrowRight 
                    size={16} 
                    className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                  />

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;