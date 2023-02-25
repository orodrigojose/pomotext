import Terminal from "./shared/components/Terminal";
import Pomodoro from "./shared/components/Pomodoro";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="bottom-left" autoClose={3300} theme="dark" />
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
