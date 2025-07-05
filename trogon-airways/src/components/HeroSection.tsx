import { Link } from "react-router-dom";
import  Topbar  from "./Topbar";
import { Navbar } from "./Navbar";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="/assets/bg/trogon-airplane-night.jpeg"
          alt="Trogon Airways at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950 opacity-60"></div>
      </div>

      {/* Topbar + Navbar dans un parent */}
      <div className="relative z-10">
        <Topbar />
        <Navbar />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('lets_world_together')}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          {t('we_fly_to_connect')}
        </p>
        <Link
          to="https://booking.trogonairways.com"
          className="bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          {t('book_flight')}
        </Link>
      </div>
    </section>
  )
}


