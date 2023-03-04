import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import nav from "../style/navBar.module.css"

export default function Navbar({ children }) {
    const navbar = useRef(null);
    const [outscreen, checkScreen] = useState(true);


    const navHandle = () => {
        requestAnimationFrame(navHandle);
        const position = navbar.current?.getBoundingClientRect();

        if (position)
            if (position.top < -34) {
                checkScreen(true);
            } else {
                checkScreen(false);
            }
    };

    useEffect(navHandle, [navHandle]);

    return (
        <>
            <div ref={navbar} className={`${nav.navcontainer} notselected`}>
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about-ur-mom/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link href={"/school-articles"}>Schools Article</Link>
                    </li>
                    <li>
                        <Link href={"/announcements"}>Announcements</Link>
                    </li>
                    <li>
                        <Link href={"/HiyoPhotos/gallery-hiyo"}>Gallery</Link>
                    </li>
                    <li>
                        <Link href={"/download"}>Download</Link>
                    </li>
                    <li>
                        <Link href={"/there-is-contacts/contacts"}>Our Contact</Link>
                    </li>
                </ul>
            </div>

            {/* when the navigation bar is off from the screen this will appears and change the navbar */}
            <div
                className={`${nav.navoutscreen} notselected ${outscreen ? nav.outscreen : nav.inscreen}`}
            >
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about-ur-mom/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link href={"/school-articles"}>Schools Article</Link>
                    </li>
                    <li>
                        <Link href={"/announcements"}>Announcements</Link>
                    </li>
                    <li>
                        <Link href={"/HiyoPhotos/gallery-hiyo"}>Gallery</Link>
                    </li>
                    <li>
                        <Link href={"/download"}>Download</Link>
                    </li>
                    <li>
                        <Link href={"/there-is-contacts/contacts"}>Our Contact</Link>
                    </li>
                </ul>
            </div>

            {children}
        </>
    );
}
