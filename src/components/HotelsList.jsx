import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HotelsList = ({ nights, adults, kids }) => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = () => {
    fetch('http://localhost:8000/api/hotels')
      .then(response => response.json())
      .then(data => setHotels(data))
      .catch(error => console.error('Error fetching hotels:', error));
  };

  const handleCheckPrice = (hotelId) => {
    navigate(`${hotelId}/reservation`, { state: { nights, adults, kids } });
  };

  return (
    <div className="hotels-list">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
          <h2>{hotel.name}</h2>
          <p>Rating: {hotel.rating}</p>
          <p>Location: {hotel.location}</p>
          <button onClick={() => handleCheckPrice(hotel.id)}>Check Price</button>
        </div>
      ))}
    </div>
  );
};

export default HotelsList;