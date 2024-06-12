import { createContext, useState } from "react";

export const BookingFormContext = createContext(null);

export function BookingFormProvider({ children }) {
  const [isFormOpen, setIsFromOpen] = useState(false);

  return (
    <BookingFormContext.Provider value={{ isFormOpen, setIsFromOpen }}>
      {children}
    </BookingFormContext.Provider>
  );
}
