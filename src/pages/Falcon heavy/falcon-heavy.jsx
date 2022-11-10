import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./falcon-heavy.styles.css"

const FalconHeavy =()=> {
    return(
            <div>
                <div className="falconheavy-1">
                    <Navbar />
                    <div className="text-center text-white mt-44">
                        <h2 className="text-8xl font-bold tracking-tighter">
                            FALCON HEAVY
                        </h2>
                        <h4 className="text-lg pt-4">
                            THE WORLD'S MOST POWERFUL ROCKET
                        </h4>
                    </div>

                </div>
                <Footer />
            </div>
    )
}

export default FalconHeavy;