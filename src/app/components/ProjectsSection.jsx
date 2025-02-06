"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BrightBoundAI",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/",
    // Placeholder achievements data for this project
    achievements: [
      {
        prefix: "",
        metric: "Users",
        value: "100",
        postfix: "+",
      },
      {
        prefix: "",
        metric: "Deployments",
        value: "5",
        postfix: "",
      },
    ],
  },
  {
    id: 2,
    title: "StudyAI",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Leisure"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Downloads",
        value: "50",
        postfix: "+",
      },
    ],
  },
  {
    id: 3,
    title: "Tremaine",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Integrations",
        value: "10",
        postfix: "+",
      },
    ],
  },
  {
    id: 4,
    title: "JobSearch",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Leisure"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Candidates",
        value: "500",
        postfix: "+",
      },
    ],
  },
  {
    id: 5,
    title: "Veo Fence Properties",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Listings",
        value: "20",
        postfix: "+",
      },
    ],
  },
  {
    id: 6,
    title: "Lead Database",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Leads",
        value: "200",
        postfix: "+",
      },
    ],
  },
  {
    id: 7,
    title: "Cat Tower",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Leisure"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Cats",
        value: "10",
        postfix: "+",
      },
    ],
  },
  {
    id: 8,
    title: "Da Boat",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Leisure"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Sails",
        value: "3",
        postfix: "",
      },
    ],
  },
  {
    id: 9,
    title: "Automated Garden",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Leisure"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Plants",
        value: "25",
        postfix: "+",
      },
    ],
  },
  {
    id: 10,
    title: "Soulbound Graduation Token",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Leisure"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Tokens",
        value: "1",
        postfix: "",
      },
    ],
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Leisure"
          isSelected={tag === "Leisure"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
            {project.achievements && (
              <div className="mt-4 p-2 bg-gray-800 rounded-md">
                <ul className="flex flex-row items-center justify-between mx-4 my-4 sm:my-0">
                  {project.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="text-gray-300 text-xs px-2">
                      {achievement.prefix}
                      {achievement.value}
                      {achievement.postfix} {achievement.metric}
                    </li>
                  ))}
                </ul>
              </div>)}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
