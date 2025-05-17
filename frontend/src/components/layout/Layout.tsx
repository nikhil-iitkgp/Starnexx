// src/components/layout/Layout.tsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#FFF8E1]">
      <Navbar />
      <main className="flex-1 w-full flex flex-col overflow-x-hidden pt-20">
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
