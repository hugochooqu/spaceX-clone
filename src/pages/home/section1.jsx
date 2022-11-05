import React from "react";
import CustonButton from "../../components/custom-button/custom-button";
import Navbar from "../../components/navbar/navbar";
import './section1.styles.css'

const Section1 = () => {
    
    return(
        <div className="section1" >
            <Navbar />
            <div className="relative top-2/3 text-white ml-5 ">
                <h3 className="font-normal">RECENT MISSION</h3>
                <h1 className="font-bold text-3xl tracking-tighter">USSF- 44 MISSION</h1>
                <CustonButton > REWATCH</CustonButton>
            </div>
        </div>
    )
}

export default Section1;