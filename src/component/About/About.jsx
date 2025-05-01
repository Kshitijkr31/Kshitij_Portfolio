import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-[-2rem]'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Kshitij Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl whitespace-pre-line font-semibold mb-4 bg-gradient-to-r from-[#1e90ff] to-[#a855f7] text-transparent bg-clip-text leading-tight'>
            <Typewriter
              words={[
                "I am a Full Stack Developer",
                "I am a Coder",
                "Driven to Become a \nData Analyst",
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className='break-words text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            Aspiring Full Stack Developer with hands-on experience building a
            MERN-based Job Portal & Food Delivery Platform and solid foundations
            in cloud, databases, and frontend/backend technologies. Strong
            commitment to continuous learning and contributing to real-world
            software projects.
          </p>
          {/* Resume Button */}
          <a
            href='https://drive.google.com/file/d/1tAqzvaPkDVGmKf-7Xcc6_h-G0-4GSc4U/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block  text-white py-3 px-8 rounded-full  text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: "linear-gradient(90deg, #1e90ff, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt
            className='w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 ml-6 border-4 bg-dodger rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt='Kshitij Kumar'
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
