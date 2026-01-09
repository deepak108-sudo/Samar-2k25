import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../../assets/sponsors/redbull.png';
import img2 from '../../../assets/sponsors/sub.png';
import img3 from '../../../assets/sponsors/hut.png';
import img4 from '../../../assets/sponsors/mac.png';
import img5 from '../../../assets/sponsors/suzu.png';
import img7 from '../../../assets/sponsors/sbi.png';
import img8 from '../../../assets/sponsors/lic.png';
import img9 from '../../../assets/sponsors/dom.png';
import img10 from '../../../assets/sponsors/ola.png';
import '../homeComponents/sponsors.css';

function Sponsors() {
  return (
    <div className="Sponsors">
        <h1 className="font-black text-6xl uppercase tracking-wider bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(140,204,255,0.9)] filter brightness-150"> Our <span className="text-6xl italic font-serif bg-gradient-to-r from-rose-300 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(244,63,94,0.9)] mb-8 "> Past Sponsors </span> </h1>

           {/* Glowing Underline */}
       <div className="underline-glow"></div>

      <div className="marquee-container">
        <Marquee direction="right" speed={100}>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img1} alt="Gold Sponsor 1" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="Gold Sponsor 2" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="Gold Sponsor 3" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="Gold Sponsor 4" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}


export default Sponsors;
