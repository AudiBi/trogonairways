import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const HeroSections: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "/assets/bg/trogon-airplane-night.jpeg",
}) => {
  return (
    <div
      className="w-full bg-cover bg-center text-white py-24 px-4 relative h-[50vh] overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center  flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl mb-6 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
};
