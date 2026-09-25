const dots = [
  ["12%", "18%", "9s"],
  ["28%", "70%", "13s"],
  ["46%", "22%", "11s"],
  ["63%", "78%", "15s"],
  ["80%", "30%", "10s"],
  ["8%", "84%", "14s"],
  ["90%", "62%", "12s"],
  ["54%", "48%", "16s"],
];

export default function SignalField() {
  return (
    <div className="field" aria-hidden="true">
      {dots.map(([x, y, duration]) => (
        <span key={`${x}-${y}`} style={{ insetInlineStart: x, top: y, animationDuration: duration }} />
      ))}
    </div>
  );
}
