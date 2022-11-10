import React, {useState} from "react";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTabs";
import "./falcon9tab.styles.css"

const Falcon9Tabs = () => {

    const [activeTab, setActiveTab ] = useState("tab1");

    const handleTab1 =()=> {
        setActiveTab("tab1")
    };
    const handleTab2 =()=> {
        setActiveTab("tab2")
    }

    return(
        <div className="Tabs">
            <ul className="nav flex gap-x-3 text-white font-bold">
                <li className={activeTab === "tab1" ? "active" : ""}
                onClick={handleTab1}>
                    SEA LEVEL
                </li>
                | 
                <li className={activeTab === "tab2" ? "active" : ""}
                onClick={handleTab2} > 
                VACUUM
                </li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
                
                
            </div>
        </div>
    )
}

export default Falcon9Tabs;