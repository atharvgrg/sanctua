import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-garner-teal rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">SANCTUA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-garner-teal font-medium transition-colors"
            >
              Home
            </Link>
            <div className="group relative">
              <Link
                to="/fitness"
                className="text-gray-700 hover:text-garner-teal font-medium transition-colors flex items-center"
              >
                Fitness
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    to="/yoga"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-garner-teal"
                  >
                    Yoga Practice
                  </Link>
                  <Link
                    to="/gym"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-garner-teal"
                  >
                    Gym Workouts
                  </Link>
                  <Link
                    to="/diet-generation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-garner-teal"
                  >
                    Diet Generator
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/symptoms"
              className="text-gray-700 hover:text-garner-teal font-medium transition-colors"
            >
              Symptoms
            </Link>
            <Link
              to="/healthcare"
              className="text-gray-700 hover:text-garner-teal font-medium transition-colors"
            >
              Healthcare
            </Link>
          </nav>

          {/* Desktop Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-garner-teal font-medium"
            >
              Login / Sign Up
            </Button>
            <Button className="bg-garner-teal hover:bg-garner-dark-teal text-white font-medium px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/fitness"
                className="block px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fitness
              </Link>
              <Link
                to="/yoga"
                className="block px-6 py-2 text-gray-600 hover:text-garner-teal text-sm transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                • Yoga Practice
              </Link>
              <Link
                to="/gym"
                className="block px-6 py-2 text-gray-600 hover:text-garner-teal text-sm transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                • Gym Workouts
              </Link>
              <Link
                to="/diet-generation"
                className="block px-6 py-2 text-gray-600 hover:text-garner-teal text-sm transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                • Diet Generator
              </Link>
              <Link
                to="/symptoms"
                className="block px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Symptoms
              </Link>
              <Link
                to="/healthcare"
                className="block px-3 py-2 text-gray-700 hover:text-garner-teal font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Healthcare
              </Link>
              <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full text-left justify-start text-gray-700 hover:text-garner-teal font-medium"
                >
                  Login / Sign Up
                </Button>
                <Button className="w-full bg-garner-teal hover:bg-garner-dark-teal text-white font-medium">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
