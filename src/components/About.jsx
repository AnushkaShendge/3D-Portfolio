import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from '../style';
import { services, education } from '../constants';
import { fadeIn , textVariant } from "../utils/motion";
import { sectionWrapper } from '../hoc';

const ServiceCard = ({ index, title }) => {
  const serviceImages = {
    'Web Development': 'https://images.unsplash.com/photo-1627399270231-7d36245355a9?auto=format&fit=crop&q=80',
    'Mobile Development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    'AI/ML Development': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='relative bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${serviceImages[title]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h3 className='text-white text-[20px] font-bold text-center relative z-10'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("" , "" , 0.1 , 1 )} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a Full-Stack Web Developer, I possess a diverse skill set that enables me to build dynamic and responsive web applications from end to end. I am proficient in both front-end and back-end technologies, allowing you to work on various aspects of web development, from designing user interfaces to implementing server-side logic and managing databases. Let's work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 w-full flex justify-center"
      >
        <div className="bg-tertiary/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 max-w-md">
          <h3 className="text-white text-[24px] font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {education.degree}
          </h3>
          <div className="mt-4 space-y-2 text-secondary">
            <p className="text-lg font-semibold text-white/90">{education.institution}</p>
            <p className="text-sm">{education.duration}</p>
            <p className="text-sm font-medium">CGPA: {education.cgpa}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default sectionWrapper(About , "about") ;
// export default sectionWrapper(About , "about") ;
