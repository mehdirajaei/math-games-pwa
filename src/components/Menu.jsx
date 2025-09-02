import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(){
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">بازی‌های ریاضی — دبیرستان</h1>
      <p className="text-sm text-center mb-6">انتخاب کنید و بازی را شروع کنید. این اپ به صورت آفلاین هم کار می‌کند.</p>

      <div className="space-y-4">
        <Link to="/quad" className="block p-4 rounded-lg border hover:bg-sky-50">مسابقه معادلات درجه دوم</Link>
        <Link to="/dice" className="block p-4 rounded-lg border hover:bg-sky-50">احتمال با تاس</Link>
        <Link to="/hidden" className="block p-4 rounded-lg border hover:bg-sky-50">تابع مخفی</Link>
      </div>

      <footer className="mt-6 text-xs text-center text-gray-500">نسخه PWA — قابل نصب در موبایل</footer>
    </div>
  )
}