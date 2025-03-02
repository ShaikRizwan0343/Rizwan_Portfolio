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
        I am a results-driven software developer with 8+ years of experience in
        designing, developing, and optimizing Android, iOS, and Windows
        applications. Skilled in .NET MAUI, Xamarin, React Native, and Blazor,
        with expertise in full-cycle mobile app development. Passionate about
        delivering high-performance, scalable solutions and seamless user
        experiences.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have led teams and managed release operations, migrating legacy
        applications to modern frameworks like .NET MAUI. My experience includes
        working with Xamarin.Forms, Kotlin, Swift, and C#, integrating native
        SDKs, and handling third-party services. I specialize in optimizing
        workflows, resolving platform-specific issues, and ensuring smooth
        deployments to app stores.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Throughout my career, I have worked across multiple industries,
        collaborating with clients to build innovative mobile solutions. My
        technical expertise spans database management, cloud integrations, and
        agile methodologies, ensuring high-quality software delivery.
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
