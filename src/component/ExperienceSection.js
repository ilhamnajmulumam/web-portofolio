import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
export default function ExperienceSection() {
    const experiences = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            company: 'Tech Solutions Inc.',
            period: '2022 - Present',
            description:
                'Lead the frontend development team in building responsive web applications using React.js and Next.js. Implemented modern UI/UX designs and improved application performance by 40%.',
        },
        {
            id: 2,
            title: 'Full Stack Developer',
            company: 'Digital Innovations',
            period: '2020 - 2022',
            description:
                'Developed and maintained full-stack web applications using React.js, Node.js, and MySQL. Collaborated with designers and product managers to create intuitive user interfaces and efficient backend systems.',
        },
        {
            id: 3,
            title: 'Junior Web Developer',
            company: 'WebCraft Studios',
            period: '2018 - 2020',
            description:
                'Assisted in developing responsive websites and web applications. Gained hands-on experience with HTML, CSS, JavaScript, and basic backend technologies.',
        },
    ];
    return (
        <section id="experience" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700">
                        My professional journey in the world of web development.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 border-l-2 border-indigo-600">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`mb-12 ${
                                    index === experiences.length - 1
                                        ? ''
                                        : 'pb-8'
                                }`}
                            >
                                <div className="absolute -left-[10px] mt-1.5 w-5 h-5 rounded-full border-4 border-indigo-600 bg-white"></div>
                                <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                                            <Calendar
                                                size={16}
                                                className="mr-1"
                                            />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Briefcase
                                            size={16}
                                            className="text-indigo-600 mr-2"
                                        />
                                        <span className="text-indigo-600 font-medium">
                                            {exp.company}
                                        </span>
                                    </div>
                                    <p className="text-gray-700">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto mt-16 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
