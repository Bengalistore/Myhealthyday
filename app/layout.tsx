import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Healthy Day – Free Health Calculators",
  description:
    "Free health tools including BMI Calculator, BMR Calculator, Calorie Calculator, and Water Intake Calculator. Take charge of your health today.",
  metadataBase: new URL("https://myhealthyday.in"),
  openGraph: {
    title: "My Healthy Day – Free Health Calculators",
    description: "Free online health calculators for BMI, BMR, Calories, and Water Intake.",
    url: "https://myhealthyday.in",
    siteName: "My Healthy Day",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
