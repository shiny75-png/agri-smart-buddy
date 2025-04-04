
import AgriBot from "@/components/AgriBot";
import Leaf from "@/components/Leaf";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

const Index = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  // Content for each section
  const contentMap = {
    weather: (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-agri-green">Today's Weather</h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setActiveContent(null)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Temperature</span>
            <span className="font-bold">30°C</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Condition</span>
            <span className="font-bold">Sunny</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Humidity</span>
            <span className="font-bold">45%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Wind</span>
            <span className="font-bold">12 km/h</span>
          </div>
        </div>
      </div>
    ),
    crops: (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-agri-green">Crop Advice</h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setActiveContent(null)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="p-3 bg-agri-lightGreen/20 rounded-lg">
            <h3 className="font-bold mb-1">Sustainable Farming</h3>
            <p>Use organic fertilizers for better yield and soil health.</p>
          </div>
          <div className="p-3 bg-agri-lightGreen/20 rounded-lg">
            <h3 className="font-bold mb-1">Water Conservation</h3>
            <p>Consider drip irrigation to save water and increase efficiency.</p>
          </div>
          <div className="p-3 bg-agri-lightGreen/20 rounded-lg">
            <h3 className="font-bold mb-1">Pest Management</h3>
            <p>Implement integrated pest management to reduce chemical use.</p>
          </div>
          <div className="p-3 bg-agri-lightGreen/20 rounded-lg">
            <h3 className="font-bold mb-1">Seasonal Planning</h3>
            <p>Rotate crops each season to maintain soil fertility.</p>
          </div>
        </div>
      </div>
    ),
    prices: (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-agri-green">Market Prices</h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setActiveContent(null)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Wheat</span>
            <span className="font-bold">₹2000/quintal</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Rice</span>
            <span className="font-bold">₹1800/quintal</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Maize</span>
            <span className="font-bold">₹1600/quintal</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-agri-lightGreen/20 rounded-lg">
            <span className="font-medium">Cotton</span>
            <span className="font-bold">₹5500/quintal</span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-agri-lightGreen/30 to-white">
      <div className="container mx-auto px-4 py-4">
        <header className="mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Leaf className="h-8 w-8 text-agri-green" />
            <h1 className="text-3xl font-bold text-agri-green">AgriBot</h1>
          </div>
          <p className="text-gray-600">Smart Farming Assistant</p>
        </header>
        
        <Navbar 
          onNavItemClick={(item) => setActiveContent(item)}
          activeItem={activeContent}
        />
        
        <div className="my-4">
          {activeContent && contentMap[activeContent as keyof typeof contentMap]}
        </div>
        
        <div className="max-w-3xl mx-auto h-[60vh]">
          <AgriBot />
        </div>
        
        <footer className="mt-6 text-center text-gray-500 text-sm">
          <p>© 2025 Agri Innovators - Sustainable Farming Solutions</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
