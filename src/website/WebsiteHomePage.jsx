import ErrorBoundary from "../components/ErrorBoundary";
import { useApp, VIEWS } from "../context/AppContext";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import HowItWorks from "./components/HowItWorks";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceAreas from "./components/ServiceAreas";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import WebsiteStyles from "./components/WebsiteStyles";
import WhyChooseUs from "./components/WhyChooseUs";

export default function WebsiteHomePage() {
  const { navigate } = useApp();

  return (
    <ErrorBoundary>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#f8fafc",
          minHeight: "100vh",
          scrollBehavior: "smooth",
        }}
      >
        <WebsiteStyles />
        <Navbar />
        <Hero
          onBookService={() => navigate(VIEWS.BOOKING)}
          onTrackBooking={() => navigate(VIEWS.MY_BOOKINGS)}
        />
        <ServicesSection onBookService={() => navigate(VIEWS.BOOKING)} />
        <AboutSection />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <ServiceAreas />
        <Footer />
        <FloatingActions />
      </div>
    </ErrorBoundary>
  );
}
