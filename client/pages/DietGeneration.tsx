import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Zap,
  Target,
  Download,
  RotateCcw
} from "lucide-react";

interface FormData {
  age: string;
  gender: string;
  weight: string;
  height: string;
  activityLevel: string;
  healthGoal: string;
  dietType: string;
}

export default function DietGeneration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activityLevel: "",
    healthGoal: "",
    dietType: ""
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setShowResults(false);
    setFormData({
      age: "",
      gender: "",
      weight: "",
      height: "",
      activityLevel: "",
      healthGoal: "",
      dietType: ""
    });
  };

  const getProgressPercentage = () => {
    if (showResults) return 100;
    return (currentStep / totalSteps) * 100;
  };

  const activityLevels = [
    {
      id: "sedentary",
      title: "Sedentary",
      description: "Little to no exercise",
      multiplier: 1.2
    },
    {
      id: "lightly_active",
      title: "Lightly Active",
      description: "Light exercise 1-3 days/week",
      multiplier: 1.375
    },
    {
      id: "moderately_active",
      title: "Moderately Active",
      description: "Moderate exercise 3-5 days/week",
      multiplier: 1.55
    },
    {
      id: "very_active",
      title: "Very Active",
      description: "Hard exercise 6-7 days/week",
      multiplier: 1.725
    },
    {
      id: "extra_active",
      title: "Extra Active",
      description: "Very hard exercise, physical job",
      multiplier: 1.9
    }
  ];

  const healthGoals = [
    {
      id: "lose_weight",
      title: "Lose Weight",
      description: "Create caloric deficit",
      icon: "📉",
      color: "bg-red-50 border-red-200"
    },
    {
      id: "maintain_weight",
      title: "Maintain Weight",
      description: "Balanced caloric intake",
      icon: "⚖️",
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: "gain_weight",
      title: "Gain Weight",
      description: "Caloric surplus for muscle",
      icon: "📈",
      color: "bg-green-50 border-green-200"
    },
    {
      id: "build_muscle",
      title: "Build Muscle",
      description: "High protein focus",
      icon: "💪",
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const dietTypes = [
    {
      id: "balanced",
      title: "Balanced",
      description: "Well-rounded nutrition",
      icon: "⚖️"
    },
    {
      id: "keto",
      title: "Keto",
      description: "Low carb, high fat",
      icon: "🥑"
    },
    {
      id: "mediterranean",
      title: "Mediterranean",
      description: "Heart-healthy fats",
      icon: "🫒"
    },
    {
      id: "vegetarian",
      title: "Vegetarian",
      description: "Plant-based nutrition",
      icon: "🌱"
    },
    {
      id: "vegan",
      title: "Vegan",
      description: "100% plant-based",
      icon: "🌿"
    },
    {
      id: "paleo",
      title: "Paleo",
      description: "Whole foods focused",
      icon: "🍖"
    }
  ];

  const sampleMeals = {
    breakfast: {
      name: "Greek Yogurt Bowl",
      calories: 320,
      protein: 25,
      carbs: 35,
      fat: 8,
      ingredients: ["Greek yogurt", "Berries", "Granola", "Honey"]
    },
    lunch: {
      name: "Quinoa Buddha Bowl",
      calories: 420,
      protein: 18,
      carbs: 50,
      fat: 16,
      ingredients: ["Quinoa", "Roasted vegetables", "Chickpeas", "Tahini"]
    },
    dinner: {
      name: "Lean Beef Stir Fry",
      calories: 400,
      protein: 30,
      carbs: 25,
      fat: 20,
      ingredients: ["Lean beef", "Mixed vegetables", "Brown rice", "Ginger"]
    },
    morningSnack: {
      name: "Protein Bar",
      calories: 200,
      protein: 15,
      carbs: 20,
      fat: 8,
      ingredients: ["Protein bar"]
    },
    afternoonSnack: {
      name: "Greek Yogurt",
      calories: 120,
      protein: 12,
      carbs: 8,
      fat: 5,
      ingredients: ["Greek yogurt", "Berries"]
    }
  };

  if (showResults) {
    const totalCalories = 3259;
    const totalProtein = 204;
    const totalCarbs = 367;
    const totalFat = 109;

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Personalized Diet Plan
            </h1>
            <p className="text-lg text-gray-600">
              Custom nutrition plan based on your profile
            </p>
          </div>

          {/* Macros Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-garner-teal mb-1">{totalCalories}</div>
                <div className="text-sm text-gray-600">Daily Calories</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{totalProtein}g</div>
                <div className="text-sm text-gray-600">Protein</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{totalCarbs}g</div>
                <div className="text-sm text-gray-600">Carbs</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">{totalFat}g</div>
                <div className="text-sm text-gray-600">Fat</div>
              </CardContent>
            </Card>
          </div>

          {/* Meals */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Breakfast */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🍳</span>
                  <h3 className="text-xl font-bold text-gray-900">Breakfast</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{sampleMeals.breakfast.name}</h4>
                <div className="grid grid-cols-4 gap-2 text-sm mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-garner-teal">{sampleMeals.breakfast.calories}</div>
                    <div className="text-xs text-gray-500">cal</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">{sampleMeals.breakfast.protein}g</div>
                    <div className="text-xs text-gray-500">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{sampleMeals.breakfast.carbs}g</div>
                    <div className="text-xs text-gray-500">carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600">{sampleMeals.breakfast.fat}g</div>
                    <div className="text-xs text-gray-500">fat</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Ingredients:</p>
                  <p className="text-sm text-gray-600">{sampleMeals.breakfast.ingredients.join(", ")}</p>
                </div>
              </CardContent>
            </Card>

            {/* Lunch */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🥗</span>
                  <h3 className="text-xl font-bold text-gray-900">Lunch</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{sampleMeals.lunch.name}</h4>
                <div className="grid grid-cols-4 gap-2 text-sm mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-garner-teal">{sampleMeals.lunch.calories}</div>
                    <div className="text-xs text-gray-500">cal</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">{sampleMeals.lunch.protein}g</div>
                    <div className="text-xs text-gray-500">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{sampleMeals.lunch.carbs}g</div>
                    <div className="text-xs text-gray-500">carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600">{sampleMeals.lunch.fat}g</div>
                    <div className="text-xs text-gray-500">fat</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Ingredients:</p>
                  <p className="text-sm text-gray-600">{sampleMeals.lunch.ingredients.join(", ")}</p>
                </div>
              </CardContent>
            </Card>

            {/* Dinner */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🍽️</span>
                  <h3 className="text-xl font-bold text-gray-900">Dinner</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{sampleMeals.dinner.name}</h4>
                <div className="grid grid-cols-4 gap-2 text-sm mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-garner-teal">{sampleMeals.dinner.calories}</div>
                    <div className="text-xs text-gray-500">cal</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">{sampleMeals.dinner.protein}g</div>
                    <div className="text-xs text-gray-500">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{sampleMeals.dinner.carbs}g</div>
                    <div className="text-xs text-gray-500">carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600">{sampleMeals.dinner.fat}g</div>
                    <div className="text-xs text-gray-500">fat</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Ingredients:</p>
                  <p className="text-sm text-gray-600">{sampleMeals.dinner.ingredients.join(", ")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Snacks */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Morning Snack */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🍎</span>
                  <h3 className="text-xl font-bold text-gray-900">Morning Snack</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{sampleMeals.morningSnack.name}</h4>
                <div className="grid grid-cols-4 gap-2 text-sm mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-garner-teal">{sampleMeals.morningSnack.calories}</div>
                    <div className="text-xs text-gray-500">cal</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">{sampleMeals.morningSnack.protein}g</div>
                    <div className="text-xs text-gray-500">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{sampleMeals.morningSnack.carbs}g</div>
                    <div className="text-xs text-gray-500">carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600">{sampleMeals.morningSnack.fat}g</div>
                    <div className="text-xs text-gray-500">fat</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Ingredients:</p>
                  <p className="text-sm text-gray-600">{sampleMeals.morningSnack.ingredients.join(", ")}</p>
                </div>
              </CardContent>
            </Card>

            {/* Afternoon Snack */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🥤</span>
                  <h3 className="text-xl font-bold text-gray-900">Afternoon Snack</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{sampleMeals.afternoonSnack.name}</h4>
                <div className="grid grid-cols-4 gap-2 text-sm mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-garner-teal">{sampleMeals.afternoonSnack.calories}</div>
                    <div className="text-xs text-gray-500">cal</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">{sampleMeals.afternoonSnack.protein}g</div>
                    <div className="text-xs text-gray-500">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{sampleMeals.afternoonSnack.carbs}g</div>
                    <div className="text-xs text-gray-500">carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600">{sampleMeals.afternoonSnack.fat}g</div>
                    <div className="text-xs text-gray-500">fat</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Ingredients:</p>
                  <p className="text-sm text-gray-600">{sampleMeals.afternoonSnack.ingredients.join(", ")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nutrition Tips */}
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-garner-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Drink at least 8 glasses of water daily</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-garner-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Include a variety of colorful vegetables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-garner-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Choose whole grains over refined carbs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-garner-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Practice portion control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-garner-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Eat mindfully and slowly</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={resetForm}
              variant="outline"
              className="border-gray-300 text-gray-700 px-8"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Create New Plan
            </Button>
            <Button className="bg-garner-teal hover:bg-garner-dark-teal text-white px-8">
              <Download className="w-4 h-4 mr-2" />
              Download Plan
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Button className="bg-garner-green hover:bg-garner-dark-green text-white font-medium px-6 py-2 rounded-full mb-6">
            🥗 Personalized Nutrition
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Diet</span> Generator
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Get a personalized nutrition plan tailored to your goals, preferences, and lifestyle
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Target className="w-5 h-5 text-purple-600 mr-2" />
              <span>Goal-Oriented</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-purple-600 mr-2" />
              <span>Science-Based</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Diet Plan Creation</span>
            <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-garner-teal to-garner-green h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-garner-teal rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
                </div>
                <p className="text-gray-600 mb-8">Tell us about yourself to calculate your nutritional needs</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="age" className="text-sm font-medium text-gray-700 mb-2 block">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => updateFormData('age', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-2 block">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => updateFormData('gender', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weight" className="text-sm font-medium text-gray-700 mb-2 block">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={formData.weight}
                      onChange={(e) => updateFormData('weight', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height" className="text-sm font-medium text-gray-700 mb-2 block">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="175"
                      value={formData.height}
                      onChange={(e) => updateFormData('height', e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Activity Level */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-garner-teal rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Activity Level</h2>
                </div>
                <p className="text-gray-600 mb-8">How active are you on a typical day?</p>
                
                <div className="space-y-4">
                  {activityLevels.map((level) => (
                    <div
                      key={level.id}
                      onClick={() => updateFormData('activityLevel', level.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.activityLevel === level.id
                          ? "border-garner-teal bg-garner-teal/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-gray-900">{level.title}</h3>
                          <p className="text-sm text-gray-600">{level.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          formData.activityLevel === level.id
                            ? "border-garner-teal bg-garner-teal"
                            : "border-gray-300"
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Health Goal */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-garner-teal rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Health Goal</h2>
                </div>
                <p className="text-gray-600 mb-8">What's your primary fitness goal?</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {healthGoals.map((goal) => (
                    <div
                      key={goal.id}
                      onClick={() => updateFormData('healthGoal', goal.id)}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all text-center ${
                        formData.healthGoal === goal.id
                          ? "border-garner-teal bg-garner-teal/5"
                          : `${goal.color} hover:shadow-md`
                      }`}
                    >
                      <div className="text-3xl mb-3">{goal.icon}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{goal.title}</h3>
                      <p className="text-sm text-gray-600">{goal.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Diet Type */}
            {currentStep === 4 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-garner-teal rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Diet Type</h2>
                </div>
                <p className="text-gray-600 mb-8">Choose your preferred eating style</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {dietTypes.map((diet) => (
                    <div
                      key={diet.id}
                      onClick={() => updateFormData('dietType', diet.id)}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all text-center ${
                        formData.dietType === diet.id
                          ? "border-garner-teal bg-garner-teal/5"
                          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <div className="text-3xl mb-3">{diet.icon}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{diet.title}</h3>
                      <p className="text-sm text-gray-600">{diet.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                onClick={prevStep}
                variant="outline"
                className={`border-gray-300 text-gray-700 ${currentStep === 1 ? 'invisible' : ''}`}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <Button
                onClick={nextStep}
                className="bg-garner-teal hover:bg-garner-dark-teal text-white"
                disabled={
                  (currentStep === 1 && (!formData.age || !formData.gender || !formData.weight || !formData.height)) ||
                  (currentStep === 2 && !formData.activityLevel) ||
                  (currentStep === 3 && !formData.healthGoal) ||
                  (currentStep === 4 && !formData.dietType)
                }
              >
                {currentStep === totalSteps ? 'Generate My Diet Plan' : 'Continue'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
