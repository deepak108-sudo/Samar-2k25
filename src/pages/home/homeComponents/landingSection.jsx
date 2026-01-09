import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import '../homeStyles.css'

import SamarLogo from '../../../assets/logo/samarLogoWhite.png';
import SamarIntroText from '../../../assets/customIllustration/samarIntroText.png';

import HoverAudio from '../../../assets/audio/buttonHoverGTA.mp3';

function LandingSection() {
    const hoverAudioRef = useRef(new Audio(HoverAudio));
    
    const handleHover = () => {
        hoverAudioRef.current.play();
    };

    return (
        <>
            <section id="home" className="w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden relative py-4">
                <main className="w-full min-h-screen flex flex-col justify-center items-center relative z-10 px-4">
                    <div className='text-white w-full min-h-screen flex flex-col justify-center items-center relative z-10'>
                        <div className="flex flex-row justify-center items-center mb-6 gap-4"> 
                            <img src={SamarLogo} alt="Samar Logo" className="w-[140px] h-auto drop-shadow-[0_0_25px_rgba(140,204,255,0.9)] filter brightness-125" />
                            <h1 className="font-knightWarrior text-9xl bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(140,204,255,1)] filter brightness-150 tracking-wider">2026</h1>
                        </div>
                
                        <div className="w-full flex justify-center items-center mb-10">
                            <img src={SamarIntroText} alt="Samar Logo" className="w-[1100px] max-w-[95vw] h-auto filter brightness-125 drop-shadow-[0_0_20px_rgba(255,136,45,0.6)] hover:scale-105 transition-transform duration-300" />
                        </div>
                
                        <p className='w-[800px] max-w-[90vw] mt-4 font-serif font-bold text-3xl text-center tracking-wide bg-gradient-to-r from-slate-200 via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(140,204,255,0.8)] filter brightness-125 leading-relaxed'>
                            A Flagship Sport's Event Organized by
                            <a className='bg-gradient-to-r from-rose-300 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent font-bold hover:cursor-pointer hover:from-rose-200 hover:to-pink-300 transition-all ease-in-out drop-shadow-[0_0_20px_rgba(244,63,94,0.9)] hover:scale-105 inline-block' href="https://shaurya-nitrr.netlify.app/" target="_blank">
                                {' '}Shaurya Sports Committee{' '}
                            </a>
                            , NITRR
                        </p>
                    
                        <NavLink to="/register" className='mt-12 border-3 px-24 py-6 text-2xl font-black border-cyan-400 bg-gradient-to-r from-blue-600/30 to-cyan-500/20 text-white font-orbitron uppercase tracking-widest rounded-2xl hover:from-cyan-500/40 hover:to-blue-500/30 hover:border-cyan-300 hover:scale-105 hover:shadow-2xl transition-all ease-in-out backdrop-blur-2xl duration-500 drop-shadow-[0_0_30px_rgba(140,204,255,0.8)] hover:drop-shadow-[0_0_50px_rgba(140,204,255,1)] animate-pulse' onMouseEnter={handleHover}> 
                            REGISTER
                        </NavLink>
                    
                        <div className='flex flex-col justify-center items-center mt-20 mb-8'>
                            <h1 className='text-7xl font-black font-mono uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(140,204,255,1)] filter brightness-150 mb-6 animate-bounce'>explore</h1>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default LandingSection;

