"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SKILLS_CATEGORIES = [
  {
    title: "Languages",
    items: ["Python", "Java", "Node.js"]
  },
  {
    title: "Databases",
    items: ["MongoDB", "SQL", "Postgres", "Vector Databases", "DB Schema Design"]
  },
  {
    title: "AI/ML & NLP",
    items: [
      "TensorFlow",
      "PyTorch",
      "ML",
      "Model Building",
      "Deep Learning",
      "OpenAI",
      "NLP",
      "Langchain",
      "Llama Index",
      "Embeddings",
      "Generative AI"
    ]
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Express", "Flask", "Spring Boot", "FastAPI", "Django", "Celery"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Kubernetes", "Docker", "CI/CD (CircleCI, Github Actions)", "Redis", "Kafka"]
  },
  {
    title: "Tools & Technologies",
    items: ["Unix", "REST", "Git", "Microservices", "Junit", "PyTest", "Pandas", "Twilio"]
  },
  {
    title: "Other Skills",
    items: ["Orchestration", "Project Management", "Sales", "Cold Outreach", "Automation", "Statistics", "Self-Driven"]
  }
];

const EDUCATION_DATA = [
  { title: "NYU BS in Neuroscience", content: "Placeholder content for NYU" },
  { title: "UCSB Psychology", content: "Placeholder content for UCSB" },
  { title: "Columbia Fintech Bootcamp", content: "Placeholder content for Columbia" }
];

// Controlled DropdownItem – it no longer manages its own state.
const DropdownItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="flex items-center w-full text-left hover:bg-gray-800 rounded px-2 py-1 transition-colors"
      >
        <span className="mr-2">{isOpen ? "▼" : "▸"}</span>
        <span>{title}</span>
      </button>
      {isOpen && (
        <div className="ml-6 border-l-2 border-gray-700 pl-4">
          {children}
        </div>
      )}
    </div>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  // This state tracks the title of the currently open dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      // Clear any open dropdown when switching tabs
      setOpenDropdown(null);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-image.png" 
          width={500} 
          height={500} 
          alt="About me" 
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a backend engineer with Full-Stack experience across many tech stacks. 
            With a background in Psychology, Neuroscience, Blockchain, AI, and Software Engineering, 
            I went through a number of fields before landing in backend engineering. Each step gave me a different way of thinking: whether it was understanding how people process information, how systems interact, or how technology evolves. 

            That mix shapes how I approach problems and build solutions today. And I want to leverage my unique skills to build products that helps those that need it most. 
          </p>

          <div className="flex flex-row justify-start mt-8 space-x-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          {/* Wrapping the dropdown list in a container with a fixed minimum height */}
          <div className="mt-8 min-h-[500px]">
            {tab === "skills" ? (
              <div>
                {SKILLS_CATEGORIES.map((category) => (
                  <DropdownItem
                    key={category.title}
                    title={category.title}
                    isOpen={openDropdown === category.title}
                    onToggle={() =>
                      setOpenDropdown(
                        openDropdown === category.title ? null : category.title
                      )
                    }
                  >
                    <ul className="list-disc pl-4 space-y-2">
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </DropdownItem>
                ))}
              </div>
            ) : (
              <div>
                {EDUCATION_DATA.map((education) => (
                  <DropdownItem
                    key={education.title}
                    title={education.title}
                    isOpen={openDropdown === education.title}
                    onToggle={() =>
                      setOpenDropdown(
                        openDropdown === education.title ? null : education.title
                      )
                    }
                  >
                    <div className="text-gray-300">
                      {education.content}
                    </div>
                  </DropdownItem>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
