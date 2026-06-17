import CalculatorCard from "@/components/CalculatorCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Healthy Day – Free BMI, BMR & Calorie Calculators",
  description:
    "Free online health calculators: BMI Calculator, BMR Calculator, Calorie Calculator, Water Intake Calculator. Get accurate health insights instantly.",
};

const faqs = [
  {
    q: "Are these calculators accurate?",
    a: "Our calculators use internationally accepted formulas (WHO, Mifflin-St Jeor). They provide excellent estimates but should not replace professional medical advice.",
  },
  {
    q: "Is my data stored?",
    a: "No. All calculations happen directly in your browser. We do not store, collect, or share any personal health data.",
  },
  {
    q: "Who should use these tools?",
    a: "These tools are designed for healthy adults looking to understand their health metrics. Pregnant women, children, and individuals with medical conditions should consult a doctor.",
  },
  {
    q: "How often should I check my BMI?",
    a: "For most adults, checking BMI every 3–6 months is sufficient unless you are actively changing your diet or exercise routine.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-300 text-sm font-medium uppercase tracking-widest mb-3">Free Health Tools</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-5">
            Know Your Numbers.<br />Live Healthier.
          </h1>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Instantly calculate your BMI, BMR, daily calorie needs, and water intake — no sign-up required.
          </p>
          <a
            href="#tools"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-3 rounded-full transition text-sm"
          >
            Explore Tools ↓
          </a>
        </div>
      </section>

      {/* Popular Tools */}
      <section id="tools" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Popular Health Calculators</h2>
        <p className="text-center text-gray-500 mb-10 text-sm">Science-backed tools for everyday wellness</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CalculatorCard
            title="BMI Calculator"
            description="Check if your weight is healthy for your height using Body Mass Index."
            href="/bmi-calculator"
            icon="⚖️"
          />
          <CalculatorCard
            title="BMR Calculator"
            description="Find your Basal Metabolic Rate — calories your body burns at rest."
            href="/bmr-calculator"
            icon="🔥"
          />
          <CalculatorCard
            title="Calorie Calculator"
            description="Calculate your daily calorie needs based on activity level and goals."
            href="/calorie-calculator"
            icon="🥗"
          />
          <CalculatorCard
            title="Water Intake Calculator"
            description="Find out how much water you should drink every day."
            href="/water-intake-calculator"
            icon="💧"
          />
        </div>
      </section>

      {/* Latest Health Articles */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Latest Health Articles</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Evidence-based health tips for your daily life</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Your BMI: What the Numbers Really Mean",
                desc: "BMI is a useful screening tool, but it doesn't tell the whole story. Learn how to interpret your result correctly.",
                link: "/bmi-calculator",
                tag: "Weight",
              },
              {
                title: "How Many Calories Do You Actually Need?",
                desc: "Calorie needs vary widely based on age, sex, weight, and activity level. Here's how to find your number.",
                link: "/calorie-calculator",
                tag: "Nutrition",
              },
              {
                title: "The Science of Hydration: How Much Water Is Enough?",
                desc: "The '8 glasses a day' rule is outdated. Your actual water needs depend on several personal factors.",
                link: "/water-intake-calculator",
                tag: "Hydration",
              },
            ].map((article) => (
              <a key={article.title} href={article.link} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition block">
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">{article.tag}</span>
                <h3 className="font-bold text-gray-800 mt-3 mb-2 text-base">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.desc}</p>
                <span className="text-sm text-green-600 mt-3 inline-block font-medium">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
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

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
