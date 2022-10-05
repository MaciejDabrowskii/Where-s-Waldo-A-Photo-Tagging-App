import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { getTimer } from "../contexts/timer-context";
import LogButtons from "./Login-Logout-buttons/login-out-buttons";

function Timer()
{
  const {
    timer, startTimer, stopTimer, resetTimer,
  } = getTimer();

  return (
    <div className="timer-container">
      <button type="button" onClick={startTimer}>Start</button>
      <button type="button" onClick={stopTimer}>Stop</button>
      <FontAwesomeIcon className="timer-icon" icon={faClock} />
      <h3 className="timer-value">
        {`${(timer / 60)
          .toString()
          .split(".")[0]} m`}
        {" "}
        {`${(timer % 60)
          .toString()
          .match(/^-?\d+(?:\.\d{0,1})?/)[0]} s`}
      </h3>
      <LogButtons />
    </div>
  );
}

export default Timer;
