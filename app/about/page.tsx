import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | My Healthy Day",
  description: "Learn about My Healthy Day — our mission to provide free, accurate health calculators and wellness tools for everyone.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About My Healthy Day</h1>
      <p className="text-gray-600 mb-4">My Healthy Day (myhealthyday.in) is a free online health and wellness platform built to help everyday people understand their health metrics without visiting a doctor or paying for expensive apps.</p>
      <p className="text-gray-600 mb-4">Our tools — including the BMI Calculator, BMR Calculator, Calorie Calculator, and Water Intake Calculator — are built on established scientific formulas from the World Health Organization (WHO) and peer-reviewed nutritional science.</p>
      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Mission</h2>
      <p className="text-gray-600 mb-4">We believe health information should be accessible, accurate, and free. Too often, people make health decisions based on myths or misinformation. My Healthy Day aims to change that by providing science-backed tools and clear, jargon-free explanations.</p>
      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Who We Are</h2>
      <p className="text-gray-600">My Healthy Day is an independent health information website based in India. We are not a medical organization and do not provide medical advice. All content on this site is for informational and educational purposes only.</p>
    </div>
  );
}
