
import AgriBot from "@/components/AgriBot";
import { Leaf } from "@/components/Leaf"; // Import our custom Leaf component

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-agri-lightGreen/30 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="h-8 w-8 text-agri-green" />
            <h1 className="text-3xl font-bold text-agri-green">AgriBot</h1>
          </div>
          <p className="text-gray-600">Smart Farming Assistant</p>
        </header>
        
        <div className="max-w-3xl mx-auto h-[75vh]">
          <AgriBot />
        </div>
        
        <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>© 2025 Agri Innovators - Sustainable Farming Solutions</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
