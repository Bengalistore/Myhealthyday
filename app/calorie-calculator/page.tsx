"use client";
import { useState } from "react";

export default function CalorieCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<{ maintain: number; lose: number; gain: number } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height), a = parseFloat(age), act = parseFloat(activity);
    if (!w || !h || !a) return;
    let bmr = gender === "male" ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
    const tdee = Math.round(bmr * act);
    setResult({ maintain: tdee, lose: tdee - 500, gain: tdee + 500 });
  };

  const faqs = [
    { q: "How many calories do I need per day?", a: "The average adult needs 1,600–3,000 calories per day, depending on age, sex, weight, height, and activity level. Use this calculator to find your exact number." },
    { q: "How many calories should I eat to lose weight?", a: "A safe and sustainable calorie deficit for weight loss is 500–750 calories per day below your TDEE, resulting in approximately 0.5–0.75 kg of fat loss per week." },
    { q: "What happens if I eat below my BMR?", a: "Eating below your BMR can cause muscle loss, nutrient deficiencies, fatigue, and hormonal disruption. Never eat below your BMR without medical supervision." },
    { q: "Are all calories the same?", a: "While a calorie is a unit of energy, the source matters. Calories from whole foods like fruits, vegetables, and lean proteins provide nutrients; calories from ultra-processed foods often do not." },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Calorie Calculator</h1>
          <p className="text-gray-500 text-sm mb-6">Calculate your daily calorie needs based on your goal and activity level.</p>

          <div className="flex gap-3 mb-5">
            {(["male", "female"] as const).map((g) => (
              <button key={g} onClick={() => setGender(g)} className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition ${gender === g ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600"}`}>{g}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="years" className="calculator-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="kg" className="calculator-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="cm" className="calculator-input" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Activity Level</label>
            <select value={activity} onChange={(e) => setActivity(e.target.value)} className="calculator-input">
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly active (exercise 1–3 days/week)</option>
              <option value="1.55">Moderately active (exercise 3–5 days/week)</option>
              <option value="1.725">Very active (exercise 6–7 days/week)</option>
              <option value="1.9">Extra active (very hard exercise / physical job)</option>
            </select>
          </div>

          <button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition text-sm">Calculate Calories</button>

          {result && (
            <div className="result-box text-left">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Lose Weight", kcal: result.lose, color: "border-blue-300 bg-blue-50", textColor: "text-blue-700" },
                  { label: "Maintain Weight", kcal: result.maintain, color: "border-green-300 bg-green-50", textColor: "text-green-700" },
                  { label: "Gain Weight", kcal: result.gain, color: "border-orange-300 bg-orange-50", textColor: "text-orange-700" },
                ].map((item) => (
                  <div key={item.label} className={`border rounded-xl p-4 text-center ${item.color}`}>
                    <p className="text-xs font-medium text-gray-500">{item.label}</p>
                    <p className={`text-3xl font-bold mt-1 ${item.textColor}`}>{item.kcal}</p>
                    <p className="text-xs text-gray-400 mt-1">kcal/day</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">Based on Mifflin-St Jeor equation. ±500 kcal for weight change goals.</p>
            </div>
          )}
        </div>

        <article className="bg-white rounded-2xl border border-gray-100 p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How Many Calories Do You Need? A Complete Guide</h2>
          <p className="text-gray-600">Understanding your daily calorie needs is the foundation of any successful nutrition plan. Whether your goal is weight loss, muscle building, or simply maintaining good health, knowing your calorie requirements helps you make informed choices about what and how much to eat.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What is a Calorie?</h3>
          <p className="text-gray-600">A calorie (technically a kilocalorie, or kcal) is a unit of energy. In nutrition, it measures the amount of energy your body can extract from food and beverages. Your body uses this energy for everything from breathing and heart pumping at rest to exercise and digestion.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Calories for Weight Loss, Maintenance, and Gain</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
            {[["🔵 Weight Loss", "Eat 500 kcal/day below TDEE. Expect ~0.5 kg fat loss per week. Never go below BMR."], ["🟢 Maintenance", "Match your TDEE. The body stays in energy balance, weight stays stable."], ["🟠 Muscle Gain", "Eat 300–500 kcal above TDEE with adequate protein (1.6–2.2 g/kg body weight)."]].map(([title, desc]) => (
              <div key={title as string} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-700 mb-1">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Macronutrient Balance</h3>
          <p className="text-gray-600">Calories come from three macronutrients:</p>
          <ul className="text-gray-600 space-y-2 mt-2">
            <li>🥩 <strong>Protein:</strong> 4 kcal/g — Builds and repairs muscle, keeps you full</li>
            <li>🍞 <strong>Carbohydrates:</strong> 4 kcal/g — Primary energy source for the brain and muscles</li>
            <li>🥑 <strong>Fats:</strong> 9 kcal/g — Essential for hormones, brain function, and nutrient absorption</li>
          </ul>
          <p className="text-gray-600 mt-3">A typical balanced diet is 45–65% carbs, 20–35% fats, and 10–35% protein. These ratios shift based on your goal — high-protein diets are often preferred for weight loss and muscle building.</p>
        </article>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Calorie Calculator – FAQ</h2>
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
