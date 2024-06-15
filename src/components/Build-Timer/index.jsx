import { useEffect, useState } from "react";

export default function TimerCount() {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  });
  return <div className="text-2xl bg-green-600">Time Left:{time}</div>;
}
