import React from "react";
import CustonButton from "../../components/custom-button/custom-button";
import './section2.styles.css'

const Section2 = () => {
    
    return(
        <div className="section2" >
            <div className="relative top-2/3 md:top-2/4  md:pt-40 lg:pt-20 ml-5 md:ml-12 md:w-80 lg:w-2/5 text-white">
                <h4>RECENT MISSION</h4>
                <h2 className="text-3xl md:text-5xl font-bold md:font-normal lg:font-normal tracking-tight md:tracking-tighter">EUTELSAT HOTBIRD 13G MISSION</h2>
                <CustonButton>REWATCH</CustonButton>
            </div>

        </div>
    )
}

export default Section2;