
import { Sun, CloudRain, MapPin } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import Leaf from "./Leaf";

interface ChatHeaderProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const ChatHeader = ({
  selectedLanguage,
  onLanguageChange
}: ChatHeaderProps) => {
  return (
    <div className="border-b p-4 bg-agri-green text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-3 sm:mb-0">
          <div className="bg-white rounded-full p-1.5">
            <Leaf className="h-6 w-6 text-agri-green" />
          </div>
          <span className="text-xl font-bold">AgriBot</span>
        </div>
        
        <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
          <LanguageSelector 
            selectedLanguage={selectedLanguage} 
            onLanguageChange={onLanguageChange} 
          />
        </div>
      </div>
      
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs sm:text-sm">
        <div className="bg-white/10 rounded-md p-2 flex flex-col items-center">
          <Sun className="h-4 w-4 mb-1" />
          <span>Weather Updates</span>
        </div>
        <div className="bg-white/10 rounded-md p-2 flex flex-col items-center">
          <CloudRain className="h-4 w-4 mb-1" />
          <span>Crop Advice</span>
        </div>
        <div className="bg-white/10 rounded-md p-2 flex flex-col items-center">
          <MapPin className="h-4 w-4 mb-1" />
          <span>Market Prices</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
