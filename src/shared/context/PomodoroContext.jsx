import { createContext, useState } from "react";

export const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
  const [start, setStart] = useState(false);
  const toggleStart = () => setStart(!start)

  return (
    <PomodoroContext.Provider value={{ start, setStart, toggleStart }}>
      {children}
    </PomodoroContext.Provider>
  );
}