import React from "react";
import Navbar from "./temp123/Navbar/Navbar";
import About from "./temp123/About/About";
import Skills from "./temp123/Skills/Skills";
import Experience from "./temp123/Experience/Experience";
import Work from "./temp123/Projects/Projects";
import Education from "./temp123/Education/Education";
import Contact from "./temp123/Contact/Contact";
import Footer from "./temp123/Footer/Footer";
import BlurBlob from './temp123/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen relative overflow-hidden">

        <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

<div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

       <div className="relative z-10 pt-20">
         <Navbar />
         <About />
         <Skills />
         <Experience />
         <Work />
         <Education />
         <Contact />
         <Footer />
       </div>

     </div>
  );
};

export default App;