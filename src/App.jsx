import { AppProvider, useApp, VIEWS } from './context/AppContext';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import MyBookingsPage from './pages/MyBookingsPage';
import AdminPage from './pages/AdminPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import LoginPage from "./pages/LoginPage";
import AdminLoginPage from './pages/AdminLoginPage';
import ProfilePage from './pages/ProfilePage';
import WebsiteHomePage from "./website/WebsiteHomePage";
import WebsiteBookingPage from "./website/WebsiteBookingPage";

function AppRouter() {
  const { view } = useApp();

  const hideNav =
    view === VIEWS.CONFIRMATION ||
    view === VIEWS.LOGIN;

  const pages = {
    [VIEWS.LOGIN]: <LoginPage />,
    [VIEWS.HOME]: <HomePage />,
    [VIEWS.SERVICES]: <ServicesPage />,
    [VIEWS.PROFILE]: <ProfilePage />,
    [VIEWS.SERVICE_DETAILS]: <ServiceDetailsPage />,
    [VIEWS.BOOKING]: <BookingPage />,
    [VIEWS.CONFIRMATION]: <ConfirmationPage />,
    [VIEWS.MY_BOOKINGS]: <MyBookingsPage />,
    [VIEWS.ADMIN_LOGIN]: <AdminLoginPage />,
    [VIEWS.ADMIN]: <AdminPage />,
    [VIEWS.WEBSITE_BOOKING]: <WebsiteBookingPage />,
  };

  const isDesktop = window.innerWidth > 768;

  if (isDesktop) {

    if (view === VIEWS.HOME) {
      return <WebsiteHomePage />;
    }
  
    if (view === VIEWS.WEBSITE_BOOKING) {
      return <WebsiteBookingPage />;
    }
  }

  return (
    <>
      <main className={`app-viewport ${hideNav ? 'app-viewport--no-nav' : ''}`}>
        {pages[view] ?? <HomePage />}
      </main>

      <BottomNav />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}