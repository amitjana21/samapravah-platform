import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const getBookingsByMobile = async (mobile) => {
  try {
    const q = query(
      collection(db, "bookings"),
      where("mobile", "==", mobile)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};