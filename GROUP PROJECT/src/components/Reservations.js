import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Reservation.css'; // Create your CSS file for styling

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState(getAvailableTimeSlots());

  // Dummy function to get available time slots for the selected date
  function getAvailableTimeSlots() {
    // Replace this with your logic to fetch available time slots for the selected date
    // Example: Fetch from a backend server or calculate based on existing reservations
    const defaultTimeSlots = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM'];
    return defaultTimeSlots;
  }

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Update available time slots based on the selected date
    setAvailableTimeSlots(getAvailableTimeSlots(date));
    setSelectedTimeSlot(null);
  };

  // Handle time slot selection
  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  // Dummy function to handle reservation submission
  const handleReservationSubmit = () => {
    // Replace this with your logic to submit the reservation
    // Example: Send a request to your server to save the reservation details
    console.log(`Reservation details - Date: ${selectedDate.toDateString()}, Time: ${selectedTimeSlot}`);
    alert('Reservation submitted successfully!');
  };

  return (
    <div className="reservation-container">
      <h1>Reservation System</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <h2>Select a Time Slot</h2>
      <div className="time-slots-container">
        
        {availableTimeSlots.map((timeSlot) => (
          <button
            key={timeSlot}
            className={` time-slot-button ${selectedTimeSlot === timeSlot ? 'selected-time-slot' : 'unselected-time-slot'}`}
            onClick={() => handleTimeSlotSelection(timeSlot)}
            disabled={selectedTimeSlot !== null}
          >
            {timeSlot}
          </button>
        ))}
      </div>
      <button className='button-reserve-button' onClick={handleReservationSubmit} disabled={!selectedTimeSlot}>
        Reserve Now
      </button>
    </div>
  );
};

export default Reservation;
