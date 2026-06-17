"use client";
import { useState } from "react";

export default function BMICalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-600" };
    if (bmi < 25) return { label: "Normal weight", color: "text-green-600" };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600" };
    return { label: "Obese", color: "text-red-600" };
  };

  const calculate = () => {
    let h = 0, w = parseFloat(weight);
    if (unit === "metric") {
      h = parseFloat(height) / 100;
    } else {
      h = (parseFloat(heightFt) * 12 + parseFloat(heightIn)) * 0.0254;
      w = w * 0.453592;
    }
    if (!h || !w) return;
    const result = w / (h * h);
    setBmi(parseFloat(result.toFixed(1)));
    setCategory(getCategory(result).label);
  };

  const cat = bmi ? getCategory(bmi) : null;

  const faqs = [
    { q: "What is BMI?", a: "BMI (Body Mass Index) is a numerical value calculated from your height and weight. It is widely used as a screening tool to identify potential weight-related health issues in adults." },
    { q: "Is BMI accurate for everyone?", a: "BMI is a useful population-level screening tool but has limitations. It may overestimate body fat in muscular individuals and underestimate it in older adults who have lost muscle mass." },
    { q: "What is a healthy BMI range?", a: "For most adults, a BMI between 18.5 and 24.9 is considered healthy. However, optimal ranges may differ slightly by ethnicity — for example, Asian populations have lower thresholds for health risks." },
    { q: "How often should I calculate my BMI?", a: "For general health monitoring, calculating your BMI every 3 to 6 months is sufficient. If you are on a diet or exercise program, monthly tracking can be helpful." },
    { q: "Can children use this BMI calculator?", a: "This calculator is designed for adults (18+). BMI for children is calculated differently using age- and sex-specific growth charts provided by the CDC." },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">BMI Calculator</h1>
          <p className="text-gray-500 text-sm mb-6">Calculate your Body Mass Index instantly. Free, accurate, and no sign-up needed.</p>

          {/* Unit Toggle */}
          <div className="flex gap-3 mb-6">
            {(["metric", "imperial"] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${unit === u ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {u === "metric" ? "Metric (kg/cm)" : "Imperial (lbs/ft)"}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"} className="calculator-input" />
            </div>
            {unit === "metric" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 175" className="calculator-input" />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                <div className="flex gap-2">
                  <input type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="ft" className="calculator-input" />
                  <input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="in" className="calculator-input" />
                </div>
              </div>
            )}
          </div>

          <button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition text-sm">
            Calculate BMI
          </button>

          {bmi && (
            <div className="result-box">
              <p className="text-gray-500 text-sm">Your BMI</p>
              <p className={`text-5xl font-bold mt-1 ${cat?.color}`}>{bmi}</p>
              <p className={`text-lg font-semibold mt-1 ${cat?.color}`}>{category}</p>
              <div className="mt-4 grid grid-cols-4 gap-1 text-xs">
                {[["< 18.5", "Underweight", "bg-blue-100 text-blue-700"], ["18.5–24.9", "Normal", "bg-green-100 text-green-700"], ["25–29.9", "Overweight", "bg-yellow-100 text-yellow-700"], ["≥ 30", "Obese", "bg-red-100 text-red-700"]].map(([range, label, cls]) => (
                  <div key={label} className={`rounded-lg p-2 ${cls}`}>
                    <div className="font-semibold">{label}</div>
                    <div className="text-xs opacity-80">{range}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Article */}
        <article className="prose prose-green max-w-none bg-white rounded-2xl border border-gray-100 p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is BMI? A Complete Guide</h2>
          <p className="text-gray-600">Body Mass Index (BMI) is one of the most widely used screening tools to assess whether a person&apos;s weight is appropriate for their height. Developed in the 1830s by Belgian mathematician Adolphe Quetelet, BMI has become a standard metric in public health and clinical settings worldwide.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How is BMI Calculated?</h3>
          <p className="text-gray-600">The BMI formula is simple:</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-4 font-mono text-center text-green-800 font-bold">
            BMI = Weight (kg) ÷ Height² (m²)
          </div>
          <p className="text-gray-600">For example, a person weighing 70 kg with a height of 1.75 m would have a BMI of: 70 ÷ (1.75 × 1.75) = <strong>22.9</strong> — which falls in the Normal range.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">BMI Categories (WHO Standards)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="p-3 text-left rounded-tl-lg">BMI Range</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left rounded-tr-lg">Health Risk</th>
                </tr>
              </thead>
              <tbody>
                {[["Below 18.5", "Underweight", "Increased risk (nutritional deficiency)"], ["18.5 – 24.9", "Normal Weight", "Low risk"], ["25.0 – 29.9", "Overweight", "Moderate risk"], ["30.0 – 34.9", "Obese Class I", "High risk"], ["35.0 – 39.9", "Obese Class II", "Very high risk"], ["40.0 and above", "Obese Class III", "Extremely high risk"]].map(([range, cat, risk], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 border-b border-gray-100 font-medium">{range}</td>
                    <td className="p-3 border-b border-gray-100">{cat}</td>
                    <td className="p-3 border-b border-gray-100 text-gray-500">{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Benefits of Tracking BMI</h3>
          <ul className="text-gray-600 space-y-2">
            <li>✅ <strong>Early detection:</strong> Identifies potential weight-related health risks before symptoms appear.</li>
            <li>✅ <strong>Simple and free:</strong> Requires only weight and height — no lab tests needed.</li>
            <li>✅ <strong>Population-level tracking:</strong> Used by governments and health organizations to monitor public health trends.</li>
            <li>✅ <strong>Goal setting:</strong> Helps individuals set realistic weight management goals.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Limitations of BMI</h3>
          <p className="text-gray-600">While BMI is a useful starting point, it has well-documented limitations:</p>
          <ul className="text-gray-600 space-y-2 mt-2">
            <li>⚠️ <strong>Muscle vs. fat:</strong> Athletes with high muscle mass may be classified as overweight despite having low body fat.</li>
            <li>⚠️ <strong>Age differences:</strong> Older adults may have a "normal" BMI while carrying excess body fat due to muscle loss.</li>
            <li>⚠️ <strong>Ethnic variations:</strong> Research shows that health risks begin at lower BMI values in South Asian and East Asian populations.</li>
            <li>⚠️ <strong>Sex differences:</strong> Women naturally carry more body fat than men at the same BMI.</li>
            <li>⚠️ <strong>Fat distribution:</strong> BMI doesn&apos;t account for where fat is stored. Abdominal fat is more dangerous than fat stored in the hips.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What to Do With Your BMI Result</h3>
          <p className="text-gray-600">If your BMI falls outside the normal range, don&apos;t panic. BMI is a screening tool, not a diagnosis. The next step is to consult a healthcare professional who may recommend additional assessments like waist circumference measurement, body fat percentage testing, or blood work to get a complete picture of your health.</p>
          <p className="text-gray-600 mt-2">For those in the normal range, maintaining a balanced diet, regular physical activity, and adequate sleep are key pillars of long-term health. Use our <a href="/calorie-calculator" className="text-green-600 hover:underline">Calorie Calculator</a> and <a href="/water-intake-calculator" className="text-green-600 hover:underline">Water Intake Calculator</a> for a more complete health profile.</p>
        </article>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">BMI Calculator – FAQ</h2>
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

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "BMI Calculator",
            url: "https://myhealthyday.in/bmi-calculator",
            applicationCategory: "HealthApplication",
            operatingSystem: "All",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          },
        ]),
      }} />
    </>
  );
}

export { };
