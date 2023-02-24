import { useState } from "react";
import imageStyle from "../style/imageBox.module.css"

const ImgBox = ({
	ClickedImg,
	setClickedImg,
	handleRotationRight,
	handleRotationLeft,
	currentIndex,
	totalCurrentIndex,
}) => {
	const [className, setClass] = useState("")
	const showHandler = (e) => {
		if (
			e.target.classList.contains("hide") &&
			!e.target.classList.contains("show-arrows_left") &&
			!e.target.classList.contains("show-arrows_right")
		) {
			setClass("hiding")

			setTimeout(() => {
				setClickedImg("");
				setClass("")
			}, 550);

			clearTimeout(550);
		}
	};

	onkeydown = (e) => {
		if (e.key === "ArrowLeft") {
			handleRotationLeft();
		} else if (e.key === "ArrowRight") {
			handleRotationRight();
		}
	};
	return (
		<>
			<div className={`${imageStyle.show} hide notselected ${imageStyle[className]}`} onClick={showHandler}>
				<img
					src={ClickedImg}
					alt="Image previewer"
					className={imageStyle.sontol}
					draggable={"false"}
				/>
				<span>
					{currentIndex + 1} / {totalCurrentIndex}
				</span>

				<div onClick={handleRotationLeft} className={`${imageStyle['show-arrows_left']}`}>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</div>

				<div onClick={handleRotationRight} className={`${imageStyle['show-arrows_right']}`}>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImgBox;
