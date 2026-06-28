import { useApp, VIEWS } from "../context/AppContext";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceAreas from "./components/ServiceAreas";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function WebsiteHomePage() {
  const { navigate } = useApp();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />
      <Hero
        onBookService={() => navigate(VIEWS.BOOKING)}
        onTrackBooking={() => navigate(VIEWS.MY_BOOKINGS)}
      />
      <ServicesSection onBookService={() => navigate(VIEWS.BOOKING)} />
      <WhyChooseUs />
      <ServiceAreas />
      <Footer />
    </div>
  );
}
