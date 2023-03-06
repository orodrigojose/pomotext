import Terminal from "./shared/components/Terminal";
import Pomodoro from "./shared/components/Pomodoro";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useRef } from "react";
import avaliableCommands from "./shared/commands";
import Notifyer from "./shared/utils/notifyer";

function App() {
  const inputRef = useRef();
  const PS1 = (
    <div className="flex align-baseline">
      <p className="text-purple-600">pomotext</p>
      <p className="text-blue-500">:~$</p>
    </div>
  );

  useEffect(() => {
    async function getNotifyerAccess() {
      try {
        await Notifyer.init();
      } catch (e) {
        toast.error(e.message);
      }
    }

    getNotifyerAccess();
    inputRef.current.focus();
  }, []);

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
