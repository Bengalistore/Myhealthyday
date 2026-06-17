"use client";
import { useState } from "react";

export default function BMRCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmr, setBmr] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height), a = parseFloat(age);
    if (!w || !h || !a) return;
    let result: number;
    if (gender === "male") {
      result = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      result = 10 * w + 6.25 * h - 5 * a - 161;
    }
    setBmr(Math.round(result));
  };

  const activityLevels = [
    { label: "Sedentary (little/no exercise)", multiplier: 1.2 },
    { label: "Lightly active (1–3 days/week)", multiplier: 1.375 },
    { label: "Moderately active (3–5 days/week)", multiplier: 1.55 },
    { label: "Very active (6–7 days/week)", multiplier: 1.725 },
    { label: "Extra active (athlete/physical job)", multiplier: 1.9 },
  ];

  const faqs = [
    { q: "What is BMR?", a: "BMR (Basal Metabolic Rate) is the number of calories your body needs to maintain basic physiological functions — like breathing, circulation, and cell production — while completely at rest." },
    { q: "What formula does this calculator use?", a: "We use the Mifflin-St Jeor equation, which is considered the most accurate formula for most people. It was developed in 1990 and validated in numerous clinical studies." },
    { q: "What is the difference between BMR and TDEE?", a: "BMR is your calorie needs at rest. TDEE (Total Daily Energy Expenditure) is BMR multiplied by an activity factor, representing your actual daily calorie needs including physical activity." },
    { q: "Can I use BMR to lose weight?", a: "Yes. Eating below your TDEE (but not below your BMR) creates a calorie deficit that leads to fat loss. A deficit of 500 kcal/day typically results in about 0.5 kg of fat loss per week." },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">BMR Calculator</h1>
          <p className="text-gray-500 text-sm mb-6">Find your Basal Metabolic Rate using the Mifflin-St Jeor equation.</p>

          <div className="flex gap-3 mb-6">
            {(["male", "female"] as const).map((g) => (
              <button key={g} onClick={() => setGender(g)} className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition ${gender === g ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{g}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 30" className="calculator-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 70" className="calculator-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 175" className="calculator-input" />
            </div>
          </div>

          <button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition text-sm">Calculate BMR</button>

          {bmr && (
            <div className="result-box">
              <p className="text-gray-500 text-sm">Your Basal Metabolic Rate</p>
              <p className="text-5xl font-bold text-green-700 mt-1">{bmr}</p>
              <p className="text-gray-500 text-sm mt-1">calories/day (at rest)</p>
              <div className="mt-5 text-left">
                <p className="text-sm font-semibold text-gray-700 mb-2">Estimated Daily Calories (TDEE) by Activity Level:</p>
                <div className="space-y-2">
                  {activityLevels.map((a) => (
                    <div key={a.label} className="flex justify-between items-center text-sm bg-white border border-gray-100 rounded-lg px-3 py-2">
                      <span className="text-gray-600">{a.label}</span>
                      <span className="font-bold text-green-700">{Math.round(bmr * a.multiplier)} kcal</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <article className="bg-white rounded-2xl border border-gray-100 p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is BMR? Complete Guide to Basal Metabolic Rate</h2>
          <p className="text-gray-600">Your Basal Metabolic Rate (BMR) represents the minimum number of calories your body needs to sustain basic life functions while at complete rest. Think of it as the &quot;idle speed&quot; of your body&apos;s engine — the energy required for breathing, maintaining body temperature, circulating blood, and keeping your organs functioning.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">The Mifflin-St Jeor Formula</h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-4 text-sm font-mono text-green-800">
            <p><strong>Men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5</p>
            <p className="mt-2"><strong>Women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) − 161</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Factors That Affect Your BMR</h3>
          <ul className="text-gray-600 space-y-2">
            <li>🧬 <strong>Genetics:</strong> Natural metabolic rate varies from person to person, partly due to genetic factors.</li>
            <li>💪 <strong>Muscle mass:</strong> Muscle tissue burns more calories at rest than fat tissue. More muscle = higher BMR.</li>
            <li>📅 <strong>Age:</strong> BMR decreases with age, roughly 2–3% per decade after age 20.</li>
            <li>⚧ <strong>Sex:</strong> Men typically have higher BMR than women due to greater muscle mass.</li>
            <li>🌡️ <strong>Hormones:</strong> Thyroid hormones play a major role in regulating metabolic rate.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">BMR vs. TDEE: What&apos;s the Difference?</h3>
          <p className="text-gray-600">BMR is just your resting calorie need. Your Total Daily Energy Expenditure (TDEE) accounts for your activity level on top of BMR. To maintain your current weight, you should eat approximately your TDEE. To lose weight, eat 300–500 calories below TDEE. To gain weight, eat 300–500 calories above TDEE. Use our <a href="/calorie-calculator" className="text-green-600 hover:underline">Calorie Calculator</a> for a full TDEE breakdown.</p>
        </article>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">BMR Calculator – FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5 group">
                <summary className="font-semibold text-gray-700 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-green-600 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-500 text-sm mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }} />
    </>
  );
}
