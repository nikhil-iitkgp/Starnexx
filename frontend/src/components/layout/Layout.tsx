// src/components/layout/Layout.tsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-screen max-w-[100vw] overflow-x-hidden bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white">
      <Navbar />
      <main className="flex-1 w-full flex flex-col overflow-x-hidden pt-20">
        <div className="w-screen max-w-[100vw] overflow-x-hidden">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
