"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiStar, FiShoppingCart, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: 'Banarasi Silk Zari Embroidered Saree',
    price: '₹3,999',
    originalPrice: '₹5,999',
    category: 'banarasi',
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    image: 'https://utsarees.in/cdn/shop/files/Light_Golden_Kanjeevaram_Tissue_Silk_Resham_Embossed_Floral_Banarasi_Saree.jpg?v=1732861161',
    description: 'Handwoven Banarasi silk with intricate zari work',
  },
  {
    id: 2,
    name: 'Kanjivaram Pure Silk Saree',
    price: '₹2500',
    originalPrice: '₹3,500',
    category: 'kanjivaram',
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
    image: 'https://www.indiansilkhouse.com/media/catalog/product/cache/5fab531bce9e6927382f8f67599f7947/z/3/z34952.jpg',
    description: 'Traditional Kanjivaram with temple border design',
  },
  {
    id: 3,
    name: 'Chanderi Cotton Saree',
    price: '₹1500',
    originalPrice: '₹2,500',
    category: 'chanderi',
    isNew: true,
    isBestSeller: false,
    rating: 4.7,
    image: 'https://samyatisaree.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-02-at-7.39.06-AM-600x900.webp',
    description: 'Lightweight Chanderi with delicate motifs',
  },
  {
    id: 4,
    name: 'Tussar Silk Saree',
    price: '₹1,999',
    originalPrice: '₹2,999',
    category: 'tussar',
    isNew: false,
    isBestSeller: true,
    rating: 4.6,
    image: 'https://mrida.co/cdn/shop/files/ALF0436copy2.jpg?v=1707821066',
    description: 'Natural Tussar silk with golden sheen',
  },
  {
    id: 5,
    name: 'Chiffon Floral Printed Saree',
    price: '₹2,799',
    originalPrice: '₹4,499',
    category: 'chiffon',
    isNew: true,
    isBestSeller: false,
    rating: 4.5,
    image: 'https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dwf71f7cb7/manyavar%20images%20m/52529/Mohey-Apparel---Chiffon-Saree-Style-Guide-Seamless-Transitions-from-Daytime-Elegance-to-Evening-Glamour_Blog-2.jpg',
    description: 'Elegant chiffon with vibrant floral prints',
  },
  {
    id: 6,
    name: 'Georgette Embroidered Saree',
    price: '₹1,499',
    originalPrice: '₹2,499',
    category: 'georgette',
    isNew: false,
    isBestSeller: true,
    rating: 4.7,
    image: 'https://cdn.sareesaga.com/image/cache/product-2024/teal-floral-print-georgette-saree-257557-1000x1375.jpg',
    description: 'Flowing georgette with intricate embroidery',
  },
  {
    id: 7,
    name: 'Organza Silk Saree',
    price: '₹2,999',
    originalPrice: '₹3,999',
    category: 'organza',
    isNew: true,
    isBestSeller: false,
    rating: 4.8,
    image: 'https://odette.in/cdn/shop/files/SRODIBOD1017SEAGREEN_3_720x.jpg?v=1728554782',
    description: 'Sheer organza with zari border',
  },
  {
    id: 8,
    name: 'Kota Doria Saree',
    price: '₹1,999',
    originalPrice: '₹2,999',
    category: 'kota',
    isNew: false,
    isBestSeller: false,
    rating: 4.6,
    image: 'https://www.grayandgreens.com/cdn/shop/files/F68477FC-A4C4-48C9-9FA1-0836CA6BDD01.jpg?v=1749544424&width=1365',
    description: 'Traditional Kota Doria with checkered pattern',
  },
  {
    id: 9,
    name: 'Paithani Silk Saree',
    price: '₹14,99',
    originalPrice: '₹25,99',
    category: 'paithani',
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    image: 'https://www.vastranand.in/cdn/shop/files/4_5fdc4c97-e530-40a8-8646-5e62235355f9.jpg?v=1743078847',
    description: 'Maharashtrian Paithani with peacock design',
  },
  {
    id: 10,
    name: 'Bandhani Tie-Dye Saree',
    price: '₹1,799',
    originalPrice: '₹2,299',
    category: 'bandhani',
    isNew: false,
    isBestSeller: true,
    rating: 4.7,
    image: 'https://sudathi.com/cdn/shop/files/4156S101_1.jpg?v=1756403956&width=1500',
    description: 'Traditional Bandhani with vibrant colors',
  },
  {
    id: 11,
    name: 'Net Embroidered Saree',
    price: '₹3,499',
    originalPrice: '₹4,999',
    category: 'net',
    isNew: true,
    isBestSeller: false,
    rating: 4.6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RLgNLxfSMgdqOvhVoipOaBXFLpW0PdU-jg&s',
    description: 'Elegant net fabric with sequin work',
  },
  {
    id: 12,
    name: 'Linen Saree',
    price: '₹1,999',
    originalPrice: '₹2,499',
    category: 'linen',
    isNew: false,
    isBestSeller: false,
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhac7Zn6tglMV_ULNZ516JoIPGuQHU3Sby6mZf6QzQ170MjH7Znsbl39ZhUEfNtgrWjcc&usqp=CAU',
    description: 'Comfortable linen for everyday wear',
  },
  {
    id: 13,
    name: 'Satin Silk Saree',
    price: '₹1,999',
    originalPrice: '₹2,999',
    category: 'satin',
    isNew: true,
    isBestSeller: true,
    rating: 4.8,
    image: 'https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/s/o/solid-color-satin-silk-saree-in-red-v1-sqx71.jpg',
    description: 'Luxurious satin with metallic border',
  },
  {
    id: 14,
    name: 'Cotton Handloom Saree',
    price: '₹2,999',
    originalPrice: '₹3,499',
    category: 'cotton',
    isNew: false,
    isBestSeller: true,
    rating: 4.6,
    image: 'https://thenmozhidesigns.com/cdn/shop/files/UntitledCapture5697.webp?v=1692710697&width=1200',
    description: 'Handwoven cotton with traditional motifs',
  },
  {
    id: 15,
    name: 'Silk Crepe Saree',
    price: '₹1,499',
    originalPrice: '₹25,99',
    category: 'crepe',
    isNew: true,
    isBestSeller: false,
    rating: 4.7,
    image: 'https://www.latestkurtidesigns.com/wp-content/uploads/2023/02/Silk-Satin-Crepe-Saree.jpg',
    description: 'Elegant crepe silk with floral prints',
  },
  {
    id: 16,
    name: 'Jamdani Saree',
    price: '₹999',
    originalPrice: '₹1999',
    category: 'jamdani',
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    image: 'https://www.indiansilkhouse.com/media/catalog/product/cache/5fab531bce9e6927382f8f67599f7947/y/2/y24_2873.jpg',
    description: 'Intricate Jamdani weave with floral patterns',
  },
];

const categories = [
  { id: 'all', name: 'All Sarees' },
  { id: 'banarasi', name: 'Banarasi Silk' },
  { id: 'kanjivaram', name: 'Kanjivaram' },
  { id: 'chanderi', name: 'Chanderi' },
  { id: 'tussar', name: 'Tussar Silk' },
  { id: 'chiffon', name: 'Chiffon' },
  { id: 'georgette', name: 'Georgette' },
  { id: 'organza', name: 'Organza' },
  { id: 'kota', name: 'Kota Doria' },
  { id: 'paithani', name: 'Paithani' },
  { id: 'bandhani', name: 'Bandhani' },
  { id: 'net', name: 'Net' },
  { id: 'linen', name: 'Linen' },
  { id: 'satin', name: 'Satin' },
  { id: 'cotton', name: 'Cotton' },
  { id: 'crepe', name: 'Crepe' },
  { id: 'jamdani', name: 'Jamdani' },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'newest', name: 'Newest' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
];

const Products = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Sort products
    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.-]+/g, '')) - 
                 parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.-]+/g, '')) - 
                 parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
        default: // featured
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          return 0;
      }
    });
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy]);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="pt-8 pb-14">
      <div className="container mx-auto px-4 mt-12">
        <div className="lg:flex gap-8">
          <div className="lg:hidden mb-6">
            <button
              type="button"
              className="flex items-center text-gray-700"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FiFilter className="mr-2 h-5 w-5 flex-shrink-0" />
              <span>Filters</span>
            </button>
          </div>

          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-4 text-lg">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          selectedCategory === category.id
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-black">
                Showing <span className="font-medium">{filteredProducts.length}</span> beautiful sarees
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-80 w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                        />
                      </div>
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="absolute top-2 right-2 bg-secondary text-dark text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Best Seller
                        </span>
                      )}
                      <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <FiShoppingCart className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-1">
                        <div className="flex">
                          {renderStars(product.rating)}
                        </div>
                        <span className="ml-2 text-xs text-gray-500">{product.rating}</span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.description}</p>
                      )}
                      <div className="flex items-center mb-2">
                        <p className="text-lg font-semibold text-primary">{product.price}</p>
                        {product.originalPrice && (
                          <p className="ml-2 text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </p>
                        )}
                      </div>
                      <button className="mt-3 w-full bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No sarees found matching your criteria.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 text-primary hover:underline"
                >
                  View All Sarees
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter dialog */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen">
              <div
                className="fixed inset-0 bg-black bg-opacity-25"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <motion.div
                className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-white py-4 pb-6 shadow-xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-50"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4 border-t border-gray-200 px-4 pt-4">
                  <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <button
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setMobileFiltersOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-md ${
                            selectedCategory === category.id
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {category.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
