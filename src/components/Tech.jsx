import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { technologies, skills } from "../constants";

const SkillCard = ({ category, items }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5, 0.75)}
    className="bg-tertiary rounded-2xl p-6 transform hover:scale-105 transition-all duration-300
               backdrop-blur-lg bg-opacity-90 border border-white/10 hover:border-purple-500/50
               hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
  >
    <h3 className="text-white text-[24px] font-bold capitalize bg-gradient-to-r 
                   from-purple-500 to-pink-500 bg-clip-text text-transparent">
      {category}
    </h3>
    <div className="flex flex-wrap gap-3 mt-4">
      {items.map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 rounded-full bg-black/50 text-white text-sm
                     border border-purple-500/30 hover:border-purple-500
                     hover:bg-purple-900/30 cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="relative min-h-screen px-5 sm:px-10 lg:px-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="relative z-10 flex flex-col gap-10 max-w-6xl mx-auto">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-purple-400`}>My expertise</p>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent`}>
            Technologies & Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard key={category} category={category} items={items} />
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Tech;