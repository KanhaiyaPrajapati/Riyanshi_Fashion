"use client";
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiShield } from 'react-icons/fi';

const features = [
  {
    icon: <FiAward className="h-8 w-8 text-primary" />,
    title: 'Authentic Craftsmanship',
    description: 'Every saree and ethnic garment is crafted with precision, blending traditional weaving techniques with modern design excellence.'
  },
  {
    icon: <FiHeart className="h-8 w-8 text-primary" />,
    title: 'Premium Quality',
    description: 'We use only top-grade fabrics, vibrant colors, and expert finishing to ensure durability, comfort, and elegance.'
  },
  {
    icon: <FiShield className="h-8 w-8 text-primary" />,
    title: 'Satisfaction Guaranteed',
    description: 'We provide transparent service, reliable support, and easy return options to ensure complete customer satisfaction.'
  }
];

const teamMembers = [
  {
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    bio: 'With deep passion for India’s textile heritage, Priya established Riyanshi Fashion to bring authentic ethnic wear to resellers and retailers across India.'
  },
  {
    name: 'Rahul Mehta',
    role: 'Head Designer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Rahul blends traditional weaving with modern design trends, creating stylish collections loved by resellers and boutique owners.'
  },
  {
    name: 'Ananya Patel',
    role: 'Customer Experience',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Ananya ensures smooth order processing, timely customer support, and a delightful wholesale buying experience.'
  }
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1759720883040-af9be070929e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8)'
        ,objectFit:'contain'}}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="text-center relative z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cormorant">
            Our Story
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Where Tradition Meets Modern Elegance
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Welcome to Riyanshi Fashion</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Riyanshi Fashion is a Surat-based ethnic wear brand dedicated to bringing India’s textile heritage to the modern world. 
              As a direct manufacturer and wholesaler, we specialize in premium sarees, lehengas, kurtis, and designer dress materials. 
              We proudly support resellers, boutique owners, and retailers across India with trending and high-quality ethnic wear collections.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Since our beginning, our mission has been to merge traditional craftsmanship with contemporary fashion. 
              Every collection is designed with care, ensuring style, comfort, and affordability for our customers and reselling partners.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 rounded-2xl text-center shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-neutral-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Values Section */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-12 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-white font-playfair">
                Our Values
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Heritage & Innovation
                  </h3>
                  <p className="text-neutral-300 mb-6">
                    We merge traditional weaving with modern trends to create ethnic wear that is stylish, elegant, and timeless.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Sustainability
                  </h3>
                  <p className="text-neutral-300 mb-6">
                    From fabric sourcing to production, we follow sustainable practices and support ethical, fair-trade weaving communities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Quality Craftsmanship
                  </h3>
                  <p className="text-neutral-300 mb-6">
                    Every garment is crafted with precision by expert artisans, ensuring premium finishing and exceptional durability.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Customer Satisfaction
                  </h3>
                  <p className="text-neutral-300">
                    Whether you're a reseller or a retail customer, we aim to deliver an effortless, smooth, and trustworthy shopping experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2d2d2d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-cormorant">
            Experience the Riyanshi Difference
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Explore our premium collection of sarees, lehengas, kurtis, and more — crafted with passion and designed to elevate every occasion.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/products"
              className="bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="border border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
