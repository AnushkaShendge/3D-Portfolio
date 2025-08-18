import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { sectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const ProjectCard = ({ name, description, tags, features, category, github }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <div className="bg-tertiary p-5 rounded-2xl h-full flex flex-col
                    backdrop-blur-lg bg-opacity-90 border border-white/10 
                    hover:border-purple-500/50 transition-all duration-300
                    hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
        <h3 className="text-white font-bold text-[24px] bg-gradient-to-r 
                      from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {name}
        </h3>
        
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        
        <div className="mt-4 flex flex-col gap-2 flex-grow">
          <h4 className="text-white font-semibold">Key Features:</h4>
          {features.map((feature, index) => (
            <p key={`feature-${index}`} className="text-white-100 text-[14px] pl-4 relative">
              <span className="absolute left-0">•</span>
              {feature}
            </p>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={`tag-${index}`} 
                  className="text-[14px] px-3 py-1 rounded-full bg-black/50
                           border border-purple-500/30 text-white">
              #{tag}
            </span>
          ))}
        </div>
        
        <a href={github} 
           target="_blank" 
           rel="noopener noreferrer"
           className="mt-4 inline-flex items-center gap-2 text-white 
                    hover:text-purple-400 transition-colors">
          <i className="fab fa-github"></i>
          View Project
        </a>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative min-h-screen px-5 sm:px-10 lg:px-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-purple-400`}>My work</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r 
                       from-purple-400 to-pink-600 bg-clip-text text-transparent`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(Works, "work");


