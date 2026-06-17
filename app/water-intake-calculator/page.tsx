"use client";
import { useState } from "react";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [climate, setClimate] = useState("temperate");
  const [result, setResult] = useState<{ liters: number; glasses: number } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w) return;
    let base = w * 0.033; // 33ml per kg
    if (activity === "active") base += 0.5;
    if (activity === "very_active") base += 1.0;
    if (climate === "hot") base += 0.5;
    const liters = parseFloat(base.toFixed(1));
    const glasses = Math.round(liters / 0.25); // 250ml per glass
    setResult({ liters, glasses });
  };

  const faqs = [
    { q: "How much water should I drink per day?", a: "Most adults need between 2 and 3.5 litres of water per day from all sources (drinks and food). However, the exact amount depends on body weight, activity level, climate, and overall health." },
    { q: "Does the '8 glasses a day' rule apply to everyone?", a: "No. The '8×8 rule' (eight 8-ounce glasses) is a rough guideline, not a scientific recommendation. Individual needs vary significantly. A heavier, more active person in a hot climate may need twice this amount." },
    { q: "Can I drink too much water?", a: "Yes, a condition called hyponatremia (water intoxication) can occur when you drink excessively, diluting sodium levels in the blood. This is rare but more common in endurance athletes." },
    { q: "Does coffee count toward water intake?", a: "Moderate coffee consumption (up to 3–4 cups/day) does contribute to hydration. Despite its mild diuretic effect, the water content outweighs fluid loss for most people." },
    { q: "What are signs of dehydration?", a: "Early signs include dark urine, thirst, dry mouth, and fatigue. Severe dehydration causes dizziness, rapid heartbeat, and confusion. A pale yellow urine color generally indicates good hydration." },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Water Intake Calculator</h1>
          <p className="text-gray-500 text-sm mb-6">Find your ideal daily water intake based on your weight, activity, and climate.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 65" className="calculator-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Activity Level</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value)} className="calculator-input">
                <option value="sedentary">Sedentary (mostly sitting)</option>
                <option value="moderate">Moderate (light exercise)</option>
                <option value="active">Active (regular exercise)</option>
                <option value="very_active">Very Active (intense daily training)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Climate</label>
              <select value={climate} onChange={(e) => setClimate(e.target.value)} className="calculator-input">
                <option value="cold">Cold</option>
                <option value="temperate">Temperate</option>
                <option value="hot">Hot / Humid</option>
              </select>
            </div>
          </div>

          <button onClick={calculate} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition text-sm">Calculate Water Intake</button>

          {result && (
            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <p className="text-gray-500 text-sm">Daily Recommended Water Intake</p>
              <p className="text-5xl font-bold text-blue-600 mt-1">{result.liters}L</p>
              <p className="text-gray-500 text-sm mt-1">≈ {result.glasses} glasses (250ml each)</p>
              <div className="flex justify-center gap-1 mt-4 flex-wrap">
                {Array.from({ length: result.glasses }).map((_, i) => (
                  <span key={i} className="text-2xl">💧</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <article className="bg-white rounded-2xl border border-gray-100 p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How Much Water Should You Drink? A Science-Backed Guide</h2>
          <p className="text-gray-600">Water is the most essential nutrient for human survival. Every cell, tissue, and organ in your body depends on water to function properly. Yet hydration is one of the most overlooked aspects of daily health. Most people underestimate how much they need, and chronic mild dehydration is surprisingly common.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Why Hydration Matters</h3>
          <ul className="text-gray-600 space-y-2">
            <li>🧠 <strong>Brain function:</strong> Even 1–2% dehydration can impair concentration, memory, and mood.</li>
            <li>🏃 <strong>Physical performance:</strong> Dehydration reduces endurance, strength, and coordination.</li>
            <li>🫀 <strong>Heart health:</strong> Blood becomes thicker when dehydrated, making the heart work harder.</li>
            <li>🌡️ <strong>Temperature regulation:</strong> Sweating relies on adequate hydration to cool the body.</li>
            <li>🦷 <strong>Digestion:</strong> Water aids in nutrient absorption, waste elimination, and preventing constipation.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Factors That Increase Water Needs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
            {[["☀️ Hot climate", "Sweat losses increase significantly"], ["🏋️ Exercise", "500–1000ml extra per hour of training"], ["🤒 Illness", "Fever, vomiting, diarrhea cause rapid fluid loss"], ["🤰 Pregnancy", "Additional 300ml/day recommended"]].map(([factor, desc]) => (
              <div key={factor as string} className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
                <p className="font-semibold text-gray-700 text-sm">{factor}</p>
                <p className="text-xs text-gray-400 mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Tips to Stay Hydrated</h3>
          <ul className="text-gray-600 space-y-2">
            <li>✅ Start your morning with a large glass of water before coffee or tea.</li>
            <li>✅ Carry a reusable water bottle and aim to refill it a set number of times daily.</li>
            <li>✅ Set hourly reminders if you tend to forget to drink.</li>
            <li>✅ Eat water-rich foods: cucumber, watermelon, oranges, and lettuce are 90%+ water.</li>
            <li>✅ Check your urine color: pale yellow = well hydrated; dark yellow = drink more water.</li>
          </ul>
        </article>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Water Intake Calculator – FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5 group">
                <summary className="font-semibold text-gray-700 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-500 text-xl group-open:rotate-45 transition-transform">+</span>
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
