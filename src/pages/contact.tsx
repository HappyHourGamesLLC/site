// src/pages/contact.tsx
import { FC, useState, useRef, FormEvent, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: FC = () => {
  const router = useRouter();
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });
  
  const formRef = useRef<HTMLFormElement>(null);
  
  // Handle service parameter from URL
  useEffect(() => {
    if (router.isReady && router.query.service) {
      setFormData(prev => ({
        ...prev,
        service: router.query.service as string,
        subject: `Inquiry about ${router.query.service} services`
      }));
    }
  }, [router.isReady, router.query]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the form data to your backend or a form service
      // For demo purposes, we're just simulating a successful submission
      setFormStatus('success');
      
      // Reset form after successful submission
      if (formStatus === 'success') {
        setFormData({
          name: '',
          email: '',
          subject: '',
          service: '',
          message: ''
        });
      }
    }, 1500);
  };
  
  const services = [
    { value: "", label: "Select a service (optional)" },
    { value: "programming", label: "Game Programming" },
    { value: "art", label: "Art & Animation" },
    { value: "design", label: "Game Design" },
    { value: "engine", label: "Engine Development" },
    { value: "qa", label: "QA & Testing" },
    { value: "porting", label: "Porting Support" },
    { value: "full-development", label: "Full Project Development" },
    { value: "team-scaling", label: "Team Scaling" },
    { value: "general", label: "General Inquiry" },
    { value: "careers", label: "Career Opportunities" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Contact Us | Happy Hour Games</title>
        <meta name="description" content="Get in touch with Happy Hour Games. We'd love to hear from you about co-development opportunities, career inquiries, or general questions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-transparent to-gray-900 absolute z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-purple-400">Touch</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              We'd love to hear from you! Whether you're interested in our co-development services, 
              career opportunities, or just want to say hello, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-purple-900 bg-opacity-30 p-4 rounded-full mb-4">
                <Mail size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">We'll respond to your message as soon as possible.</p>
              <a href="mailto:hello@thehappyhour.games" className="text-purple-400 hover:text-purple-300 transition-colors">
              hello@thehappyhour.games
              </a>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-purple-900 bg-opacity-30 p-4 rounded-full mb-4">
                <MessageSquare size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discord Community</h3>
              <p className="text-gray-300 mb-4">Join our Discord server to connect with our team.</p>
              <a href="https://discord.gg/KAmAc5SuZC" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                discord.gg/happyhourgames
              </a>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-purple-900 bg-opacity-30 p-4 rounded-full mb-4">
                <MapPin size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-300 mb-4">We're a fully remote team working across the globe.</p>
              <span className="text-purple-400">
                Distributed Team
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form 
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Send Us a <span className="text-purple-400">Message</span></h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Use the form below to get in touch with our team. We'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="bg-green-900 bg-opacity-30 p-4 rounded-full mb-6">
                    <CheckCircle size={48} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-300 mb-6 max-w-md">
                    Thank you for reaching out! We've received your message and will get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                      <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-300 mb-2">Service Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        {services.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your project or question..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-400">
                      We respect your privacy and will never share your information.
                    </p>
                    <button 
                      type="submit"
                      className="btn-primary flex items-center"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <span className="mr-2">Sending</span>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  {formStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-900 bg-opacity-30 text-red-300 rounded-lg flex items-start">
                      <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <p>There was an error sending your message. Please try again or contact us directly at hello@happyhourgames.com</p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FAQs 
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked <span className="text-purple-400">Questions</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about working with Happy Hour Games.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How quickly do you respond?</h3>
              <p className="text-gray-300">
                We typically respond to all inquiries within 1-2 business days. For urgent matters, please mention this in your message subject.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Do you work internationally?</h3>
              <p className="text-gray-300">
                Yes! As a remote-first company, we work with clients and partners from around the world. Our team spans multiple time zones for better coverage.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What information should I include?</h3>
              <p className="text-gray-300">
                For project inquiries, it helps to include your timeline, budget range, scope, and specific services you're interested in. The more details, the better!
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How does the process start?</h3>
              <p className="text-gray-300">
                After your initial contact, we'll schedule a call to discuss your needs in detail. From there, we'll provide a proposal outlining our approach, timeline, and costs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-300">
              Have other questions? <Link href="mailto:hello@happyhourgames.com" className="text-purple-400 hover:text-purple-300 transition-colors">Email us</Link> or check our <Link href="/faq" className="text-purple-400 hover:text-purple-300 transition-colors">FAQ page</Link>.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Connect with us
      <section className="py-16 bg-purple-900 bg-opacity-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Follow us on social media to stay updated on our latest projects, insights, and company news.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://twitter.com/happyhourgames" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-purple-800 transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com/company/happyhourgames" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-purple-800 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            
            <a 
              href="https://instagram.com/happyhourgames" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-purple-800 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            
            <a 
              href="https://discord.gg/KAmAc5SuZC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-purple-800 transition-colors duration-300"
              aria-label="Discord"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
       */}

      <Footer />
    </div>
  );
};

export default Contact;