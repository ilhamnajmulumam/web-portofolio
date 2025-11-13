'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <a
                            href="#"
                            className="text-2xl font-bold text-indigo-400"
                        >
                            Dev<span className="text-white">Portfolio</span>
                        </a>
                        <p className="mt-2 text-gray-400 max-w-md">
                            Crafting modern web experiences with cutting-edge
                            technologies.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <button
                            onClick={scrollToTop}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors mb-4"
                        >
                            <ArrowUp size={20} />
                        </button>
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} John Doe. All
                            rights reserved.
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>
                        Designed and built with{' '}
                        <span className="text-red-500">♥</span> using React and
                        Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
