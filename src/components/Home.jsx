import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
          <label>Who</label>
          <input type="text" placeholder="Add guests" />
        </div>
        
        <button className="search-button">Search</button>
      </div>
      
      <div className="video-section">
        <video width="600" controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default Home;