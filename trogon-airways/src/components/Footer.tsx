import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-10 pb-6 px-4 md:px-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LOGO + DESCRIPTION */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src="/assets/logo/trogon-bird-color.svg" alt="Trogon Airways" className="w-12 mr-2" />
            <span className="text-xl font-bold">Trogon Airways</span>
          </Link>
          <p className="text-sm text-gray-300">
           {t('premium_air_travel')}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t('quick_links')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-200">{t('home')}</Link></li>
            <li><Link to="https://booking.trogonairways.com" className="hover:text-gray-200">{t('book_flight')}</Link></li>
            <li><Link to="/info" className="hover:text-gray-200">{t('travel_info')}</Link></li>
            <li><Link to="/support" className="hover:text-gray-200">{t('support')}</Link></li>
          </ul>
        </div>

        {/* SUBSCRIBE NEWSLETTER */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t('subscribe')}</h4>
          <p className="text-sm text-gray-300 mb-2">{t('subscribe_description')}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
            <input
              type="email"
              required
              placeholder={t('enter_email')}
              className="px-3 py-2 rounded text-white focus:outline-none focus:ring-2 focus:white"
            />
            <button
              type="submit"
              className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              {t('subscribe')}
            </button>
          </form>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t('ontact')}</h4>
          <p className="text-sm mb-2">
            <i className="fa-solid fa-envelope mr-2"></i>
            <a href="mailto:contact@trogonairways.com" className="hover:underline">contact@trogonairways.com</a>
          </p>
          <p className="text-sm mb-2">
            <i className="fa-solid fa-phone mr-2"></i>
            <a href="tel:+50933410404" className="hover:underline">+509 3341 0404</a>
          </p>
          <div className="mb-4">
            <LanguageSwitcher />
          </div>
          <div className="flex space-x-3">
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <i className="fa-brands fa-x-twitter text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {currentYear} Trogon Airways. {t('all_rights_reserved')}
      </div>
    </footer>
  );
};
