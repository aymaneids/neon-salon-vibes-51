
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Scissors, Award, HeartHandshake } from "lucide-react";

const AboutSection = () => {
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

  return (
    <section id="about" className="section-padding bg-white">
      <div className="salon-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-salon-black mb-3">
            About <span className="text-salon-pink">Neon Avenue</span>
          </h2>
          <div className="w-24 h-1 bg-salon-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Where exceptional stylists and discerning clients come together in downtown Chicago's premier hair destination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animated-element">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" 
                alt="Neon Avenue Salon Interior" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-salon-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl font-semibold drop-shadow-lg">
                  Located in the heart of downtown Chicago
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="animated-element delay-100">
                <h3 className="text-2xl font-semibold text-salon-black mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  At Neon Avenue Salon, we connect outstanding stylists with a lavish client experience in a vibrant, creative environment. Our focus on color, precision cuts, and extensions ensures that every client leaves our salon feeling transformed and confident.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="animated-element delay-200 glass-card bg-gray-50 p-5 rounded-lg text-center">
                  <Scissors className="text-salon-pink w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Expert Stylists</h4>
                  <p className="text-sm text-gray-600">Industry professionals with years of experience</p>
                </div>
                
                <div className="animated-element delay-300 glass-card bg-gray-50 p-5 rounded-lg text-center">
                  <Award className="text-salon-pink w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Top-tier products and services</p>
                </div>
                
                <div className="animated-element delay-400 glass-card bg-gray-50 p-5 rounded-lg text-center">
                  <HeartHandshake className="text-salon-pink w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Client Focus</h4>
                  <p className="text-sm text-gray-600">Personalized attention to your needs</p>
                </div>
              </div>
              
              <div className="animated-element delay-500 mt-8">
                <Button 
                  onClick={() => navigate("/about")} 
                  variant="default"
                  size="default"
                  className="bg-salon-pink hover:bg-salon-pink/90 mt-4"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
