import { useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMoreTwoTone } from "@mui/icons-material";

import about from "../../style/about.module.css"
import Navbar from "../../components/Navbar";

const AboutusPage = () => {
    const [expanded, setExpand] = useState("");

    const handleChange = (Panel) => (event, newExpanded) => setExpand(newExpanded ? Panel : false);
    return (
        <>
            <Navbar />
            <div className={`${about['aboutus-container']}`}>
                <h1>Apa yang ingin kamu tau dari smansa?</h1>
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    TransitionProps={{
                        unmountOnExit: true,
                    }}
                    className={`${about['aboutus-accordion']}`}
                >
                    <AccordionSummary
                        className={`${about['aboutus-accordionsummary']}`}
                        expandIcon={
                            <ExpandMoreTwoTone
                                sx={{ fontSize: "2.1em", color: "aliceblue", mr: "10px" }}
                            />
                        }
                    >
                        Kapan Smansa di bangun
                    </AccordionSummary>
                    <AccordionDetails className={`${about["aboutus-accordiondetails"]}`}>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
                        ex esse exercitation amet. Nisi animcupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
                        voluptate dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                        officia voluptate. Culpa proident adipisicing id nulla nisi laboris
                        ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
                        ex non excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    TransitionProps={{
                        unmountOnExit: true,
                    }}
                    className={`${about["aboutus-accordion"]}`}
                >
                    <AccordionSummary
                        className={`${about["aboutus-accordionsummary"]}`}
                        expandIcon={
                            <ExpandMoreTwoTone
                                sx={{ fontSize: "2.1em", color: "aliceblue", mr: "10px" }}
                            />
                        }
                    >
                        Website ini di oleh siapa?
                    </AccordionSummary>
                    <AccordionDetails className={`${about["aboutus-accordiondetails"]}`}>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
                        ex esse exercitation amet. Nisi animcupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
                        voluptate dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                        officia voluptate. Culpa proident adipisicing id nulla nisi laboris
                        ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
                        ex non excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    TransitionProps={{
                        unmountOnExit: true,
                    }}
                    className={`${about["aboutus-accordion"]}`}
                >
                    <AccordionSummary
                        className={`${about["aboutus-accordionsummary"]}`}
                        expandIcon={
                            <ExpandMoreTwoTone
                                sx={{ fontSize: "2.1em", color: "aliceblue", mr: "10px" }}
                            />
                        }
                    >
                        Lokasi SMANSA
                    </AccordionSummary>
                    <AccordionDetails className={`${about["aboutus-accordiondetails"]}`}>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
                        ex esse exercitation amet. Nisi animcupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
                        voluptate dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                        officia voluptate. Culpa proident adipisicing id nulla nisi laboris
                        ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
                        ex non excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    TransitionProps={{
                        unmountOnExit: true,
                    }}
                    className={`${about["aboutus-accordion"]}`}
                >
                    <AccordionSummary
                        className={`${about["aboutus-accordionsummary"]}`}
                        expandIcon={
                            <ExpandMoreTwoTone
                                sx={{ fontSize: "2.1em", color: "aliceblue", mr: "10px" }}
                            />
                        }
                    >
                        EkstraKuliKuler yang ada di SMANSA
                    </AccordionSummary>
                    <AccordionDetails className={`${about["aboutus-accordiondetails"]}`}>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
                        ex esse exercitation amet. Nisi animcupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
                        voluptate dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                        officia voluptate. Culpa proident adipisicing id nulla nisi laboris
                        ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
                        ex non excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    TransitionProps={{
                        unmountOnExit: true,
                    }}
                    className={`${about["aboutus-accordion"]}`}
                >
                    <AccordionSummary
                        className={`bg-white ${about['aboutus-accordionsummary']}`}
                        expandIcon={
                            <ExpandMoreTwoTone
                                sx={{ fontSize: "2.1em", color: "aliceblue", mr: "10px" }}
                            />
                        }
                    >
                        Jumlah guru yang ada di SMANSA
                    </AccordionSummary>
                    <AccordionDetails className={`${about["aboutus-accordiondetails"]}`}>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
                        ex esse exercitation amet. Nisi animcupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
                        voluptate dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                        officia voluptate. Culpa proident adipisicing id nulla nisi laboris
                        ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
                        ex non excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                    TransitionProps={{
                        unmountOnExit: true,
                    }}
                    className={`${about["aboutus-accordion"]}`}
                >
                    <AccordionSummary
                        className={`${about["aboutus-accordionsummary"]}`}
                        expandIcon={
                            <ExpandMoreTwoTone
                                sx={{ fontSize: "2.1em", color: "aliceblue", mr: "10px" }}
                            />
                        }
                    >
                        Siapa yang membuat website ini
                    </AccordionSummary>
                    <AccordionDetails className={`${about["aboutus-accordiondetails"]}`}>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
                        ex esse exercitation amet. Nisi animcupidatat excepteur officia.
                        Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
                        voluptate dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex occaecat
                        reprehenderit commodo officia dolor Lorem duis laboris cupidatat
                        officia voluptate. Culpa proident adipisicing id nulla nisi laboris
                        ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
                        ex non excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
};

export default AboutusPage;
