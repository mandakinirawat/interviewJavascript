import "./styles.css";

import { useState, useEffect } from "react";
import Reset from "./Reset";
import DisplayTimer from "./DisplayTimer";

export default function App() {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1));
    }, 1000);
  }, []);

  const resetTimer = () => {
    setTimer(30);
  };

  return (
    <div className="App">
      <DisplayTimer time={timer} />
      <button onClick={resetTimer}>Reset</button>;
    </div>
  );
}


const DisplayTimer = (props) => {
  const [msgFlag, setMsgFlag] = useState(false);

  useEffect(() => {
    if (props.time === 0) {
      setMsgFlag(true);
    }
  }, [props.time]);

  return (
    <>
      {msgFlag && <div>{"Take Off"}</div>}
      <div>{props.time}</div>
    </>
  );
};
