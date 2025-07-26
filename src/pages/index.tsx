import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesSection';
import GameCreditsCarousel from '@/components/GameCreditsCarousel';
import { gameCredits } from '@/data/gameCredits';
import newsArticles from '@/data/newsArticles';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Happy Hour Games | Games Without Crunch</title>
        <meta name="description" content="A game development studio dedicated to creating high-quality games while prioritizing team well-being and work-life balance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-transparent to-gray-900 absolute z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Main heading */}
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Great Games, <span className="text-purple-400">Without Crunch</span></h1>
              <p className="text-xl mb-8 text-gray-200">
                Happy Hour Games is redefining game development with a focus on sustainable workflows and work-life balance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-secondary">
                  About Our Studio
                </Link>
              </div>
            </div>
            
            {/* Right side - Latest News */}
            {newsArticles && newsArticles.length > 0 && (
              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg backdrop-blur-sm border border-gray-700 shadow-xl">
                <div className="text-sm text-purple-400 font-semibold mb-2">Latest News</div>
                <h2 className="text-xl font-bold mb-2">{newsArticles[0].title}</h2>
                <div className="text-xs text-gray-400 mb-3">{newsArticles[0].date}</div>
                <p className="text-gray-300 mb-4">{newsArticles[0].excerpt}</p>
                <Link href={`/news#${newsArticles[0].id}`} className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center">
                  Read Full Article
                  <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <ServicesGrid />

      {/* Footer */}
      <Footer />
    </div>
  );
}