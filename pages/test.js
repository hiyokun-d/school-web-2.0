import Image from 'next/image';
import style from '../style/intro.module.css'
import { useEffect, useState } from 'react';

const Test = () => {
	const [word, setWord] = useState(null);
	const [changeWord, setChangeWord] = useState(true);

	const words = [
		"this is", // English
		"ini adalah", // Indonesian
		"これは", // Japanese
		"esto es", // Spanish
		"这是", // Chinese (Simplified)
		"это", // Russian
		"ceci est", // French
		"questo è", // Italian
		"ini iya", // Banjar
		"inggih", // Javanese
		"utuk", // Sundanese
		"toulo", // Bugis
		"inne", // Makassar
	];

	useEffect(() => {
		let interval;

		const randomWord = () => {
			setWord(words[Math.floor(Math.random() * words.length)]);
		};

		interval = setInterval(() => {
			if (changeWord) {
				randomWord();
			}
		}, 100);

		setTimeout(() => {
			setChangeWord(false);
		}, 5000); // Stop word changes after 3 seconds

		return () => clearInterval(interval);
	}, [changeWord]);

	useEffect(() => {
		if (!changeWord) {
			setWord("WE ARE");
		}
	}, [changeWord]);
	
	return (
		<div className={style.container}>
			<div class={style.context}>
				<Image className={style.logo} src={"/images/icon/hiyo-logo.png"} alt="this website make by hiyo, and just ME MAKE THIS WEBSITE AS F*CK" width={500} height={500} />
				<h1 className={style.title}>{word}</h1>
				<h1 className={style.subtitle}>SMANSA</h1>
				<Image src={"/images/icon/icon.png"} alt="this website make by hiyo, and just ME MAKE THIS WEBSITE AS F*CK"  width={468} height={470} />
			</div>

			<div class={style.area} >
				<ul class={style.circles}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div >
		</div>
	);
};

export default Test;
