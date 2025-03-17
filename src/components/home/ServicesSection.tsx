
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Scissors, Paintbrush, Brush, Wind, Stars } from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animated-element");
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  
  const services = [
    {
      icon: <Paintbrush className="w-12 h-12 text-salon-pink" />,
      title: "Hair Color",
      description: "From subtle highlights to vibrant fashion colors, our expert colorists create personalized looks.",
    },
    {
      icon: <Scissors className="w-12 h-12 text-salon-pink" />,
      title: "Precision Cuts",
      description: "Tailored haircuts that enhance your natural features and complement your lifestyle.",
    },
    {
      icon: <Brush className="w-12 h-12 text-salon-pink" />,
      title: "Extensions",
      description: "Add length, volume, or both with our premium quality hair extension services.",
    },
    {
      icon: <Wind className="w-12 h-12 text-salon-pink" />,
      title: "Styling",
      description: "From blowouts to special occasion updos, our stylists create stunning finished looks.",
    },
    {
      icon: <Stars className="w-12 h-12 text-salon-pink" />,
      title: "Treatments",
      description: "Rejuvenate your hair with our specialized treatments for all hair types and concerns.",
    }
  ];
  
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="salon-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-salon-black mb-3">
            Our <span className="text-salon-pink">Services</span>
          </h2>
          <div className="w-24 h-1 bg-salon-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the artistry of our skilled professionals with our comprehensive range of hair services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`animated-element service-card delay-${index * 100} hover:shadow-xl transition-all`}
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate("/services")} 
            variant="default"
            size="lg"
            className="bg-salon-pink hover:bg-salon-pink/90"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
