import { useEffect, useRef } from 'react';
import Tilt from "react-parallax-tilt"
import Image from 'next/image';
import indexCSS from "./css/home.module.css" /* index css file that main of the page */

//? sub style sheet file
import titleCSS from "./css/title.module.css"
import teachersCSS from "./css/teachersData.module.css"
import majorsCSS from "./css/majors.module.css"

function TitleScreen() {
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
  };

  return (
    <>
      <header className={titleCSS.titleScreen}>
        <div className={titleCSS.container}>
          <h1>SMANSA</h1>


          <div className={titleCSS.subElement} >
            <div className={titleCSS.logo}>
              <Image className={titleCSS.image} src={"/images/icon/icon.png"} width={368} height={370} alt="school that in indonesia maybe you don't know but now you know" />
            </div>
            <div className={titleCSS.description}>
              <h1>About</h1>
              <p>
                Ut nisi laborum deserunt eiusmod fugiat et tempor.
                Ullamco eiusmod id cupidatat officia est pariatur.
                Cupidatat nostrud dolor sunt commodo amet ullamco
                qui eiusmod excepteur irure ad culpa amet. Sint
                voluptate laborum reprehenderit dolor minim id
                proident aute commodo cillum.
              </p>
            </div>
          </div>
        </div>

        <div className={titleCSS.imageContainer}>
          <div className={titleCSS.slideshow}>
            <Image width={1200} height={675} ref={el => handleImageRef(el, 0)} src="/images/slider/slider.jpg" alt="Image 1" className={`notSelected ${titleCSS['fade-in']}`} />
            <Image width={1200} height={675} ref={el => handleImageRef(el, 1)} src="/images/slider/slider2.jpg" alt="Image 2" className='notSelected' />
            <Image width={1200} height={675} ref={el => handleImageRef(el, 2)} src="/images/slider/slider3.jpg" alt="Image 3" className='notSelected' />
          </div>
        </div>
      </header>
    </>
  )
}

function TeachersData() {
  return (
    <>
      <div className={teachersCSS.container}>
        <h1>Teachers</h1>

        <div className={teachersCSS.cardCollections}>
          <div className={teachersCSS.card}>
            <Tilt className={`${teachersCSS.paralax} paralaxEffect`} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400} perspective={500}>
              <div className={teachersCSS.box}>
                <div className={`${teachersCSS.elements} ${teachersCSS.bg}`}></div>
                <div className={`${teachersCSS.elements} ${teachersCSS.content}`}>
                  <p>beliau mempunyai jabatan sebagai bla bla bla dan sebagainya ini itu ini itu aneh</p>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.name}`}>
                  <h2>Hailey Reinger</h2>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.imgBx}`}>
                  <Image src={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg"} width={128} height={128} alt='Hello World' />
                </div>
                <div className={teachersCSS.card}></div>
              </div>
            </Tilt>
          </div>
          <div className={teachersCSS.card}>
            <Tilt className={`${teachersCSS.paralax} paralaxEffect`} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400} perspective={500}>
              <div className={teachersCSS.box}>
                <div className={`${teachersCSS.elements} ${teachersCSS.bg}`}></div>
                <div className={`${teachersCSS.elements} ${teachersCSS.content}`}>
                  <p>beliau mempunyai jabatan sebagai bla bla bla dan sebagainya ini itu ini itu aneh</p>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.name}`}>
                  <h2>Hailey Reinger</h2>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.imgBx}`}>
                  <Image src={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg"} width={128} height={128} alt='Hello World' />
                </div>
                <div className={teachersCSS.card}></div>
              </div>
            </Tilt>
          </div>
          <div className={teachersCSS.card}>
            <Tilt className={`${teachersCSS.paralax} paralaxEffect`} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400} perspective={500}>
              <div className={teachersCSS.box}>
                <div className={`${teachersCSS.elements} ${teachersCSS.bg}`}></div>
                <div className={`${teachersCSS.elements} ${teachersCSS.content}`}>
                  <p>beliau mempunyai jabatan sebagai bla bla bla dan sebagainya ini itu ini itu aneh</p>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.name}`}>
                  <h2>Hailey Reinger</h2>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.imgBx}`}>
                  <Image src={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg"} width={128} height={128} alt='Hello World' />
                </div>
                <div className={teachersCSS.card}></div>
              </div>
            </Tilt>
          </div>
          <div className={teachersCSS.card}>
            <Tilt className={`${teachersCSS.paralax} paralaxEffect`} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400} perspective={500}>
              <div className={teachersCSS.box}>
                <div className={`${teachersCSS.elements} ${teachersCSS.bg}`}></div>
                <div className={`${teachersCSS.elements} ${teachersCSS.content}`}>
                  <p>beliau mempunyai jabatan sebagai bla bla bla dan sebagainya ini itu ini itu aneh</p>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.name}`}>
                  <h2>Hailey Reinger</h2>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.imgBx}`}>
                  <Image src={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg"} width={128} height={128} alt='Hello World' />
                </div>
                <div className={teachersCSS.card}></div>
              </div>
            </Tilt>
          </div>
          <div className={teachersCSS.card}>
            <Tilt className={`${teachersCSS.paralax} paralaxEffect`} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400} perspective={500}>
              <div className={teachersCSS.box}>
                <div className={`${teachersCSS.elements} ${teachersCSS.bg}`}></div>
                <div className={`${teachersCSS.elements} ${teachersCSS.content}`}>
                  <p>beliau mempunyai jabatan sebagai bla bla bla dan sebagainya ini itu ini itu aneh</p>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.name}`}>
                  <h2>Hailey Reinger</h2>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.imgBx}`}>
                  <Image src={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg"} width={128} height={128} alt='Hello World' />
                </div>
                <div className={teachersCSS.card}></div>
              </div>
            </Tilt>
          </div>
          <div className={teachersCSS.card}>
            <Tilt className={`${teachersCSS.paralax} paralaxEffect`} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400} perspective={500}>
              <div className={teachersCSS.box}>
                <div className={`${teachersCSS.elements} ${teachersCSS.bg}`}></div>
                <div className={`${teachersCSS.elements} ${teachersCSS.content}`}>
                  <p>beliau mempunyai jabatan sebagai bla bla bla dan sebagainya ini itu ini itu aneh</p>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.name}`}>
                  <h2>Hailey Reinger</h2>
                </div>
                <div className={`${teachersCSS.elements} ${teachersCSS.imgBx}`}>
                  <Image src={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg"} width={128} height={128} alt='Hello World' />
                </div>
                <div className={teachersCSS.card}></div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  )
}

function ListOfMajors() {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(majorsCSS.animate);
        }
      });
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className={majorsCSS.container} ref={elementRef}>
      <h1>List Of majors</h1>
      <div className={majorsCSS.content}>
        <div className={`${majorsCSS.majorContainer} ${majorsCSS.science}`}>
          <h1>science</h1>
          <p>
            Veniam et quis ad proident eu do sit deserunt laboris.
            Aliqua velit fugiat velit fugiat.
            Qui do voluptate et esse fugiat.
            Occaecat sit ad est laborum eiusmod magna.
            Anim sunt ut proident eiusmod est quis culpa ex
            excepteur consectetur proident deserunt aliqua.
            Pariatur qui do elit velit non in tempor esse anim cillum ipsum qui laborum incididunt.
          </p>
          <div className={majorsCSS.image}>
            <Image src={"/images/icon/chemistry.gif"} width={100} height={100} alt='YEAH SCIENCE!'/>
            <Image src={"/images/icon/chemistry2.gif"} width={100} height={100} alt='YEAH SCIENCE!'/>
            <Image src={"/images/icon/chemistry3.gif"} width={100} height={100} alt='YEAH SCIENCE!'/>
            <Image src={"/images/icon/microscope.gif"} width={100} height={100} alt='YEAH SCIENCE!'/>
          </div>
        </div>
        <div className={`${majorsCSS.majorContainer} ${majorsCSS.social}`}>
          <h1>social science</h1>
          <p>
            Veniam et quis ad proident eu do sit deserunt laboris.
            Aliqua velit fugiat velit fugiat.
            Qui do voluptate et esse fugiat.
            Occaecat sit ad est laborum eiusmod magna.
            Anim sunt ut proident eiusmod est quis culpa ex
            excepteur consectetur proident deserunt aliqua.
            Pariatur qui do elit velit non in tempor esse anim cillum ipsum qui laborum incididunt.
          </p>
          <div className={majorsCSS.image}>
            <Image src={"/images/icon/development.png"} width={50} height={50} alt={"I'M AN INTROVERT BRO"} />
            <Image src={"/images/icon/idea.png"} width={80} height={80} alt={"I'M AN INTROVERT BRO"} />
            <Image src={"/images/icon/social-science(1).png"} width={70} height={70} alt={"I'M AN INTROVERT BRO"} />
            <Image src={"/images/icon/social-science.png"} width={50} height={50} alt={"I'M AN INTROVERT BRO"} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className={indexCSS.container}>
      <TitleScreen />
      <TeachersData />
      <ListOfMajors />
    </div>
  )
}

export default Home