
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <ShoppingCart size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
          <p className="text-gray-600 mt-2 mb-6">Add some products or book a camping site to continue shopping.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-camping-forest hover:bg-camping-pine">
              <Link to="/products">Browse Products</Link>
            </Button>
            <Button asChild variant="outline" className="border-camping-forest text-camping-forest hover:bg-camping-forest hover:text-white">
              <Link to="/camping">Find Camping Sites</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{cart.length} {cart.length === 1 ? 'Item' : 'Items'}</h2>
                <Button 
                  variant="ghost" 
                  onClick={clearCart}
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row p-6">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <Link to={item.type === 'product' ? `/products/${item.id}` : `/camping/${item.id}`}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-32 object-cover rounded"
                      />
                    </Link>
                  </div>
                  <div className="md:w-3/4 md:pl-6 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <Link 
                        to={item.type === 'product' ? `/products/${item.id}` : `/camping/${item.id}`}
                        className="text-lg font-medium hover:text-camping-forest"
                      >
                        {item.name}
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:bg-red-50 hover:text-red-600 h-8 w-8 p-0"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    
                    {item.type === 'camping' && item.dates && (
                      <div className="text-sm text-gray-600 mb-4">
                        <p>Check-in: {new Date(item.dates.start).toLocaleDateString()}</p>
                        <p>Check-out: {new Date(item.dates.end).toLocaleDateString()}</p>
                        <p>
                          {Math.round((new Date(item.dates.end) - new Date(item.dates.start)) / (1000 * 60 * 60 * 24))} night(s)
                        </p>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center">
                        {item.type === 'product' && (
                          <>
                            <button 
                              className="border border-gray-300 rounded-l-lg px-2 py-1 hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="border-y border-gray-300 py-1 px-3 text-center w-10">
                              {item.quantity}
                            </span>
                            <button 
                              className="border border-gray-300 rounded-r-lg px-2 py-1 hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </>
                        )}
                      </div>
                      <span className="font-bold text-camping-forest">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 border-b border-gray-100 pb-6 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${(subtotal * 0.07).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center font-bold mb-6">
              <span>Total</span>
              <span className="text-camping-forest text-xl">${(subtotal + (subtotal * 0.07)).toFixed(2)}</span>
            </div>
            
            <Button
              className="w-full py-5 bg-camping-forest hover:bg-camping-pine"
            >
              Proceed to Checkout
            </Button>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">Secure Checkout</p>
              <div className="flex justify-center gap-2">
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
