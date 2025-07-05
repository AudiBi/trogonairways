import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


export const Navbar = () => {
        const { t } = useTranslation();
        const [menuOpen, setMenuOpen] = useState(false);
        const [ bookMenuOpen, setBookMenuOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState<boolean>(false);

        useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        
        return (
                <div>

                        {/* NAVBAR */}
                        <nav className={`fixed top-0 md:top-10 left-0 right-0 h-16 z-30 backdrop-blur-lg border-b ${
                                isScrolled
                                ? "bg-white/80 text-blue-700 border-gray-300"
                                : "bg-transparent text-white border-white/10"
                                }`}>
                                <div className="max-w-7xl mx-auto px-4 justify-between">
                                        <div className="flex justify-between items-center h-16">
                                                {/* Logo */}
                                                <Link to={"/"} className="flex items-center justify-center text-white gap-x-1.5" title="Link to Trogon Airways Homepage">
                                                <img className="w-[55px]" src="/assets/logo/trogon-bird-color.svg" alt="Trogon Bird" />
                                                <span className={`${ isScrolled ? "text-red-700" : "text-white"}`}>TROGON AIRWAYS</span>
                                                </Link>
                                                <div className={`hidden md:flex items-center space-x-4 ${ isScrolled ? "text-blue-900" : "text-white"}`}>
                                                        <Link to={"/"} className="hover:text-red-700">{t('home')}</Link>
                                                        <div className="relative group">
                                                                <button
                                                                className="flex items-center space-x-1"
                                                                onClick={() => setBookMenuOpen(!bookMenuOpen)}
                                                                >
                                                                <span>{t('book')}</span>
                                                                <i className="fa-solid fa-chevron-down text-xs mt-1"></i>
                                                                </button>
                                                                <div className="absolute left-0 mt-2 w-44 bg-white border border-white/10 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition duration-200 z-50"
                                                                onMouseLeave={() => setBookMenuOpen(false)}
                                                                >
                                                                <Link to="https://booking.trogonairways.com" className="block px-4 py-2 text-sm rounded-md text-blue-900 hover:bg-red-700 hover:text-white">{t('book_flight')}</Link>
                                                                <Link to="https://booking.trogonairways.com" className="block px-4 py-2 text-sm rounded-md text-blue-900 hover:bg-red-700 hover:text-white">{t('book_helicopter')}</Link>
                                                                </div>
                                                                </div>
                                                        <Link to={"/info"} className="hover:text-red-700">{t('travel_info')}</Link>
                                                        <Link to={"/support"} className="hover:text-red-700">{t('support')}</Link>
                                                </div>


                                                {/* Mobile Menu Button */}
                                                <div className="md:hidden">
                                                        <button
                                                                onClick={() => setMenuOpen((prev) => !prev)}
                                                                className="text-gray-300 focus:outline-none"
                                                                aria-label="Toggle Menu">
                                                                <svg
                                                                        className="w-6 h-6"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        {menuOpen ? (
                                                                                <path
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth={2}
                                                                                        d="M6 18L18 6M6 6l12 12"
                                                                                />
                                                                        ) : (
                                                                                <path
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth={2}
                                                                                        d="M4 6h16M4 12h16M4 18h16"
                                                                                />
                                                                        )}
                                                                </svg>
                                                        </button>
                                                </div>
                                        </div>

                                        {/*Mobile Menu */}
                                        {menuOpen && (
                                                <div className="md:hidden bg-[rgb(252,250,250)]">
                                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                                                <Link
                                                                        to={"/"}
                                                                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-white hover:bg-red-700"
                                                                >
                                                                       {t(' home')}
                                                                </Link>
                                                                <div>
                                                                        <button
                                                                        onClick={() => setBookMenuOpen(!bookMenuOpen)}
                                                                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-white hover:bg-red-700"
                                                                        >
                                                                        <span>{t('book')}</span>
                                                                        <i className={`fa-solid ${bookMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
                                                                        </button>

                                                                        {bookMenuOpen && (
                                                                        <div className="pl-6">
                                                                        <Link to="https://booking.trogonairways.com" className="block px-3 py-2 text-blue-700 hover:text-red-700">{t('book_flight')}</Link>
                                                                        <Link to="https://booking.trogonairways.com" className="block px-3 py-2 text-blue-700 hover:text-red-700">{t('book_helicopter')}</Link>
                                                                        </div>
                                                                        )}
                                                                </div>
                                                                <Link
                                                                        to={"/info"}
                                                                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-white hover:bg-red-700"
                                                                >
                                                                        {t('travel_info')}
                                                                </Link>
                                                                <Link
                                                                        to={"/support"}
                                                                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-white hover:bg-red-700"
                                                                >
                                                                        {t('support')}
                                                                </Link>
                                                        </div>
                                                </div>
                                        )}

                                </div>
                        </nav>
                </div>
        )
}

