import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const updateBooking = async (id, updates) => {
  try {
    const bookingRef = doc(db, "bookings", id);

    await updateDoc(bookingRef, updates);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};