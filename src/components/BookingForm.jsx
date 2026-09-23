import { useState } from "react";

function BookingForm({ activeTab, setActiveTab }) {

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [tripType, setTripType] = useState("oneway");

  const handleSearch = (event) => {

    event.preventDefault();

    if (!pickup || !destination || !date) {
      alert("Please complete all booking details.");
      return;
    }

    alert(
      `Trip Type: ${tripType}\nPickup: ${pickup}\nDestination: ${destination}\nDate: ${date}`
    );

  };

  return (

    <div className="booking-container" id="booking">

      {/* Booking Tabs */}

      <div className="booking-tabs">

        <button
          type="button"
          className={activeTab === "car" ? "active" : ""}
          onClick={() => setActiveTab("car")}
        >
          Car Rental
        </button>

        <button
          type="button"
          className={activeTab === "airport" ? "active" : ""}
          onClick={() => setActiveTab("airport")}
        >
          Airport Rental
        </button>

      </div>

      {/* Booking Form */}

      <form className="booking-form" onSubmit={handleSearch}>

        <div className="booking-fields">

          <div className="form-group">

            <label htmlFor="pickup">
              Pickup Location
            </label>

            <input
              id="pickup"
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(event) => setPickup(event.target.value)}
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="destination">
              Drop-off Location
            </label>

            <input
              id="destination"
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="travel-date">
              Pickup Date
            </label>

            <input
              id="travel-date"
              type="date"
              value={date}
              min={new Date().toLocaleDateString("en-CA")}
              onChange={(event) => setDate(event.target.value)}
              required
            />

          </div>

        </div>

        {/* Trip Type */}

        <div className="booking-bottom">

          <div className="trip-options">

            <label>
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={(event) => setTripType(event.target.value)}
              />

              One Way
            </label>

            <label>
              <input
                type="radio"
                name="tripType"
                value="round"
                checked={tripType === "round"}
                onChange={(event) => setTripType(event.target.value)}
              />

              Round Trip
            </label>

            <label>
              <input
                type="radio"
                name="tripType"
                value="hourly"
                checked={tripType === "hourly"}
                onChange={(event) => setTripType(event.target.value)}
              />

              Hourly
            </label>

          </div>

          <button
            type="submit"
            className="search-button"
          >
            Continue
            <span>→</span>
          </button>

        </div>

      </form>

    </div>

  );
}

export default BookingForm;