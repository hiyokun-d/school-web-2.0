import { useRouter } from "next/router";
import { useEffect } from "react";

let timeoutTime = 5000
const Index = () => {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.replace('/HiyoHouse/Home'); // Replace "/home" with the actual path of your home page
        }, timeoutTime);

        return () => {
            clearTimeout(timeout);
            timeoutTime = -100
        }
    }, [router]);

    return (
        <div>
            <h1>Welcome to SMANSA Web Project</h1>
            <p>This is the introduction section of our website.</p>
            <p>need to be remember it&apos;s just demo so maybe tomorrow it will change</p>
        </div>
    );
};

export default Index;
