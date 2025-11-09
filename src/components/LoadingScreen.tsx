import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
      isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full animate-pulse"></div>
        
        {/* Main loading circle */}
        <div className="relative w-24 h-24 rounded-full border-4 border-border">
          <div className="absolute inset-0 rounded-full border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
}
