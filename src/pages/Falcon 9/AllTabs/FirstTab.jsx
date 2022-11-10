import React from "react";

const FirstTab = () => {
    return (
        <div className="text-white w-5/12 tracking-tight leading-7 pt-10" style={{fontFamily:"sans-serif"}}>
            <p>Merlin is a family of rockets engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.</p>
            <div className="text-sm font-semibold pt-12 flex">
                <h3>PROPELLANT</h3>
                <h3 className="ml-80 pl-14">LOX<span className="text-gray-500">/ RP-1</span></h3>
            </div>
            <hr className="mt-6 border-gray-500" />
            <div className="text-sm font-semibold pt-4 flex ">
                <h3>THRUST</h3>
                <h3 className="ml-80 pl-10">845 kN<span className="text-gray-500">/ 190,000 lbf</span></h3>
            </div>
            <hr className="mt-6 border-gray-500" />
        </div>
    )
}

export default FirstTab;