import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { hotelId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { nights, adults, kids } = location.state;
  const [hotel, setHotel] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Mr',
    phone: '',
    email: '',
  });

  useEffect(() => {
    fetchHotelDetails();
  }, [hotelId]);

  const fetchHotelDetails = () => {
    fetch(`http://localhost:8000/api/hotels/${hotelId}`)
      .then(response => response.json())
      .then(data => setHotel(data))
      .catch(error => console.error('Error fetching hotel details:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const calculateTotalPrice = () => {
    return (
      nights * (300 + adults * 24 + kids * 15)
    );
  };

  const handleConfirm = () => {
    const booking = {
      hotel,
      nights,
      adults,
      kids,
      totalPrice: calculateTotalPrice(),
      formData,
    };
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    storedBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(storedBookings));

    navigate('/confirmation', { state: { hotel, nights, adults, kids } });
  };

  const handleEdit = () => {
    navigate(`/editBooking/${hotelId}`, { state: { nights, adults, kids } });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    hotel ? (
      <div className="booking-container">
        <div className="user-details">
          <h2>Enter Your Details</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="booking-details">
          <h2>Booking Details for {hotel.name}</h2>
          <p>Location: {hotel.location}</p>
          <p>Nights: {nights}</p>
          <p>Adults: {adults}</p>
          <p>Kids: {kids}</p>
          <p>Total Price: {calculateTotalPrice()} DT</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default BookingForm;