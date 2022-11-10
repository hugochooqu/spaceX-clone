import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./falcon-9.styles.css";

const Falcon9 = () =>{
    return(
        <div>
            <div className="section-1">
               <Navbar/> 
               <div className="text-white text-center mt-40  ">
                <h2 className="text-8xl font-bold tracking-tighter">
                    FALCON 9
                </h2>
                <h4 className="text-lg pt-4">
                    FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
                </h4>
               </div>
            </div>
            
        </div>
    )
}

export default Falcon9;