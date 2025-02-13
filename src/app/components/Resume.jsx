"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const Resume = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [ewwClicked, setEwwClicked] = useState(false);
  const router = useRouter();

  const handleLoveIt = () => {
    router.push("/#contact");
  };

  const handleEww = () => {
    setEwwClicked(true);
    setTimeout(() => {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 2000);
  };

  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" id="resume">
      {!showOptions ? (
        <div className="flex flex-col items-center gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowOptions(true)}
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
          >
            Wanna see my resume? 👀
          </motion.button>
        </div>
      ) : (
        <>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-4 mb-8"
          >
            <button
              onClick={handleLoveIt}
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Love it! 😍
            </button>
            <button
              onClick={handleEww}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {ewwClicked ? "Oof, you made a mistake! 🎵" : "Eww, Disgusting! 🤢"}
              </span>
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            {/* Desktop PDF View */}
            <div className="hidden md:block">
              <object
                data="/resume.pdf#toolbar=0"
                type="application/pdf"
                className="w-full h-[1100px]"
              >
                <p className="text-[#ADB7BE]">
                  Your browser does not support PDFs. Please download the PDF to
                  view it:{" "}
                  <a href="/resume.pdf" className="text-primary-500 underline" download="Mark_Zarutin_Software_Engineer_Resume.pdf">
                    Download PDF
                  </a>
                </p>
              </object>
            </div>

            {/* Mobile Image View */}
            <div className="md:hidden w-full relative">
              <Image
                src="/images/resume.png"
                alt="Resume"
                width={800}
                height={1100}
                className="w-full h-auto"
              />
              <a 
                href="/resume.pdf" 
                download = "Mark_Zarutin_Software_Engineer_Resume.pdf"
                className="mt-4 block text-center px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Resume;
