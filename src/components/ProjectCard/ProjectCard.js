import React from 'react';
import './ProjectCard.css';

// Resimleri import et
import todoImage from '../../img/todolist-bg.jpg';
import rotaImage from '../../img/rota-bg.jpg';
import linkedinImage from '../../img/linkedin-bg.jpg';
import portfolioImage from '../../img/portfolio-bg.jpg';
import newPortfolioImage from '../../img/new-portfolio-bg.jpg';

const ProjectCard = ({ project, delay }) => {
    const projectImages = {
        1: todoImage,
        2: rotaImage,
        3: linkedinImage,
        4: portfolioImage,
        5: newPortfolioImage
    };

    const cardStyle = {
        backgroundImage: `url(${projectImages[project.id]})`
    };

    const handleGithubClick = (e) => {
        e.preventDefault();
        if (project.github) {
            window.open(project.github, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={delay}
            style={cardStyle}
        >
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                    <a
                        href={project.github}
                        className="btn btn-outline"
                        onClick={handleGithubClick}
                        aria-label={`${project.title} GitHub`}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;