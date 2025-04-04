
import { Sun, Sprout, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onNavItemClick: (item: string) => void;
  activeItem: string | null;
}

const Navbar = ({ onNavItemClick, activeItem }: NavbarProps) => {
  const navItems = [
    { id: "weather", label: "Weather Updates", icon: Sun },
    { id: "crops", label: "Crop Advice", icon: Sprout },
    { id: "prices", label: "Market Prices", icon: DollarSign },
  ];

  return (
    <nav className="bg-white p-2 rounded-lg shadow-md">
      <ul className="flex flex-col sm:flex-row">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <li key={item.id} className="flex-1">
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start sm:justify-center gap-2 mb-2 sm:mb-0 ${
                  isActive ? "bg-agri-green" : "hover:bg-agri-lightGreen/20"
                }`}
                onClick={() => onNavItemClick(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
