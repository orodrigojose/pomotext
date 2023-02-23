import { BsPauseCircle, BsClockFill, BsCheck2Square } from "react-icons/bs";

export default function StatusBar({ paused, breakTime }) {
  return (
    <section className="bg-slate-700 sm:w-2/5 w-screen fixed bottom-0 flex">
      <div
        className={`flex items-center gap-1 align-center text-slate-200 text-sm font-RobotoMono pl-2 pr-4 bg-purple-600 font-medium ${
          !breakTime ? "rounded-r-xl" : null
        }`}
      >
        {!paused ? (
          <BsPauseCircle className="w-3 h-3" />
        ) : (
          <BsClockFill className="w-3 h-3" />
        )}
        {!paused ? "Paused" : "Running..."}
      </div>
      {breakTime ? (
        <div className="flex items-center gap-1 align-center text-slate-200 text-sm font-RobotoMono font-medium pl-2 pr-4 bg-purple-500 rounded-r-xl">
          <BsCheck2Square className="w-3 h-3" /> Break Time!
        </div>
      ) : null}
    </section>
  );
}
