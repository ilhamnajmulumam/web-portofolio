'use client';

import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsSection() {
    const [filter, setFilter] = useState('all');
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description:
                'A full-featured online shopping platform with product listings, shopping cart, and secure checkout.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            category: 'fullstack',
            technologies: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 2,
            title: 'Task Management App',
            description:
                'A productivity application for managing tasks, projects, and deadlines with drag-and-drop functionality.',
            image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
            category: 'frontend',
            technologies: ['React.js', 'Tailwind CSS', 'Next.js'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 3,
            title: 'Personal Finance Tracker',
            description:
                'An application to track personal expenses, income, and financial goals with data visualization.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
            category: 'fullstack',
            technologies: ['Next.js', 'MySQL', 'Tailwind CSS', 'Chart.js'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            description:
                'A weather application that provides current and forecasted weather data for any location.',
            image: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
            category: 'frontend',
            technologies: ['React.js', 'API Integration', 'CSS'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 5,
            title: 'Blog Platform',
            description:
                'A content management system for creating, editing, and publishing blog posts with user authentication.',
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            category: 'backend',
            technologies: ['Node.js', 'MySQL', 'RESTful API'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 6,
            title: 'Real-time Chat Application',
            description:
                'A messaging platform that enables real-time communication between users with message history.',
            image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
            category: 'fullstack',
            technologies: ['React.js', 'Node.js', 'Socket.io', 'MySQL'],
            liveUrl: '#',
            githubUrl: '#',
        },
    ];
    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter((project) => project.category === filter);
    return (
        <section id="projects" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700">
                        Here are some of the projects I`&apos;`ve worked on that
                        showcase my technical skills and problem-solving
                        abilities.
                    </p>
                </div>
                <div className="flex justify-center mb-10">
                    <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-lg">
                        {['all', 'frontend', 'backend', 'fullstack'].map(
                            (category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                        filter === category
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-transparent text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category.charAt(0).toUpperCase() +
                                        category.slice(1)}
                                </button>
                            )
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1"
                        >
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={192}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-3">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                                    >
                                        <ExternalLink
                                            size={16}
                                            className="mr-1"
                                        />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                                    >
                                        <Github size={16} className="mr-1" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/ilhamnajmulumam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        <Github size={20} className="mr-2" />
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
