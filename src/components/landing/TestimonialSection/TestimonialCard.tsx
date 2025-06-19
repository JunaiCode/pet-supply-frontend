import { FC } from "react";

interface TestimonialCardProps {
  name: string;
  quote: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({ name, quote }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-pink-500 mb-4"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M32 28c-6 0-12 4-12 10s6 10 12 10 12-4 12-10-6-10-12-10z" />

        <circle cx="20" cy="20" r="4" />
        <circle cx="28" cy="14" r="4" />
        <circle cx="36" cy="14" r="4" />
        <circle cx="44" cy="20" r="4" />
      </svg>
      <p className="text-lg text-gray-700 mb-4 italic">"{quote}"</p>
      <p className="text-sm font-semibold text-pink-600">{name}</p>
    </div>
  );
};
