import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Villas from "./pages/Villas";
import RespTour from "./pages/RespTour";
import Story from "./pages/Story";
import Booking from "./pages/Booking";
import People from "./pages/People";
import LocalEthos from "./pages/LocalEthos";
import Cuisine from "./pages/Cuisine";
import Heritage from "./pages/Heritage";
import Community from "./pages/Community";
import ArtCulture from "./pages/ArtCulture";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villas" element={<Villas />} />

          {/* Tourism */}
          <Route path="/resptour" element={<RespTour />} />
          <Route path="/people" element={<People />} />
          <Route path="/local-ethos" element={<LocalEthos />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/art-culture" element={<ArtCulture />} />

          {/* Other Pages */}
          <Route path="/our-story" element={<Story />} />
          <Route path="/booking" element={<Booking />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
