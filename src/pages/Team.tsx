
import React from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamPage = () => {
  const stylists = [
    {
      name: "Emma Reynolds",
      role: "Salon Director & Color Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      bio: "With over 10 years of experience, Emma specializes in dimensional color and precision cutting. Her work has been featured in several fashion magazines.",
      specialties: ["Balayage", "Color Correction", "Precision Cuts"],
      instagram: "emmacuts"
    },
    {
      name: "Michael Chen",
      role: "Senior Stylist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      bio: "Michael's innovative approach to hair design has earned him a dedicated clientele. He excels in transformative cuts and creative color.",
      specialties: ["Artistic Cuts", "Men's Styling", "Vivid Colors"],
      instagram: "chen_styles"
    },
    {
      name: "Sofia Rodriguez",
      role: "Extension Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      bio: "Sofia is our extension expert, creating seamless, natural-looking length and volume. She is certified in multiple extension techniques.",
      specialties: ["Tape-Ins", "Hand-Tied Wefts", "Fusion Extensions"],
      instagram: "sofia_extensions"
    },
    {
      name: "James Wilson",
      role: "Texture Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      bio: "James specializes in curly and textured hair, with a passion for helping clients embrace their natural texture while providing low-maintenance styles.",
      specialties: ["Curly Hair Cuts", "Natural Texture", "Styling Education"],
      instagram: "james_texture"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="salon-container section-padding">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-salon-pink">Team</span>
        </h1>
        <div className="w-24 h-1 bg-salon-pink mb-10"></div>
        
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          Meet the talented professionals behind Neon Avenue Salon. Our diverse team of stylists 
          brings unique skills and specialties to provide you with exceptional service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {stylists.map((stylist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${stylist.image})` }}
              ></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">{stylist.name}</h2>
                <p className="text-salon-pink mb-3">{stylist.role}</p>
                <p className="text-gray-700 text-sm mb-4">{stylist.bio}</p>
                
                <h3 className="font-medium mb-2">Specialties:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {stylist.specialties.map((specialty, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <Button 
                    variant="default" 
                    className="bg-salon-pink hover:bg-salon-pink/90"
                  >
                    Book Now
                  </Button>
                  <a 
                    href={`https://instagram.com/${stylist.instagram}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-salon-pink transition-colors"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
