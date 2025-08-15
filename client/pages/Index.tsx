import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Shield, 
  Star, 
  MapPin, 
  Phone, 
  Clock,
  User,
  Dumbbell,
  Brain,
  Apple,
  Thermometer,
  Zap,
  Eye,
  AlertTriangle,
  HeartHandshake,
  Video,
  Calendar
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-8">
            <Stethoscope className="w-5 h-5 text-sanctua-turquoise mr-2" />
            <span className="text-sanctua-turquoise font-medium">Your Complete Healthcare Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Health, <span className="text-sanctua-turquoise">Our Priority</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive healthcare solutions at your fingertips. From symptom 
            checking to specialized care, we're here to support your wellness journey 
            every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sanctua-turquoise hover:bg-sanctua-primary text-white px-8 py-3 text-lg">
              <Activity className="w-5 h-5 mr-2" />
              Check Your Symptoms
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 text-lg">
              Explore Healthcare Options
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-sanctua-turquoise mr-2" />
              <span>Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <HeartHandshake className="w-5 h-5 text-sanctua-turquoise mr-2" />
              <span>Medically Verified</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 text-sanctua-turquoise mr-2" />
              <span>Expert Care Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full mb-6">
              <Dumbbell className="w-5 h-5 text-sanctua-green mr-2" />
              <span className="text-sanctua-green font-medium">For your Fitness</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your <span className="text-sanctua-green">Wellness Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover personalized fitness solutions designed to help you achieve your 
              health goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Yoga Card */}
            <Card className="bg-gradient-to-br from-sanctua-green to-green-400 text-white border-0 overflow-hidden relative">
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
                <Button variant="secondary" className="bg-white text-sanctua-green hover:bg-gray-100">
                  Explore Yoga →
                </Button>
              </CardContent>
            </Card>

            {/* Gym Card */}
            <Card className="bg-gradient-to-br from-sanctua-light-blue to-blue-400 text-white border-0 overflow-hidden">
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
                <Button variant="secondary" className="bg-white text-sanctua-light-blue hover:bg-gray-100">
                  Explore Gym →
                </Button>
              </CardContent>
            </Card>

            {/* Diet Generation Card */}
            <Card className="bg-gradient-to-br from-sanctua-purple to-purple-400 text-white border-0 overflow-hidden">
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
                <Button variant="secondary" className="bg-white text-sanctua-purple hover:bg-gray-100">
                  Explore Diet Generation →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Symptom Checker Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sanctua-light-blue/10 px-4 py-2 rounded-full mb-6">
              <Activity className="w-5 h-5 text-sanctua-light-blue mr-2" />
              <span className="text-sanctua-light-blue font-medium">Most Common Symptoms</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick <span className="text-sanctua-light-blue">Symptom Guide</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand your symptoms and find the right specialist for your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Symptom Cards */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-light-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-6 h-6 text-sanctua-light-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fever</h3>
                <p className="text-sm text-gray-600 mb-4">High body temperature and related symptoms</p>
                <select className="w-full p-2 border border-gray-200 rounded-md text-sm">
                  <option>General</option>
                  <option>Mild</option>
                  <option>Severe</option>
                </select>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-sanctua-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Gastric / Colic Pain</h3>
                <p className="text-sm text-gray-600 mb-4">Abdominal discomfort and digestive issues</p>
                <select className="w-full p-2 border border-gray-200 rounded-md text-sm">
                  <option>Gastroenterologist</option>
                  <option>General</option>
                </select>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-sanctua-purple" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Body Aches</h3>
                <p className="text-sm text-gray-600 mb-4">General muscle and joint discomfort</p>
                <select className="w-full p-2 border border-gray-200 rounded-md text-sm">
                  <option>General</option>
                  <option>Orthopedic</option>
                </select>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-sanctua-orange" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dust Allergy</h3>
                <p className="text-sm text-gray-600 mb-4">Respiratory reactions and environmental allergens</p>
                <select className="w-full p-2 border border-gray-200 rounded-md text-sm">
                  <option>Doctors</option>
                  <option>Allergist</option>
                </select>
              </CardContent>
            </Card>

            {/* Second row */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-light-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-sanctua-light-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Migraine</h3>
                <p className="text-sm text-gray-600">Severe headaches and neurological symptoms</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-sanctua-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cough</h3>
                <p className="text-sm text-gray-600">Respiratory symptoms and throat irritation</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-sanctua-purple" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Skin Allergy</h3>
                <p className="text-sm text-gray-600">Dermatological reactions and skin conditions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-sanctua-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-sanctua-orange" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Eye Infections</h3>
                <p className="text-sm text-gray-600">Vision problems and eye-related conditions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sanctua-turquoise/10 px-4 py-2 rounded-full mb-6">
              <Stethoscope className="w-5 h-5 text-sanctua-turquoise mr-2" />
              <span className="text-sanctua-turquoise font-medium">Complete Symptom Assessment</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find the <span className="text-sanctua-turquoise">Perfect Care</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover healthcare solutions tailored to your specific needs and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Local Clinics */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-sanctua-light-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-sanctua-light-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-sanctua-light-blue bg-sanctua-light-blue/10 px-3 py-1 rounded-full">
                        Primary Care
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local Clinics</h3>
                    <p className="text-gray-600 mb-4">
                      Find nearby medical clinics for routine checkups and consultations
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">4.7</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>15-30 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialist Doctors */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-sanctua-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-sanctua-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-sanctua-green bg-sanctua-green/10 px-3 py-1 rounded-full">
                        Specialized Care
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Specialist Doctors</h3>
                    <p className="text-gray-600 mb-4">
                      Connect with specialized healthcare professionals for expert care
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">4.9</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>1-2 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Urgent Care */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-sanctua-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-sanctua-purple" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-sanctua-purple bg-sanctua-purple/10 px-3 py-1 rounded-full">
                        Immediate Care
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Urgent Care</h3>
                    <p className="text-gray-600 mb-4">
                      Immediate medical attention for non-emergency situations
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">4.6</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Same day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telemedicine */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-sanctua-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-sanctua-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-sanctua-orange bg-sanctua-orange/10 px-3 py-1 rounded-full">
                        Digital Care
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Telemedicine</h3>
                    <p className="text-gray-600 mb-4">
                      Virtual consultations from the comfort of your home
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">4.8</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Available 24/7</span>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our healthcare advisors can help you find the perfect care option based on your 
            specific needs
          </p>
          <Button className="bg-sanctua-light-blue hover:bg-sanctua-secondary text-white px-8 py-3 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            Get Personalized Recommendations
          </Button>
        </div>
      </section>

      {/* Health Coverage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-sanctua-green/10 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-sanctua-green mr-2" />
            <span className="text-sanctua-green font-medium">Comprehensive Care Plans</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="text-sanctua-green">Health Coverage</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our comprehensive healthcare plans designed to meet every 
            need and budget
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-sanctua-turquoise mb-2">150+</div>
              <div className="text-gray-600">Expert Specialists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sanctua-turquoise mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sanctua-turquoise mb-2">95%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sanctua-turquoise mb-2">10k+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Specialized Care?</h3>
            <p className="text-gray-600 mb-8">
              Connect with our specialists for personalized treatment plans and expert medical guidance
            </p>
            <Button className="bg-sanctua-light-blue hover:bg-sanctua-secondary text-white px-8 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
