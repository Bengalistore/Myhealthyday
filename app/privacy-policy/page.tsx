import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | My Healthy Day",
  description: "Read the privacy policy for myhealthyday.in — how we handle your data, cookies, and personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14 prose prose-gray">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: June 2025</p>

      <p className="text-gray-600">This Privacy Policy explains how My Healthy Day (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, and protects your information when you visit myhealthyday.in.</p>

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">1. Information We Collect</h2>
      <p className="text-gray-600"><strong>Health Calculator Data:</strong> All health calculations (BMI, BMR, calories, water intake) are performed entirely in your browser. We do not collect, store, or transmit any personal health data you enter into our calculators.</p>
      <p className="text-gray-600 mt-2"><strong>Analytics:</strong> We may use privacy-focused analytics (such as Google Analytics) to understand aggregate traffic patterns. This data is anonymized and does not identify individual users.</p>
      <p className="text-gray-600 mt-2"><strong>Contact Forms:</strong> If you contact us via our contact form, we collect your name and email address solely to respond to your inquiry.</p>

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">2. Cookies</h2>
      <p className="text-gray-600">We may use cookies for analytics purposes. You can disable cookies in your browser settings. Our core calculator tools function without cookies.</p>

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">3. Third-Party Services</h2>
      <p className="text-gray-600">Our website may use Google Analytics and Google AdSense, which have their own privacy policies. We encourage you to review them at policies.google.com.</p>

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">4. Your Rights</h2>
      <p className="text-gray-600">You have the right to request deletion of any personal data we may hold (e.g., from contact form submissions). Email us at hello@myhealthyday.in.</p>

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">5. Changes to This Policy</h2>
      <p className="text-gray-600">We may update this policy periodically. Changes will be posted on this page with an updated date.</p>

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">6. Contact</h2>
      <p className="text-gray-600">Questions about this policy? Contact us at <a href="mailto:hello@myhealthyday.in" className="text-green-600">hello@myhealthyday.in</a>.</p>
    </div>
  );
}
