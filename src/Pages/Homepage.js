import React from "react";
import Footer from "../Components/Footer";
import Updates from "../Components/Updates";

function Homepage() {
  return (
    <>
      <div className="container-fluid Homebg">
        <div className="hero text-center">
          <h1>Let's explore &amp; travel the world</h1>
          <p>Find the best destinations and the most popular stays!</p>
        </div>
        {/* Search Box */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 mb-5">
            <div className="search-box">
              <form>
                <div className="form d-flex flex-wrap align-items-center justify-content-center w-100 text-center m-2">
                  <div className="d-flex flex-column flex-md-row align-items-center mb-2">
                    <label htmlFor="departure" className="me-md-2 mb-2 mb-md-0">
                      Departure
                    </label>
                    <input
                      type="text"
                      className="form-control me-md-3 mb-2 mb-md-0"
                      placeholder="Singapore (SIN)"
                    />
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center mb-2">
                    <label htmlFor="arrival" className="me-md-2 mb-2 mb-md-0">
                      Arrival
                    </label>
                    <input
                      type="text"
                      className="form-control me-md-3 mb-2 mb-md-0"
                      id="arrival"
                      placeholder="Los Angeles (LA)"
                    />
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center mb-2">
                    <label htmlFor="date" className="me-md-2 mb-2 mb-md-0">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control me-md-3 mb-2 mb-md-0"
                      id="date"
                    />
                  </div>
                  <button type="submit" className="btn S-BTN">
                    SEARCH
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Searches */}
      <div className="container mt-5">
        <h5>RECENT SEARCHES</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <p className="card-title Recent">
                  <span style={{ color: "#1262af" }}>SIN To LAX</span>
                </p>
                <p className="card-text">
                  <b>Depart On:</b> 7 Sep 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <p className="card-title Recent">
                  <span style={{ color: "#1262af" }}>MY To DUB</span>
                </p>
                <p className="card-text">
                  <b> Depart On: </b> 9 Sep 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prepare Your Trip */}
      <div className="container my-4">
        <h5 className="text-muted">PREPARE FOR YOUR TRIP</h5>
        <div className="row mt-4 justify-content-center">
          {["Hotel", "Attract", "Eat", "Commute", "Taxi", "Movies"].map(
            (item, index) => (
              <div
                className="col-6 col-md-4 col-lg-2 text-center mb-3"
                key={index}
              >
                <img className="icon-img" src={`${item}.png`} alt={item} />
                <p style={{ color: "#8E8E94" }}>{item}</p>
              </div>
            )
          )}
        </div>

        {/* Most Popular Destinations */}
        <div className="mt-5">
          <p className="Trip">PLAN YOUR NEXT TRIP</p>
          <div className="d-flex justify-content-between align-items-center">
            <h3>Most Popular Destinations</h3>
            <a
              href="https://www.makemytrip.com/tripideas/places"
              target="_blank"
              className="btn Trip-Link"
            >
              View all destinations →
            </a>
          </div>
          <div className="row mt-4">
            {[
              { src: "Paris.jpg", title: "Paris", price: "$699" },
              { src: "greece.jpg", title: "Greece", price: "$1079" },
              { src: "norway.jpg", title: "Norway", price: "$895" },
              { src: "tuscany.jpg", title: "Tuscany", price: "$1245" },
            ].map((destination, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card destination">
                  <img
                    src={destination.src}
                    className="card-img-top"
                    alt={destination.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{destination.title}</h5>
                    <p className="card-text">
                      From <span className="Price">{destination.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Holidays */}
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Recommended Holidays</h3>
            <a
              href="https://www.lastminute.com/holidays/top-10.html"
              target="_blank"
              className="btn Trip-Link"
            >
              View all holidays →
            </a>
          </div>
          <div className="row mt-4">
            {[
              {
                src: "bali.jpg",
                title: "Bali",
                price: "$899",
                duration: "4D3N",
              },
              {
                src: "swiss.jpg",
                title: "Swiss",
                price: "$900",
                duration: "6D5N",
              },
              {
                src: "boracay.jpg",
                title: "Boracay",
                price: "$699",
                duration: "5D4N",
              },
              {
                src: "palawan.jpg",
                title: "Palawan",
                price: "$789",
                duration: "4D3N",
              },
            ].map((holiday, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card holiday">
                  <img
                    src={holiday.src}
                    className="card-img-top"
                    alt={holiday.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{holiday.title}</h5>
                    <p className="card-text">
                      <span className="Price">{holiday.price}</span> (
                      {holiday.duration})
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Stays */}
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Popular Stays</h3>
            <a
              href="https://edition.cnn.com/travel/article/world-most-iconic-hotels/index.html"
              target="_blank"
              className="btn Trip-Link"
            >
              View all stays →
            </a>
          </div>
          <div className="row mt-4">
            {[
              {
                src: "Matterhorn Suites.jpg",
                title: "Matterhorn Suites",
                type: "Entire bungalow",
                price: "$575/night",
                rating: 4.9,
                reviews: 60,
              },
              {
                src: "Discovery Shores.jpg",
                title: "Discovery Shores",
                type: "2-Story beachfront suite",
                price: "$360/night",
                rating: 4.8,
                reviews: 116,
              },
              {
                src: "Arctic Hut.jpg",
                title: "Arctic Hut",
                type: "Single deluxe hut",
                price: "$420/night",
                rating: 4.7,
                reviews: 78,
              },
              {
                src: "LakeLouiseInn.jpg",
                title: "Lake Louise Inn",
                type: "Deluxe King Room",
                price: "$244/night",
                rating: 4.6,
                reviews: 63,
              },
            ].map((stay, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card">
                  <img
                    src={stay.src}
                    className="card-img-top"
                    alt={stay.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{stay.title}</h5>
                    <p className="card-text">{stay.type}</p>
                    <p className="card-text">
                      <strong>{stay.price}</strong>
                    </p>
                    <p className="card-text">
                      <span className="text-warning">★</span> {stay.rating}{" "}
                      <span className="Price">({stay.reviews} reviews)</span>
                    </p>
                    <a href="#" target="_blank" className="btn Popstyle-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Homepage;
