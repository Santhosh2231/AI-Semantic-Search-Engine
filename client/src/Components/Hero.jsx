// import content
import { createElement, useEffect,useState } from "react";
import { content } from "./content";
// import Typewriter from "typewriter-effect";
import Image from "../assets/writing.jpg";


const Hero = () => {
  const { hero } = content;




  return (
    <section id="home" className="overflow-hidden max-w-full bg-slate-200">
      <div className="pt-20 relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        <div className="pb-40 px-6 pt-5" data-aos="fade-down">
        <h2 className="name  text-teal-700">
        SearchIt{" "}
            <h4 className="text-dark_primary text-xl md:text-2xl my-10 font-Merriweather">{"Revolutioning Search Engine with AI Semantics"}</h4>
          </h2>
          <br />
          <div className="flex justify-end">
          {/* .pauseFor(2000), .deleteAll() .callFunction */}
          
           
          </div>
          <div className="flex flex-row flex-wrap justify-center mt-24">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className="flex items-center w-24 text-4xl"
              >
                <a href={content.link}>
                {createElement(content.icon)}
                </a>
              </div>
            ))}
          </div>
          
        </div>

        <div className="md:h-[37rem] h-96">
          <img
            src={Image}
            data-aos="slide-up"
            alt="..."
            className="object-cover h-80 w-80 rounded-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
