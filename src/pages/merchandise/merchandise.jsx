import { useState, useRef } from 'react';
import { RazorpayButton, RazorpayButton3, RazorpayButton4 } from './payment.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import HoverAudio from '../../assets/audio/buttonHoverGTA.mp3';
import ThreeBackground from '../../components/ThreeBackground.jsx';

import ocImage from '../../assets/merchandise/oc_remove.png';
import hcImage from '../../assets/merchandise/hc_remove.png';
import ccImage from '../../assets/merchandise/cc_remove.png';
import exeImage from '../../assets/merchandise/exe_remove.png';
import SizeChart from '../../assets/sizeChart.jpg';
import CricketBackground from '../../assets/customIllustration/cricketBackground.jpg';

import '../../../globalStyles.css';

function Merchandise() {
    const [count, setCount] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const hoverAudioRef = useRef(new Audio(HoverAudio));
    
    const handleHover = () => {
        hoverAudioRef.current.play();
    };

    const increment = () => setCount(count < 4 ? count + 1 : 4);
    const decrement = () => setCount(count > 1 ? count - 1 : 1);

    const buttonMap = {
        1: <RazorpayButton />,
        2: <RazorpayButton />,
        3: <RazorpayButton3 />,
        4: <RazorpayButton4 />,
    };

    const imgarray = {
        1: ocImage,
        2: hcImage,
        3: ccImage,
        4: exeImage,
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            {/* Three.js Animated Background */}
            <ThreeBackground />

            <div className="relative flex flex-col justify-evenly items-center pt-16 bg-cover bg-center bg-no-repeat w-full h-full">
				{/* Main Heading with Advanced Styling */}
				<div className="heading_merch text-3xl md:text-5xl xl:text-6xl mt-20 mb-9 font-vermin text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-white bg-clip-text drop-shadow-2xl text-center hover:scale-105 transition-all duration-500 cursor-default animate-pulse">
					TEAM MERCHANDISE
				</div>

				<div className="w-screen h-fit p-3 rounded-xl text-white flex flex-row justify-center">
					{/* Glass Container with Cosmic Styling */}
					<div className="flex flex-col lg:flex-row rounded-3xl md:p-12 border-2 border-purple-400/50 px-7 pb-14 backdrop-blur-lg bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-indigo-900/20 shadow-2xl shadow-purple-500/20 box-border md:w-auto md:max-w-7xl md:justify-between md:items-center">
						<div className="mid-section flex-1 mb-8 md:mb-0">
							{/* Product Image with Glow Effect */}
							<div className="relative">
								<img src={imgarray[count]} alt="Merch 1" className="cu-main-image w-full max-w-full h-[350px] md:h-auto rounded-xl object-contain drop-shadow-2xl" />
								<div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-600/20 to-transparent pointer-events-none"></div>
							</div>

							{/* Navigation Buttons */}
							<div className="flex justify-center items-center gap-6 md:flex-row md:justify-evenly md:mt-8">
								<button className="sign-left text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white border-2 border-purple-400/50 rounded-full py-3 px-6 shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-purple-400/50 hover:shadow-xl" onClick={decrement}>
									<FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
								</button>

								<span className="team-name text-sm font-bold md:text-lg font-vermin tracking-widest text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text drop-shadow-lg hover:bg-gradient-to-r hover:from-pink-300 hover:via-cyan-300 hover:to-purple-300 transition-all duration-700 cursor-default">
									{count === 1 ? "OVERALL COORDINATOR" : count === 2 ? "HEAD COORDINATOR" : count === 3 ? "CORE COORDINATOR" : "EXECUTIVES"}
								</span>

								<button className="sign-right text-sm bg-gradient-to-r from-pink-600 to-purple-600 text-white border-2 border-purple-400/50 rounded-full py-3 px-6 shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-purple-400/50 hover:shadow-xl" onClick={increment}>
									<FontAwesomeIcon icon={faArrowRight} className="text-lg" />
								</button>
							</div>
							
							{/* Description with Hover Effect */}
							<div className="disc text-lg mt-10 ml-5 font-speedPixel italic text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-center md:ml-0 drop-shadow-lg hover:bg-gradient-to-r hover:from-cyan-200 hover:via-purple-200 hover:to-pink-200 hover:scale-105 transition-all duration-500 cursor-default">
								Choose Your Merchandise according to your position.
							</div>
						</div>

						{/* Right Side - Product Info */}
						<div className="w-full max-w-[500px] md:w-[400px] xl:w-[500px] mt-6 text-center md:mt-16">
							{/* Main Product Title with Advanced Effects */}
							<p className="text-2xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text font-vermin tracking-wider drop-shadow-2xl mb-4 hover:bg-gradient-to-r hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 hover:scale-110 transition-all duration-700 cursor-default">
								SAMAR 2025 MERCH
							</p>
							
							{/* Subtitle with Glow Effect */}
							<p className="cu-subtext text-lg md:text-2xl font-speedPixel text-transparent bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text mt-4 drop-shadow-lg tracking-wider hover:bg-gradient-to-r hover:from-pink-200 hover:via-cyan-200 hover:to-purple-200 hover:drop-shadow-2xl transition-all duration-500 cursor-default">
								Fuel your passion for the game!
							</p>
							
							{/* Special Offer with Enhanced Styling */}
							<div className="cu-special-offer mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-800/30 to-pink-800/30 border border-purple-400/30 hover:border-pink-400/50 hover:bg-gradient-to-r hover:from-pink-800/30 hover:to-purple-800/30 transition-all duration-500">
								<p className="cu-special-text text-sm md:text-lg font-speedPixel italic text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text tracking-wider hover:bg-gradient-to-r hover:from-purple-200 hover:via-yellow-200 hover:to-pink-200 transition-all duration-500 cursor-default">
									It's all about celebrating your team.<br />
									Wear your pride, live the action!
								</p>
							</div>

							{/* Size Chart Button */}
							<div className="samar-sizes mt-6 md:mt-8 mb-6 flex justify-center">
								<button 
									onMouseEnter={handleHover} 
									className='block border-2 border-purple-400/50 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-sm font-bold font-crossFly rounded-2xl hover:rounded-3xl hover:scale-105 transition-all ease-in-out duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 hover:shadow-xl' 
									onClick={toggleModal}
								>
									GET THE RIGHT SIZE<br />
									<span className="text-xs opacity-80">FOR YOU</span>
								</button>
							</div>

							{/* Price with Advanced Animation */}
							<div className="total text-xl font-bold mt-8 p-4 rounded-2xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-purple-400/30 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-indigo-900/40 hover:scale-105 transition-all duration-500">
								<span className="lol font-speedPixel text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text hover:bg-gradient-to-r hover:from-purple-300 hover:to-cyan-300 transition-all duration-500 cursor-default">
									Total Amount: 
								</span>
								<span className="lola text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text font-speedPixel italic text-2xl ml-2 drop-shadow-lg hover:bg-gradient-to-r hover:from-purple-300 hover:via-yellow-300 hover:to-pink-300 hover:drop-shadow-2xl hover:scale-110 transition-all duration-500 cursor-default">
									{499}/-
								</span>
							</div>
							
							{/* Payment Button */}
							<div className="merch-btn mt-6">{buttonMap[count]}</div>
						</div>
					</div>
				</div>

				{/* Modal */}
				{isModalOpen && (
					<div className="modal fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
						<div className="modal-content bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-lg p-8 rounded-3xl relative border-2 border-purple-400/50 shadow-2xl shadow-purple-500/30">
							<span 
								className="close-button w-12 h-12 lg:w-16 lg:h-16 m-4 flex flex-row justify-center items-center text-center absolute top-0 right-0 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-full cursor-pointer text-white text-2xl lg:text-3xl transition-all duration-300 hover:scale-110 shadow-lg" 
								onClick={toggleModal}
							>
								&times;
							</span>
							<img src={SizeChart} alt="Size Chart" className="size-chart-image w-full max-w-[80vw] h-auto rounded-2xl border-2 border-purple-400/30" />
						</div>
					</div>
				)}
			</div>
        </>
    );
}

export default Merchandise;
