import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ratings from './components/Ratings';
import Wand from './components/Wand';
import Apply from './components/Apply';
import Browsers from './components/Browsers';
import Plugin from './components/Plugin';
import Footer from './components/Footer';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 128, // Resolution of the simulation grid
      DYE_RESOLUTION: 1024, // Resolution of the dye grid
      CAPTURE_RESOLUTION: 512, // Resolution of captured frames
      DENSITY_DISSIPATION: 3, // Rate at which density dissipates
      VELOCITY_DISSIPATION: 0.2, // Rate at which velocity dissipates
      PRESSURE: 0.8, // Pressure value used in the simulation
      PRESSURE_ITERATIONS: 20, // Number of pressure iterations
      CURL: 10, // Curl value used in the simulation
      INITIAL: true, // Enables splats on initial load
      SPLAT_AMOUNT: 3, // Number of initial splats (Random number between n and n * 5)
      SPLAT_RADIUS: 0.2, // Radius of the splats
      SPLAT_FORCE: 7000, // Force applied by the splats
      SPLAT_KEY: 'Space', // Keyboard key to spawn new splats (empty to disable)
      SHADING: true, // Enables shading in the visualization
      COLORFUL: true, // Enables rapid changing of colors
      COLOR_UPDATE_SPEED: 12, // Speed of color update
      HOVER: true, // Enables interaction on hover
      BACK_COLOR: '#000000', // Background color of the canvas
      TRANSPARENT: false, // Makes the canvas transparent if true
      BRIGHTNESS: 0.6, // Color brightness (Recommend lower than 1.0 if BLOOM is true)
      BLOOM: true, // Enables bloom effect
      BLOOM_ITERATIONS: 20, // Number of bloom effect iterations
      BLOOM_RESOLUTION: 256, // Resolution of the bloom effect
      BLOOM_INTENSITY: 1, // Intensity of the bloom effect
      BLOOM_THRESHOLD: 0.6, // Threshold for the bloom effect
      BLOOM_SOFT_KNEE: 1, // Soft knee value for the bloom effect
      SUNRAYS: true, // Enables sunrays effect
      SUNRAYS_RESOLUTION: 64, // Resolution of the sunrays effect
      SUNRAYS_WEIGHT: 0.8, // Weight of the sunrays effect
      COLOR_PALETTE:  ['#FF76CE','#C40C0C','#004225','#FC4100','#FF7F3E','#5BBCFF','#8576FF','#B51B75','#4793AF','#FAEE1C','#00215E','#FFC55A','#5E1675','#9195F6','#FFC94A','#0079FF','#06FF00','#AA2EE6','#3F52E3'],
    });
  }, []);

  return<>
   <canvas ref={canvasRef} style={{ width: '100vw', zIndex: "0", position:"fixed" }} />
   <Navbar/>
   <Hero/>
   <Ratings/>
   <Wand/>
   <Apply/>
   <Browsers/>
   <Plugin/>
   <Footer/>
   </>;

};

export default App;