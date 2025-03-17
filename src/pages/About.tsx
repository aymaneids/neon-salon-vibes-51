
import React from "react";

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="salon-container section-padding">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-salon-pink">Us</span>
        </h1>
        <div className="w-24 h-1 bg-salon-pink mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Neon Avenue Salon was founded with a vision to create a space where beauty, style, and opportunity meet. 
              Located in the heart of downtown Chicago, we've established ourselves as a premier destination for 
              exceptional hair services and stylist education.
            </p>
            <p className="text-gray-700">
              Our commitment to excellence shows in everything we do - from our curated team of elite stylists to our 
              luxurious salon environment and our focus on continuing education and growth.
            </p>
          </div>
          <div className="bg-[url('https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=2074&auto=format&fit=crop')] 
            bg-cover bg-center rounded-lg h-80 md:h-full"></div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl">
            At Neon Avenue Salon, our mission is to provide exceptional hair services that empower clients to 
            express their unique style, while creating opportunities for stylists to grow and thrive in their craft. 
            We believe that great hair isn't just about looks—it's about confidence, self-expression, and feeling 
            your absolute best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-salon-pink text-xl font-semibold mb-3">Exceptional Service</h3>
            <p className="text-gray-700">
              We provide personalized, professional hair services tailored to each client's unique style, face shape, 
              and lifestyle.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-salon-pink text-xl font-semibold mb-3">Creative Environment</h3>
            <p className="text-gray-700">
              Our salon fosters creativity, collaboration, and continuous learning, keeping us at the forefront of 
              hair trends and techniques.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-salon-pink text-xl font-semibold mb-3">Community Focus</h3>
            <p className="text-gray-700">
              We're proud to be a part of Chicago's vibrant community, and we strive to create connections with our 
              clients and fellow businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
