import React from "react";
import CustonButton from "../../components/custom-button/custom-button";
import './section4.styles.css'

const Section4 =()=> {
    return (
        <div className="section4">
            <div className="relative top-2/3 md:top-2/4 md:pt-36 lg:pt-5 text-white ml-5 md:ml-12 md:w-80 lg:w-2/5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:font-semibold lg:font-semibold md:tracking-tighter lg:tracking-normal">STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON</h1>
                <CustonButton>LEARN MORE</CustonButton>
            </div>
        </div>
    )
}

export default Section4;