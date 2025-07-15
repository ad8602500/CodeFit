import React from "react";

const Dashboard = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
    <h2 className="text-2xl font-bold mb-4 text-white">Dashboard</h2>
    <div className="bg-[#18192a] text-gray-200 px-6 py-8 rounded shadow mb-4 w-full max-w-lg text-center">
      <div className="text-lg mb-2">Your health stats and progress will appear here.</div>
      <div className="text-gray-400">(Charts and analytics coming soon!)</div>
    </div>
  </div>
);

export default Dashboard;
