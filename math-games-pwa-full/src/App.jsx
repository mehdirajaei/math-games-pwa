import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Quadratic from './components/Quadratic'
import Dice from './components/Dice'
import HiddenFn from './components/HiddenFn'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/quad" element={<Quadratic/>} />
          <Route path="/dice" element={<Dice/>} />
          <Route path="/hidden" element={<HiddenFn/>} />
        </Routes>
      </div>
    </div>
  )
}