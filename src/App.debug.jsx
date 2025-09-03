import { useState, useTransition } from "react";
import"./App.css";
import { LoadingScreen  } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  // Quick fix: Start with loaded=true for debugging
  const [isLoaded, setIsLoaded] = useState(true); // Changed from false to true
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  // Debug logs
  console.log('App component rendered, isLoaded:', isLoaded);
  console.log('Current pathname:', window.location.pathname);

  const handleLoadingComplete = () => {
    console.log('Loading completed');
    setIsLoaded(true);
  };

  const handleLoadingError = (error) => {
    console.error('Loading error:', error);
    setLoadingError(error);
    setIsLoaded(true); // Show app even if loading fails
  };

  return (
    <>
      {/* Temporarily disable loading screen for debugging */}
      {false && !isLoaded && (
        <LoadingScreen 
          onComplete={handleLoadingComplete}
          onError={handleLoadingError}
        />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {loadingError && (
          <div className="fixed top-0 left-0 right-0 bg-red-900 text-white p-2 text-center z-50">
            Loading Warning: {loadingError.message}
          </div>
        )}
        
        {/* Debug info */}
        <div className="fixed bottom-4 right-4 bg-gray-800 text-xs p-2 rounded z-50">
          URL: {window.location.pathname}<br/>
          Loaded: {isLoaded ? 'Yes' : 'No'}<br/>
          Time: {new Date().toLocaleTimeString()}
        </div>
        
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
