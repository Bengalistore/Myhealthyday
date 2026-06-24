import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | My Healthy Day",
  description: "Get in touch with the My Healthy Day team for questions, feedback, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Contact Us</h1>
      <p className="text-gray-500 mb-8 text-sm">Have a question, found an error We&apos;d love to hear from you.</p>

      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input type="text" placeholder="Enter your name" className="calculator-input" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" placeholder="you@email.com" className="calculator-input" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows={5} placeholder="Write your message here..." className="calculator-input resize-none"></textarea>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition text-sm">
            Send Message
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center">Or email us directly at: <a href="mailto:myhealthyday.in@gmail.com" className="text-green-600">myhealthyday.in@gmail.com</a></p>
      </div>
    </div>
  );
}
