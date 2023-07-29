import React, { Component } from "react";
import Button from "../UI/button";

class Pricing extends Component {
  state = {
    price: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    description: ["text 1", "text 2", "text 3"],
    link: [
      "https://en.wikipedia.org/wiki/Sales",
      "https://en.wikipedia.org/wiki/Sales",
      "https://en.wikipedia.org/wiki/Sales",
    ],
    delay: [500, 0, 500],
  };

  renderBoxes = () =>
    this.state.price.map((box, i) => (
      <div className="pricing_item" key={i}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${box}</span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">{this.state.description[i]}</div>
          <div className="pricing_buttons">
            <Button
              text="buy"
              bck="#ffa800"
              color="white"
              link={this.state.link[i]}
            />
          </div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Tickets</h2>
          <div className="pricing_wrapper">{this.renderBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
