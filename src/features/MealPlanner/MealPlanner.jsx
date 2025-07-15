import React, { useState } from "react";
import { calculateBMI } from "./bmiUtils";

const MealPlanner = () => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const addMeal = () => {
    if (meal.trim()) {
      setMeals([...meals, meal]);
      setMeal("");
    }
  };

  const handleBmi = () => {
    if (weight && height) {
      setBmi(calculateBMI(weight, height));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Meal Planner & BMI</h2>
      <div className="mb-6 w-full max-w-xs">
        <input
          type="text"
          value={meal}
          onChange={e => setMeal(e.target.value)}
          placeholder="Add a meal (e.g., Salad)"
          className="w-full px-3 py-2 rounded mb-2 border border-gray-300"
        />
        <button onClick={addMeal} className="w-full px-3 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition mb-2">Add Meal</button>
        <ul className="text-gray-200 text-left pl-4">
          {meals.map((m, i) => <li key={i}>• {m}</li>)}
        </ul>
      </div>
      <div className="mb-4 w-full max-w-xs">
        <input
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
          placeholder="Weight (kg)"
          className="w-full px-3 py-2 rounded mb-2 border border-gray-300"
        />
        <input
          type="number"
          value={height}
          onChange={e => setHeight(e.target.value)}
          placeholder="Height (cm)"
          className="w-full px-3 py-2 rounded mb-2 border border-gray-300"
        />
        <button onClick={handleBmi} className="w-full px-3 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Calculate BMI</button>
        {bmi && <div className="mt-2 text-blue-300">Your BMI: {bmi}</div>}
      </div>
    </div>
  );
};

export default MealPlanner;
