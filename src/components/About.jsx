import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import CV from "../assets/CV_John_LI.pdf";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const DownloadCVButton = () => {
  const handleDownload = () => {
    window.open(CV, "_blank");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDownload}
    >
      Télécharger CV
    </button>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Profil.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Je suis un développeur de logiciels compétent avec de l'expérience en HTML/CSS et
        JavaScript, avec des connaisances dans des frameworks tels que React et Node.js. 
        Je suis un étudiant sérieux et motivé. Je suis particulièrement 
        intéressé par les domaines du développement et du Game design. 
        Je souhaite acquérir une expérience pratique au sein d'une entreprise. 
        Travaillons ensemble pour donner vie à vos idées !
      </motion.p>
      <div className="mt-8">
        <DownloadCVButton />
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      
    </>
  );
};

export default SectionWrapper(About, "about");
