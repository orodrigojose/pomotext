import { useState } from "react";
import Prompt from "./Prompt";

export default function Terminal({inputRef, avaliableCommands, PS1}) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleCommands = (rawCommand) => {
    let cmd = avaliableCommands[rawCommand];

    return cmd && cmd !== null && cmd.type !== null
      ? cmd
      : {type: "text", content: "Command not found\n"};
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
          newOutput = commandResponse.fn(newOutput);
          break;
      }

      setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <div className="whitespace-pre-line w-full">
      <section className="text-sm font-Roboto font-medium">
        {output.map((data, index) => {
          return (
            <div key={index}>
              <div className="flex opacity-90">
                <span>{PS1}</span>
                <p className="pl-1.5">{data.input}</p>
              </div>
              <p>{data.output}</p>
            </div>
          )
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
