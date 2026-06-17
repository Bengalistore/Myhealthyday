"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-700 font-serif tracking-tight">
          🌿 MyHealthyDay
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/bmi-calculator" className="hover:text-green-700 transition">BMI</Link>
          <Link href="/bmr-calculator" className="hover:text-green-700 transition">BMR</Link>
          <Link href="/calorie-calculator" className="hover:text-green-700 transition">Calories</Link>
          <Link href="/water-intake-calculator" className="hover:text-green-700 transition">Water Intake</Link>
          <Link href="/about" className="hover:text-green-700 transition">About</Link>
          <Link href="/contact" className="hover:text-green-700 transition">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          <Link href="/bmi-calculator" onClick={() => setMenuOpen(false)}>BMI Calculator</Link>
          <Link href="/bmr-calculator" onClick={() => setMenuOpen(false)}>BMR Calculator</Link>
          <Link href="/calorie-calculator" onClick={() => setMenuOpen(false)}>Calorie Calculator</Link>
          <Link href="/water-intake-calculator" onClick={() => setMenuOpen(false)}>Water Intake</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
