import React, { useState, useEffect, useRef } from "react";

const BREAK_INTERVAL = 30 * 60; // 30 minutes in seconds

const BreakTimer = () => {
  const [seconds, setSeconds] = useState(BREAK_INTERVAL);
  const [showReminder, setShowReminder] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setShowReminder(true);
          return BREAK_INTERVAL;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetTimer = () => {
    setSeconds(BREAK_INTERVAL);
    setShowReminder(false);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Break Reminder</h2>
      <div className="text-5xl font-mono text-blue-400 mb-6">{formatTime(seconds)}</div>
      {showReminder && (
        <div className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded font-semibold mb-4 animate-pulse">
          ⏰ Time for a break! Stand up, stretch, and rest your eyes.
        </div>
      )}
      <button
        onClick={resetTimer}
        className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Reset Timer
      </button>
    </div>
  );
};

export default BreakTimer;
