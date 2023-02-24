import { useState } from "react";

import ImgBox from "./ImgBox";

import image from "../style/imageList.module.css"

const ImgPreviewer = ({
	ImageURL = [],
	className_img,
	className_div,
	maxShowing,
}) => {
	const [clickedImg, setClickedImg] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentArray = [];

	ImageURL.forEach((datas) => {
		if (
			maxShowing == undefined ||
			maxShowing == null ||
			maxShowing == 0 ||
			maxShowing > ImageURL.length
		) {
			maxShowing = ImageURL.length;
			currentArray.push(datas);
			if (maxShowing > ImageURL.length) {
				console.warn("the maxShowing reach the maximum of the array length");
			}
		} else {
			if (maxShowing)
				if (maxShowing > currentArray.length) {
					currentArray.push(datas);
					//	^?
				}
		}
	});

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

	return (
		<div className={`${image['imgPreviewer-container']}`}>
			{currentArray.map((data, index) => {
				return (
					<div
						key={data}
						className={`notselected ${
							className_div ? className_div : image["imgPreviewer-wrapper"]
						}`}
					>
						<img
							src={`${data}`}
							alt="Smansa Image by hiyo"
							onClick={() => {
								handleClick(data, index);
							}}
							className={className_img ? className_img : image['imgPreviewer-image']}
							draggable={"false"}
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
