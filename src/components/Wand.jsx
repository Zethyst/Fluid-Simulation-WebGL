import React, { useEffect } from "react";
import WandImage from '../assets/motionarteffect-img5.png'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin,ScrollTrigger,ScrollToPlugin);

function Wand() {
    
  useEffect(() => {

          gsap.to("#text1", {scrollTrigger:{trigger:"#text1"},text:"Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors", duration: 4 });
          gsap.to("#text2", {scrollTrigger:{trigger:"#text2"},text:"Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.", duration: 5,delay:4 });
          gsap.to("#wand", {scrollTrigger:{trigger:"#wand"},scale: 1.2, repeat:1,yoyo:true, duration: 2,delay:0.5 });

      }, []); 

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-12 md:px-1 md:py-36 gap-20 md:gap-48 pointer-events-none relative">
        <div className="flex flex-col justify-center items-center md:items-start gap-10 w-full md:w-[50%]">
            <p id="text1" className="text-3xl md:text-5xl font-semibold  text-center md:text-start md:leading-[4rem] text-[#EEE5FF]"></p>
            <p id="text2" className="text-lg md:text-xl text-center md:text-start text-gray-400"></p>
            <button className="rounded-3xl w-80 p-4 text-[#EEE5FF] text-xl pointer-events-auto flex justify-center items-center gap-3" style={{background:"linear-gradient(90deg, #5E11FF  0%, #F87516 100%)"}}>Purchase from Envato <span class="material-symbols-outlined scale-105">
arrow_right_alt
</span></button>
        </div>
        <img id="wand" src={WandImage} alt="wand" />
    </div>
  );
}

export default Wand;
