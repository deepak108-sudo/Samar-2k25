import React from 'react';
import './timeline.css';

// import images
import htmlimg from '../../../../src/assets/timeline/shaurya.png';
import javascriptimg from '../../../../src/assets/timeline/samar.png';
import reactjsimg from '../../../../src/assets/timeline/accc.png';
import nodejsimg from '../../../../src/assets/timeline/samar.png';


const Timeline = () => {

    return (

        <div className='main'>

            <h1 className="font-black text-6xl uppercase tracking-wider bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(140,204,255,0.9)] filter brightness-150"> Our <span className="text-6xl italic font-serif bg-gradient-to-r from-rose-300 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(244,63,94,0.9)] mb-8 "> Journey </span> </h1>

                {/* Glowing Underline */}
       <div className="underline-glow"></div>

            <div className='timeline'>


                {/* HTML Card*/}

                <div className='container left-container'>

                    <img src={htmlimg} alt='HTML' />

                    <div className='text-box htmlcard'>

                        <h2 className='htmltext font-knightWarrior text-3xl pt-4 pb-4 bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(140,204,255,0.8)] filter brightness-125'> The Beginning </h2>

                        <span className='company font-crossFly text-xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(140,204,255,0.7)] pb-4'>2010</span>

                        <p className='pt-4 font-serif bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(140,204,255,0.6)] text-lg pb-4 leading-relaxed'>
                        Shaurya has been at the helm of conducting all
                        the sports activities in the institute. The
                        committee organizes events Samar (the annual
                        sports fest), Inter-branch tournaments, etc. The
                        committee also helps in proper structuring and
                        formation of teams which represent NIT Raipur
                        in national level sports fest including Inter-NIT
                        Sports meet.
                        </p>

                        <span className='left-container-arrow htmlarrow'></span>

                    </div>

                </div>


                {/*  JavaScript Card*/}

                <div className='container right-container'>

                    <img src={javascriptimg} alt='JavaScript' />

                    <div className='text-box javascriptcard'>

                        <h2 className='javascripttext font-knightWarrior text-3xl pb-4 pt-4 bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(140,204,255,0.8)] filter brightness-125'> Samar </h2>

                        <span className='company font-crossFly text-xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(140,204,255,0.7)] pb-4'>2010</span>

                        <p className='pt-4 pb-4 font-serif bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(140,204,255,0.6)] text-lg leading-relaxed'>
                        SAMAR is the Annual College Sports Festival
                        of NIT Raipur. It is a four-day mega event
                        held in the during winter in which provides
                        platform to more than 12000 students from
                        over 35 colleges and schools come forward
                        to showcase their talent in sports and
                        games.
                        </p>

                        <span className='right-container-arrow javascriptarrow'></span>

                    </div>

                </div>


                {/*  React Js Card*/}

                <div className='container left-container'>

                    <img src={reactjsimg} alt='React JS' />

                    <div className='text-box reactjscard'>

                        <h2 className='reactjstext font-knightWarrior text-3xl pb-4 pt-4 bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(140,204,255,0.8)] filter brightness-125'>Achievements</h2>

                        <span className='company font-crossFly text-xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(140,204,255,0.7)] pb-4'>2024</span>

                        <p className='pt-4 pb-4 bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent text-lg font-serif drop-shadow-[0_0_10px_rgba(140,204,255,0.6)] leading-relaxed'>

                        This year has been nothing short of extraordinary for our sports
                        teams, showcasing outstanding talent and unwavering dedication.
                        Our men's football team dominated the Inter-NIT Championship,
                        securing gold with unrivaled skill and teamwork.

                        </p>

                        <span className='left-container-arrow reactjsarrow'></span>

                    </div>

                </div>


                {/*  Node JS Card*/}

                <div className='container right-container'>

                    <img src={nodejsimg} alt='Node JS' />

                    <div className='text-box nodejscard'>

                        <h2 className='nodejstext font-knightWarrior text-3xl pb-4 pt-4 bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(140,204,255,0.8)] filter brightness-125'> Coming Soon </h2>

                         <span className='company font-crossFly text-xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(140,204,255,0.7)] pb-4'> 2025 </span>

                        <p className='pt-4 pb-4 bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent text-lg font-serif drop-shadow-[0_0_10px_rgba(140,204,255,0.6)] leading-relaxed'>

                        SAMAR will be back with its new edition with gamify range of exciting sports events. Stay tuned with us through our social media handles to make sure you don't miss out on the next big sports revolution!

                        </p>

                        <span className='right-container-arrow nodejsarrow'></span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Timeline;