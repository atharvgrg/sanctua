import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sanctua-turquoise rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">SANCTUA</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted healthcare companion, providing comprehensive medical services 
              and wellness solutions for individuals and families worldwide.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-sanctua-green rounded-lg flex items-center justify-center text-xs font-medium">
                Certified
              </div>
              <div className="w-8 h-8 bg-sanctua-turquoise rounded-lg flex items-center justify-center text-xs font-medium">
                Trusted
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-sanctua-turquoise rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-sanctua-turquoise transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sanctua-turquoise transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-sanctua-turquoise transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-sanctua-turquoise transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-sanctua-turquoise transition-colors">
                  Health Packages
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-sanctua-turquoise transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Health Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-sanctua-green rounded-full mr-2"></span>
              Health Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/symptom-checker" className="hover:text-sanctua-turquoise transition-colors">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link to="/fitness" className="hover:text-sanctua-turquoise transition-colors">
                  Fitness Programs
                </Link>
              </li>
              <li>
                <Link to="/mental-health" className="hover:text-sanctua-turquoise transition-colors">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/specialized-care" className="hover:text-sanctua-turquoise transition-colors">
                  Specialized Care
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-sanctua-turquoise transition-colors">
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link to="/telemedicine" className="hover:text-sanctua-turquoise transition-colors">
                  Telemedicine
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-sanctua-orange rounded-full mr-2"></span>
              Contact Info
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-sanctua-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">+1(555) 123-4567</div>
                  <div className="text-xs">Emergency Hotline</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-sanctua-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white">care@sanctua.com</div>
                  <div className="text-xs">General Inquiries</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-sanctua-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white">123 Health Street, Medical District</div>
                  <div className="text-xs">Main Campus</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-sanctua-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white">24/7 Emergency • Mon-Fri 8AM-8PM</div>
                  <div className="text-xs">Operating Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 SANCTUA. All rights reserved. Healthcare platform designed for your wellness.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-sanctua-turquoise transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-sanctua-turquoise transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="hover:text-sanctua-turquoise transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
