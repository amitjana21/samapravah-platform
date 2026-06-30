import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveBooking = async (bookingData) => {
  console.log("DB INSTANCE:", db);

  try {
    console.log("Attempting write...");

    const docRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: new Date(),
      status: "Pending",
    });

    console.log("SUCCESS");
    console.log(docRef.id);

    return {
      success: true,
      id: docRef.id,
    };

  } catch (err) {

    console.log("ERROR OBJECT");
    console.log(err);

    console.log("ERROR CODE");
    console.log(err.code);

    console.log("ERROR MESSAGE");
    console.log(err.message);

    return {
      success: false,
      error: err,
    };
  }
};