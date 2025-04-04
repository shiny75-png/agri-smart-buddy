
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import type { MessageProps } from "./Message";

const mockResponses: { [key: string]: string } = {
  "weather": "The forecast for today is sunny with temperatures between 25-28°C. There's a 10% chance of rain in the evening.",
  "price": "Current market prices for common crops:\nWheat: ₹2,015/quintal\nRice: ₹1,940/quintal\nMaize: ₹1,870/quintal\nCotton: ₹6,025/quintal",
  "disease": "From your description, it sounds like your crops might be affected by powdery mildew. I recommend applying a fungicide containing sulfur or potassium bicarbonate. Make sure to improve air circulation around plants as well.",
  "soil": "For improving soil health, consider crop rotation with legumes, adding organic compost, and minimizing tillage. A soil test would give you precise recommendations for your specific field.",
  "default": "I'm here to help with agricultural information! You can ask me about weather forecasts, crop prices, disease identification, soil health, and general farming advice."
};

const AgriBot = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage = {
      content,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);
    
    // Simulate bot response
    setTimeout(() => {
      let responseContent = mockResponses.default;
      
      // Simple keyword matching
      const lowerContent = content.toLowerCase();
      if (lowerContent.includes("weather") || lowerContent.includes("forecast") || lowerContent.includes("rain")) {
        responseContent = mockResponses.weather;
      } else if (lowerContent.includes("price") || lowerContent.includes("market") || lowerContent.includes("cost")) {
        responseContent = mockResponses.price;
      } else if (lowerContent.includes("disease") || lowerContent.includes("pest") || lowerContent.includes("infection")) {
        responseContent = mockResponses.disease;
      } else if (lowerContent.includes("soil") || lowerContent.includes("fertilizer") || lowerContent.includes("nutrient")) {
        responseContent = mockResponses.soil;
      }
      
      const botMessage = {
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    // In a real app, this would trigger translation of the UI and responses
    console.log(`Language changed to: ${newLanguage}`);
  };

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden shadow-lg bg-white">
      <ChatHeader 
        selectedLanguage={language}
        onLanguageChange={handleLanguageChange}
      />
      <ChatMessages messages={messages} isTyping={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default AgriBot;
