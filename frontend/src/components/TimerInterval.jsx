import { useState, useEffect, useRef } from "react";

export const TimerInterval = ({ work = 20, rest = 10, rounds = 8 }) => {
    const [time, setTime] = useState (work); 
    const [isRunning, setIsRunning] = useState (false);
    const [cyclesLeft, setCyclesLeft] = useState(rounds);
    const [isWorkPhase, setIsWorkPhase] = useState(true);
    const [isDone, setIsDone] = useState(false)
    const intervalRef = useRef(null);

    //timer count down
    useEffect(() => {
        if (isRunning && !isDone) {
        intervalRef.current = setInterval(() => setTime((t) => t - 1), 1000);
        }
        return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning, isDone]);

  // switch between work, rest, rounds
  useEffect(() => {
    if (time === 0 && !isDone) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      if (isWorkPhase) {
        //if last round set Done
        if (cyclesLeft === 1) {
        setIsDone(true);
        setCyclesLeft(0);
        setIsRunning(false);
      } else if (rest > 0) {
        // not Done, start rest
        setIsWorkPhase(false);
        setTime(rest);
        if (isRunning) intervalRef.current = setInterval(() => setTime((t) => t - 1), 1000);
      } else {
          setCyclesLeft((prev) => prev - 1);
          setTime(work);
          if (isRunning)
            intervalRef.current = setInterval(() => setTime((t) => t - 1), 1000);
        }
      } else {
        // in rest, start next work
        setIsWorkPhase(true);
        setCyclesLeft((prev) => prev - 1);
        setTime(work);
        if (isRunning)
          intervalRef.current = setInterval(() => setTime((t) => t - 1), 1000);
      }
    }
  }, [time, isWorkPhase, cyclesLeft, work, rest, isRunning, isDone]);

  const getColor = () => (isWorkPhase ? "green" : "red");

  return (
    <>
      {isDone ? (
        <p>Tid: Done!</p>
      ) : (
        <p>
          Tid: <span style={{ color: getColor() }}>{time}</span>
        </p>
      )}
      <p>Varv: {cyclesLeft}</p>
      {!isDone && (
        <button className="start-paus-button" onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? "Pausa" : "Start"}
        </button>
      )}
    </>
  );
};

    