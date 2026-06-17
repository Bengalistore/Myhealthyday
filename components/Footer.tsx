import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-16 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">🌿 MyHealthyDay</h3>
          <p className="text-sm text-green-200">
            Free health calculators and wellness tools to help you live a healthier life.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Tools</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/bmi-calculator" className="hover:text-white transition">BMI Calculator</Link></li>
            <li><Link href="/bmr-calculator" className="hover:text-white transition">BMR Calculator</Link></li>
            <li><Link href="/calorie-calculator" className="hover:text-white transition">Calorie Calculator</Link></li>
            <li><Link href="/water-intake-calculator" className="hover:text-white transition">Water Intake Calculator</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Info</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-green-400 mt-8">
        © {new Date().getFullYear()} MyHealthyDay.in — All Rights Reserved. This site is for informational purposes only.
      </div>
    </footer>
  );
}
