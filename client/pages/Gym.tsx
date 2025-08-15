import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  Clock, 
  Star, 
  CheckCircle,
  Target,
  TrendingUp,
  Zap,
  Activity
} from "lucide-react";

export default function Gym() {
  const [activeTab, setActiveTab] = useState("Individual Exercises");
  const [activeFilter, setActiveFilter] = useState("All Exercises");

  const exercises = [
    {
      id: 1,
      name: "Push-ups",
      level: "Beginner",
      sets: 3,
      reps: "8-15",
      duration: "60 seconds",
      category: "Chest",
      description: "Classic bodyweight exercise for upper body strength",
      targetMuscles: ["Chest", "Shoulders", "Triceps"],
      calories: "8 cal/set",
      icon: "💪",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Squats",
      level: "Beginner",
      sets: 3,
      reps: "12-20",
      duration: "90 seconds",
      category: "Legs",
      description: "Fundamental lower body movement for leg strength",
      targetMuscles: ["Quadriceps", "Glutes", "Hamstrings"],
      calories: "10 cal/set",
      icon: "🦵",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "Deadlifts",
      level: "Advanced",
      sets: 3,
      reps: "6-10",
      duration: "2-3 minutes",
      category: "Back",
      description: "King of all exercises for posterior chain development",
      targetMuscles: ["Hamstrings", "Glutes", "Back", "Core"],
      calories: "15 cal/set",
      icon: "⚡",
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      id: 4,
      name: "Pull-ups",
      level: "Intermediate",
      sets: 3,
      reps: "5-12",
      duration: "2 minutes",
      category: "Back",
      description: "Ultimate upper body pulling exercise",
      targetMuscles: ["Lats", "Biceps", "Middle Traps"],
      calories: "12 cal/set",
      icon: "🔄",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: 5,
      name: "Bench Press",
      level: "Intermediate",
      sets: 3,
      reps: "8-12",
      duration: "2 minutes",
      category: "Chest",
      description: "Classic chest building exercise",
      targetMuscles: ["Chest", "Shoulders", "Triceps"],
      calories: "14 cal/set",
      icon: "🏋️",
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      id: 6,
      name: "Plank",
      level: "Beginner",
      sets: 3,
      reps: "30-60 seconds",
      duration: "60 seconds",
      category: "Core",
      description: "Isometric core strengthening exercise",
      targetMuscles: ["Core", "Shoulders", "Glutes"],
      calories: "5 cal/set",
      icon: "🎯",
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  const filterTabs = ["All Exercises", "Chest", "Back", "Legs", "Core"];
  
  const filteredExercises = activeFilter === "All Exercises" 
    ? exercises 
    : exercises.filter(exercise => exercise.category === activeFilter);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-garner-teal">Gym</span> Workouts
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Professional strength training programs designed to help you build muscle, lose fat, 
            and get stronger
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Target className="w-5 h-5 text-garner-teal mr-2" />
              <span>Targeted Workouts</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-garner-teal mr-2" />
              <span>Progressive Training</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-garner-teal mr-2" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {["Individual Exercises", "Workout Plans"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? "border-garner-teal text-garner-teal"
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

      {/* Exercises Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExercises.map((exercise) => (
              <Card key={exercise.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-0">
                  {/* Icon Header */}
                  <div className={`${exercise.color} p-8 text-center relative overflow-hidden`}>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">{exercise.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exercise.name}</h3>
                      <div className="flex justify-center space-x-4 text-white/90 text-sm">
                        <Badge className={`${getLevelColor(exercise.level)} text-xs`}>
                          {exercise.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {exercise.description}
                    </p>
                    
                    {/* Exercise Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-gray-900">{exercise.sets}</div>
                        <div className="text-xs text-gray-500">Sets</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">{exercise.reps}</div>
                        <div className="text-xs text-gray-500">Reps</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">{exercise.duration}</div>
                        <div className="text-xs text-gray-500">Rest</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Target Muscles:</h4>
                      <div className="flex flex-wrap gap-1">
                        {exercise.targetMuscles.map((muscle, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {muscle}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Zap className="w-4 h-4 mr-1 text-orange-500" />
                        <span>{exercise.calories}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exercise.category}
                      </Badge>
                    </div>
                    
                    <Button 
                      className="w-full bg-gray-100 hover:bg-garner-teal hover:text-white text-gray-700 font-medium transition-colors"
                    >
                      Start Exercise
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Track Your Progress
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-garner-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-garner-teal" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Exercises</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-garner-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-garner-green" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Workout Plans</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-garner-teal to-garner-dark-teal py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Body?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join our community and start building the strength and physique you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              className="bg-white text-garner-teal hover:bg-gray-50 font-medium px-8"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-garner-teal font-medium px-8"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
