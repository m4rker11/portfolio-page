"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/hero-image.png',
    '/images/about-image.png',
    '/images/hero-image2.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-3 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 max-w-[300px]">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4">
          Schedule a call with me! I'm excited to discuss opportunities and ideas.
        </p>
        <div className="socials flex flex-row gap-2 mb-8">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <h6 className="text-lg font-semibold text-white mb-4 break-words">
          I had some empty space so I'm using it as a garden
        </h6>
        <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden group">
          <Image
            src={images[currentImageIndex]}
            alt="Garden Gallery"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-500"
          />
          <button 
            onClick={previousImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ←
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            →
          </button>
        </div>
      </div>
      <div className="z-10 col-span-2 -ml-20">
        <iframe
          src="https://calendly.com/matthewh-retool/qualification-call-community-support"
          width="100%"
          height="660px"
        />
      </div>
    </section>
  );
};

export default EmailSection;
