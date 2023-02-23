import Terminal from "./shared/components/Terminal";
import Pomodoro from "./shared/components/Pomodoro";
import { useEffect, useRef } from "react";
import avaliableCommands from "./shared/commands";

function App() {
  const inputRef = useRef();
  const PS1 = "$ ";

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div
      className="flex flex-col w-screen h-screen sm:flex-row"
      onClick={() => inputRef.current.focus()}
    >
      <Terminal
        inputRef={inputRef}
        avaliableCommands={avaliableCommands}
        PS1={PS1}
      />
      <Pomodoro />
    </div>
  );
}

export default App;
