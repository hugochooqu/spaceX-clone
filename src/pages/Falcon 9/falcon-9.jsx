import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./falcon-9.styles.css";
import Falcon9Tabs from "./falcon9tab";


const Falcon9 = () =>{
    return(
        <div>
            <div className="falconsection-1">
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

            <div>
                <div>
                    <div className="falconsection-2 ">
                        <div className="ml-14 pt-20">
                            <div>
                                <h3 className="text-xl text-white">ENGINES</h3>
                                <h2 className="text-4xl text-white font-bold pt-4">MERLIN</h2>
                                <div className="pt-14">
                                   <Falcon9Tabs />
                                </div>
                            </div>
                        </div>
                </div>
                <div></div>
                </div>
                
            </div>
            <Footer />
            
            
        </div>
    )
}

export default Falcon9;