import React, { useState, useEffect } from "react";
import "./counter.css";

const Counter = () => {
  const [state, setState] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [deadline, setDeadLine] = useState(undefined);
  const [timePassed, settimePassed] = useState(false);

  const getTimeUntil = (deadline) => {

    if (deadline instanceof Date) {
      // return convertDateToString(value);
      console.log("yes is instance")
    }
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      settimePassed(true);
    } else {
      let seconds = Math.floor((time / 1000) % 60);
      let minutes = Math.floor((time / 1000 / 60) % 60);
      let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      let days = Math.floor(time / (1000 * 60 * 60 * 24));
      seconds = updateTime(seconds);
      minutes = updateTime(minutes);
      hours = updateTime(hours);
      setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const updateTime = (value) => {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  };

  useEffect(() => {
    setDeadLine("28 Aug 2023 17:00:00 GMT");
    let counter = setInterval(() => getTimeUntil(deadline), 1000);
    return () => {
      clearInterval(counter);
    };
  }, [deadline]);

  if (!deadline) {
    return <div>loading</div>;
  }

  if (timePassed) {
    return <div>Date passed</div>;
  }

  return (
    <div className="countdown_wrapper">
      <div className="countdown_top">TIME LEFT</div>
      <div className="countdown_bottom">
        <div className="countdown_item">
          <div className="countdown_time">{state.days}</div>
          <div className="countdown_tag">days</div>
        </div>
        <div className="countdown_item">
          <div className="countdown_time">{state.hours}</div>
          <div className="countdown_tag">hours</div>
        </div>
        <div className="countdown_item">
          <div className="countdown_time">{state.minutes}</div>
          <div className="countdown_tag">minutes</div>
        </div>
        <div className="countdown_item">
          <div className="countdown_time">{state.seconds}</div>
          <div className="countdown_tag">seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
