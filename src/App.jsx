import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostureDetector from "./features/PostureDetector/PostureDetector";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomeIcon } from "@heroicons/react/24/outline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import SnowfallBackground from "./components/SnowfallBackground";
import BreakTimer from "./features/BreakReminder/BreakTimer";
import MealPlanner from "./features/MealPlanner/MealPlanner";
import WaterTracker from "./features/WaterTracker/WaterTracker";
import StretchTip from "./features/StretchTip/StretchTip";
import Dashboard from "./features/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <SnowfallBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col items-center px-4 pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <motion.section
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-center mb-12"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
                    Welcome to <span className="text-blue-400">CodeFit</span>
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Your all-in-one health companion for posture, breaks, meals, water, and more—right at your desk.
                  </p>
                  <a
                    href="#get-started"
                    className="inline-block px-8 py-3 rounded bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition"
                  >
                    Get Started
                  </a>
                </motion.section>
                <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {[
                    { title: "Posture Detector", desc: "AI-powered posture monitoring for healthy sitting.", icon: "🧍", route: "/posture" },
                    { title: "Break Reminder", desc: "Smart reminders to stretch and rest your eyes.", icon: "⏰", route: "/break" },
                    { title: "Meal Planner", desc: "Personalized meal and BMI tracking.", icon: "🍎", route: "/meals" },
                    { title: "Water Tracker", desc: "Stay hydrated with easy water logging.", icon: "💧", route: "/water" },
                    { title: "Stretch Tips", desc: "Get daily stretch tips and routines.", icon: "🤸", route: "/stretch" },
                    { title: "Dashboard", desc: "Visualize your health stats and progress.", icon: "📊", route: "/dashboard" },
                  ].map((f) => (
                    <Link key={f.title} to={f.route}>
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        className="flex items-start gap-4 p-5 bg-[#18192a] rounded-lg shadow hover:shadow-lg transition border border-[#23243a]"
                      >
                        <span className="text-3xl">{f.icon}</span>
                        <div>
                          <h3 className="font-bold text-lg text-white flex items-center gap-1">
                            <CheckCircleIcon className="h-5 w-5 text-blue-400" /> {f.title}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1">{f.desc}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </section>
              </>
            } />
            <Route path="/posture" element={<PostureDetector />} />
            <Route path="/break" element={<BreakTimer />} />
            <Route path="/meals" element={<MealPlanner />} />
            <Route path="/water" element={<WaterTracker />} />
            <Route path="/stretch" element={<StretchTip />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
