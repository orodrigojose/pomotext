import { useContext, useEffect, useState } from "react";
import { PomodoroContext } from "../context/PomodoroContext";

const parseTime = (time) => time < 10 ? `0${time}` : time;

export default function Pomodoro({ customMinutes = 25, customSeconds = 0 }) {
  const { start } = useContext(PomodoroContext);

  const [minutes, setMinutes] = useState(customMinutes);
  const [seconds, setSeconds] = useState(customSeconds);

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
            const minutes = breakTime ? 0 : customMinutes;
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
    <section>
      <div>
        <p>{breakTime && "Break time"}</p>
      </div>
      <div>
        {timerMinutes}:{timerSeconds}
      </div>
    </section>
  );
}
