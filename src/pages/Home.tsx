
import { Button } from "@/components/ui/button";
import Leaf from "@/components/Leaf";
import { ArrowRight, CloudSun, Sprout, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-agri-lightGreen/30 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="h-10 w-10 text-agri-green" />
            <h1 className="text-4xl font-bold text-agri-green">AgriBot</h1>
          </div>
          <p className="text-gray-600 text-lg">Your Smart Farming Assistant</p>
        </header>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto my-8 text-center">
          <h2 className="text-3xl font-bold text-agri-green mb-4">
            Modern Solutions for Modern Farmers
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get real-time weather updates, expert crop advice, and current market prices
            all in one place, powered by intelligent technology.
          </p>
          <Link to="/dashboard">
            <Button className="bg-agri-green hover:bg-agri-green/90 text-white font-medium px-6 py-6 text-lg">
              Start Using AgriBot <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-center text-agri-green mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-agri-lightGreen/20 p-4 rounded-full">
                  <CloudSun className="h-8 w-8 text-agri-green" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-agri-green">Weather Updates</h3>
              <p className="text-gray-600">
                Access real-time weather forecasts tailored for your farm's location.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-agri-lightGreen/20 p-4 rounded-full">
                  <Sprout className="h-8 w-8 text-agri-green" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-agri-green">Crop Advice</h3>
              <p className="text-gray-600">
                Get personalized recommendations for sustainable and profitable farming.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-agri-lightGreen/20 p-4 rounded-full">
                  <DollarSign className="h-8 w-8 text-agri-green" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-agri-green">Market Prices</h3>
              <p className="text-gray-600">
                Stay updated with current market rates to sell your produce at optimal prices.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-16 bg-agri-lightGreen/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-agri-green mb-4">Ready to transform your farming?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of farmers who are already using AgriBot to improve their yields and profits.
          </p>
          <Link to="/dashboard">
            <Button className="bg-agri-green hover:bg-agri-green/90 text-white">
              Get Started Now
            </Button>
          </Link>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Agri Innovators - Sustainable Farming Solutions</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
