import React from "react";
import CustonButton from "../../components/custom-button/custom-button";
import './section3.styles.css';

const Section3 =()=> {
    return (
        <div className="section3">
            <div className="relative top-2/3 text-white md:w-80 lg:w-2/5 ml-5 md:ml-12">
                <h1 className="text-4xl md:text-5xl font-bold">STARSHIP UPDATE</h1>
                <CustonButton>LEARN MORE</CustonButton>
            </div>

        </div>
    )
}

export default Section3;