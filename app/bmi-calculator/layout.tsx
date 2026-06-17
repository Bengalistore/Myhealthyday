import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator | My Healthy Day",
  description: "Free BMI Calculator to check your Body Mass Index instantly. Supports metric and imperial units. Includes BMI chart and health guide.",
  alternates: { canonical: "https://myhealthyday.in/bmi-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
