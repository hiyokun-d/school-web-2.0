import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import indexCSS from "./css/home.module.css" /* index css file that main of the page */

import { ScrollAnimate } from '../../functions/ScrollAnimate';

//? sub style sheet file
import titleCSS from "./css/title.module.css"
import teachersCSS from "./css/teachersData.module.css"
import majorsCSS from "./css/majors.module.css"
import Navbar from '../../components/Navbar';

function TitleScreen() {
  return (
    <>
      <header className={titleCSS.titleScreen}>
        <div className={titleCSS.border}></div>
        <h1>WE ARE</h1>
        <Image
          src={"/images/icon/icon.png"} alt="this website make by hiyo, and just ME MAKE THIS WEBSITE? YES AND I HATE IT F*CK" width={468} height={470} />
        <h2>SMANSA</h2>
      </header>
    </>
  )
}

function TeachersData() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/teachers.config.json")
      const resolve = await response.json()
      setData(resolve)
    }

    fetchData()
  }, [])

  /* 

  */

  return (
    <>
      <div className={teachersCSS.container}>
        <h1>Teachers</h1>

        <div className={teachersCSS.content}>
          {data.map((resolve, index) => {
            return (
              <div key={resolve} className={teachersCSS.contentContainer}>
                <div className={teachersCSS.aboutContainer}>
                  <div className={teachersCSS.about}>
                    <Image src={resolve.avatar} width={150} height={150} alt='Hello World' />
                    <h1>{resolve.name}</h1>
                    <p>{resolve.description}</p>
                  </div>

                </div>
                  <Image src={resolve.avatar} width={150} height={150} alt='Hello World' />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

function ListOfMajors() {
  const elementRef = useRef(null)
  ScrollAnimate(elementRef, majorsCSS)

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
            <Image src={"/images/icon/chemistry.gif"} width={100} height={100} alt='YEAH SCIENCE!' />
            <Image src={"/images/icon/chemistry2.gif"} width={100} height={100} alt='YEAH SCIENCE!' />
            <Image src={"/images/icon/chemistry3.gif"} width={100} height={100} alt='YEAH SCIENCE!' />
            <Image src={"/images/icon/microscope.gif"} width={100} height={100} alt='YEAH SCIENCE!' />
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
    <>
      <Navbar />
      <div className={indexCSS.container}>
        <TitleScreen />
        <TeachersData />
        <ListOfMajors />
      </div>
    </>
  )
}

export default Home