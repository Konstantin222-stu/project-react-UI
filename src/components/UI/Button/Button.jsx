import React from "react";
import "./button.css"

const Button = ({variant, disableShadow, disabled, size, color}) => {
    let disableShadowStyle=''
    if(disableShadow){
        disableShadowStyle='disableShadow'
    }
    else{
        disableShadowStyle=''
    }
    const rootClass = [variant,disableShadowStyle, size, color]
    return(
        <button className={rootClass.join(' ')} disabled={disabled} >Default</button>
    )
}

export default Button