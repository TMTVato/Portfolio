import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import {textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <> 
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I use</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[30vh]`}>
    
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />


          </div>
      
        ))}
        </div>
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"");