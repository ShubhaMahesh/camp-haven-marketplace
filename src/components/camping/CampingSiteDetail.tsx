
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { campingSites } from '@/data/campingSites';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ChevronLeft, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CampingSiteDetail = () => {
  const { siteId } = useParams<{ siteId: string }>();
  const { addToCart } = useCart();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bookingAdded, setBookingAdded] = useState(false);
  
  const site = campingSites.find(s => s.id === siteId);
  
  if (!site) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Camping Site Not Found</h2>
        <p className="text-gray-600 mb-8">The camping site you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-camping-forest hover:bg-camping-pine">
          <Link to="/camping">Return to Camping Sites</Link>
        </Button>
      </div>
    );
  }
  
  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));
    
    return site.pricePerNight * nights;
  };
  
  const handleBooking = () => {
    if (!startDate || !endDate) return;
    
    addToCart({
      id: site.id,
      name: site.name,
      price: calculateTotalPrice(),
      image: site.image,
      type: 'camping',
      dates: { start: startDate, end: endDate }
    });
    
    setBookingAdded(true);
    setTimeout(() => setBookingAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="hover:bg-gray-100">
          <Link to="/camping" className="flex items-center">
            <ChevronLeft size={18} className="mr-1" />
            Back to Camping Sites
          </Link>
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img 
          src={site.image} 
          alt={site.name} 
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Site Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{site.name}</h1>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(site.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-500 ml-2">({site.rating})</span>
              </div>
            </div>
            
            <div className="flex items-center mb-4 text-gray-600">
              <MapPin size={18} className="mr-2 text-camping-forest" />
              <span>{site.location}</span>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-4">
              <h2 className="text-xl font-medium mb-3">About this camping site</h2>
              <p className="text-gray-700">{site.description}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-medium mb-4">Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {site.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <Check size={18} className="mr-2 text-green-500" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-4">Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {site.activities.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <Check size={18} className="mr-2 text-green-500" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-medium mb-4">Book This Campsite</h2>
            <div className="border-b border-gray-100 pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Price per night</span>
                <span className="font-medium">${site.pricePerNight.toFixed(2)}</span>
              </div>
              <div className="text-sm text-green-600 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {site.availableSpots} spots available
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-in Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-camping-forest"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-out Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-camping-forest"
                  required
                />
              </div>
            </div>
            
            {startDate && endDate && (
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-camping-forest">${calculateTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            )}
            
            <Button 
              onClick={handleBooking}
              disabled={!startDate || !endDate || bookingAdded}
              className={`w-full py-5 flex items-center justify-center gap-2 ${
                bookingAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-camping-forest hover:bg-camping-pine'
              }`}
            >
              {bookingAdded ? (
                <>
                  <Check size={18} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <Calendar size={18} />
                  Book Campsite
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              You won't be charged until you complete the checkout process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampingSiteDetail;
