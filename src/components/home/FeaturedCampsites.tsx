
import React from 'react';
import { Link } from 'react-router-dom';
import { campingSites } from '@/data/campingSites';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';

const FeaturedCampsites = () => {
  const featuredSites = campingSites.filter(site => site.featured);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Discover Amazing Camping Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book your next camping adventure at one of our handpicked locations. From lakeside retreats to mountain vistas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSites.map((site) => (
            <div key={site.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02]">
              <Link to={`/camping/${site.id}`} className="block relative">
                <img 
                  src={site.image} 
                  alt={site.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-camping-forest text-white px-3 py-1 rounded-full text-sm font-medium">
                  ${site.pricePerNight}/night
                </div>
              </Link>
              <div className="p-4 flex-1 flex flex-col">
                <Link to={`/camping/${site.id}`} className="block">
                  <h3 className="font-medium text-lg mb-1">{site.name}</h3>
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <MapPin size={14} className="mr-1" />
                    <span>{site.location}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(site.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({site.rating})</span>
                  </div>
                  <p className="text-gray-500 text-sm flex-1">{site.description.substring(0, 75)}...</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {site.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1">
                        {amenity}
                      </span>
                    ))}
                    {site.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1">
                        +{site.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </Link>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm">
                    <span className="text-green-600 font-medium">{site.availableSpots} spots</span> available
                  </span>
                  <Button 
                    asChild
                    className="bg-camping-forest hover:bg-camping-pine flex items-center gap-2"
                    size="sm"
                  >
                    <Link to={`/camping/${site.id}`}>
                      <Calendar size={14} />
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="px-8 border-camping-forest text-camping-forest hover:bg-camping-forest hover:text-white">
            <Link to="/camping">View All Campsites</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampsites;
