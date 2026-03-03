'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="text-xl md:text-2xl font-display font-bold flex items-center gap-2">
              <span className="gradient-text">AdFlow</span>.pk
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
              <a href="#results" className="hover:text-purple-400 transition-colors">Results</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
              <a href="#cta" className="btn-primary text-sm px-6 py-3">Get Started</a>
            </div>
            <a href="#cta" className="md:hidden text-sm px-4 py-2 rounded-full" style={{background: 'linear-gradient(to right, #8b46f9, #a66bff)', color: 'white'}}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center grain pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/30 to-black opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom relative z-10 text-center animate-fade-in px-4">
          <div className="inline-block mb-4 px-4 md:px-6 py-2 border rounded-full text-purple-400 font-semibold text-xs md:text-sm" style={{backgroundColor: 'rgba(139, 70, 249, 0.1)', borderColor: 'rgba(139, 70, 249, 0.3)'}}>
            🔥 Pakistan's Premier Marketing Agency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-4 md:mb-6 leading-tight px-2">
            Attract, Convert & Scale
            <br />
            <span className="gradient-text">With AdFlow</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto font-light px-4">
            Premium social media marketing, paid advertising, and brand growth strategies for Pakistani businesses. 
            <span className="text-purple-400 font-semibold block mt-2">Results-driven. Performance-focused.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
            <a href="#cta" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center" style={{background: 'linear-gradient(to right, #8b46f9, #a66bff)', color: 'white', boxShadow: '0 4px 20px rgba(139, 70, 249, 0.4)'}}>
              Book Free Strategy Call →
            </a>
            <a href="#results" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl text-center bg-slate-950 border-2" style={{borderColor: 'rgba(139, 70, 249, 0.3)', color: 'white'}}>
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="backdrop-blur-sm border rounded-2xl p-4 md:p-6" style={{backgroundColor: 'rgba(139, 70, 249, 0.1)', borderColor: 'rgba(139, 70, 249, 0.2)'}}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">200+</div>
              <div className="text-slate-400 text-sm md:text-base">Brands Scaled</div>
            </div>
            <div className="backdrop-blur-sm border rounded-2xl p-4 md:p-6" style={{backgroundColor: 'rgba(139, 70, 249, 0.1)', borderColor: 'rgba(139, 70, 249, 0.2)'}}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">500M+</div>
              <div className="text-slate-400 text-sm md:text-base">Impressions Generated</div>
            </div>
            <div className="backdrop-blur-sm border rounded-2xl p-4 md:p-6" style={{backgroundColor: 'rgba(139, 70, 249, 0.1)', borderColor: 'rgba(139, 70, 249, 0.2)'}}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">5X</div>
              <div className="text-slate-400 text-sm md:text-base">Average ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16 animate-slide-up px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400">Full-stack marketing solutions to grow your brand</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
            {[
              {
                icon: '📱',
                title: 'Social Media Marketing',
                description: 'Instagram, Facebook, TikTok management with content creation and community building'
              },
              {
                icon: '🎯',
                title: 'Paid Advertising',
                description: 'Meta Ads, Google Ads, and TikTok Ads campaigns optimized for maximum ROI'
              },
              {
                icon: '🎨',
                title: 'Content Creation',
                description: 'Professional graphics, videos, and copywriting that converts and engages'
              },
              {
                icon: '📊',
                title: 'Brand Strategy',
                description: 'Complete brand positioning, messaging, and growth roadmaps tailored to Pakistan market'
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group bg-slate-950 border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105"
                style={{borderColor: '#1e293b'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8b46f9'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 70, 249, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1e293b'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section id="results" className="section-padding bg-black relative">
        <div className="container-custom px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Real Results For <span className="gradient-text">Real Brands</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400">Check out some of our latest campaigns and success stories</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
            {[
              { type: 'image', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop' },
              { type: 'video', title: '10X Instagram Growth in 3 Months' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop' },
              { type: 'video', title: 'Rs. 5M Revenue From Paid Ads' },
              { type: 'image', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop' },
              { type: 'video', title: 'Building a Viral Brand Campaign' },
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-900">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={`Project ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="text-center p-4 md:p-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4" style={{background: 'linear-gradient(to right, #8b46f9, #a66bff)'}}>
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                      <p className="text-xs md:text-sm font-semibold">{item.title}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://www.instagram.com/adflow.pk" target="_blank" rel="noopener noreferrer" className="inline-block text-sm md:text-base px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" style={{background: 'linear-gradient(to right, #8b46f9, #a66bff)', color: 'white', boxShadow: '0 4px 20px rgba(139, 70, 249, 0.4)'}}>
              View More on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-slate-900">
        <div className="container-custom px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400">Trusted by leading brands across Pakistan</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-950 border rounded-xl p-5 md:p-6 transition-colors" style={{borderColor: '#1e293b'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8b46f9'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1e293b'}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl" style={{background: 'linear-gradient(to br, #8b46f9, #a66bff)'}}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div className="ml-3 md:ml-4">
                    <div className="font-bold text-sm md:text-base">Happy Client {i + 1}</div>
                    <div className="text-xs md:text-sm text-slate-400">CEO, Brand Name</div>
                  </div>
                </div>
                <p className="text-slate-300 mb-4 text-sm md:text-base">
                  "AdFlow transformed our social media presence completely. Their team is professional, creative, and results-driven. Highly recommend!"
                </p>
                <div className="flex text-purple-400">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container-custom px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Follow Us For Daily <span className="gradient-text">Marketing Tips</span>
            </h2>
            <p className="text-base md:text-xl text-slate-400">Behind-the-scenes, case studies, and exclusive content</p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
            <a href="https://www.instagram.com/adflow.pk" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 w-full sm:w-auto sm:min-w-[200px]" style={{borderColor: '#1e293b'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#8b46f9'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 70, 249, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.boxShadow = 'none'}}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">📱</div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">Instagram</div>
                <div className="text-slate-400 mb-1 text-sm md:text-base">@adflow.pk</div>
                <div className="text-xs md:text-sm text-slate-500">Follow for daily content</div>
              </div>
            </a>

            <a href="https://www.facebook.com/adflow.pk" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 w-full sm:w-auto sm:min-w-[200px]" style={{borderColor: '#1e293b'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#8b46f9'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 70, 249, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.boxShadow = 'none'}}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">👍</div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">Facebook</div>
                <div className="text-slate-400 mb-1 text-sm md:text-base">@adflow.pk</div>
                <div className="text-xs md:text-sm text-slate-500">Join our community</div>
              </div>
            </a>

            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 w-full sm:w-auto sm:min-w-[200px]" style={{borderColor: '#1e293b'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#8b46f9'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 70, 249, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.boxShadow = 'none'}}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">💬</div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">WhatsApp</div>
                <div className="text-slate-400 mb-1 text-sm md:text-base">Quick Response</div>
                <div className="text-xs md:text-sm text-slate-500">Message us anytime</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-12 md:py-20 lg:py-32 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b, #0a0515)'}}>
        <div className="absolute inset-0 grain"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(139, 70, 249, 0.2)'}}></div>
        </div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">
            Ready To Grow Your Brand?
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto">
            Let's discuss your marketing goals and create a custom strategy for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 text-green-400">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>No Commitment</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Custom Proposal</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-base md:text-lg lg:text-xl px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-center" style={{background: 'linear-gradient(to right, #8b46f9, #a66bff)', color: 'white', boxShadow: '0 4px 20px rgba(139, 70, 249, 0.4)'}}>
              WhatsApp Us Now →
            </a>
            <a href="mailto:contact@adflow.pk" className="w-full sm:w-auto text-base md:text-lg lg:text-xl px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl text-center bg-slate-950 border-2" style={{borderColor: 'rgba(139, 70, 249, 0.3)', color: 'white'}}>
              Send Email
            </a>
          </div>

          <p className="mt-6 md:mt-8 text-xs md:text-sm text-slate-500">
            📍 Based in Pakistan | Serving brands nationwide
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t py-8 md:py-12" style={{borderColor: 'rgba(139, 70, 249, 0.1)'}}>
        <div className="container-custom px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4">
                <span className="gradient-text">AdFlow</span>.pk
              </div>
              <p className="text-slate-400 text-sm md:text-base">Pakistan's premier marketing agency helping brands grow through social media, paid ads, and content creation.</p>
            </div>
            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-base md:text-lg text-purple-400">Quick Links</h3>
              <div className="space-y-2 text-sm md:text-base">
                <a href="#services" className="block text-slate-400 hover:text-purple-400 transition-colors">Services</a>
                <a href="#results" className="block text-slate-400 hover:text-purple-400 transition-colors">Portfolio</a>
                <a href="#testimonials" className="block text-slate-400 hover:text-purple-400 transition-colors">Testimonials</a>
                <a href="https://www.instagram.com/adflow.pk" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-purple-400 transition-colors">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-base md:text-lg text-purple-400">Contact</h3>
              <div className="space-y-2 text-slate-400 text-sm md:text-base">
                <p>📧 contact@adflow.pk</p>
                <p>📱 WhatsApp: +92 300 1234567</p>
                <p>📍 Pakistan</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 md:pt-8 text-center text-slate-500 text-xs md:text-sm" style={{borderColor: 'rgba(139, 70, 249, 0.1)'}}>
            © 2025 AdFlow.pk. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
