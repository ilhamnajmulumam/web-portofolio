import Image from 'next/image';
import { ChevronDown, Linkedin, Twitter } from 'lucide-react';

export default function HomeSection() {
    return (
        <section
            id="home"
            className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-indigo-50 to-slate-100"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                            <span className="block">Hello,</span>
                            <span className="text-indigo-600 block mt-2">
                                John Doe
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Full Stack Developer specializing in modern web
                            technologies
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="#projects"
                                className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-6 rounded-lg border border-indigo-600 transition-colors"
                            >
                                View Projects
                            </a>
                        </div>
                        <div className="mt-8 flex gap-4 justify-center md:justify-start">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-indigo-600 transition-colors"
                            >
                                <div size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-indigo-600 transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-indigo-600 transition-colors"
                            >
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <Image
                                    src="/img/ilham.png"
                                    alt="John Doe"
                                    width={320}
                                    height={320}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                                <p className="font-bold text-indigo-600">
                                    5+ Years Experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <a href="#about" className="animate-bounce">
                        <ChevronDown size={32} className="text-gray-500" />
                    </a>
                </div>
            </div>
        </section>
    );
}
