import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getBookings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "bookings"));

    const bookings = [];

    querySnapshot.forEach((doc) => {
      bookings.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return bookings;
  } catch (error) {
    console.error(error);
    return [];
  }
};