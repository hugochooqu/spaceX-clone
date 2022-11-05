import React from "react";
import './custom-button.styles.css'


const CustonButton =({children, ...otherprops})=> {
    return (
        <button className="text-xs mt-4 font-semibold" >
            {children}
        </button>
    )
}

export default CustonButton;