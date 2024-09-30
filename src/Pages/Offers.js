import React from "react";

function Offers() {
  return (
    <>
      <div className="container mt-2 mb-2">
        {/* Row for section titles */}
        <div className="row mb-2">
          <div className="col-12">
            <div className="card-header Homebg text-white">
              Hotels, Homestays, Hourly Stays &amp; Hostels!
            </div>
          </div>
        </div>

        {/* First Page */}
        <div className="row mb-4">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offerimage.png"
                className="card-img-top"
                alt="Hotel Image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For bank users:</span>
              <h4>Up to 50% OFF*</h4>
              <p>
                Use Code: <strong>GOONECARDEMI</strong>
              </p>
              <p>Pay via One Card Emi</p>
              <img
                src="Onecard.png"
                alt="One Card Logo"
                style={{ width: 100 }}
              />
              <p>Valid from 18th July.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to 45% OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>

        {/* Second Page */}
        <div className="row mb-4">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offerimage2.png"
                className="card-img-top"
                alt="Hotel Image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For bank users:</span>
              <h4>Up to 35% OFF*</h4>
              <p>
                Use Code: <strong>GOONECARDEMI</strong>
              </p>
              <p>Pay via One Card Emi</p>
              <img
                src="Onecard.png"
                alt="One Card Logo"
                style={{ width: 100 }}
              />
              <p>Valid from 18th July.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to 30% OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>

        {/* Third Page */}
        <div className="row mb-4">
          <div className="col-12 mb-2">
            <div className="card-header Homebg text-white">
              Domestic Flights
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offerimage3.png"
                className="card-img-top"
                alt="Domestic Flight"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For bank users:</span>
              <h4>Up to 20% OFF*</h4>
              <p>
                Use Code: <strong>GOYES</strong>
              </p>
              <p>Pay via One Card Emi</p>
              <img
                src="yesbank.png"
                alt="One Card Logo"
                style={{ width: 100 }}
              />
              <p>Valid from 18th July.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to 15% OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>

        {/* Fourth Page */}
        <div className="row mb-4">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offerimage4.png"
                className="card-img-top"
                alt="Offer"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For bank users:</span>
              <h4>Up to 25% OFF*</h4>
              <p>
                Use Code: <strong>GOYESINT</strong>
              </p>
              <p>Pay via One Card Emi</p>
              <img
                src="yesbank.png"
                alt="One Card Logo"
                style={{ width: 100 }}
              />
              <p>Valid from 18th July.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to 15% OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>

        {/* Fifth Page */}
        <div className="row mb-4">
          <div className="col-12 mb-2">
            <div className="card-header Homebg text-white">
              Holiday Packages
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offerimage5.png"
                className="card-img-top"
                alt="Holiday Package"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to 30% OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>

        {/* Sixth Page */}
        <div className="row mb-4">
          <div className="col-12 mb-2">
            <div className="card-header Homebg text-white">Buses</div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offerimage6.png"
                className="card-img-top"
                alt="Buses"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For bank users:</span>
              <h4>Up to 18% OFF*</h4>
              <p>
                Use Code: <strong>GOMBK</strong>
              </p>
              <p>Pay via One Card Emi</p>
              <img
                src="payment.png"
                alt="Payment Logo"
                style={{ width: 100 }}
              />
              <p>Valid from 18th July.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to 15% OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>

        {/* Seventh Page */}
        <div className="row mb-4">
          <div className="col-12 mb-2">
            <div className="card-header Homebg text-white">Outstation Cabs</div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offercab.png"
                className="card-img-top"
                alt="Outstation Cabs"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For bank users:</span>
              <h4>FLAT 10% OFF**</h4>
              <p>
                Use Code: <strong>GOMBK</strong>
              </p>
              <p>Pay via One Card Emi</p>
              <img
                src="payment.png"
                alt="Payment Logo"
                style={{ width: 100 }}
              />
              <p>Valid from 18th July.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to ₹500 OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>

        {/* Eighth Page */}
        <div className="row mb-4">
          <div className="col-12 mb-2">
            <div className="card-header Homebg text-white">Airport Cabs</div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
              <img
                src="Offercab2.png"
                className="card-img-top"
                alt="Airport Cabs"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For bank users:</span>
              <h4>FLAT 5% OFF**</h4>
              <p>
                Use Code: <strong>GOMBK</strong>
              </p>
              <p>Pay via One Card Emi</p>
              <img
                src="payment.png"
                alt="Payment Logo"
                style={{ width: 100 }}
              />
              <p>Valid from 18th July.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="offerbg p-3 border rounded">
              <span className="discount-code">For all users:</span>
              <h4>Up to 5% OFF*</h4>
              <p>
                Use Code: <strong>CHANGEVIEW</strong>
              </p>
              <button className="btn Button-color">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
