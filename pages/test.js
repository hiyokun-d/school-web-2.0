import { useEffect, useRef } from 'react';
import titleCSS from "../style/test.module.css"
import Tilt from "react-parallax-tilt"
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import Image from 'next/image';

const Test = () => {
  const images = useRef([]);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.current.length === 0) return;

      images.current[currentIndex.current]?.classList.remove(titleCSS['fade-in']);
      images.current[currentIndex.current]?.classList.add(titleCSS['fade-out']);

      currentIndex.current = (currentIndex.current + 1) % images.current.length;

      images.current[currentIndex.current]?.classList.remove(titleCSS['fade-out']);
      images.current[currentIndex.current]?.classList.add(titleCSS['fade-in']);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    const handleImageRef = (el, index) => {
        if (el) {
            images.current[index] = el;
        }
    }


  return (
		<>
			<header className={titleCSS.titleScreen}>
				<div className={titleCSS.container}>
					<h1>SMANSA</h1>

					<div className={titleCSS.subElement}>
						<div className={titleCSS.logo}>
							<Image
								className={titleCSS.image}
								src={"/images/icon/icon.png"}
								width={368}
								height={370}
								alt="school that in indonesia maybe you don't know but now you know"
							/>
						</div>
						<div className={titleCSS.description}>
							<h1>About</h1>
							<p>
								Ut nisi laborum deserunt eiusmod fugiat et tempor. Ullamco
								eiusmod id cupidatat officia est pariatur. Cupidatat nostrud
								dolor sunt commodo amet ullamco qui eiusmod excepteur irure ad
								culpa amet. Sint voluptate laborum reprehenderit dolor minim id
								proident aute commodo cillum.
							</p>
						</div>
					</div>
				</div>

				<div className={titleCSS.imageContainer}>
					<div className={titleCSS.slideshow}>
						<Image
							width={1200}
							height={675}
							ref={(el) => handleImageRef(el, 0)}
							src="/images/slider/slider.jpg"
							alt="Image 1"
							className={`notSelected ${titleCSS["fade-in"]}`}
						/>
						<Image
							width={1200}
							height={675}
							ref={(el) => handleImageRef(el, 1)}
							src="/images/slider/slider2.jpg"
							alt="Image 2"
							className="notSelected"
						/>
						<Image
							width={1200}
							height={675}
							ref={(el) => handleImageRef(el, 2)}
							src="/images/slider/slider3.jpg"
							alt="Image 3"
							className="notSelected"
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export default Test;
