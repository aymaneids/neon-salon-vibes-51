
import React from "react";
import { Scissors, Paintbrush, Brush, Wind, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const services = [
    {
      icon: <Paintbrush className="w-12 h-12 text-salon-pink" />,
      title: "Hair Color",
      description: "Our expert colorists create personalized looks tailored to your skin tone and style preferences.",
      options: [
        { name: "Single Process Color", price: "$85+" },
        { name: "Partial Highlights", price: "$125+" },
        { name: "Full Highlights", price: "$165+" },
        { name: "Balayage", price: "$175+" },
        { name: "Color Correction", price: "Consultation Required" }
      ]
    },
    {
      icon: <Scissors className="w-12 h-12 text-salon-pink" />,
      title: "Precision Cuts",
      description: "Tailored haircuts that enhance your natural features and complement your lifestyle.",
      options: [
        { name: "Women's Haircut", price: "$65+" },
        { name: "Men's Haircut", price: "$45+" },
        { name: "Children's Haircut", price: "$35+" },
        { name: "Bang Trim", price: "$20+" }
      ]
    },
    {
      icon: <Brush className="w-12 h-12 text-salon-pink" />,
      title: "Extensions",
      description: "Add length, volume, or both with our premium quality hair extension services.",
      options: [
        { name: "Tape-In Extensions", price: "$350+" },
        { name: "Hand-Tied Weft", price: "$800+" },
        { name: "Fusion/Keratin Extensions", price: "$1,200+" },
        { name: "Extension Maintenance", price: "$100+" }
      ]
    },
    {
      icon: <Wind className="w-12 h-12 text-salon-pink" />,
      title: "Styling",
      description: "From blowouts to special occasion updos, our stylists create stunning finished looks.",
      options: [
        { name: "Blowout", price: "$55+" },
        { name: "Special Occasion Style", price: "$85+" },
        { name: "Bridal Trial", price: "$125+" },
        { name: "Bridal Day Style", price: "$150+" }
      ]
    },
    {
      icon: <Stars className="w-12 h-12 text-salon-pink" />,
      title: "Treatments",
      description: "Rejuvenate your hair with our specialized treatments for all hair types and concerns.",
      options: [
        { name: "Deep Conditioning", price: "$35+" },
        { name: "Keratin Smoothing Treatment", price: "$275+" },
        { name: "Scalp Treatment", price: "$45+" },
        { name: "Bond Building Treatment", price: "$40+" }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="salon-container section-padding">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-salon-pink">Services</span>
        </h1>
        <div className="w-24 h-1 bg-salon-pink mb-10"></div>
        
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          At Neon Avenue Salon, we offer a comprehensive range of hair services designed to enhance 
          your natural beauty and express your unique style. All services include a consultation 
          to ensure we understand your vision.
        </p>
        
        {services.map((service, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-4">
              <div className="mr-4">{service.icon}</div>
              <h2 className="text-3xl font-semibold">{service.title}</h2>
            </div>
            <p className="text-gray-700 mb-6 max-w-3xl">{service.description}</p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Options & Pricing</h3>
              <div className="space-y-3">
                {service.options.map((option, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">{option.name}</span>
                    <span className="text-salon-pink font-semibold">{option.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-sm text-gray-500">
                * Prices may vary based on hair length, thickness, and service complexity.
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            className="bg-salon-pink hover:bg-salon-pink/90"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
