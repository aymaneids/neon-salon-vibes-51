
import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="salon-container section-padding">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact <span className="text-salon-pink">Us</span>
        </h1>
        <div className="w-24 h-1 bg-salon-pink mb-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our services, interested in joining our team, or want to book an appointment? 
              Reach out to us using the contact information below or fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-salon-pink mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-gray-700">111 N Wabash Ste 1805, Chicago, Illinois 60601</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-salon-pink mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-700">(312) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-salon-pink mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-700">info@neonavenuesalon.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-salon-pink mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Hours</h3>
                  <div className="text-gray-700">
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="text-salon-pink mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Follow Us</h3>
                  <a 
                    href="https://instagram.com/neonavenuesalon" 
                    className="text-salon-pink hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @neonavenuesalon
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-salon-pink"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                variant="default"
                className="w-full bg-salon-pink hover:bg-salon-pink/90"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.6533832165396!2d-87.6280945!3d41.884337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca3085e35a3%3A0x1b8757815da5c6a8!2s111%20N%20Wabash%20Ave%20%231805%2C%20Chicago%2C%20IL%2060602!5e0!3m2!1sen!2sus!4v1656514123456!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neon Avenue Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
