// src/components/layout/Layout.tsx
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#FFF8E1]">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-amber-500 focus:text-white focus:rounded-md"
      >
        Skip to content
      </a>
      
      <Navbar />
      
      <main 
        ref={mainRef}
        id="main-content" 
        className="flex-1 w-full flex flex-col pt-16 sm:pt-20"
        tabIndex={-1}
      >
        <div className="w-full">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
