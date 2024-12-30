import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full justify-center align-middle">
    <motion.div
      variants={fadeIn("right", "spring", index)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card align-middle"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I am a Software developer in MERN Stack and React Native having
        nearly 4 years of expertise in JavaScript technologies technologies,
        including React Native, Redux, React.js, and TypeScript. Proficient in
        front-end development, RESTful services, and user validation forms.
        Skilled in integrating Google Maps, payment gateways, push
        notifications, and dynamic linking. Experienced in accessing native
        components (Camera, Microphone), Firebase integration, and app
        publishing on Google Play Store and Apple Store. Knowledgeable in SEO
        techniques and app analytics with strong problem-solving skills..
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have also worked extensively using Agile and Scrum methodologies with
        Azure DevOps to ensure efficient project management and collaboration,
        delivering high-quality software solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
