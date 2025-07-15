import React, { useState } from "react";

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Water Tracker</h2>
      <div className="text-5xl text-blue-400 mb-4">💧 {glasses}</div>
      <button
        onClick={() => setGlasses(glasses + 1)}
        className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition mb-2"
      >
        Add a Glass
      </button>
      <div className="text-gray-300 mt-2 text-sm">Goal: 8+ glasses/day</div>
    </div>
  );
};

export default WaterTracker;
