
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { 
  Minus, 
  Plus, 
  ShoppingCart,
  Check,
  ChevronLeft
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-camping-forest hover:bg-camping-pine">
          <Link to="/products">Return to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'product'
    }, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="hover:bg-gray-100">
          <Link to="/products" className="flex items-center">
            <ChevronLeft size={18} className="mr-1" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-500 ml-2">({product.rating} rating)</span>
          </div>
          
          <p className="text-2xl font-bold text-camping-forest mb-4">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-gray-800">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <button 
                className="border border-gray-300 rounded-l-lg px-3 py-2 hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                min="1" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="border-y border-gray-300 py-2 px-3 text-center w-16"
              />
              <button 
                className="border border-gray-300 rounded-r-lg px-3 py-2 hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleAddToCart}
              className={`flex-1 py-6 text-lg flex items-center justify-center gap-2 ${
                added ? 'bg-green-600 hover:bg-green-700' : 'bg-camping-forest hover:bg-camping-pine'
              }`}
              disabled={added}
            >
              {added ? (
                <>
                  <Check size={20} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex items-center text-green-600 mb-4">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>In Stock & Ready to Ship</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
