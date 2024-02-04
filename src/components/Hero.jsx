import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={"relative w-full h-screen mx-auto"}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Salut, Je m'appelle <span className='text-[#915EFF]'>John 👋 </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-40`}>
            Recherche Stage, Développement informatique: <b>À PARTIR DU 8 AVRIL 2024 POUR UNE DURÉE DE 8 à 12 SEMAINES. </b>
            Je développe des applications logicielles et des sites web
          </p>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 flex justify-center items-center"

      >
        <ComputersCanvas />
      </motion.div>
    </section>
  );
};

export default Hero;
