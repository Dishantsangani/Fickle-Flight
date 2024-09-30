import React from "react";
import { useParams } from "react-router-dom";

function Hotels() {
  const params = useParams();
  return (
    <>
      <div className="container Homebg mt-3">
        <div className="Rec-Title ">
          <div className="card-header Homebg text-white">
            Stays in Los Angeles
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center mb-3">
          <button className="btn Rec-btn m-1">
            <a
              href="https://www.google.com/travel/search?q=stays%20in%20los%20angeles%20recommended&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969802%2C10210221%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72486593%2C72494250%2C72499705%2C72513513%2C72536387%2C72549171%2C72569093%2C72570850%2C72602734%2C72605013%2C72614662%2C72616120%2C72619927%2C72620306%2C72620962%2C72634630%2C72640790%2C72648289%2C72653660%2C72658032%2C72661846%2C72662669%2C72663440%2C72664003%2C72671093&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAESCAoCCAMKAggDGhwSGhIUCgcI6A8QBxgWEgcI6A8QBxgXGAEyAhAAKgcKBToDSU5S&qs=CAE4BkIJEXu4eVbd41ITQgkRdRpxBZI-Jv5CCRHh0y0bgmwNxFpzMnGqAW4QASokIiBzdGF5cyBpbiBsb3MgYW5nZWxlcyByZWNvbW1lbmRlZCgAMh4QASIaRuV79_mPdSaqdEpNJL47GdHgWkySBu5vNvEyJBACIiBzdGF5cyBpbiBsb3MgYW5nZWxlcyByZWNvbW1lbmRlZA&ap=aAE&ictx=111&ved=0CAAQ5JsGahcKEwi42f2Xv7CHAxUAAAAAHQAAAAAQDA"
              target="_blank"
            >
              Recommended
            </a>
          </button>
          <button className="btn Rec-Price m-1">
            <a
              href="https://www.google.com/search?sca_esv=7bc1010235894032&rlz=1C1PNBB_enIN1094IN1094&sxsrf=ADLYWILrSPNPOQ4C4E-erDysHGviA6klcg:1721302510700&q=hotels+in+los+angeles+prices&tbm=shop&source=lnms&fbs=AEQNm0AeMNWKf4PpcKMI-eSa16lJoRPMIuyspCxWO6iZW9F1Ns6EVsgc0W_0xN47PHaanAEtg26fpfc9gg2y1-ZsywNNRuy43JJRYd-2H_i8AE9kc3W2dI5-eGMTx01TxDtu51DMbwuJAZbf9CLg4phrLrq0EvoR7fh-DymCWWgD4mOM3q9XebKbtWfIag_TLj68hS3Hxk9fBy5xvcYW3MYr1fMSK6iQHw&ved=1t:200715&ictx=111&biw=1366&bih=607&dpr=1"
              target="_blank"
              className="text-white"
            >
              Price
            </a>
          </button>
          <button className="btn Rec-Price m-1">
            <a
              href="https://www.google.com/travel/search?q=stays%20in%20los%20angeles%20rating&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969802%2C10210221%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72486593%2C72494250%2C72499705%2C72513513%2C72536387%2C72549171%2C72569093%2C72570850%2C72602734%2C72605013%2C72614662%2C72616120%2C72619927%2C72620306%2C72620962%2C72634630%2C72640790%2C72648289%2C72653660%2C72658032%2C72661846%2C72662669%2C72663440%2C72664003%2C72671093&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAESCAoCCAMKAggDGhwSGhIUCgcI6A8QBxgWEgcI6A8QBxgXGAEyAhAAKgkKBToDSU5SKAg&qs=CAE4BlpVCAEyUaoBThABKgkiBXN0YXlzKAAyHhABIhoD_CELz_gQ2tvfXB1K9MAy9SN_2HyCr8jAVzIfEAIiG3N0YXlzIGluIGxvcyBhbmdlbGVzIHJhdGluZw&ap=aAE&ictx=111&ved=0CAAQ5JsGahcKEwjAz-GHwLCHAxUAAAAAHQAAAAAQDA"
              target="_blank"
              className="text-white"
            >
              Rating
            </a>
          </button>
        </div>
      </div>

      {/* Slide's */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* 1 */}
            <div className="row Card-color mb-3">
              <div className="card-body col-6">
                <img
                  src="Holiday inn Expre.jpg"
                  className="card-img-top img-fluid rounded"
                  alt="Holiday inn Expre image"
                />
              </div>
              <div className="col-6 mt-3 ps-1">
                <div className="row">
                  <h4>Holiday inn Expre</h4>
                  <p>
                    <img src="star.png" className="star" /> 4.7 (1,136 reviews)
                  </p>
                </div>
                <div className="View">
                  <h5 className="mt-2">$286/night</h5>
                  <button className="btn Button-color mt-2">
                    <a
                      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/reservation"
                      target="_blank"
                      className="text-white"
                    >
                      View Details
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="row Card-color mb-3">
              <div className="card-body col-6">
                <img
                  src="Freehand Los Angeles.jpg"
                  className="card-img-top img-fluid rounded"
                  alt="Freehand Los Angeles image"
                />
              </div>
              <div className="col-6 mt-3 ps-1">
                <div className="row">
                  <h4>Freehand Los Angeles</h4>
                  <p>
                    <img src="star.png" className="star" />
                    4.2 (1,941 reviews)
                  </p>
                </div>
                <div className="View">
                  <h5 className="mt-2">$198/night</h5>
                  <button className="btn Button-color mt-2">
                    <a
                      href="https://www.booking.com/searchresults.en-gb.html?aid=311984&label=freehand-los-angeles-V902%2ARenJV0kzRxSCUQNiwS308233103936%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-147912713540%3Alp9061762%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicrzwdxpGM5o8&gclid=Cj0KCQjw-uK0BhC0ARIsANQtgGO326osld8OSzHXpCD5gAqN8rZ0L_pZ9ODa5idNgesOW9zfQct3L0QaAk3lEALw_wcB&highlighted_hotels=2086736&redirected=1&city=20014181&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=fef4e63228cd9b12a871b30f5f7a0aa8"
                      target="_blank"
                      className="text-white"
                    >
                      View Details
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="row Card-color mb-3">
              <div className="card-body col-6">
                <img
                  src="The Westin Bonaventure.jpg"
                  className="card-img-top img-fluid rounded"
                  alt="The Westin Bonaventure image"
                />
              </div>
              <div className="col-6 mt-3 ps-1">
                <div className="row">
                  <h4>The Westin Bonaventure</h4>
                  <p>
                    <img src="star.png" className="star" />
                    4.1 (1,002 reviews)
                  </p>
                </div>
                <div className="View">
                  <h5 className="mt-2">$289/night</h5>
                  <button className="btn Button-color mt-2">
                    <a
                      href="https://the-westin-bonaventure-la.h-rez.com/index.htm?lbl=ggl-en-us2&gad_source=1&gclid=Cj0KCQjw-uK0BhC0ARIsANQtgGPrk0boyzvENnd43sfiG5ZhKl12MgYA-u6eLZwQCr3nllHfMCzkaJsaAhFnEALw_wcB"
                      className="text-white"
                      target="_blank"
                    >
                      View Details
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="row Card-color mb-3">
              <div className="card-body col-6">
                <img
                  src="the ritz-Carlton.jpg"
                  className="card-img-top img-fluid rounded"
                  alt="The Ritz-Carlton image"
                />
              </div>
              <div className="col-6 mt-3 ps-1">
                <div className="row">
                  <h4>The Ritz-Carlton</h4>
                  <p>
                    <img src="star.png" className="star" />
                    4.7 (1,136 reviews)
                  </p>
                </div>
                <div className="View">
                  <h5 className="mt-2">$286/night</h5>
                  <button className="btn Button-color mt-2">
                    <a
                      href="https://www.ritzcarlton.com/"
                      className="text-white"
                      target="_blank"
                    >
                      View Details
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8827803802!2d-118.74138195907396!3d34.02003924141445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1721197821763!5m2!1sen!2sin"
              width="100%"
              height="800"
              style={{ border: "2px solid #1262af", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotels;
