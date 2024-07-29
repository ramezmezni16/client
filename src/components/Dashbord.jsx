import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Retrieve stored bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleDelete = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  return (
    <div className="dashboard">
      <h1>Previous Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <h2>{booking.hotel.name}</h2>
              <p>Location: {booking.hotel.location}</p>
              <p>Nights: {booking.nights}</p>
              <p>Adults: {booking.adults}</p>
              <p>Kids: {booking.kids}</p>
              <p>Total Price: {booking.totalPrice} DT</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;