import React from 'react'

import ImgPreviewer from '../../components/ImgPreviewer'
import Gallery from "../../style/gallery.module.css"

import imageList from "../../public/imagelist.json";
import CustomHead from '../../components/CustomHead';
import Greetings from '../../components/Greetings';

export default function gallery_hiyo() {
    return (
        <>
            <CustomHead title={"gallery Hiyo"} />
            <div className={`${Gallery['gallery-container']}`}>
                <ImgPreviewer
                    className_div={`${Gallery['gallery-img-div']}`}
                    className_img={`${Gallery['gallery-img']}`}
                    ImageURL={imageList.imageCollections}
                />
            </div>
        </>
    )
}
