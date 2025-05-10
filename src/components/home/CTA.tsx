
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 bg-camping-forest text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-camping-moss-50 max-w-xl">
              Sign up now and get exclusive access to special discounts, early bookings for popular camping sites, and much more!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="px-6 py-2 border-white text-white hover:bg-white/10">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="px-6 py-2 bg-white text-camping-forest hover:bg-gray-100">
              <Link to="/signup">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
