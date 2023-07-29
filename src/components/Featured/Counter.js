import React, { Component } from 'react';

class Counter extends Component {

  state = {
    deadline: "28 Aug 2023 17:00:00 GMT",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

    render(){
        return (
          <>
            <div className="countdown_wrapper">
              <div className="countdown_top">Starts in:</div>
              <div className="countdown_bottom">
                <div className="countdown_item">
                  <div className="countdown_time">{this.state.days}</div>
                  <div className="countdown_tag">days</div>
                </div>
                <div className="countdown_item">
                  <div className="countdown_time">{this.state.hours}</div>
                  <div className="countdown_tag">hours</div>
                </div>
                <div className="countdown_item">
                  <div className="countdown_time">{this.state.minutes}</div>
                  <div className="countdown_tag">minutes</div>
                </div>
                <div className="countdown_item">
                  <div className="countdown_time">{this.state.seconds}</div>
                  <div className="countdown_tag">seconds</div>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default Counter;