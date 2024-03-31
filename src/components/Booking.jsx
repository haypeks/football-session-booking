import React, { useState } from "react";
import football from "../assets/footballicon.png";

const Booking = () => {
  // Define available dates for April 2024
  const availableDates = [2, 5, 9, 12, 16, 19, 23, 26, 30];

  const [selectedDay, setSelectedDay] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [showNoBookingModal, setShowNoBookingModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Generate the calendar days for April 2024
  const generateCalendarDays = () => {
    const daysInMonth = 30; // April 2024 has 30 days
    const calendarDays = [];

    // Loop through each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(2024, 3, day); // April is month 3 (0-based index)

      // Check if the current day is available
      const isAvailable = availableDates.includes(day);

      // Add the calendar day to the list
      calendarDays.push(
        <div
          key={day}
          className={`border-2 border-solid p-2 md:py-4 md:px-8 flex justify-center items-center relative text-accent ${
            isAvailable ? "bg-primary" : "bg-rose-400"
          }`}
          onClick={() => handleDayClick(isAvailable)}
        >
          <span className="font-bold">{day}</span>
          <div className="footballIcon">
            {isAvailable && (
              <img
                src={football}
                alt="Football"
                className="w-3 md:w-6 absolute top-0 right-0"
              />
            )}
          </div>
        </div>
      );
    }

    return calendarDays;
  };

  // Function to handle day click
  const handleDayClick = (isAvailable, day) => {
    // Close both modals
    setShowModal(false);
    setShowNoBookingModal(false);

    // If the day is available, handle booking logic
    // Add your booking logic here
    if (isAvailable) {
      console.log("Booking logic...");
      setSelectedDay(day);
      setShowModal(true);
      const date = new Date(2024, 3, day); // April is month 3 (0-based index)
      setDayOfWeek(date.toLocaleDateString("en-US", { weekday: "long" }));
    } else {
      setShowNoBookingModal(true);
    }
  };

  // Function to handle booking confirmation
  const handleBook = () => {
    // Add your booking logic here
    console.log(
      `Booking confirmed for ${dayOfWeek}, April ${selectedDay}, 2024, at 8:00 PM.`
    );
    // Close the modal
    setShowModal(false);
    setShowConfirmationModal(true);
  };

  return (
    <div className="flex flex-col justify-center items-center py-16 px-8 md:px-16 bg-gray-200 text-center">
      <h1 className="text-4xl font-extrabold underline text-accent pb-8 md:text-5xl">
        BOOKING SESSION
      </h1>
      <h2 className="text-2xl font-extrabold pb-4 text-accent"> April 2024</h2>
      <div className="grid gap-2 grid-seven text-accent">
        <div className="day-label font-extrabold">M</div>
        <div className="day-label font-extrabold">T</div>
        <div className="day-label font-extrabold">W</div>
        <div className="day-label font-extrabold">T</div>
        <div className="day-label font-extrabold">F</div>
        <div className="day-label font-extrabold">S</div>
        <div className="day-label font-extrabold">S</div>
        {generateCalendarDays()}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="bg-white p-4 rounded-lg mt-8">
          <div className="modal-content">
            <span
              className="close bg-rose-700 p-1 rounded text-white"
              onClick={() => setShowModal(false)}
            >
              Close
            </span>
            <h2 className="pt-4 font-bold">{`Book ${dayOfWeek}, April ${selectedDay}, 2024 at 9:00 PM`}</h2>
            <button
              onClick={handleBook}
              className="bg-primary mt-3 text-white py-2 px-4 rounded-md font-bold  "
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
      {/* */}
      {showNoBookingModal && (
        <div className="bg-white p-4 rounded-lg mt-8">
          <div className="modal-content">
            <span
              className="close bg-rose-700 p-1 rounded text-white"
              onClick={() => setShowNoBookingModal(false)}
            >
              Close
            </span>
            <h2 className="pt-4 font-bold">
              No Bookings Available on this Day
            </h2>
          </div>
        </div>
      )}
      {/* Confirmation modal */}
      {showConfirmationModal && (
        <div className="bg-white p-4 rounded-lg mt-8">
          <div className="modal-content">
            <span
              className="close bg-rose-700 p-1 rounded text-white"
              onClick={() => setShowConfirmationModal(false)}
            >
              Close
            </span>
            <h2 className="pt-4 font-bold">
              Booking Confirmed✅ for {dayOfWeek}, April {selectedDay}, 2024, at
              8:00 PM
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
