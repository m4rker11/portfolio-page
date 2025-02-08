"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BrightBoundAI",
    description: "End-to-End AI Cold Email Platform, and the github of the open source version.",
    image: "/images/projects/bbai.png",
    tag: ["All", "Work"],
    gitUrl: "https://github.com/m4rker11/brightboundai",
    achievements: [
      {
        prefix: "",
        metric: "Contacted Leads",
        value: "200,000",
        postfix: "+",
      },
      {
        prefix: "",
        metric: "Commits",
        value: "585",
        postfix: "",
      },
      {
        prefix: "",
        metric: "Iterations",
        value: "3",
        postfix: "",
      },
    ],
  },
  {
    id: 2,
    title: "Veo Fence Properties",
    description: "Advanced geofencing system optimizing performance and user experience across all devices.",
    image: "/images/projects/maps.jpg",
    tag: ["All", "Work"],
    previewUrl: "https://www.veoride.com/",
    achievements: [
      {
        prefix: "",
        metric: "Users",
        value: "3M",
        postfix: "+",
      },
      {
        prefix: "",
        metric: "Standardized Frontends",
        value: "3",
        postfix: "",
      },
      {
        prefix: "",
        metric: "Fewer Fences",
        value: "20%",
        postfix: "",
      }
    ]
  },
  {
    id: 3,
    title: "JobSearch",
    description: "AI and API enabled table for all aspects of job search: tracking, writing and following up with recruiters.",
    image: "/images/projects/jobsearch.png",
    tag: ["All", "Leisure"],
    gitUrl: "/",
    previewUrl: "/",
    achievements: [
      {
        prefix: "",
        metric: "Applications",
        value: "90",
        postfix: "+",
      },
      {
        prefix: "",
        metric: "Interview Rate",
        value: "10",
        postfix: "%",
      },

    ],
  },
  {
    id: 4,
    title: "Tremaine",
    description: "One of BrightBoundAI clients needed an updated website, they got it.",
    image: "/images/projects/tremaine.png",
    tag: ["All", "Work"],
    previewUrl: "tremaine.us",
    achievements: [
      {
        prefix: "",
        metric: "Full Website Upgrade",
        value: "1",
        postfix: "",
      },
      {
        prefix: "",
        metric: "Wix Profits",
        value: "19$",
        postfix: "/month",
      }
    ],
  },
  {
    id: 5,
    title: "Soulbound Graduation Token",
    description: "Graduation project, providing graduates with a non-transferable token for their graduation horse.",
    image: "/images/projects/sbt.png",
    tag: ["All", "Leisure"],
    gitUrl: "https://github.com/m4rker11/SBT-Columbia-2022",
    previewUrl: "https://sbt-columbia-2022.vercel.app/",
    achievements: [
      {
        prefix: "",
        metric: "Weeks of Development",
        value: "2",
        postfix: "",
      },
      {
        prefix: "",
        metric: "Happy Graduates",
        value: "26",
        postfix: "",
      },
    ]
  },
  {
    id: 6,
    title: "StudyAI",
    description: "AI Generated study materials, tutoring, and quizzes based on your books or content.",
    image: "/images/projects/StudyAI.png",
    tag: ["All", "Leisure"],
    achievements: [
      {
        prefix: "",
        metric: "Founders",
        value: "2",
        postfix: "",
      },
      {
        prefix: "",
        metric: "Desire to Sell",
        value: "0",
        postfix: "",
      },
    ],
  },
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
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              blogUrl={project.blogUrl}
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
