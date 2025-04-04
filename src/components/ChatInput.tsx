
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mic, Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2 p-4 border-t">
      <Button 
        variant="outline" 
        size="icon"
        type="button"
        className="flex-shrink-0 bg-white"
        disabled={isLoading}
      >
        <Mic className="h-5 w-5 text-agri-green" />
        <span className="sr-only">Voice input</span>
      </Button>
      
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask AgriBot a question..."
        className="flex-1"
        disabled={isLoading}
      />
      
      <Button 
        onClick={handleSend}
        disabled={!message.trim() || isLoading}
        size="icon"
        className="flex-shrink-0 bg-agri-green hover:bg-agri-green/90"
      >
        <Send className="h-5 w-5" />
        <span className="sr-only">Send message</span>
      </Button>
    </div>
  );
};

export default ChatInput;
