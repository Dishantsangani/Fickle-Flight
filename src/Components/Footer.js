import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 style={{ textAlign: "left", marginLeft: "15px" }}>
                FickleFlight
              </h4>
              <p>
                Fickle Flight is your one-stop travel portal. We offer
                hassle-free flight and hotel bookings. We also have all your
                flight needs in you online shop.
              </p>
              <div className="social-icons">
                <a href="#">
                  <img src="Facebook.png" className="icon" />
                </a>
                <a href="#">
                  <img src="Instagram.png" className="icon" />
                </a>
                <a href="#">
                  <img src="Twitter.png" className="icon" />
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">How we work</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ">
              <h5>More</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Covid Advisory</a>
                </li>
                <li>
                  <a href="#">Airline Fees</a>
                </li>
                <li>
                  <a href="#">Tips</a>
                </li>
                <li>
                  <a href="#">Quarantine Rules</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
