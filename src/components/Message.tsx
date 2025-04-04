
import { cn } from "@/lib/utils";

export interface MessageProps {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Message = ({ content, isUser, timestamp }: MessageProps) => {
  const formattedTime = timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={cn(
        "flex flex-col max-w-[80%]",
        isUser ? "items-end self-end" : "items-start self-start"
      )}
    >
      <div
        className={cn(
          "chat-bubble",
          isUser 
            ? "chat-bubble-user bg-agri-green text-white" 
            : "chat-bubble-bot bg-gray-100 text-gray-800"
        )}
      >
        {content}
      </div>
      <span className="text-xs text-muted-foreground mt-1">
        {formattedTime}
      </span>
    </div>
  );
};

export default Message;
