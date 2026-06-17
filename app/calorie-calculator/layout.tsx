import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calorie Calculator | My Healthy Day",
  description: "Free daily calorie calculator. Find out how many calories you need per day to lose weight, maintain, or gain weight based on your activity level.",
  alternates: { canonical: "https://myhealthyday.in/calorie-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
