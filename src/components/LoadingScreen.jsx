import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete, onError }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello />";

  useEffect(() => {
    console.log('LoadingScreen mounted');
    
    try {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;

        if (index > fullText.length) {
          clearInterval(interval);

          setTimeout(() => {
            console.log('LoadingScreen completing');
            onComplete();
          }, 1000);
        }
      }, 100);

      return () => {
        console.log('LoadingScreen cleanup');
        clearInterval(interval);
      };
    } catch (error) {
      console.error('LoadingScreen error:', error);
      if (onError) {
        onError(error);
      } else {
        // Fallback if no error handler
        setTimeout(onComplete, 100);
      }
    }
  }, [onComplete, onError]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
      
      {/* Debug info */}
      <div className="mt-4 text-xs text-gray-500">
        Loading... ({text.length}/{fullText.length})
      </div>
    </div>
  );
};