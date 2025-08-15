import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Clock, 
  Star, 
  CheckCircle,
  Leaf,
  Heart,
  Zap,
  Circle
} from "lucide-react";

export default function Yoga() {
  const [activeTab, setActiveTab] = useState("Individual Poses");
  const [activeFilter, setActiveFilter] = useState("All Poses");

  const poses = [
    {
      id: 1,
      name: "Mountain Pose",
      level: "Beginner",
      duration: "1-2 minutes",
      category: "Standing",
      description: "Stand tall with feet hip-width apart, arms at your sides. Ground through your feet and lengthen through the crown of your head.",
      benefits: ["Improves posture", "Strengthens legs", "Increases awareness"],
      icon: Mountain,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      id: 2,
      name: "Downward Dog",
      level: "Beginner",
      duration: "1-3 minutes", 
      category: "Inversion",
      description: "From hands and knees, tuck toes under and lift hips up and back, creating an inverted V shape.",
      benefits: ["Stretches hamstrings", "Strengthens arms", "Energizes body"],
      icon: Circle,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: 3,
      name: "Warrior I",
      level: "Intermediate",
      duration: "30 seconds each side",
      category: "Standing",
      description: "Step left foot back, turn it out 45 degrees. Bend right knee over ankle, reach arms overhead.",
      benefits: ["Strengthens legs", "Opens hips", "Improves balance"],
      icon: Zap,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Tree Pose",
      level: "Intermediate",
      duration: "30-60 seconds each side",
      category: "Balance",
      description: "Stand on left leg, place right foot on inner left thigh. Bring palms together at heart center.",
      benefits: ["Improves balance", "Strengthens legs", "Increases focus"],
      icon: Leaf,
      color: "bg-gradient-to-br from-green-600 to-green-700"
    },
    {
      id: 5,
      name: "Child's Pose",
      level: "Beginner",
      duration: "1-5 minutes",
      category: "Restorative",
      description: "Kneel on floor, sit back on heels, fold forward with arms extended or by your sides.",
      benefits: ["Relieves stress", "Stretches back", "Calms mind"],
      icon: Heart,
      color: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      id: 6,
      name: "Cobra Pose",
      level: "Intermediate",
      duration: "15-30 seconds",
      category: "Backbend",
      description: "Lie face down, place palms under shoulders, gently lift chest while keeping pelvis grounded.",
      benefits: ["Strengthens back", "Opens chest", "Improves spinal flexibility"],
      icon: Circle,
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
  ];

  const filterTabs = ["All Poses", "Standing", "Balance", "Backbend", "Inversion", "Restorative"];
  
  const filteredPoses = activeFilter === "All Poses" 
    ? poses 
    : poses.filter(pose => pose.category === activeFilter);

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Button className="bg-garner-green hover:bg-garner-dark-green text-white font-medium px-6 py-2 rounded-full mb-6">
              🧘 Find Your Inner Peace
            </Button>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-garner-green">Yoga</span> Practice
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the ancient art of yoga with guided poses, breathing techniques, and 
            mindfulness practices
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-garner-green mr-2" />
              <span>Guided Sessions</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-garner-green mr-2" />
              <span>All Levels</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-garner-green mr-2" />
              <span>Expert Instruction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {["Individual Poses", "Yoga Sequences"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? "border-garner-green text-garner-green"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filterTabs.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-garner-teal text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Poses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPoses.map((pose) => {
              const IconComponent = pose.icon;
              return (
                <Card key={pose.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-0">
                    {/* Icon Header */}
                    <div className={`${pose.color} p-8 text-center relative overflow-hidden`}>
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{pose.name}</h3>
                        <div className="flex justify-center space-x-4 text-white/90 text-sm">
                          <Badge className={`${getLevelColor(pose.level)} text-xs`}>
                            {pose.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{pose.duration}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {pose.category}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {pose.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {pose.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-garner-green rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className="w-full bg-gray-100 hover:bg-garner-green hover:text-white text-gray-700 font-medium transition-colors"
                      >
                        Practice This Pose
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-garner-green to-garner-dark-green py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Yoga Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands who have found peace, strength, and flexibility through our guided yoga practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              className="bg-white text-garner-green hover:bg-gray-50 font-medium px-8"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-garner-green font-medium px-8"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
