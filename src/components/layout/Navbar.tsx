
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Tent, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Tent size={24} className="text-camping-forest" />
            <span className="text-xl font-montserrat font-bold text-camping-forest">CampAdventures</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-camping-forest transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium hover:text-camping-forest transition-colors">
              Products
            </Link>
            <Link to="/camping" className="font-medium hover:text-camping-forest transition-colors">
              Camping Sites
            </Link>
            <Link to="/about" className="font-medium hover:text-camping-forest transition-colors">
              About
            </Link>
          </div>

          {/* Cart & Authentication Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart size={20} className="text-gray-700 hover:text-camping-forest transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-camping-campfire text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <div className="hidden md:block">
              <Button asChild variant="outline" className="mr-2">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-camping-forest hover:bg-camping-pine">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-camping-forest"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link 
              to="/" 
              className="block px-4 py-2 rounded hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-4 py-2 rounded hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link 
              to="/camping" 
              className="block px-4 py-2 rounded hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Camping Sites
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 rounded hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="flex space-x-2 px-4 pt-2">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="flex-1 bg-camping-forest hover:bg-camping-pine">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
