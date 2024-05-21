import React from "react";
import WandImage from '../assets/motionarteffect-img5.png'
function Wand() {
  return (
    <div className="flex justify-center items-center p-32 gap-32 pointer-events-none relative">
        <div className="flex flex-col justify-center items-start gap-10 w-[60%]">
            <p className="text-5xl font-semibold text-[#EEE5FF]">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
            <p className="text-xl text-gray-400">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className="rounded-3xl w-80 p-4 text-[#EEE5FF] text-xl pointer-events-auto flex justify-center items-center gap-3" style={{background:"linear-gradient(90deg, #5E11FF  0%, #F87516 100%)"}}>Purchase from Envato <span class="material-symbols-outlined scale-105">
arrow_right_alt
</span></button>
        </div>
        <img src={WandImage} alt="wand" />
    </div>
  );
}

export default Wand;
