import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a demo form.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-6 text-slate-900">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <info.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-900 hover:text-purple-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-900">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}