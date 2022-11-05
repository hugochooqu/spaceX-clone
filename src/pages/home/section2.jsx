import React from "react";
import CustonButton from "../../components/custom-button/custom-button";
import './section2.styles.css'

const Section2 = () => {
    
    return(
        <div className="section2" >
            <div className="relative top-2/3 ml-5 text-white">
                <h4>RECENT MISSION</h4>
                <h1 className="text-3xl font-bold tracking-tight">EUTELSAT HOTBIRD 13G MISSION</h1>
                <CustonButton>REWATCH</CustonButton>
            </div>

        </div>
    )
}

export default Section2;