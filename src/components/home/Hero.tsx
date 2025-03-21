import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, {
      threshold: 0.1
    });
    const animatedElements = document.querySelectorAll(".animated-element");
    animatedElements.forEach(element => observer.observe(element));
    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);
  return <section className="relative w-full h-screen overflow-hidden bg-salon-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-salon-black/50 to-salon-black z-10"></div>
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop')] 
        bg-cover bg-center bg-no-repeat" style={{
      opacity: 0.7
    }}></div>
      
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="animated-element text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Neon Avenue <span className="text-salon-pink">Salon</span>
          </h1>
          <p className="animated-element text-white/90 text-xl md:text-2xl font-light mb-8 drop-shadow-md delay-100">
            Chicago's Premier Destination for Hair
          </p>
          <p className="animated-element text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md delay-200">
            Where Beauty, Style, and Opportunity Meet
          </p>
          
          <div className="animated-element flex flex-wrap justify-center gap-4 md:gap-6 delay-300">
            <Button onClick={() => navigate("/contact")} variant="default" size="lg" className="bg-salon-pink hover:bg-salon-pink/90 flex items-center gap-2">
              Book Online <ExternalLink size={18} />
            </Button>
            <Button onClick={() => navigate("/team")} variant="outline" size="lg" className="border-white hover:bg-white text-slate-950">
              Meet Our Stylists
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-salon-black to-transparent h-32"></div>
    </section>;
};
export default Hero;