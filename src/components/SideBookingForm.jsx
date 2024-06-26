import { cn } from "@/lib/utils";
import { BookingFormContext } from "@/providers/BookingFormProvider";
import React, { useContext } from "react";
import { XMarkIcon } from "./Icons";
import BookingForm from "./BookingForm";

const SideBookingForm = () => {
  const { isFormOpen, setIsFromOpen } = useContext(BookingFormContext);

  return (
    <div
      className={cn(
        "fixed right-0 top-0 z-50 h-screen w-screen bg-white shadow-2xl transition-all duration-[1000ms] ease-in-out lg:w-[40vw]",
        isFormOpen ? "right-0" : "-right-full",
      )}
    >
      <XMarkIcon
        onClick={() => setIsFromOpen(false)}
        className="absolute left-4 top-4 size-6 cursor-pointer lg:left-auto lg:right-5 lg:top-5"
      />
      <div className="mt-12 flex w-full flex-col items-center px-5 lg:px-12">
        <h1 className="font-bodoniModa text-xl font-medium uppercase lg:text-3xl lg:font-normal">
          EXPRESS YOUR INTEREST
        </h1>
        <BookingForm isSideForm={true} />
      </div>
    </div>
  );
};

export default SideBookingForm;
