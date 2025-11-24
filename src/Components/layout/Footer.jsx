import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const contactInfo = [
    { icon: <FiMapPin className="w-5 h-5" />, text: 'F/Plot No - 113-114, Sahara Darwaja, Fudina Wadi, Near Jash Market Ring Road, Surat - 395002' },
    { icon: <FiPhone className="w-5 h-5" />, text: '+91 63526 35460' },
    { icon: <FiMail className="w-5 h-5" />, text: 'info@riyanshifashion.com' },
  ];

  const socialLinks = [
    { icon: <FiFacebook className="w-5 h-5" />, url: 'https://facebook.com' },
    { icon: <FiInstagram className="w-5 h-5" />, url: 'https://instagram.com' },
    { icon: <FiTwitter className="w-5 h-5" />, url: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-linear-to-b from-neutral-900 via-[#120609] to-black text-white pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-secondary font-semibold tracking-[0.4em] text-sm">
                RF
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.5em] text-white/60">Riyanshi</p>
                <h3 className="text-2xl font-playfair">Fashion House</h3>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Draping India since 2015 with premium handcrafted sarees. From traditional Banarasi to elegant Chiffon, we bring you the finest collection of authentic Indian sarees.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-secondary transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-secondary mb-4">Explore</h4>
            <ul className="space-y-2 text-white/75">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-secondary mb-4">Atelier</h4>
            <ul className="space-y-4 text-white/75">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">{item.icon}</span>
                  <span className="text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-white/10 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-secondary">Riyanshi Circle</p>
            <h4 className="text-xl font-playfair mt-2">Weekly drops, couture previews & private events</h4>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 rounded-full bg-white/5 border border-white/15 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-secondary transition-all"
              required
            />
            <button type="submit" className="btn btn-primary w-full sm:w-auto">Join the circle</button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Riyanshi Fashion. All rights reserved. Crafted for the modern Indian woman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
