import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-garner-teal rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">SANCTUA</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted healthcare companion, providing comprehensive medical services 
              and wellness solutions for individuals and families worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-garner-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-garner-teal transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-garner-teal transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-garner-teal transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-garner-teal transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Health Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Health Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/symptom-checker" className="hover:text-garner-teal transition-colors">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link to="/fitness" className="hover:text-garner-teal transition-colors">
                  Fitness Programs
                </Link>
              </li>
              <li>
                <Link to="/mental-health" className="hover:text-garner-teal transition-colors">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/specialized-care" className="hover:text-garner-teal transition-colors">
                  Specialized Care
                </Link>
              </li>
              <li>
                <Link to="/telemedicine" className="hover:text-garner-teal transition-colors">
                  Telemedicine
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <div className="text-gray-900 font-medium">+1(555) 123-4567</div>
                <div className="text-xs">Emergency Hotline</div>
              </div>
              
              <div>
                <div className="text-gray-900">care@sanctua.com</div>
                <div className="text-xs">General Inquiries</div>
              </div>
              
              <div>
                <div className="text-gray-900">123 Health Street, Medical District</div>
                <div className="text-xs">Main Campus</div>
              </div>
              
              <div>
                <div className="text-gray-900">24/7 Emergency • Mon-Fri 8AM-8PM</div>
                <div className="text-xs">Operating Hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 SANCTUA. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-garner-teal transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-garner-teal transition-colors">
              Terms
            </Link>
            <Link to="/accessibility" className="hover:text-garner-teal transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
