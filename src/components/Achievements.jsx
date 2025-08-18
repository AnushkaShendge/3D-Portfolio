import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { achievements } from "../constants";
import { sectionWrapper } from "../hoc";

const AchievementCard = ({ title, organization, position, year }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.5, 0.75)}
    className="w-full sm:w-[380px] p-[1px] rounded-[20px] bg-gradient-to-r from-purple-500/50 to-pink-500/50"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[240px] flex flex-col justify-between backdrop-blur-lg bg-opacity-90">
      <div>
        <h3 className="text-white font-bold text-[24px]">{position}</h3>
        <p className="mt-2 text-secondary text-[16px] font-semibold">{title}</p>
        <p className="text-secondary">{organization}</p>
      </div>
      <p className="text-purple-400 font-medium text-[14px]">{year}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100/20 rounded-[20px] backdrop-blur-sm">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Accomplishments</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(Achievements, "achievements");

