
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { campingSites, amenities as allAmenities, activities as allActivities } from '@/data/campingSites';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Calendar } from 'lucide-react';

const CampingSitesList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  
  const toggleAmenity = (id: string) => {
    setSelectedAmenities(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleActivity = (id: string) => {
    setSelectedActivities(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };
  
  const filteredSites = campingSites.filter(site => {
    // Search query filter
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          site.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price range filter
    const matchesPrice = site.pricePerNight >= priceRange[0] && site.pricePerNight <= priceRange[1];
    
    // Amenities filter
    const matchesAmenities = selectedAmenities.length === 0 || 
                            selectedAmenities.every(amenity => {
                              // Basic string matching - in real app would use proper amenity IDs
                              return site.amenities.some(siteAmenity => 
                                siteAmenity.toLowerCase().includes(amenity)
                              );
                            });
    
    // Activities filter
    const matchesActivities = selectedActivities.length === 0 || 
                             selectedActivities.every(activity => {
                               // Basic string matching - in real app would use proper activity IDs
                               return site.activities.some(siteActivity => 
                                 siteActivity.toLowerCase().includes(activity)
                               );
                             });
    
    return matchesSearch && matchesPrice && matchesAmenities && matchesActivities;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Camping Spot</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search camping sites..."
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-camping-forest"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">Price Range</h3>
              <div className="flex items-center justify-between mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">Amenities</h3>
              <div className="space-y-2">
                {allAmenities.map((amenity) => (
                  <label key={amenity.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity.id)}
                      onChange={() => toggleAmenity(amenity.id)}
                      className="rounded border-gray-300 text-camping-forest focus:ring-camping-forest mr-2"
                    />
                    <span>{amenity.name}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium text-lg mb-3">Activities</h3>
              <div className="space-y-2">
                {allActivities.map((activity) => (
                  <label key={activity.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedActivities.includes(activity.id)}
                      onChange={() => toggleActivity(activity.id)}
                      className="rounded border-gray-300 text-camping-forest focus:ring-camping-forest mr-2"
                    />
                    <span>{activity.name}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedAmenities([]);
                setSelectedActivities([]);
                setPriceRange([0, 100]);
              }}
              className="w-full mt-4 border-camping-forest text-camping-forest hover:bg-camping-forest hover:text-white"
            >
              Reset Filters
            </Button>
          </div>
        </div>
        
        {/* Camping Sites List */}
        <div className="lg:col-span-3">
          {filteredSites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredSites.map((site) => (
                <div key={site.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
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
                      <p className="text-gray-500 text-sm flex-1">{site.description.substring(0, 100)}...</p>
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">No camping sites found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedAmenities([]);
                  setSelectedActivities([]);
                  setPriceRange([0, 100]);
                }}
                className="border-camping-forest text-camping-forest hover:bg-camping-forest hover:text-white"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampingSitesList;
