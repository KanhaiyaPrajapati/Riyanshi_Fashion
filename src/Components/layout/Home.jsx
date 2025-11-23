"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const heroSlides = [
  {
    id: 1,
    badge: 'Premium Collection',
    title: 'Exquisite Handwoven Sarees',
    description: 'Discover our stunning collection of Banarasi, Kanjivaram, Chanderi and more. Each saree is a masterpiece of traditional Indian craftsmanship.',
    image: 'https://plus.unsplash.com/premium_photo-1724762184738-838e4d502b31?auto=format&fit=crop&w=1920&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    primaryCta: { label: 'Shop All Sarees', href: '/products' },
    secondaryCta: { label: 'View Wedding Collection', href: '/products?category=banarasi' },
  },
  {
    id: 2,
    badge: 'New Arrivals',
    title: 'Elegant Chiffon & Georgette',
    description: 'Lightweight, flowing sarees perfect for every occasion. From festive celebrations to casual elegance, find your perfect drape.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1920&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FyZWUlMjBwaG90b3Nob290fGVufDB8fDB8fHww',
    primaryCta: { label: 'Explore Collection', href: '/products?category=chiffon' },
    secondaryCta: { label: 'Contact Us', href: '/contact' },
  },
  {
    id: 3,
    badge: 'Heritage Weaves',
    title: 'Traditional Indian Sarees',
    description: 'Authentic handloom sarees from master weavers. Paithani, Jamdani, Bandhani and more - celebrating India\'s rich textile heritage.',
    image: 'https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1920&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhcmVlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D',
    primaryCta: { label: 'Shop Heritage', href: '/products' },
    secondaryCta: { label: 'Learn More', href: '/about' },
  },
];

const shopCategories = [
  {
    id: 1,
    title: 'Banarasi Silk',
    description: 'Handwoven • Zari Work • Traditional',
    image: 'https://media.istockphoto.com/id/1270784869/photo/pretty-indian-young-hindu-bride-in-studio-shot.webp?a=1&b=1&s=612x612&w=0&k=20&c=8hkTVGhGeJFkpfn90LNNkxl6uw5fjtjO3UYBiWJnapY=',
    href: '/products?category=banarasi',
  },
  {
    id: 2,
    title: 'Kanjivaram',
    description: 'Pure Silk • Temple Border • Heritage',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1400&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FyZWUlMjBwaG90b3Nob290fGVufDB8fDB8fHww',
    href: '/products?category=kanjivaram',
  },
  {
    id: 3,
    title: 'Chiffon & Georgette',
    description: 'Lightweight • Flowing • Elegant',
    image: 'https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1400&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhcmVlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D',
    href: '/products?category=chiffon',
  },
  {
    id: 4,
    title: 'Wedding Collection',
    description: 'Bridal • Festive • Special Occasions',
    image: 'https://images.unsplash.com/photo-1615555896813-401d84a0d737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhcmVlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D',
    href: '/products?category=banarasi',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Rang Panchami Black Silk Saree',
    price: '₹2,249',
    originalPrice: '₹4,499',
    image: 'https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyZWV8ZW58MHx8MHx8fDA%3D',
    tag: '50% Off',
  },
  {
    id: 2,
    name: 'Green Chiffon Butti Saree',
    price: '₹2,799',
    originalPrice: '₹5,599',
    image: 'https://images.unsplash.com/photo-1654764746242-7592b9c6ce2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    tag: 'Soft Chiffon',
  },
  {
    id: 3,
    name: 'Aleena Floral Embroidery Saree',
    price: '₹3,450',
    originalPrice: '₹6,899',
    image: 'https://plus.unsplash.com/premium_photo-1724762182780-000d248f9301?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
    tag: 'Wedding Ready',
  },
  {
    id: 4,
    name: 'Parampara Lace Border Saree',
    price: '₹2,480',
    originalPrice: '₹4,960',
    image: 'https://images.unsplash.com/photo-1707665231479-69e9fd2d4a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
    tag: 'Ready To Wear',
  },
];

const premiumSarees = [
  {
    id: 'ps1',
    title: 'Paithani Silk Saree',
    description: 'Maharashtrian heritage with peacock motifs, pure silk zari border.',
    image: 'https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'ps2',
    title: 'Jamdani Handwoven',
    description: 'Intricate floral patterns, lightweight cotton-silk blend.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FyaXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'ps3',
    title: 'Bandhani Tie-Dye',
    description: 'Traditional Rajasthani Bandhani with vibrant color combinations.',
    image: 'https://sudathi.com/cdn/shop/files/4010S267_1.jpg?v=1756403565&width=1500',
  },
];

const occasionStories = [
  {
    title: 'Haldi & Mehndi',
    description: 'Yellow chiffon stripes & citrus palettes for day ceremonies.',
    image: 'https://images.unsplash.com/photo-1638457133838-50b704b2655c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNhcmVlfGVufDB8fDB8fHww',
  },
  {
    title: 'Sangeet Glam',
    description: 'Sequin-heavy drapes, fluid satins & contemporary blouses.',
    image: 'https://images.unsplash.com/photo-1615555896813-401d84a0d737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNhcmVlfGVufDB8fDB8fHww',
  },
  {
    title: 'Reception Classics',
    description: 'Handloom silks dipped in merlot, plum & midnight black.',
    image: 'https://plus.unsplash.com/premium_photo-1724762183683-251ce8b09d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNhcmVlfGVufDB8fDB8fHww',
  },
];

const valuePillars = [
  { title: 'Authentic Handloom', description: 'Direct from master weavers across India. Each saree comes with certificate of authenticity.' },
  { title: 'Premium Quality', description: 'Carefully curated collection featuring finest silks, zari work and traditional craftsmanship.' },
  { title: 'Express Shipping', description: 'Pan-India delivery with premium packaging and saree care instructions included.' },
];

const testimonials = [
  {
    id: 1,
    name: 'Priyank Sharma',
    location: 'Mumbai',
    comment: 'The Banarasi saree I ordered felt exactly like the premium Laxmipati edit—rich zari, couture finishing and zero alterations required.',
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6-KsNGUoKgyIAATW1CNPeVSHhZzS_FN0Zg&s',
  },
  {
    id: 2,
    name: 'Ananya Patel',
    location: 'Ahmedabad',
    comment: 'Ready-to-wear Kitkat saree draped in 30 seconds and the lace border is stunning. Totally wedding-ready.',
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqLrdHD7AHta-GIgGrjzLfNeJrOurqBkE6p_nhdJWP09M_MPugXYGp5Fec6F-o3mZ4Uc&usqp=CAU',
  },
  {
    id: 3,
    name: 'Meera Iyer',
    location: 'Chennai',
    comment: 'Rashmika-inspired perfume freebie plus ROYAL15 offer made the shopping experience luxe & delightful.',
    rating: 5,
    image: 'data:image/jpeg;base64,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',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setImageLoaded(false);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = heroSlides[currentSlide].image;
    img.onload = () => setImageLoaded(true);
  }, [currentSlide]);

  const activeSlide = heroSlides[currentSlide];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
          )}
        </div>
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `linear-gradient(110deg, rgba(6,6,6,0.75) 10%, rgba(6,6,6,0.35) 55%, rgba(6,6,6,0.05) 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/30" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8">
        <motion.div 
            key={activeSlide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
        >
            <span className="badge bg-white/15 text-white uppercase tracking-[0.45em] text-[0.7rem]">{activeSlide.badge}</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-playfair font-semibold leading-tight">{activeSlide.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/80">{activeSlide.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href={activeSlide.primaryCta.href} className="btn btn-primary text-sm">
                {activeSlide.primaryCta.label}
              </Link>
              <Link href={activeSlide.secondaryCta.href} className="btn btn-outline text-sm text-white border-white hover:bg-white/10 hover:text-white">
                {activeSlide.secondaryCta.label}
              </Link>
            </div>
        </motion.div>
       </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${index === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/40'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Shop by category</p>
            <h2 className="section-title">Premium edits inspired by Laxmipati</h2>
            <div className="section-divider" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {shopCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="relative overflow-hidden rounded-3xl min-h-[280px] group shadow-card"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10 p-8 text-white flex flex-col justify-end h-full">
                  <span className="text-sm uppercase tracking-[0.4em] text-white/70">{category.description}</span>
                  <h3 className="text-3xl font-playfair mt-3">{category.title}</h3>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    View Collection
                    <span>→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers carousel */}
      <section className="section-padding bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="section-subtitle text-left">Desh ki pasand</p>
              <h2 className="section-title">Bestsellers & couture drops</h2>
            </div>
            <Link href="/products" className="btn btn-outline">View all</Link>
          </div>
          
          <div className="flex gap-6 overflow-x-auto floating-scroll pb-4">
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -6 }}
                className="min-w-[260px] flex-1 bg-white rounded-3xl shadow-card overflow-hidden"
              >
                <div className="relative">
                  <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
                  <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary/80 uppercase tracking-[0.3em] mb-1">Exclusive</p>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-neutral-400 line-through">{product.originalPrice}</span>
                  </div>
                  <button className="mt-5 btn btn-primary w-full text-center">Add to Trunk</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasion stories */}
      <section className="section-padding bg-linear-to-b from-white via-neutral-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Wedding picks</p>
            <h2 className="section-title">Haldi to Reception wardrobe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {occasionStories.map((story) => (
              <div key={story.title} className="relative rounded-3xl overflow-hidden shadow-card group">
                <img src={story.image} alt={story.title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-playfair">{story.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="p-8 rounded-3xl bg-white shadow-card">
                <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{pillar.title}</p>
                <p className="mt-4 text-neutral-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-linear-to-b from-white to-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Client diaries</p>
            <h2 className="section-title">What Riyanshi women say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-3xl shadow-card"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-secondary mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < testimonial.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <p className="text-neutral-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto glass-card p-10 text-center">
          <p className="section-subtitle text-center">Riyanshi circle</p>
          <h2 className="section-title">Be the first to know</h2>
          <p className="mt-4 text-neutral-600">
            Couture drops, limited edition capsules, invite-only previews & the same premium perks you love on Laxmipati.com.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 rounded-full border border-neutral-200 px-6 py-3 text-sm focus:outline-none focus:border-primary"
              required 
            />
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
