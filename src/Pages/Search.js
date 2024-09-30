import React from "react";
function Search() {
  return (
    <>
      {/* Main  */}
      <div className="container Homebg">
        <div className="hero text-center">
          <h1>Where are you off to?</h1>
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

      {/* Checkbox */}
      <div className="container mt-2">
        <div className="row mt-4">
          <div className="col-12 col-md-4 col-lg-3">
            {/* 1 */}
            <div className="Box">Stops</div>
            <div className="card-body">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="oneStop"
                  name="stops"
                />
                <label className="form-check-label" htmlFor="oneStop">
                  1 Stop
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="twoStops"
                  name="stops"
                />
                <label className="form-check-label" htmlFor="twoStops">
                  2 Stops
                </label>
              </div>
            </div>
            <hr />
            {/* 2 */}
            <div className="Box">Booking Options</div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="bookOnFickleflight"
                name="bookingOptions"
              />
              <label className="form-check-label" htmlFor="bookOnFickleflight">
                Book On Fickleflight
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="airlineWebsites"
                name="bookingOptions"
              />
              <label className="form-check-label" htmlFor="airlineWebsites">
                Official Airline Websites
              </label>
            </div>
            <hr />

            {/* 3 */}
            <div className="Box">Flight Experience</div>
            <div className="card-body">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="noOverNightFlight"
                  name="flightExperience"
                />
                <label className="form-check-label" htmlFor="noOverNightFlight">
                  No Overnight Flight
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="noLongStopOvers"
                  name="flightExperience"
                />
                <label className="form-check-label" htmlFor="noLongStopOvers">
                  No Long Stop-Overs
                </label>
              </div>
            </div>
            <hr />
            {/* 4 */}
            <div className="Box">Airlines</div>
            <div className="card-body">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="singaporeAirlines"
                  name="airlines"
                />
                <label className="form-check-label" htmlFor="singaporeAirlines">
                  Singapore Airlines
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="qatarAirways"
                  name="airlines"
                />
                <label className="form-check-label" htmlFor="qatarAirways">
                  Qatar Airways
                </label>
              </div>
            </div>
          </div>
          {/* Flight Data */}
          <div className="col-12 col-md-8 col-lg-6">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Airline</th>
                  <th scope="col">Depart</th>
                  <th scope="col">Arrive</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Route</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <img
                      src="Turkishairlines.png"
                      className="fimages"
                      alt="Turkish Airlines"
                    />
                    Turkish
                  </th>
                  <td>11:35 PM</td>
                  <td>4:45 PM</td>
                  <td>
                    33H 10M, <br /> 1 stop
                  </td>
                  <td>SIN - LAX</td>
                  <td>
                    <span className="fprice">S$ 723 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img
                      src="singapureairlines.png"
                      className="fimages"
                      alt="Singapore Airlines"
                    />
                    Singapore
                  </th>
                  <td>8:45 PM</td>
                  <td>7:55 PM</td>
                  <td>
                    15H 10M, <br /> 2-stop
                  </td>
                  <td>SIN - LAX</td>
                  <td>
                    <span className="fprice">S$ 900</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img
                      src="Japanairlines.png"
                      className="fimages"
                      alt="Japan Airlines"
                    />
                    Japan
                  </th>
                  <td>8:20 PM</td>
                  <td>9:50 PM</td>
                  <td>
                    17H 30M, <br /> 1-stop
                  </td>
                  <td>SIN - LAX</td>
                  <td>
                    <span className="fprice">S$ 859 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src="ANA.png" className="fimages" alt="ANA" />
                    ANA
                  </th>
                  <td>6:35 PM</td>
                  <td>9:50 PM</td>
                  <td>
                    19H 15M, <br /> 1-stop
                  </td>
                  <td>SIN - LAX</td>
                  <td>
                    <span className="fprice"> S$ 936 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img
                      src="Americanairlines.png"
                      className="fimages"
                      alt="American Airlines"
                    />
                    American
                  </th>
                  <td>8:20 PM</td>
                  <td>9:50 PM</td>
                  <td>
                    17H 30M, <br /> 1-stop
                  </td>
                  <td>SIN - LAX</td>
                  <td>
                    <span className="fprice"> S$ 936 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img
                      src="Turkishairlines.png"
                      className="fimages"
                      alt="Turkish Airlines"
                    />
                    Turkish
                  </th>
                  <td>11:35 PM</td>
                  <td>4:45 PM</td>
                  <td>
                    33H 10M <br /> 1-stop
                  </td>
                  <td>SIN - LAX</td>
                  <td>
                    <span className="fprice">S$ 673 </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <img
                      src="Japanairlines.png"
                      className="fimages"
                      alt="Japan Airlines"
                    />
                    Japan
                  </th>
                  <td>10:25 PM</td>
                  <td>9:10 AM</td>
                  <td>
                    26H 45M, <br /> 1-stop
                  </td>
                  <td>SIN - LAX</td>
                  <td>
                    <span className="fprice">S$ 859 </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mt-2">
              <a
                href="https://www.adani.com/en/svpia-ahmedabad-airport/flight-status"
                target="_blank"
                className="btn Button-color mb-2"
                rel="noopener noreferrer"
              >
                Show more results
              </a>
            </div>
          </div>
          {/* Recently booked */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card mb-2">
              <div className="card-header text-dark d-flex justify-content-between">
                <span>Singapore Airlines</span>
                <span className="Price">$1,128</span>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col">SIN</div>
                  <div className="col text-end">LAX</div>
                </div>
                <div className="row mb-2">
                  <div className="col">Singapore</div>
                  <div className="col text-end">Los Angeles</div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <img
                      src="Sheet.png"
                      style={{ height: "15px", width: "15px" }}
                      alt="Seat"
                    />
                    Economy
                  </div>
                  <div className="col text-end">
                    <img
                      src="Person.png"
                      style={{ height: "15px", width: "15px" }}
                      alt="Person"
                    />
                    2 Adults
                  </div>
                </div>
                <hr />
                <div>
                  Booked on
                  <span
                    style={{
                      color: "#457EFF",
                      marginRight: "20px",
                      marginLeft: "2px",
                    }}
                  >
                    Expedia
                  </span>
                  <span style={{ color: "#FBA403" }}>1s ago </span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="card mb-2">
              <div className="card-header text-dark d-flex justify-content-between">
                <span>American Airlines</span>
                <span className="Price">$1,024</span>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col">SFO</div>
                  <div className="col text-end">SIN</div>
                </div>
                <div className="row mb-2">
                  <div className="col">San Francisco</div>
                  <div className="col text-end">Singapore</div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <img
                      src="Sheet.png"
                      style={{ height: "15px", width: "15px" }}
                      alt="Seat"
                    />
                    First Class
                  </div>
                  <div className="col text-end">
                    <img
                      src="Person.png"
                      style={{ height: "15px", width: "15px" }}
                      alt="Person"
                    />
                    1 Adult
                  </div>
                </div>
                <hr />
                <div>
                  Booked on
                  <span
                    style={{
                      color: "#457EFF",
                      marginRight: "20px",
                      marginLeft: "2px",
                    }}
                  >
                    Kayak
                  </span>
                  <span style={{ color: "#FBA403" }}>2s ago </span>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <button className="btn Popstyle-btn mb-2">
                <a
                  href="https://www.adani.com/en/svpia-ahmedabad-airport/flight-status"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show more ↓
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
