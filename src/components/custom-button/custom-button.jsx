import React from "react";
import './custom-button.styles.css'


const CustonButton =({children, ...otherprops})=> {
    return (
        <button className="text-xs md:text-sm mt-4 font-semibold w-36 md:w-48 lg:w-40 lg:mt-9 h-14 md:h-16 md:h-14 tracking-tighter" >
            {children}
        </button>
    )
}

export default CustonButton;