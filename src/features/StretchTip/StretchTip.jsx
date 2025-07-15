import React, { useState } from "react";

const TIPS = [
  "Neck rolls: Slowly roll your head in a circle.",
  "Shoulder shrugs: Lift and drop your shoulders.",
  "Wrist stretch: Extend your arm and gently pull back your fingers.",
  "Torso twist: Sit tall and gently twist side to side.",
  "Stand up and reach for the sky!",
  "Ankle circles: Rotate your ankles while seated."
];

const StretchTip = () => {
  const [tip, setTip] = useState(TIPS[0]);

  const newTip = () => {
    const idx = Math.floor(Math.random() * TIPS.length);
    setTip(TIPS[idx]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Stretch Tip</h2>
      <div className="bg-blue-100 text-blue-900 px-6 py-4 rounded shadow mb-4 text-lg font-medium text-center max-w-md">
        {tip}
      </div>
      <button
        onClick={newTip}
        className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        New Tip
      </button>
    </div>
  );
};

export default StretchTip;
