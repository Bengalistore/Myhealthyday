import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Intake Calculator | My Healthy Day",
  description: "Free daily water intake calculator. Find out exactly how much water you should drink per day based on your weight and activity level.",
  alternates: { canonical: "https://myhealthyday.in/water-intake-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
