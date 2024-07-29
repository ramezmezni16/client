import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'




const AboutUs = () => {

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div>
                <h1>About Us</h1>
                <p>Reservation is a groundbreaking hotel reservation platform designed to transform the way travelers </p>
                <p>plan their stays. Combining cutting-edge technology with an intuitive interface, Reservation offers a </p>
                <p>seamless booking experience tailored to diverse traveler needs. Its powerful search engine sifts </p>
                <p>through thousands of hotel listings, allowing users to filter results based on location, price range, </p>
                <p>amenities, and guest ratings. Whether seeking a budget-friendly hostel or a luxurious resort, </p>
                <p>Reservation ensures there is something for everyone.</p>
                <p>Utilizing artificial intelligence and machine learning, Reservation provides personalized </p>
                <p>recommendations by analyzing user behavior and preferences. This saves time and enhances </p>
                <p>satisfaction by presenting the most relevant options upfront. An interactive map feature helps users </p>
                <p>view hotel locations in relation to key landmarks and public transportation, making it easier to </p>
                <p>choose the ideal accommodation.</p>
                <p>Transparency and trust are prioritized with detailed hotel descriptions, high-quality photos, and </p>
                <p>authentic guest reviews. A secure payment gateway ensures all transactions are protected. The </p>
                <p>platform also offers 24/7 customer support, flexible booking options, and assistance with any travel-related</p>
                <p>issues, providing peace of mind for users.</p>
                <p>Reservation extends beyond hotel bookings, offering additional services like airport transfers, car </p>
                <p>rentals, and activity bookings, allowing users to plan their entire trip from one convenient location. </p>
                <p>This comprehensive approach makes Reservation more than just a booking site; it is a complete </p>
                <p>travel companion designed to meet the needs of modern travelers. Combining advanced </p>
                <p>technology, personalized service, and a user-friendly design, Reservation stands out as a premier </p>
                <p>choice for booking accommodations with ease and confidence.</p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;