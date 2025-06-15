import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "ToDoList",
            github: "https://github.com/abdulkadir-dev0/todolist"
        },
        {
            id: 2,
            title: "Rota Optimizasyon",
            github: "https://github.com/abdulkadir-dev0/Rota-Optimizasyonu"
        },
        {
            id: 3,
            title: "Linkedin Botu",
            github: "https://github.com/abdulkadir-dev0/Linkedin-Botu"
        },
        {
            id: 4,
            title: "Kişisel Portfolyo",
            github: "https://github.com/abdulkadir-dev0/kisisel-portfolyo"
        },
        {
            id: 5,
            title: "Yeni Portfolyo",
            github: "https://github.com/abdulkadir-dev0/yeni-portfolyo"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="section-container">
                <h2 data-aos="fade-up">Projelerim</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;