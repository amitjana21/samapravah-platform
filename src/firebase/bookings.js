import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: new Date(),
      status: "Pending"
    });

    console.log("Booking saved:", docRef.id);

    return {
      success: true,
      id: docRef.id
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error
    };
  }
};