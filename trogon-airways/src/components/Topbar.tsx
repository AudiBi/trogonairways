import React from "react";
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

export const Topbar: React.FC = () => {
   const { t } = useTranslation();
    
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
          useEffect(() => {
          const handleScroll = () => {
          setIsScrolled(window.scrollY > 400);
          };
  
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
          }, []);
    return (
      <div className="hidden md:block">
        <div className={`fixed top-0 left-0 right-0 h-10 z-40 text-white text-sm py-2 px-4 flex justify-between items-center border-b border-white backdrop-blur-lg  ${isScrolled ? "bg-blue-950" : "bg-transparent text-white border-white/10"}`}>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a href="#" className="hover:text-gray-200">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="hover:text-gray-200">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="hover:text-gray-200">
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </a>
              <span className="h-5 border-l border-gray-200"></span>
              <a href="mailto:contact@trogonairways.com" className="hover:text-white">
                contact@trogonairways.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+50933410404" className="hover:text-white">
              <i className="fa-solid fa-phone pr-2"></i> +509 3341 0404
            </a>
            {/* <a href="#" className="hover:text-white">
              <i className="fa-solid fa-bell pr-2"></i>
            </a> */}
            
            <a href="#" className="hover:text-white">
              <i className="fa-solid fa-user pr-2"></i> {t('login')}
            </a>
            {/* <a href="#" className="hover:text-white">
              <i className="fa-solid fa-cart-shopping pr-2"></i>
            </a> */}
            <span className="mb-6"><LanguageSwitcher /></span> 
          </div>
        </div>
    </div>
  )
}
export default Topbar;
