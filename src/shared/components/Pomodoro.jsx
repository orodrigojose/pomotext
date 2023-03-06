import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PomodoroContext } from "../context/PomodoroContext";
import Notifyer from "../utils/notifyer";

import StatusBar from "./StatusBar";

const parseTime = (time) => (time < 10 ? `0${time}` : time);

export default function Pomodoro({ customMinutes = 25, customSeconds = 0 }) {
  const { start } = useContext(PomodoroContext);

  const [minutes, setMinutes] = useState(customMinutes);
  const [seconds, setSeconds] = useState(customSeconds);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const [breakTime, setBreakTime] = useState(false);

  async function showAlert({ title, message, icon, type }) {
    Notifyer.notify({ title, body: message, icon });
    toast[type](message);
  }

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

            showAlert({
              title: !breakTime ? "Break Time!" : "Focusing...",
              message: !breakTime
                ? `New section starts in ${breakMinutes} minutes`
                : "New section has been started",
              type: "success",
              icon: "/logo.png",
            });
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
    <section className="sm:w-2/5 w-screen h-full flex flex-col justify-center items-center bg-zinc-900 text-slate-200 border-purple-800 border-t-2 sm:border-l-2 sm:border-t-0">
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
