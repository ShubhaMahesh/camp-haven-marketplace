
import React from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Users, Shield, Clock, Tent } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">About CampAdventures</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your one-stop destination for all camping needs, from premium gear to unforgettable camping spots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-camping-forest text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4">
                At CampAdventures, we're passionate about connecting people with nature. Our mission is to provide quality camping gear and access to beautiful camping locations so that everyone can experience the joy of outdoor adventures.
              </p>
              <p>
                We believe that time spent in nature is essential for well-being, and we strive to make camping accessible, enjoyable, and sustainable for all outdoor enthusiasts.
              </p>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Camping in nature" 
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-camping-moss/10 p-3 rounded-full mb-4">
                <Shield className="text-camping-forest w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind every product we sell with our satisfaction guarantee.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-camping-moss/10 p-3 rounded-full mb-4">
                <MapPin className="text-camping-forest w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Curated Locations</h3>
              <p className="text-gray-600">
                Handpicked camping spots with verified amenities and real reviews.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-camping-moss/10 p-3 rounded-full mb-4">
                <Users className="text-camping-forest w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our team of camping experts is always ready to help with your questions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-camping-moss/10 p-3 rounded-full mb-4">
                <Clock className="text-camping-forest w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Simple, transparent booking process for all camping sites.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-8">
              <Tent className="text-camping-forest w-16 h-16" />
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-4">
                CampAdventures was founded in 2018 by a group of outdoor enthusiasts who believed that camping should be accessible to everyone. What started as a small online store selling tents and sleeping bags has grown into a comprehensive platform for all camping needs.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a simple goal: to provide high-quality camping gear that wouldn't break the bank. Soon, we realized that finding good camping spots was just as important as having the right equipment, so we expanded our services to include campsite bookings.
              </p>
              <p className="text-gray-700">
                Today, we're proud to serve thousands of camping enthusiasts across the country, helping them create unforgettable outdoor memories. Our team has grown, but our passion for the outdoors remains at the heart of everything we do.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={`Team member ${index}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-camping-forest">Co-Founder</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
