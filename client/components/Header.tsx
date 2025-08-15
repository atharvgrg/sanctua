import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-garner-teal lowercase">garner</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-garner-teal font-medium transition-colors">
                For Members
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-garner-teal font-medium transition-colors">
                Our Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-garner-teal font-medium transition-colors">
                Data & Insights
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-garner-teal font-medium transition-colors">
                Company
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
          </nav>

          {/* Desktop Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-garner-teal font-medium"
            >
              Sign in
            </Button>
            <Button 
              className="bg-garner-teal hover:bg-garner-dark-teal text-white font-medium px-6"
            >
              Create account
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors">
                For Members
              </button>
              <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors">
                Our Solutions
              </button>
              <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors">
                Data & Insights
              </button>
              <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors">
                Company
              </button>
              <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full text-left justify-start text-gray-700 hover:text-garner-teal font-medium"
                >
                  Sign in
                </Button>
                <Button 
                  className="w-full bg-garner-teal hover:bg-garner-dark-teal text-white font-medium"
                >
                  Create account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
