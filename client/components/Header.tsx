import { Link } from 'react-router-dom';
import { Search, HelpCircle, Globe, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sanctua-turquoise rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">SANCTUA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/fitness"
              className="text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
            >
              Fitness
            </Link>
            <Link
              to="/symptoms"
              className="text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
            >
              Symptoms
            </Link>
            <Link
              to="/healthcare"
              className="text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
            >
              Healthcare
            </Link>
          </nav>

          {/* Desktop Right side icons and buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">EN</span>
            </button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-sanctua-turquoise font-medium"
            >
              Login / Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/fitness"
                className="block px-3 py-2 text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fitness
              </Link>
              <Link
                to="/symptoms"
                className="block px-3 py-2 text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Symptoms
              </Link>
              <Link
                to="/healthcare"
                className="block px-3 py-2 text-gray-700 hover:text-sanctua-turquoise font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Healthcare
              </Link>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <Button
                  variant="ghost"
                  className="w-full text-left justify-start text-gray-700 hover:text-sanctua-turquoise font-medium"
                >
                  Login / Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
