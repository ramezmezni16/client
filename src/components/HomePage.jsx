import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from './Footer';
import Navbar from './Navbar';
import HotelsList from './HotelsList';

const HomePage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const calculateNights = () => {
    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    return 0;
  };

  const nights = calculateNights();

  return (
    <div className="home">
      <Navbar />
      <div className="search-bar">
        <div className="search-item">
          <label>Destination</label>
          <input type="text" placeholder="Search a destination" />
        </div>

        <div className="search-item">
          <label>Check In</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Add dates"
          />
        </div>

        <div className="search-item">
          <label>Check Out</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Add dates"
          />
        </div>

        <div className="search-item">
          <label>Adults</label>
          <input type="number" value={adults} onChange={(e) => setAdults(Number(e.target.value))} />
          <label>Kids</label>
          <input type="number" value={kids} onChange={(e) => setKids(Number(e.target.value))} />
        </div>

        <button className="search-button">Search</button>
      </div>

      <div className="video-section">
        <video width="600" controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hotels-recommendations">
        <HotelsList nights={nights} adults={adults} kids={kids} />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;