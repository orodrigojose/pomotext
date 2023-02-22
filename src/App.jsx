import Terminal from "./shared/components/Terminal";
import Pomodoro from "./shared/components/Pomodoro";
import { useEffect, useRef } from "react";
import avaliableCommands from "./shared/commands";

function App() {
  const inputRef = useRef();
  const PS1 = "$ ";

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className="flex flex-row w-screen h-screen" onClick={() => inputRef.current.focus()}>
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
