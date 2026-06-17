import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMR Calculator | My Healthy Day",
  description: "Free BMR Calculator using the Mifflin-St Jeor formula. Find your Basal Metabolic Rate and understand how many calories your body burns at rest.",
  alternates: { canonical: "https://myhealthyday.in/bmr-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
