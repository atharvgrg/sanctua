import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Building, 
  TrendingUp, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Activity,
  Clock,
  ChevronRight,
  Play
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Choose your doctor with confidence
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Make informed healthcare decisions with data-driven insights. 
                Find the best providers in your network and get the care you deserve.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-garner-teal hover:bg-garner-dark-teal text-white px-8 py-3 text-lg font-medium">
                  Get started
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 text-lg font-medium">
                  Learn more
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 relative overflow-hidden">
                {/* Illustration placeholder - representing diverse healthcare professionals */}
                <div className="grid grid-cols-3 gap-4 relative z-10">
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-garner-teal/20 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-garner-teal" />
                    </div>
                    <div className="w-16 h-16 bg-orange-200 rounded-full"></div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="w-18 h-18 bg-green-200 rounded-full"></div>
                    <div className="w-20 h-20 bg-garner-green/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-garner-green" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-200 rounded-full"></div>
                    <div className="w-18 h-18 bg-purple-200 rounded-full"></div>
                    <div className="w-14 h-14 bg-yellow-200 rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-garner-teal rounded-full"></div>
                    <span className="text-sm font-medium">98% Accuracy</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-garner-green" />
                    <span className="text-sm font-medium">Real-time Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* For Individuals & Families */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-garner-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-garner-teal" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">For Individuals & Families</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Find the best healthcare providers in your network and get your medical bills reimbursed.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* For Employers */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-900/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">For Employers</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Enroll your benefits and reduce costs without changing plans or networks.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* For Advisors */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">For Advisors</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Bring your clients a revolutionary solution with real savings.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* DataPro */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">DataPro</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Better value-based care using Garner's data-driven insights.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Revolution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            The next revolution in healthcare data
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden relative">
              <div className="aspect-video flex items-center justify-center">
                {/* Video placeholder */}
                <div className="flex items-center justify-center space-x-4 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-medium">Dr. Barbara Jay</div>
                    <div className="text-sm text-gray-300">Chief Medical Officer</div>
                  </div>
                </div>
              </div>
              
              {/* Video controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white text-xs">CC</span>
                </button>
                <button className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white text-xs">⚙</span>
                </button>
                <button className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white text-xs">⛶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-garner-teal/5 to-garner-green/5 rounded-3xl p-12">
                {/* Map illustration */}
                <div className="relative">
                  <div className="w-full h-64 bg-garner-teal/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="w-16 h-16 text-garner-teal mx-auto mb-4" />
                      <div className="text-lg font-medium text-garner-teal">Healthcare Analytics Map</div>
                      <div className="text-sm text-gray-600 mt-2">Nationwide Provider Network</div>
                    </div>
                  </div>
                  
                  {/* Floating data points */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                    <div className="text-xs font-medium text-garner-teal">60B+ Records</div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg p-2 shadow-lg">
                    <div className="text-xs font-medium text-garner-green">320M Patients</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                More data and new analytics to evaluate providers
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                We've compiled the largest claims database in the U.S.—over 
                60 billion medical records from 320 million patients—to 
                identify which doctors diagnose more accurately and have 
                better patient outcomes.
              </p>
              
              <Button variant="outline" className="border-gray-300 text-gray-700">
                See how it works <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-4">BLOG</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why "Just To Be Safe" Is Actually More Dangerous
              </h2>
              <p className="text-gray-600 mb-8">
                What the data says about the harm of unnecessary medical tests.
              </p>
              <Button variant="outline" className="border-gray-300 text-gray-700">
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-garner-teal/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-garner-teal" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Healthcare Insights</div>
                      <div className="text-sm text-gray-500">Data-driven decisions</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    How to Solve the Engagement Problem
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-garner-dark-green to-garner-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Create your free account
              </h2>
              <Button 
                variant="secondary" 
                className="bg-white text-garner-teal hover:bg-gray-50 font-medium px-8"
              >
                Get started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Give your employees the best care
              </h2>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-garner-teal font-medium px-8"
              >
                Book a demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Resources</h2>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              See more <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="text-sm font-medium text-gray-500 mb-4">BLOG</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why "Just To Be Safe" Is Actually More Dangerous
                </h3>
                <p className="text-gray-600 mb-6">
                  What the data says about the harm of unnecessary medical tests.
                </p>
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  Read more <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-white/50 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-garner-teal mx-auto mb-4" />
                    <div className="text-lg font-medium text-gray-900">Patient Success Stories</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500 mb-2">BLOG</div>
                  <h3 className="font-bold text-gray-900">
                    How to Solve the Engagement Problem
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
