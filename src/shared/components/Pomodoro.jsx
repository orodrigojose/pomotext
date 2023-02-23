import { useContext, useEffect, useState } from "react";
import { PomodoroContext } from "../context/PomodoroContext";

import StatusBar from "./StatusBar";

const parseTime = (time) => (time < 10 ? `0${time}` : time);

export default function Pomodoro({ customMinutes = 1, customSeconds = 0 }) {
  const { start } = useContext(PomodoroContext);

  const [minutes, setMinutes] = useState(customMinutes);
  const [seconds, setSeconds] = useState(customSeconds);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const [breakTime, setBreakTime] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (start) {
        if (seconds == 0) {
          if (minutes != 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            const minutes = breakTime ? customMinutes - 1 : breakMinutes;
            const seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);
            setBreakTime((state) => !state);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);
  }, [seconds, start]);

  const timerMinutes = parseTime(minutes);
  const timerSeconds = parseTime(seconds);

  return (
    <section className="w-2/5 h-full flex flex-col justify-center items-center bg-zinc-900 text-slate-200 border-purple-800 border-l-2">
      {breakTime ? (
        <div>
          <p className="font-Ubuntu text-xs text-slate-300">
            Break time, new section starts in:
          </p>
        </div>
      ) : null}
      <div>
        <h1
          className={`text-6xl text-inherit bold font-Ubuntu ${
            !start ? "animate-pulse opacity-95 text-red-200" : null
          }`}
        >
          {timerMinutes}:{timerSeconds}
        </h1>
      </div>
      <StatusBar paused={start} breakTime={breakTime} />
    </section>
  );
}
