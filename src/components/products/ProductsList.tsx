
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductsList = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Camping Gear & Equipment</h1>
      
      {/* Search & Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-camping-forest"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          </div>
          <select
            className="border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-camping-forest"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <Link to={`/products/${product.id}`} className="block">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <p className="text-gray-500 text-sm flex-1">{product.description.substring(0, 75)}...</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-camping-forest font-bold">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
              <div className="px-4 pb-4 mt-auto">
                <Button 
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    type: 'product'
                  })}
                  className="w-full bg-camping-forest hover:bg-camping-pine flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          <Button 
            variant="link" 
            onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}
            className="text-camping-forest mt-2"
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
