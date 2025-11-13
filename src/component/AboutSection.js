'use client';

import { BookOpen, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <p className="text-lg text-gray-700 mb-6">
                                I`&#39`m{' '}
                                <span className="font-semibold">
                                    Ilham Najmul Umam
                                </span>
                                , a passionate{' '}
                                <span className="font-semibold">
                                    Junior Web Developer
                                </span>
                                from Kebumen, Central Java. I focus on building
                                modern, responsive, and user-friendly web
                                applications using technologies like
                                <span className="font-semibold">
                                    {' '}
                                    Next.js, React.js, Tailwind CSS, JavaScript,
                                    MySQL, and GitHub
                                </span>
                                .
                            </p>

                            <p className="text-lg text-gray-700 mb-6">
                                With{' '}
                                <span className="font-semibold">
                                    2 years of experience
                                </span>{' '}
                                in web development, I enjoy turning creative
                                ideas into interactive web solutions. My journey
                                began during my college years, where I developed
                                a strong interest in web technologies and
                                front-end engineering.
                            </p>

                            <p className="text-lg text-gray-700">
                                As a{' '}
                                <span className="font-semibold">
                                    Fresh Graduate
                                </span>
                                , I am open to new opportunities, including
                                freelance or collaborative web projects. Outside
                                of coding, I love{' '}
                                <span className="font-semibold">
                                    drawing, playing badminton, and photography
                                </span>{' '}
                                — which help me stay creative and balanced.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="flex items-center">
                                    <MapPin
                                        size={20}
                                        className="text-indigo-600 mr-2"
                                    />
                                    <span className="text-gray-700">
                                        Weton Kulon, Puring, Kebumen, Central
                                        Java
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <BookOpen
                                        size={20}
                                        className="text-indigo-600 mr-2"
                                    />
                                    <span className="text-gray-700">
                                        Informatics Engineering, UMNU Kebumen
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar
                                        size={20}
                                        className="text-indigo-600 mr-2"
                                    />
                                    <span className="text-gray-700">
                                        Available for freelance & collaboration
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    Education
                                </h3>

                                <div className="mb-6 border-l-2 border-indigo-600 pl-4">
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        Bachelor of Informatics Engineering
                                    </h4>
                                    <p className="text-gray-600">
                                        Universitas Ma’arif Nahdlatul Ulama
                                        Kebumen
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        2021 - 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.h1>
        </section>
    );
}
