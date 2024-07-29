import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const EditBooking = () => {
  const { hotelId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { nights: initialNights, adults: initialAdults, kids: initialKids } = location.state;
  const [formData, setFormData] = useState({
    nights: initialNights,
    adults: initialAdults,
    kids: initialKids,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: Number(value) }));
  };

  const handleSave = () => {
    console.log('Booking details updated:', formData);
    navigate(`${hotelId}/reservation/`, { state: { ...formData } });
  };

  const handleCancel = () => {
    navigate(`${hotelId}/reservation/`, { state: { nights: initialNights, adults: initialAdults, kids: initialKids } });
  };

  return (
    <div className="edit-booking">
      <h2>Edit Booking Details</h2>
      <label>
        Nights:
        <input
          type="number"
          name="nights"
          value={formData.nights}
          onChange={handleChange}
        />
      </label>
      <label>
        Adults:
        <input
          type="number"
          name="adults"
          value={formData.adults}
          onChange={handleChange}
        />
      </label>
      <label>
        Kids:
        <input
          type="number"
          name="kids"
          value={formData.kids}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditBooking;