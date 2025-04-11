// src/pages/news.tsx
import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import newsArticles from '@/data/newsArticles';


const News: FC = () => {
  const [filter, setFilter] = useState<string>('all');
    
  // Filter articles based on selected tag
  const filteredArticles = filter === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.tags.includes(filter));
  
  // Get all unique tags for filter buttons
  const allTags = Array.from(new Set(newsArticles.flatMap(article => article.tags)));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>News & Updates | Happy Hour Games</title>
        <meta name="description" content="Stay updated with the latest news, development updates, and announcements from Happy Hour Games." />
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
              News & <span className="text-purple-400">Updates</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Stay updated with the latest from Happy Hour Games, including development insights, 
              announcements, and community news.
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          {/* Tag Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setFilter('all')}
              >
                All Updates
              </button>
              
              {allTags.map((tag, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full transition-colors ${filter === tag ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* News Articles */}
          <div className="max-w-5xl mx-auto">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div key={article.id} className={index > 0 ? 'mt-16' : ''}>
                  {/* Article Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    {/*
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="flex items-center text-xs px-3 py-1 bg-gray-700 text-purple-300 rounded-full"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    */}
                  </div>
                  
                  {/* Featured Image 
                  <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
                    <Image 
                      src={article.imageUrl} 
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  */}
                  
                  {/* Article Content */}
                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                    <div className="prose prose-lg prose-invert max-w-none">
                      <ReactMarkdown 
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                      >
                        {article.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                  
                  
                  {/* Article Footer */}
                  <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-8">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Share:</span>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <a href={`#${article.id}`} className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                      Permalink
                      <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                  
                  {/* Separator between articles */}
                  {index < filteredArticles.length - 1 && (
                    <div className="border-b border-gray-700 my-12"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-gray-400">Try selecting a different category or check back later for more updates.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-purple-900 bg-opacity-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-gray-800 text-white rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none transition-colors mt-2 sm:mt-0 font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;