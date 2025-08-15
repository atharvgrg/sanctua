import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-garner-teal lowercase">garner</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering better healthcare decisions through data-driven insights 
              and provider transparency.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/individuals" className="hover:text-garner-teal transition-colors">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-garner-teal transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/advisors" className="hover:text-garner-teal transition-colors">
                  For Advisors
                </Link>
              </li>
              <li>
                <Link to="/datapro" className="hover:text-garner-teal transition-colors">
                  DataPro
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-garner-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-garner-teal transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-garner-teal transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-garner-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-garner-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/help" className="hover:text-garner-teal transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-garner-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-garner-teal transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-garner-teal transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 Garner Health. All rights reserved.
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
