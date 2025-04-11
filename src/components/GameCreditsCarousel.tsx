import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GameCredit {
  title: string;
  studio: string;
  year: string;
  imageUrl: string;
  description: string;
  teamMembers: string[];
  link?: string;
}

interface GameCreditsCarouselProps {
  games: GameCredit[];
}

const GameCreditsCarousel: FC<GameCreditsCarouselProps> = ({ games }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? games.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Reset autoplay timer when the slide changes
  useEffect(() => {
    if (isAutoPlaying) {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
      autoPlayRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeIndex, isAutoPlaying]);

  // Pause autoplay on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Set up intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (carouselRef.current) {
            observer.unobserve(carouselRef.current);
          }
        }
      },
      {
        threshold: 0.2
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <section ref={carouselRef} className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-purple-400">Experience</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore some of the titles our team has worked on throughout their careers.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Carousel Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-gray-900 bg-opacity-80 p-3 rounded-full text-white hover:bg-purple-700 transition-colors"
            aria-label="Previous game"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-gray-900 bg-opacity-80 p-3 rounded-full text-white hover:bg-purple-700 transition-colors"
            aria-label="Next game"
          >
            <ChevronRight size={24} />
          </button>

          {/* Game Cards Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {games.map((game, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative h-80 w-full">
                    <Image
                      src={game.imageUrl}
                      alt={game.title}
                      fill 
                      sizes="50vw"
                      style={{objectFit: 'fill'}}
                      priority={index === activeIndex}
                      className="transition-transform duration-10000 hover:scale-105"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{game.title}</h3>
                          <p className="text-purple-400">{game.studio}, {game.year}</p>
                        </div>
                        {game.link && (
                          <a 
                            href={game.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                          >
                            Learn More
                          </a>
                        )}
                      </div>
                      
                      <p className="text-gray-300 mb-6">
                        {game.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Team Members</h4>
                        <div className="flex flex-wrap gap-2">
                          {game.teamMembers.map((member, idx) => (
                            <span 
                              key={idx} 
                              className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8">
            {games.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  activeIndex === index ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`View game ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameCreditsCarousel;