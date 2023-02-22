import { useState, useContext } from "react";
import { PomodoroContext } from "../context/PomodoroContext";
import Prompt from "./Prompt";

export default function Terminal({ inputRef, avaliableCommands, PS1 }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const { setStart } = useContext(PomodoroContext);

  const handleCommands = (rawCommand) => {
    let cmd = avaliableCommands[rawCommand];

    return cmd && cmd !== null && cmd.type !== null
      ? cmd
      : { type: "text", content: "Unknown command\n" };
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      let newOutput = "";
      newOutput = output;

      const commandResponse = handleCommands(input);

      switch (commandResponse.type) {
        case "text":
          newOutput.push({ input: input, output: commandResponse.content });
          break;
        case "action":
          newOutput = commandResponse.fn(newOutput, setStart, input);
          break;
      }

      setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <div className="whitespace-pre-line text-white bg-neutral-900 w-3/5 h-screen p-2 overflow-y-scroll">
      <section className="text-sm font-RobotoMono font-medium">
        {output.map((data, index) => {
          return (
            <div key={index}>
              <div className="flex opacity-95">
                <span>{PS1}</span>
                <p className="pl-1.5">{data.input}</p>
              </div>
              <div>{data.output}</div>
            </div>
          );
        })}
      </section>

      <Prompt
        PS1={PS1}
        input={input}
        setInput={setInput}
        inputRef={inputRef}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}
