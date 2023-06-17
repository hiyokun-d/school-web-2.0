import { useEffect, useRef } from 'react';
import teachersCSS from "../style/test.module.css"
import Tilt from "react-parallax-tilt"
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import Image from 'next/image';

const Test = () => {
    return (
        <>
            <div className={teachersCSS.container}>
                <h1>Teachers</h1>
                <Tilt className={"paralaxEffect"} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400} perspective={500}>
                    <div className={teachersCSS.box}>
                        <div className={`${teachersCSS.elements} ${teachersCSS.bg}`}></div>
                        <div className={`${teachersCSS.elements} ${teachersCSS.content}`}>
                            <p>Illo maiores reprehenderit doloremque ut labore quo est facere. Est at sed iure facere aut minima laborum quis ipsum. Suscipit fuga quia et et eum. Qui architecto id esse. Suscipit illo sed.</p>
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
        </>
    );
};

export default Test;
