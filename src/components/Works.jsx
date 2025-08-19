import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { sectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import o from '../assets/odoo.png'
import i from '../assets/iitb.png'
import t from '../assets/tcet.png'

// Image mapping object for easy reference
const imageMap = {
  'odoo': o,
  'iitb': i,
  'tcet': t
};

const ProjectCard = ({ name, description, tags, features, category, github, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl h-full flex flex-col
                   backdrop-blur-lg bg-opacity-90 border border-white/10 
                   hover:border-purple-500/50 transition-all duration-300
                   hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]
                   group cursor-pointer"
      >
        {/* Project Image */}
        <div className="relative w-full h-[200px] mb-4 rounded-xl overflow-hidden
                        bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          {image && (
            <img
              src={imageMap[image] || image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 
                         transition-transform duration-500"
            />
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category badge */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full
                               bg-purple-600/80 text-white backdrop-blur-sm
                               border border-purple-400/30">
                {category}
              </span>
            </div>
          )}
          
          {/* GitHub icon overlay */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100
                          transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm
                            flex items-center justify-center border border-white/20">
              <i className="fab fa-github text-white text-sm"></i>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[24px] bg-gradient-to-r
                         from-purple-500 to-pink-500 bg-clip-text text-transparent
                         group-hover:from-purple-400 group-hover:to-pink-400
                         transition-all duration-300">
            {name}
          </h3>
          
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
          
          {/* Features section */}
          <div className="mt-4 flex flex-col gap-2 flex-grow">
            <h4 className="text-white font-semibold text-[16px] flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              Key Features:
            </h4>
            <div className="space-y-1">
              {features.map((feature, index) => (
                <motion.p 
                  key={`feature-${index}`} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white-100 text-[14px] pl-4 relative leading-relaxed"
                >
                  <span className="absolute left-0 text-purple-400">•</span>
                  {feature}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span 
                key={`tag-${index}`}
                whileHover={{ scale: 1.05 }}
                className="text-[12px] px-3 py-1 rounded-full bg-black/50
                           border border-purple-500/30 text-white
                           hover:border-purple-400/50 hover:bg-purple-900/20
                           transition-all duration-200 cursor-default"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
          
          {/* GitHub link */}
          <a href={github}
             target="_blank"
             rel="noopener noreferrer"
            className="mt-4 rounded-full inline-flex items-center gap-2 text-white
                      hover:text-purple-400 transition-colors">
            <i className="fab fa-github"></i>
            View Project
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative min-h-screen px-5 sm:px-10 lg:px-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

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