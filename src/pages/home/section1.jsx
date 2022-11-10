import React from "react";
import CustonButton from "../../components/custom-button/custom-button";
import Navbar from "../../components/navbar/navbar";
import './section1.styles.css'

const Section1 = () => {
    
    return(
        <div className="section1" >
            <Navbar />
            <div className="relative top-2/3 lg:top-2/4 text-white ml-5 md:ml-12 md:mt-10 lg:mt-5">
                <h3 className="font-normal">RECENT MISSION</h3>
                <h1 className="font-semibold text-3xl md:text-5xl tracking-tighter">USSF- 44 MISSION</h1>
                <CustonButton> REWATCH</CustonButton>
            </div>
        </div>
    )
}

export default Section1;