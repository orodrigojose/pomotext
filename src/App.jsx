import Terminal from "./shared/components/Terminal";
import Pomodoro from "./shared/components/Pomodoro";
import { useEffect, useRef } from "react";
import avaliableCommands from "./shared/commands";

function App() {
  const inputRef = useRef();
  const PS1 = "$ ";

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className="flex w-screen" onClick={() => inputRef.current.focus()}>
      <Terminal
        inputRef={inputRef}
        avaliableCommands={avaliableCommands}
        PS1={PS1}
      />
      <Pomodoro className="w-1/2 flex-2" />
    </div>
  );
}

export default App;
