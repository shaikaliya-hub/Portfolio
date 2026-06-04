import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  return (
    <section id="contact" className="section-container relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1)} className="section-title">
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className="flex-1 lg:pr-8">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
              I'm always open to discussing product design work, new tech opportunities, or simply having a chat about AI and Data Science.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 glass dark:glass-dark rounded-2xl transform hover:-translate-y-1 transition-transform">
                <a href="tel:6302795067" className="p-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500 rounded-full shrink-0 hover:bg-emerald-200 dark:hover:bg-emerald-800/60 transition-colors cursor-pointer">
                  <FiPhone size={24} />
                </a>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:6302795067" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-emerald-500 transition-colors">6302795067</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 glass dark:glass-dark rounded-2xl transform hover:-translate-y-1 transition-transform">
                <a href="mailto:shaikaliya9054@gmail.com" className="p-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500 rounded-full shrink-0 hover:bg-emerald-200 dark:hover:bg-emerald-800/60 transition-colors cursor-pointer">
                  <FiMail size={24} />
                </a>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:shaikaliya9054@gmail.com" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-emerald-500 transition-colors">
                    shaikaliya9054@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 glass dark:glass-dark rounded-2xl transform hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500 rounded-full shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Anantapur, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className="flex-[1.5]">
            <form onSubmit={handleSubmit} className="glass dark:glass-dark p-8 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-900 dark:text-gray-100`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-900 dark:text-gray-100`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-900 dark:text-gray-100`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-900 dark:text-gray-100 resize-none`}
                  placeholder="Hello Aliya, I would like to discuss..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>

              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mt-4 p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-xl text-center font-medium"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
