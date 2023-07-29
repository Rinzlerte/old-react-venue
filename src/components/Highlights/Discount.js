import React, { Component } from "react";
import Purchasebutton from "../UI/button";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnds: 30,
  };

  percentage() {
    if (this.state.discountStart < this.state.discountEnds) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 1000);
  }

  render() {
    return (
      <section className="bck_white ">
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>off</span>
            </div>
            <div className="discount_description">
              <h3>Apply untill --</h3>
              <p>we are wainting for your apply</p>
              <Purchasebutton
                text="apply"
                bck="#ffa800"
                color="#ffffff"
                link="https://material-ui.com/getting-started/installation/"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discount;
