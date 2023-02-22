const avaliableCommands = {
  start: {
    type: "action",
    fn: (history, setStart, input) => {
      setStart(true);
      return [
        ...history,
        {
          input,
          output: (
            <p className="font-semibold text-green-400">started pomodoro...</p>
          ),
        },
      ];
    },
  },
  stop: {
    type: "action",
    fn: (history, setStart, input) => {
      setStart(false);
      return [
        ...history,
        {
          input,
          output: (
            <p className="font-semibold text-red-400">stopped pomodoro.</p>
          ),
        },
      ];
    },
  },
  help: {
    type: "text",
    content: (
      <ul>
        <li className="flex gap-11">
          <span className="text-purple-600 font-bold">help</span>
          <p className="text-slate-300">show avaliable commands</p>
        </li>
        <li className="flex gap-9">
          <span className="text-purple-600 font-bold">start</span>
          <p className="text-slate-300">start/continue pomodoro timer</p>
        </li>
        <li className="flex gap-11">
          <span className="text-purple-600 font-bold">stop</span>
          <p className="text-slate-300">stop pomodoro timer</p>
        </li>
      </ul>
    ),
  },
  clear: {
    type: "action",
    fn: () => [],
  },
};

export default avaliableCommands;
