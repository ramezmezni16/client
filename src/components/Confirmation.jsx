import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { hotel, nights, adults, kids } = location.state;

  const calculateTotalPrice = () => {
    return nights * (300 + adults * 24 + kids * 15);
  };

  return (
    <div className="confirmation">
      <h1>Paid Successfully</h1>
      <p>Thank you for using our website</p>
      <div className="hotel-details">
        <h2>Booking Details for {hotel.name}</h2>
        <p>Location: {hotel.location}</p>
        <p>Nights: {nights}</p>
        <p>Adults: {adults}</p>
        <p>Kids: {kids}</p>
        <p>Total Price: {calculateTotalPrice()} DT</p>
      </div>
    </div>
  );
};

export default Confirmation;