import { useState } from "react";

import ImgBox from "./ImgBox";

import image from "../style/imageList.module.css"
import Image from "next/image";
import { Images } from "../utils/firebase";
import Loading from "./Loading";


const ImgPreviewer = ({
	src = [],
	className_img,
	className_div,
	maxShowing,
}) => {
	const [clickedImg, setClickedImg] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentArray = [];

	if (src.length == []) 
		src = Images
	

	if (Array.isArray(src)) {
		src.forEach((datas) => {
			if (
				maxShowing == undefined ||
				maxShowing == null ||
				maxShowing == 0 ||
				maxShowing > src.length
			) {
				maxShowing = src.length;
				currentArray.push(datas);
				if (maxShowing > src.length) {
					console.warn("the maxShowing reach the maximum of the array length");
				}
			} else
				if (maxShowing)
					if (maxShowing > currentArray.length)
						currentArray.push(datas);


		});

	} else {
		throw new Error("there is error maybe the source you put in is not an array pls check it back!")
	}

	const handleClick = (item, index) => {
		setCurrentIndex(index);
		setClickedImg(item);
	};

	const handelRotationRight = () => {
		const totalLength = currentArray.length;
		if (currentIndex + 1 >= totalLength) {
			setCurrentIndex(0);
			const newUrl = currentArray[0];
			setClickedImg(newUrl);
			return;
		}

		const newIndex = currentIndex + 1;
		const newUrl = currentArray.filter((item) => {
			return currentArray.indexOf(item) === newIndex;
		});
		const newItem = newUrl[0];
		setClickedImg(newItem);
		setCurrentIndex(newIndex);
	};

	const handelRotationLeft = () => {
		const totalLength = currentArray.length;
		if (currentIndex === 0) {
			setCurrentIndex(totalLength - 1);
			const newUrl = currentArray[totalLength - 1];
			setClickedImg(newUrl);
			return;
		}
		const newIndex = currentIndex - 1;
		const newUrl = currentArray.filter((item) => {
			return currentArray.indexOf(item) === newIndex;
		});
		const newItem = newUrl[0];
		setClickedImg(newItem);
		setCurrentIndex(newIndex);
	};

	// check if the image is ready to load or not
	const [load, setImageLoaded] = useState(false)

	const handleLoadComplete = () => setImageLoaded(true)
	

	const handleLoadError = (event) => console.log("Image failed to load:", event.target.src);
	

	return (
		<div className={`${image['imgPreviewer-container']}`}>
			<Loading ElementComplete={load} />
			{currentArray.map((data, index) => {
				return (
					<div
						key={data}
						className={`notselected ${className_div ? className_div : image["imgPreviewer-wrapper"]
							} containerList`}
					>
						<Image
							width={350}
							height={350}
							src={`${data}`}
							alt="Smansa Image by hiyo"
							onClick={() => {
								handleClick(data, index);
							}}
							className={className_img ? className_img : image['imgPreviewer-image']}
							draggable={"false"}
							loading="lazy"
							onError={handleLoadError}
							onLoadingComplete={handleLoadComplete}
						/>
					</div>
				);
			})}
			<div>
				{clickedImg && (
					<ImgBox
						ClickedImg={clickedImg}
						setClickedImg={setClickedImg}
						handleRotationRight={handelRotationRight}
						handleRotationLeft={handelRotationLeft}
						currentIndex={currentIndex}
						totalCurrentIndex={maxShowing}
					/>
				)}
			</div>
		</div>
	);
};

export default ImgPreviewer;
