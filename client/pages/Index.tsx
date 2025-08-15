import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Heart, 
  Activity, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Stethoscope,
  Clock,
  ChevronRight,
  Play,
  Dumbbell,
  Brain,
  Apple,
  Thermometer,
  Zap,
  Eye,
  AlertTriangle,
  HeartHandshake,
  Video,
  Calendar,
  MapPin,
  Phone
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
                Your Health, <span className="text-garner-teal">Our Priority</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive healthcare solutions at your fingertips. From symptom 
                checking to specialized care, we're here to support your wellness journey 
                every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-garner-teal hover:bg-garner-dark-teal text-white px-8 py-3 text-lg font-medium">
                  Check Your Symptoms
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 text-lg font-medium">
                  Explore Healthcare Options
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 relative overflow-hidden">
                {/* Healthcare illustration */}
                <div className="grid grid-cols-3 gap-4 relative z-10">
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-garner-teal/20 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-10 h-10 text-garner-teal" />
                    </div>
                    <div className="w-16 h-16 bg-orange-200 rounded-full"></div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="w-18 h-18 bg-green-200 rounded-full"></div>
                    <div className="w-20 h-20 bg-garner-green/20 rounded-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-garner-green" />
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
                    <span className="text-sm font-medium">Your Complete Healthcare Companion</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-garner-green" />
                    <span className="text-sm font-medium">Secure & Confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored healthcare services for every need, from individuals to enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* For Individuals & Families */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-garner-teal to-garner-dark-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Individuals & Families</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find the best healthcare providers in your network and get your medical bills reimbursed.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto font-semibold group-hover:text-garner-dark-teal transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* For Employers */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Employers</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Provide your employees with comprehensive healthcare benefits and wellness programs.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto font-semibold group-hover:text-garner-dark-teal transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* For Advisors */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">For Advisors</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Guide your clients to better healthcare decisions with our comprehensive platform.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto font-semibold group-hover:text-garner-dark-teal transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* DataPro */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">DataPro</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Better healthcare insights using SANCTUA's comprehensive health data platform.
                </p>
                <Button variant="link" className="text-garner-teal p-0 h-auto font-semibold group-hover:text-garner-dark-teal transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fitness Programs Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Transform Your <span className="text-garner-green">Wellness Journey</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover personalized fitness solutions designed to help you achieve your health goals
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Yoga Card */}
            <Card className="bg-gradient-to-br from-garner-green to-green-400 text-white border-0 overflow-hidden relative">
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Yoga</h3>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm">4.6</span>
                </div>
                <p className="text-white/90 mb-6">
                  Find inner peace and flexibility with guided yoga sessions
                </p>
                <ul className="space-y-2 text-sm text-white/90 mb-6">
                  <li>• Beginner Friendly</li>
                  <li>• Expert Instructors</li>
                  <li>• Stress Relief</li>
                </ul>
                <Button variant="secondary" className="bg-white text-garner-green hover:bg-gray-100">
                  Explore Yoga →
                </Button>
              </CardContent>
            </Card>

            {/* Gym Card */}
            <Card className="bg-gradient-to-br from-garner-teal to-blue-400 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Gym</h3>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm">4.9</span>
                </div>
                <p className="text-white/90 mb-6">
                  Strength training and cardio workouts for all fitness levels
                </p>
                <ul className="space-y-2 text-sm text-white/90 mb-6">
                  <li>• Professional Equipment</li>
                  <li>• Personal Training</li>
                  <li>• Group Classes</li>
                </ul>
                <Button variant="secondary" className="bg-white text-garner-teal hover:bg-gray-100">
                  Explore Gym →
                </Button>
              </CardContent>
            </Card>

            {/* Diet Generation Card */}
            <Card className="bg-gradient-to-br from-purple-500 to-purple-400 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Diet Generation</h3>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm">4.5</span>
                </div>
                <p className="text-white/90 mb-6">
                  Personalized nutrition plans tailored to your health goals
                </p>
                <ul className="space-y-2 text-sm text-white/90 mb-6">
                  <li>• Custom Meal Plans</li>
                  <li>• Nutritionist Approved</li>
                  <li>• Health Tracking</li>
                </ul>
                <Button variant="secondary" className="bg-white text-purple-500 hover:bg-gray-100">
                  Explore Diet Generation →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Symptom Checker Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quick <span className="text-garner-teal">Symptom Guide</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand your symptoms and find the right specialist for your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Symptom Cards */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-garner-teal to-garner-dark-teal rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Thermometer className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Fever</h3>
                <p className="text-sm text-gray-600 leading-relaxed">High body temperature and related symptoms</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-garner-green to-garner-dark-green rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Gastric / Colic Pain</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Abdominal discomfort and digestive issues</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Body Aches</h3>
                <p className="text-sm text-gray-600 leading-relaxed">General muscle and joint discomfort</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Dust Allergy</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Respiratory reactions and environmental allergens</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find the <span className="text-garner-teal">Perfect Care</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover healthcare solutions tailored to your specific needs and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Local Clinics */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-garner-teal to-garner-dark-teal rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-garner-teal bg-garner-teal/10 px-3 py-1 rounded-full">
                        Primary Care
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Clinics</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Find nearby medical clinics for routine checkups and consultations
                    </p>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                        <span className="font-semibold text-gray-900">4.7</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>15-30 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialist Doctors */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-garner-green to-garner-dark-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-garner-green bg-garner-green/10 px-3 py-1 rounded-full">
                        Specialized Care
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialist Doctors</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Connect with specialized healthcare professionals for expert care
                    </p>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                        <span className="font-semibold text-gray-900">4.9</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>1-2 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="text-garner-green">Health Coverage</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our comprehensive healthcare plans designed to meet every need and budget
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-garner-teal mb-2">150+</div>
              <div className="text-gray-600">Expert Specialists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garner-teal mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garner-teal mb-2">95%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garner-teal mb-2">10k+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Specialized Care?</h3>
            <p className="text-gray-600 mb-8">
              Connect with our specialists for personalized treatment plans and expert medical guidance
            </p>
            <Button className="bg-garner-teal hover:bg-garner-dark-teal text-white px-8 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
