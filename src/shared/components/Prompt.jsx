export default function Prompt({ PS1, input, setInput, inputRef, handleKeyDown }) {
  return (
    <div className="flex align-baseline text-sm font-RobotoMono font-medium">
      <span>{PS1}</span>
      <input
        className="pl-1.5 text-lm bg-transparent outline-none cursor-text pointer-events-none font-Roboto font-medium"
        ref={inputRef}
        type="text"
        value={input}
        autoFocus={true}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
