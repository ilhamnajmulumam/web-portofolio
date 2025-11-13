import { BookOpen, Calendar, MapPin } from 'lucide-react';
export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
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
                            I`&apos;`m a passionate Full Stack Developer with a
                            strong foundation in both front-end and back-end
                            technologies. With 5+ years of experience building
                            web applications, I specialize in creating
                            responsive, user-friendly interfaces that deliver
                            exceptional user experiences.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            My journey in web development started during my
                            Computer Science degree, where I developed a deep
                            interest in creating interactive web applications.
                            Since then, I`&apos;`ve worked on numerous projects
                            ranging from small business websites to complex
                            enterprise applications.
                        </p>
                        <p className="text-lg text-gray-700">
                            I`&apos;`m constantly learning and exploring new
                            technologies to stay at the forefront of web
                            development trends. When I`&apos;`m not coding, you
                            can find me hiking, reading tech blogs, or
                            contributing to open-source projects.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="flex items-center">
                                <MapPin
                                    size={20}
                                    className="text-indigo-600 mr-2"
                                />
                                <span className="text-gray-700">
                                    Jakarta, Indonesia
                                </span>
                            </div>
                            <div className="flex items-center">
                                <BookOpen
                                    size={20}
                                    className="text-indigo-600 mr-2"
                                />
                                <span className="text-gray-700">
                                    Computer Science, ITB
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Calendar
                                    size={20}
                                    className="text-indigo-600 mr-2"
                                />
                                <span className="text-gray-700">
                                    Available for hire
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Education & Certifications
                            </h3>
                            <div className="mb-6 border-l-2 border-indigo-600 pl-4">
                                <h4 className="text-xl font-semibold text-gray-800">
                                    Bachelor of Computer Science
                                </h4>
                                <p className="text-gray-600">
                                    Institut Teknologi Bandung (ITB)
                                </p>
                                <p className="text-gray-500 text-sm">
                                    2016 - 2020
                                </p>
                            </div>
                            <div className="mb-6 border-l-2 border-indigo-600 pl-4">
                                <h4 className="text-xl font-semibold text-gray-800">
                                    Full Stack Web Development
                                </h4>
                                <p className="text-gray-600">
                                    Udemy Certification
                                </p>
                                <p className="text-gray-500 text-sm">2021</p>
                            </div>
                            <div className="border-l-2 border-indigo-600 pl-4">
                                <h4 className="text-xl font-semibold text-gray-800">
                                    React.js Advanced Concepts
                                </h4>
                                <p className="text-gray-600">
                                    Frontend Masters
                                </p>
                                <p className="text-gray-500 text-sm">2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
