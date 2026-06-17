import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://myhealthyday.in", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://myhealthyday.in/bmi-calculator", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://myhealthyday.in/bmr-calculator", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://myhealthyday.in/calorie-calculator", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://myhealthyday.in/water-intake-calculator", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://myhealthyday.in/about", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: "https://myhealthyday.in/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: "https://myhealthyday.in/privacy-policy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://myhealthyday.in/disclaimer", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
