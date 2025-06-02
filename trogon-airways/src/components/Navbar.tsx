import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {
        const [menuOpen, setMenuOpen] = useState(false);
        return (
                <div>
                        <nav className=" fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
                                <div className="max-w-7xl mx-auto px-4 justify-between">
                                        <div className="flex justify-between items-center h-16">
                                                {/*Desktop Menu */}
                                                <Link to={"/"} className="flex items-center justify-center text-white" title="Link to Trogon Airways Homepage">
                                                        <img className="w-[55px]" src={"/src/assets/trogon-bird-color.svg"} alt="Trogon Bird" />
                                                        TROGON AIRWAYS
                                                </Link>
                                                <div className="hidden md:flex items-center space-x-8">
                                                        {/* Social Links */}
                                                        <div className="hiddenjustify-end space-x-4">
                                                                <Link to={"https://x.com/"} className="text-gray-300 hover:text-white">
                                                                        <i className="fa-brands fa-x-twitter" title="Trogon Airways on X"></i>
                                                                </Link>
                                                        </div>
                                                        {/* Phone */}
                                                        <a href="mailto:contact@trogonairways.com" title="Email us">contact@trogonairways.com</a>
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
                                                <div className="md:hidden bg-[rgba(10,10,10,0.9)]">
                                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                                                <Link
                                                                        to={"/"}
                                                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                                                >
                                                                        Home
                                                                </Link>
                                                        </div>
                                                </div>
                                        )}

                                </div>
                        </nav>
                </div>
        )
}

