const avaliableCommands = {
  start: {
    type: "action",
    fn: (history, setStart) => {
      setStart(true)
      return [...history, { input: "start", output: "started pomodoro" }];
    },
  },
  stop: {
    type: "action",
    fn: (history, setStart) => {
      setStart(false)
      return [...history, { input: "start", output: "started pomodoro" }];
    },
  },
  help: {
    type: "text",
    content: (
      <ul>
        <li className="flex gap-11">
          <span className="text-sky-700">help</span>
          <p className="text-slate-300">show avaliable commands</p>
        </li>
        <li className="flex gap-11">
          <span className="text-sky-700">start</span>
          <p className="text-slate-300">start/continue pomodoro timer</p>
        </li>
        <li className="flex gap-11">
          <span className="text-sky-700">stop</span>
          <p className="text-slate-300">stop pomodoro timer</p>
        </li>
      </ul>
    ),
  },
  clear: {
    type: "action",
    fn: (history) => [],
  },
};

export default avaliableCommands;
