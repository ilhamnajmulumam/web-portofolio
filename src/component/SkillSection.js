import React from 'react';
import {
    Code,
    Database,
    Layout,
    Server,
    Smartphone,
    Terminal,
} from 'lucide-react';
import Image from 'next/image';
export default function SkillsSection() {
    const skills = [
        {
            category: 'Frontend',
            icon: <Layout className="w-8 h-8 text-indigo-600" />,
            items: [
                {
                    name: 'HTML',
                    level: 95,
                },
                {
                    name: 'CSS',
                    level: 90,
                },
                {
                    name: 'JavaScript',
                    level: 92,
                },
                {
                    name: 'React.js',
                    level: 88,
                },
                {
                    name: 'Next.js',
                    level: 85,
                },
                {
                    name: 'Tailwind CSS',
                    level: 90,
                },
            ],
        },
        {
            category: 'Backend',
            icon: <Server className="w-8 h-8 text-indigo-600" />,
            items: [
                {
                    name: 'Node.js',
                    level: 80,
                },
                {
                    name: 'Express.js',
                    level: 82,
                },
                {
                    name: 'MySQL',
                    level: 85,
                },
                {
                    name: 'RESTful APIs',
                    level: 88,
                },
            ],
        },
        {
            category: 'Tools & Others',
            icon: <Terminal className="w-8 h-8 text-indigo-600" />,
            items: [
                {
                    name: 'Git',
                    level: 88,
                },
                {
                    name: 'Webpack',
                    level: 75,
                },
                {
                    name: 'Docker',
                    level: 70,
                },
                {
                    name: 'CI/CD',
                    level: 65,
                },
            ],
        },
    ];
    return (
        <section id="skills" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700">
                        My technical toolkit includes a variety of languages,
                        frameworks, and technologies that enable me to build
                        comprehensive web solutions.
                    </p>
                </div>

                <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                        Core Technologies
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                        {[
                            {
                                name: 'HTML',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                            },
                            {
                                name: 'CSS',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                            },
                            {
                                name: 'JavaScript',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                            },
                            {
                                name: 'React',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                            },
                            {
                                name: 'Next.js',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                            },
                            {
                                name: 'MySQL',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                            },
                            {
                                name: 'Tailwind',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
                            },
                            {
                                name: 'Git',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                            },
                            {
                                name: 'Node.js',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                            },
                            {
                                name: 'VS Code',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
                            },
                            {
                                name: 'Figma',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                            },
                            {
                                name: 'GitHub',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                            },
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16"
                                />
                                <p className="mt-2 text-gray-700 font-medium">
                                    {tech.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
