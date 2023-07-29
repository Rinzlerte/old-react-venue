import React from "react";
import icon_calendar from '../../assets/img/icons/calendar.png';
import icon_location from '../../assets/img/icons/location.png';

const Venueinfo = () => {
    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <div className="vn_wrapper">
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red" />
                    <div
                      className="vn_icon"
                      style={{ background: `url(${icon_calendar})` }}
                    />
                    <div className="vn_title">Date and start</div>
                    <div className="vn_desc">26 10 2023</div>
                    <div className="vn_desc">12.00</div>
                  </div>
                </div>
              </div>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_yellow" />
                    <div
                      className="vn_icon"
                      style={{ background: `url(${icon_location})` }}
                    />
                    <div className="vn_title">Place</div>
                    <div className="vn_desc">
                    Testing city 
                    </div>
                    <div className="vn_desc">
                    Test avenu 11
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
};
  
export default Venueinfo;