import React, { useState, useEffect, useRef } from "react";

const games = [
  {
    id: 1,
    title: "BasketBall",
    description: "Dota 2 is a multiplayer online battle arena by Valve.",
    image: "assets/sports/basketball/basketball_1.jpg",
  },
  {
    id: 2,
    title: "Cricket",
    description: "The Witcher 3 is an action RPG game.",
    image: "assets/sports/cricket/cricket_1.jpg",
  },
  {
    id: 3,
    title: "Football",
    description: "RDR 2 is an action-adventure game by Rockstar Games.",
    image: "assets/sports/football/football_1.jpg",
  },
  {
    id: 4,
    title: "VolleyBall",
    description: "PUBG is a battle royale game.",
    image: "assets/sports/volleyball/volleyball_1.jpg",
  },
  {
    id: 5,
    title: "HandBall",
    description: "Fortnite is a battle royale and building game.",
    image: "assets/sports/handball/handball_1.jpg",
  },
  {
    id: 6,
    title: "ShortPut",
    description: "Far Cry 5 is a first-person shooter by Ubisoft.",
    image: "assets/sports/shortput/shortput_1.jpg",
  },
  {
    id: 7,
    title: "BasketBall",
    description: "Dota 2 is a multiplayer online battle arena by Valve.",
    image: "assets/sports/basketball/basketball_1.jpg",
  },
  {
    id: 8,
    title: "Cricket",
    description: "The Witcher 3 is an action RPG game.",
    image: "assets/sports/cricket/cricket_1.jpg",
  },
  {
    id: 9,
    title: "Football",
    description: "RDR 2 is an action-adventure game by Rockstar Games.",
    image: "assets/sports/football/football_1.jpg",
  },
  {
    id: 10,
    title: "VolleyBall",
    description: "PUBG is a battle royale game.",
    image: "assets/sports/volleyball/volleyball_1.jpg",
  },
  {
    id: 11,
    title: "HandBall",
    description: "Fortnite is a battle royale and building game.",
    image: "assets/sports/handball/handball_1.jpg",
  },
  {
    id: 12,
    title: "ShortPut",
    description: "Far Cry 5 is a first-person shooter by Ubisoft.",
    image: "assets/sports/shortput/shortput_1.jpg",
  },
  {
    id: 13,
    title: "BasketBall",
    description: "Dota 2 is a multiplayer online battle arena by Valve.",
    image: "assets/sports/basketball/basketball_1.jpg",
  },
  {
    id: 14,
    title: "Cricket",
    description: "The Witcher 3 is an action RPG game.",
    image: "assets/sports/cricket/cricket_1.jpg",
  },
  {
    id: 15,
    title: "Football",
    description: "RDR 2 is an action-adventure game by Rockstar Games.",
    image: "assets/sports/football/football_1.jpg",
  },
  {
    id: 16,
    title: "VolleyBall",
    description: "PUBG is a battle royale game.",
    image: "assets/sports/volleyball/volleyball_1.jpg",
  },
  {
    id: 17,
    title: "HandBall",
    description: "Fortnite is a battle royale and building game.",
    image: "assets/sports/handball/handball_1.jpg",
  },
  {
    id: 18,
    title: "ShortPut",
    description: "Far Cry 5 is a first-person shooter by Ubisoft.",
    image: "assets/sports/shortput/shortput_1.jpg",
  },
];

function ImageSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const totalItems = games.length;
	const isClicked = useRef(false);
	const timeoutRef = useRef(null);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (!isClicked.current) {
		intervalRef.current = setInterval(() => {
			handleNext();
		}, 3000);
		}

		return () => {
		clearInterval(intervalRef.current);
		};
	}, []);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
		(prevIndex - 1 + totalItems) % totalItems
		);
	};

	const handleCardClick = (index) => {
		if (index !== activeIndex) {
		clearInterval(intervalRef.current);
		isClicked.current = true;

		setActiveIndex(index);

		timeoutRef.current = setTimeout(() => {
			handleNext();
			isClicked.current = false;
			intervalRef.current = setInterval(() => {
			handleNext();
			}, 3000);
		}, 10000);
		}
	};

	return (
		<section className="md:p-12 lg:p-16 flex flex-col justify-center items-center">
			<main className="w-screen backdrop-blur-lg p-16 border-t-2 border-b-2 border-rose-600">
				<div className="overflow-hidden relative">
					<h2 className="mb-7 pb-4 text-2xl font-bold text-white capitalize flex justify-center items-center">
						<div className="relative">
							<span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent font-black uppercase text-6xl tracking-[0.2em] drop-shadow-[0_0_30px_rgba(140,204,255,0.9)] filter brightness-150">
								Image Gallery
							</span>
							<span className="absolute bottom-[-20px] left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 rounded-xl drop-shadow-[0_0_15px_rgba(140,204,255,0.8)]"></span>
							<span className="absolute bottom-[-20px] left-0 w-12 h-2 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl drop-shadow-[0_0_20px_rgba(140,204,255,1)]"></span>
						</div>
					</h2>

					<div className="p-5">
						<div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 340}px)` }} >
							{games.map((game, index) => (
								<div key={game.id} onClick={() => handleCardClick(index)} className={`relative flex-shrink-0 ml-5 cursor-pointer border-2 border-rose-500 rounded-xl overflow-hidden transition-all duration-500 ease-in-out group ${ index === activeIndex ? "w-[550px]" : "w-[320px]" } h-[400px]`}  style={{ backgroundImage: `url(${game.image})`, backgroundSize: "cover", backgroundPosition: "center", }} >
									<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

									<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all ease-in-out"></div>
									<div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-in-out ${ index === activeIndex ? "translate-y-0" : "translate-y-[calc(100%-80px)]" }`} >
										<h3 className="text-xl font-bold mb-2 uppercase font-crossFly italic bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(140,204,255,0.8)]">
											{game.title}
										</h3>

										<p className={`bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent transition-opacity duration-500 font-brave81 lowercase tracking-wider drop-shadow-[0_0_10px_rgba(140,204,255,0.6)] ${ index === activeIndex ? "opacity-100" : "opacity-0" }`} >
											{game.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

export default ImageSection;