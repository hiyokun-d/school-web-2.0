import React from 'react'

import ImgPreviewer from '../../components/ImgPreviewer'
import Gallery from "../../style/gallery.module.css"

import CustomHead from '../../components/CustomHead';
import { Images } from '../../utils/firebase';
import image from "../../public/imagelist.json"
import Navbar from '../../components/Navbar';

export default function gallery_hiyo() {
    return (
        <>
            <Navbar />
            <CustomHead title={"gallery Hiyo"} />
            <div className={`${Gallery['gallery-container']}`}>
                <ImgPreviewer
                    className_div={`${Gallery['gallery-img-div']}`}
                    className_img={`${Gallery['gallery-img']}`}
                    src={Images}
                />
            </div>
        </>
    )
}
