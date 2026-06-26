import { createContext, useContext, useState, useCallback } from 'react';
import {
  getBookings,
  createBooking,
  updateBooking,
  cancelBooking,
  getCustomers,
  getAnalytics,
} from '../data/storage';
import { getServiceById } from '../data/services';

export const VIEWS = {
  LOGIN: "login",
  HOME: 'home',
  SERVICES: 'services',
  PROFILE: "profile",
  SERVICE_DETAILS: 'service-details',
  BOOKING: 'booking',
  CONFIRMATION: 'confirmation',
  MY_BOOKINGS: 'bookings',
  ADMIN_LOGIN: 'admin-login',
  ADMIN: 'admin',
  WEBSITE_BOOKING: "website_booking",
};

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const customer = localStorage.getItem("customerMobile");

  const [view, setView] = useState(
    customer ? VIEWS.HOME : VIEWS.LOGIN
  );
  const [selectedService, setSelectedService] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [bookings, setBookings] = useState(getBookings());

  const refresh = useCallback(() => setBookings(getBookings()), []);

  const navigate = useCallback((v) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openServiceDetails = useCallback(
    (service) => {
      setSelectedService(service);
      navigate(VIEWS.SERVICE_DETAILS);
    },
    [navigate]
  );

  const startBooking = useCallback(
    (service) => {
      setSelectedService(service);
      navigate(VIEWS.BOOKING);
    },
    [navigate]
  );

  const submitBooking = useCallback(
    (data) => {
      const booking = createBooking(data);
      setConfirmedBooking(booking);
      refresh();
      navigate(VIEWS.CONFIRMATION);
    },
    [navigate, refresh]
  );

  const cancel = useCallback(
    (id) => {
      cancelBooking(id);
      refresh();
    },
    [refresh]
  );

  const adminUpdate = useCallback(
    (id, updates) => {
      updateBooking(id, updates);
      refresh();
    },
    [refresh]
  );

  const rebook = useCallback(
    (b) => {
      const s = getServiceById(b.serviceId);
      if (s) setSelectedService(s);
      navigate(VIEWS.BOOKING);
    },
    [navigate]
  );

  return (
    <AppContext.Provider
      value={{
        view,
        navigate,
        selectedService,
        setSelectedService,
        startBooking,
        openServiceDetails,
        confirmedBooking,
        bookings,
        submitBooking,
        cancel,
        adminUpdate,
        rebook,
        refresh,
        customers: getCustomers(),
        analytics: getAnalytics(),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp requires AppProvider');
  return ctx;
}
