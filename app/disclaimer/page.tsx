import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | My Healthy Day",
  description: "Read the disclaimer for myhealthyday.in. Our tools are for informational purposes only and do not constitute medical advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Disclaimer</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: June 2025</p>

      <div className="space-y-6 text-gray-600">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
          <p className="font-semibold text-yellow-800">⚠️ Not Medical Advice</p>
          <p className="text-sm mt-2 text-yellow-700">The information and tools provided on myhealthyday.in are intended for general informational and educational purposes only. Nothing on this website constitutes medical advice, diagnosis, or treatment.</p>
        </div>

        <p>Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition, dietary changes, or fitness program. Never disregard professional medical advice or delay seeking it because of something you have read on this website.</p>

        <h2 className="text-xl font-bold text-gray-800 mt-4">Accuracy of Information</h2>
        <p>While we strive to provide accurate and up-to-date information, My Healthy Day makes no warranties or representations of any kind regarding the completeness, accuracy, or reliability of the information on this site. Health science evolves rapidly, and some information may become outdated.</p>

        <h2 className="text-xl font-bold text-gray-800 mt-4">Calculator Results</h2>
        <p>Our calculators use widely accepted formulas (such as the Mifflin-St Jeor equation for BMR and WHO standards for BMI), but results are estimates only. Individual results may vary based on factors our calculators cannot account for, including medical conditions, medications, and genetic factors.</p>

        <h2 className="text-xl font-bold text-gray-800 mt-4">External Links</h2>
        <p>This site may contain links to third-party websites. We are not responsible for the content or practices of any linked site.</p>

        <h2 className="text-xl font-bold text-gray-800 mt-4">Contact</h2>
        <p>For questions about this disclaimer, contact us at <a href="mailto:hello@myhealthyday.in" className="text-green-600">hello@myhealthyday.in</a>.</p>
      </div>
    </div>
  );
}
