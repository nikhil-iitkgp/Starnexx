import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import logo from "../../assets/Logo.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Our Work", to: "/our-work" },
  { name: "Our Clients", to: "/our-clients" },
  { name: "About Us", to: "/about" },
  { name: "Contact Us", to: "/contact" },
];

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <button
    aria-label={open ? "Close menu" : "Open menu"}
    className="relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none bg-white/80 rounded-full border border-amber-100 shadow hover:shadow-md transition-all duration-200"
    tabIndex={0}
    type="button"
    style={{ zIndex: 100 }}
  >
    <span
      className={`block absolute h-1 w-7 rounded-full bg-amber-500 transition-all duration-300 ${open ? "rotate-45 top-5" : "-translate-y-2"}`}
      style={{ left: 6, right: 6 }}
    ></span>
    <span
      className={`block absolute h-1 w-7 rounded-full bg-amber-500 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
      style={{ left: 6, right: 6 }}
    ></span>
    <span
      className={`block absolute h-1 w-7 rounded-full bg-amber-500 transition-all duration-300 ${open ? "-rotate-45 top-5" : "translate-y-2"}`}
      style={{ left: 6, right: 6 }}
    ></span>
  </button>
);

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow ${
        scrolled
          ? "bg-gradient-to-r from-[#FFF8E1]/90 via-[#FFFAF0]/95 to-white/95 backdrop-blur-sm shadow-md"
          : "bg-gradient-to-r from-[#FFF8E1] via-[#FFFAF0] to-white border-b border-amber-100 shadow"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <motion.img
            src={logo}
            alt="Starnexx Logo"
            className="h-10 w-auto sm:h-12 md:h-14 max-w-[180px] object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                onClick={() => window.scrollTo(0, 0)}
                className={`relative transition font-semibold text-base after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  pathname === link.to
                    ? "text-yellow-600 after:w-full nav-link-custom nav-link-active"
                    : "text-amber-700 hover:text-amber-500 after:w-0 hover:after:w-full nav-link-custom"
                } !no-underline`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <span>
                <HamburgerIcon open={open} />
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-br from-amber-50 via-[#FFFAF0] to-white p-8 rounded-l-3xl shadow-2xl border-l-2 border-amber-100 min-w-[260px] max-w-xs flex flex-col gap-2">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center gap-2" onClick={() => {setOpen(false); window.scrollTo(0, 0);}}>
                  <img src={logo} alt="Starnexx Logo" className="h-10 w-auto sm:h-12 md:h-14 max-w-[180px] object-contain" />
                </Link>
                <span onClick={() => setOpen(false)} className="flex items-center justify-center w-10 h-10">
                  <HamburgerIcon open={true} />
                </span>
              </div>
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => {setOpen(false); window.scrollTo(0, 0);}}
                    className={`relative text-lg font-semibold transition after:absolute after:bottom-[-6px] after:left-0 after:rounded-full after:transition-all after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus:ring-0 focus:border-0 px-2 py-1 !text-amber-600 hover:!text-amber-700 ${
                      pathname === link.to
                        ? "after:w-full after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-amber-600"
                        : "after:w-0 hover:after:w-full after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-amber-600"
                    } !no-underline`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}