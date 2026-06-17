import Link from "next/link";

interface CalculatorCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function CalculatorCard({ title, description, href, icon }: CalculatorCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all group cursor-pointer">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <span className="inline-block mt-4 text-sm text-green-600 font-medium group-hover:underline">
          Use Calculator →
        </span>
      </div>
    </Link>
  );
}
