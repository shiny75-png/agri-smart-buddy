
import { useRef, useEffect } from "react";
import Message, { MessageProps } from "./Message";
import { Leaf } from "lucide-react";

interface ChatMessagesProps {
  messages: MessageProps[];
  isTyping: boolean;
}

const ChatMessages = ({ messages, isTyping }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <div className="bg-agri-lightGreen/20 p-6 rounded-full mb-4">
            <Leaf className="h-12 w-12 text-agri-green" />
          </div>
          <h3 className="text-xl font-medium text-agri-green mb-2">Welcome to AgriBot!</h3>
          <p className="text-gray-600 max-w-md">
            I'm your smart farming assistant. Ask me about weather updates, crop prices, 
            disease identification, or farming tips.
          </p>
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
