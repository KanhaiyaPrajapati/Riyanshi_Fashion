 'use client';
 import { useState, useEffect } from 'react';
 import Link from 'next/link';
 import { usePathname } from 'next/navigation';
 import { FiMenu, FiX, FiShoppingBag, FiUser, FiChevronDown, FiPhoneCall } from 'react-icons/fi';
 
 const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(null);
   const pathname = usePathname();

  const promoHighlights = [
    { label: 'Use code ROYAL15 & get 15% OFF above ₹6,900', href: '/collections/festive' },
    { label: 'Download the app & get 10% OFF. Code: GET10', href: '/app' },
    { label: 'Free Rashmika Mandanna perfume on orders above ₹6,900*', href: '/collections/exclusives' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Videos', path: '/videos' },
    { name: 'Collections', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
     <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
            ? 'bg-white/98 shadow-lg shadow-neutral-200/50 backdrop-blur-md border-b border-neutral-100' 
            : 'bg-white/90 backdrop-blur-lg'
        }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0 cursor-pointer group">
            <div className="flex flex-col leading-tight text-primary group-hover:opacity-80 transition-opacity">
              <span className="text-3xl md:text-4xl font-playfair font-bold tracking-wide capitalize">Riyanshi</span>
              <span className="text-sm md:text-xl text-center tracking-[0.4em] text-neutral-500 uppercase">Fashion</span>
            </div>
          </Link> 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                <button
                    onClick={() => toggleDropdown(index)}
                    className={`group flex items-center px-4 py-5 text-base font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                      pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-neutral-700 hover:text-primary'
                  }`}
                >
                  {link.name}
                    <FiChevronDown 
                      className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === index ? 'transform rotate-180' : ''
                      }`} 
                    />
                </button>
                ) : (
                  
                  <Link
                    href={link.path}
                    className={`group flex items-center px-4 py-5 text-base font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                      pathname === link.path
                        ? 'text-primary font-semibold'
                        : 'text-neutral-700 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                
                {/* {link.dropdown && (
                  <div 
                    className={`absolute left-0 top-full mt-1 w-56 rounded-lg shadow-xl bg-white ring-1 ring-neutral-200/50 transition-all duration-200 ${
                      openDropdown === index 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-1 invisible'
                    }`}
                  >
                    <div className="py-1.5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 lg:gap-5">
            {/* <button 
              className="text-neutral-600 hover:text-primary transition-colors cursor-pointer"
              aria-label="Account"
            >
              <FiUser className="h-6 w-6" />
            </button> */}
            {/* <button 
              className="relative text-neutral-600 hover:text-primary transition-colors cursor-pointer"
              aria-label="Cart"
            >
              <FiShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button> */}
            
            <Link 
              href="/contact"
              className="hidden md:flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
            >
              <FiPhoneCall className="h-4 w-4" />
              <span>Call</span>
            </Link>

            <button
              className="lg:hidden text-neutral-600 hover:text-primary focus:outline-none p-1 cursor-pointer transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? (
                <FiX className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden bg-white shadow-xl border-t border-neutral-100 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-0.5">
          {navLinks.map((link, index) => (
            <div key={link.name} className="border-b border-neutral-100 last:border-0">
              <div className="flex items-center justify-between gap-3">
                {link.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`block py-2.5 text-base font-medium cursor-pointer w-full text-left ${
                      pathname === link.path
                        ? 'text-primary font-semibold'
                        : 'text-neutral-700 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                <Link
                  href={link.path}
                    className={`block py-2.5 text-base font-medium cursor-pointer ${
                    pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-neutral-700 hover:text-primary'
                  }`}
                    onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                )}
                {link.dropdown && (
                  <button 
                    onClick={() => toggleDropdown(index)}
                    className="p-2 text-neutral-500 hover:text-primary cursor-pointer transition-colors"
                  >
                    <FiChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === index ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </button>
                )}
              </div>
              
              {link.dropdown && openDropdown === index && (
                <div className="pl-4 pb-2 space-y-0.5">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block py-2 text-sm text-neutral-600 hover:text-primary transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;
