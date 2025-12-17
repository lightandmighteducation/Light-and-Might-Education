import React, { useState } from 'react';
import { Send, CheckCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Counseling',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', interest: 'Counseling', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-indigo-950 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-800 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-900 opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
              Fill out the form to schedule your free 30-minute consultation with our senior counselors. We'll help you map out your future.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Fill the Form</h4>
                  <p className="text-indigo-200 text-sm">Provide your basic details and educational background.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Get a Call Back</h4>
                  <p className="text-indigo-200 text-sm">Our team will contact you within 24 hours to schedule a slot.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Detailed Plan</h4>
                  <p className="text-indigo-200 text-sm">Receive a customized roadmap for your study abroad journey.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-800">
              {status === 'success' ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center p-6">
                  <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. Our counselors will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-950 mb-6">Free Consultation</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                    <select
                      name="interest"
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                    >
                      <option value="Counseling">Career Counseling</option>
                      <option value="Study Abroad">Study Abroad (USA/UK/etc)</option>
                      <option value="MBBS">MBBS Abroad</option>
                      <option value="IELTS/TOEFL">IELTS / TOEFL Prep</option>
                      <option value="GRE/GMAT">GRE / GMAT Prep</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                      placeholder="Tell us about your educational background..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-orange-600 text-white font-bold py-3.5 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-orange-600/20"
                  >
                    {status === 'submitting' ? (
                      <>Processing...</>
                    ) : (
                      <>Get Free Guidance <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white p-4 rounded-3xl shadow-xl">
           <div className="flex items-center gap-2 mb-4 px-2">
             <MapPin className="text-orange-600 w-6 h-6" />
             <h3 className="text-2xl font-bold text-gray-900">Visit Our Office</h3>
           </div>
           <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-200">
             <iframe 
               src="https://maps.google.com/maps?q=Light+%26+Might+Education+Tirupur&t=&z=15&ie=UTF8&iwloc=&output=embed"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Light & Might Education Location"
             ></iframe>
           </div>
           <p className="text-gray-600 mt-4 px-2 text-sm">{COMPANY_INFO.address}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;