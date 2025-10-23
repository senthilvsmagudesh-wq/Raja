import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { clinicInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">RAJA Health Care</h3>
                <p className="text-xs text-gray-400">Neurology Clinic</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Specialist neurology centre providing compassionate, evidence-based care for all neurological conditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/doctor" className="hover:text-blue-400 transition-colors">Meet the Doctor</Link></li>
              <li><Link to="/book-appointment" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Stroke Management</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Epilepsy Treatment</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Parkinson's Care</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Migraine Treatment</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">EEG & EMG Tests</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{clinicInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{clinicInfo.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{clinicInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 9AM-6PM<br />Sat: 9AM-1PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} RAJA Health Care Clinic. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
