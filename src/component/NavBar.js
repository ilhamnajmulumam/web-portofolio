'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-indigo-600">
                    Dev<span className="text-gray-800">Portfolio</span>
                </a>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {[
                        'Home',
                        'About',
                        'Skills',
                        'Projects',
                        'Experience',
                        'Contact',
                    ].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {[
                            'Home',
                            'About',
                            'Skills',
                            'Projects',
                            'Experience',
                            'Contact',
                        ].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
