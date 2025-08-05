import React from "react";

const projects = [
 
{
  title: "Apple Website Clone",
  description:
    "A pixel-perfect recreation of Apple's website showcasing advanced CSS techniques, responsive design, and smooth animations. Built during training at Infosmite.",
  imageUrl: "https://raw.githubusercontent.com/Esakkiammal-G/my-app/main/public/apple.jpeg",
  link: "https://github.com/Esakkiammal-G/apple-clone",
  showLink: "https://esakkiammal-g.github.io/apple-clone/"
},

  {
    title: "Heritage Connect",
    description:
      "A full-stack platform to archive and explore regional culture, featuring dynamic content rendering and multilingual support.(Ongoing Project)",
    imageUrl: "https://media.licdn.com/dms/image/v2/D562DAQGYsZfp6lYwBQ/profile-treasury-image-shrink_800_800/B56ZelolROGoAc-/0/1750830570638?e=1754985600&v=beta&t=Vbf00Erha_rqodU8EygL963YUzmGpvIcISDnSEdVZVY",
    link: "https://github.com/Esakkiammal-G/Heritage-Connect",
    showLink: "https://esakkiammal-g.github.io/Heritage-Connect"
  },
  {
    title: "Task Management App",
  description:
    "A productivity-focused application with authentication, deadline tracking, and real-time task updates using MERN stack.",
  imageUrl: "https://raw.githubusercontent.com/Esakkiammal-G/my-app/main/public/task.jpg",
  link: "https://github.com/Esakkiammal-G/Task-Management-App",
  showLink: "https://esakkiammal-g.github.io/Task-Management-App"
  },
  {
    title: "Encryption & Decryption Utility",
  description:
    "A secure tool built with TypeScript and Swing GUI to encrypt and decrypt messages using algorithms like Caesar and Base64.",
  imageUrl: "https://raw.githubusercontent.com/Esakkiammal-G/my-app/main/public/crypto.png.jpeg",
  link: "https://github.com/Esakkiammal-G/Encryption_Decryption",
  showLink: "https://eclectic-bombolone-a4d031.netlify.app/"

  },
  {
  title: "Expense Tracker",
  description:
    "A responsive and intuitive web application for tracking daily expenses. Offers category-wise analysis, monthly budgeting, and data visualization using charts.",
  imageUrl: "https://media.licdn.com/dms/image/v2/D562DAQEbox2YErEj0w/profile-treasury-image-shrink_800_800/B56ZelrRTwHEAg-/0/1750831275448?e=1754985600&v=beta&t=PQwhqMXNTGL7444QeKIH_CdpbGNiTohYDT08dcF5u80",
  link: "https://github.com/Esakkiammal-G/Expense_Tracker",
  showLink: "https://esakkiammal-g.github.io/Expense-Tracker/"
},

  {
  title: "Pepper Spraying Alert Necklace",
  description:
    "An innovative women's safety device that received the Best Paper award at ICFTA'24. Features real-time alert system and GPS tracking for enhanced security.",
  imageUrl: "https://raw.githubusercontent.com/Esakkiammal-G/my-app/main/public/journal%20presentation.jpg",
  link: "https://fortune.com/2015/10/20/necklace-prevent-assault",
  showLink: "https://fortune.com/2015/10/20/necklace-prevent-assault"
  },
 {
  title: "Safest Wood Saw",
  description:
    "An intelligent safety system for wood cutting machines that automatically stops when detecting human proximity. Developed for MSME to enhance workplace safety.",
  imageUrl: "https://raw.githubusercontent.com/Esakkiammal-G/my-app/main/public/wood.png",
  link: "https://woodworkerlodge.com/whats-the-safest-type-of-power-saw",
  showLink: "https://woodworkerlodge.com/whats-the-safest-type-of-power-saw"
},
 {
  title: "Warehouse Management System",
  description:
    "A comprehensive web-based system for managing warehouse operations including inventory tracking, order management, and reporting features.",
  imageUrl: "https://raw.githubusercontent.com/Esakkiammal-G/my-app/main/public/wms.jpg",
  link: "https://github.com/Esakkiammal-G/Warehouse-Management-System",
  showLink: "https://esakkiammal-g.github.io/Warehouse-Management-System/"
}

];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and achievements
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    View Code
                  </a>
                  <a
                    href={project.showLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
