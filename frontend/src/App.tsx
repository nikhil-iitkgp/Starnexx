// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import OurWork from "@/pages/OurWork";
import OurClients from "@/pages/OurClients";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Booking from "@/pages/Booking";
import Layout from "@/components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Layout>
  );
}
