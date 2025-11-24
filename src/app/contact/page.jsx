"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6 text-primary" />,
      title: "Our Location",
      value: "Shop No - 28, ReshamWala Market, Ring Road, Surat - 395002",
      link: "https://maps.google.com",
    },
    {
      icon: <FiPhone className="w-6 h-6 text-primary" />,
      title: "Phone Number",
      value: "+91 6353635460/ 8849931533",
      link: "tel:+918849931533",
    },
    {
      icon: <FiMail className="w-6 h-6 text-primary" />,
      title: "Email Address",
      value: "info@riyanshifashion.com",
      link: "mailto:info@riyanshifashion.com",
    },
    {
      icon: <FiClock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      value: "Mon - Sat: 08:00 AM - 9:00 PM",
      value2: "Sunday: 08:00 AM - 2:00 PM",
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900  text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-cormorant">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-100">
            We'd love to hear from you. Reach out to us for any inquiries or
            feedback.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center w-full sm:w-auto"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 rounded-2xl h-fit shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-white font-playfair">
              Contact Information
            </h2>
            <p className="text-neutral-300 mb-8">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-secondary transition-colors block mt-1"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-neutral-300 mt-1">
                        <p>{item.value}</p>
                        {item.value2 && <p>{item.value2}</p>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            {/* <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.998086966311!2d72.83165631533482!3d21.21793548588401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3a1c5a0a29%3A0x8a2f8e4b0e4b0e4b!2sReshamwala%20Market%2C%20Ring%20Road%2C%20Surat%2C%20Gujarat%20395002!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Riyanshi Fashion Location"
              ></iframe>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white font-playfair">
            Visit Our Store
          </h2>
          <p className="text-neutral-200 max-w-2xl mx-auto mb-8">
            Experience the beauty of our sarees in person. Visit our store in
            Surat and let us help you find the perfect piece.
          </p>

          <a
            href="https://maps.app.goo.gl/DstvnaKFm43kh6uE9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors shadow-lg"
          >
            Get Directions
          </a>
        </div>

        <div className="w-full mt-20">
          <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.967401960382!2d72.84125947431095!3d21.193453882103363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e51122fed17%3A0x289f94c60da5ee0e!2sTaste%20of%20Bhagwati!5e0!3m2!1sen!2sin!4v1763801587181!5m2!1sen!2sin"
              style={{ border: 0 }}
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}

      <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-black py-8 mt-20 overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-6">
            Visit Our Store
          </h2>

          <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-10">
            Explore the elegance of our premium saree collections in person.
            Visit our Surat showroom and let us help you choose the perfect
            design.
          </p>

          <a
            href="https://maps.app.goo.gl/DstvnaKFm43kh6uE9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-neutral-900 px-10 py-3.5 rounded-full font-semibold shadow-xl hover:bg-secondary/90 transition-all"
          >
            Get Directions
          </a>
        </div>

        {/* Full-Width Map Container */}
        <div className="mt-20 relative z-10">
          <div className="w-full h-[450px] md:h-[600px] overflow-hidden rounded-none md:rounded-2xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.6)]">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.967401960382!2d72.84125947431095!3d21.193453882103363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e51122fed17%3A0x289f94c60da5ee0e!2sTaste%20of%20Bhagwati!5e0!3m2!1sen!2sin!4v1763801587181!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3104.824644523618!2d72.84066477526109!3d21.19306828049768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzM1LjEiTiA3MsKwNTAnMzUuNyJF!5e1!3m2!1sen!2sin!4v1763960784510!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
