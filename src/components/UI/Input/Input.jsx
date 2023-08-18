import React, { useCallback, useEffect, useMemo, useRef } from "react";
import "./input.css"
import useHover from "../../hooks/useHover";
import useFocus from "../../hooks/useFocus";
const Input = ({error, disabled, helperText, startIcon, endIcon, value, size, fullWidth, multiline, row} ) =>{
    const ref = useRef()
    const isHovering = useHover(ref)
    const isFocusing = useFocus(ref)
    
    const isErro = (error) =>{
        if(error){
            return'error'
        }
        return''
    }

    const isImageInput = (startIcon,endIcon) => {
        if(startIcon){
            return 'input__img_start'
        }
        else if(endIcon){
            return 'input__img_end'
        }
        return ''
    }

    const setSize = (size)=> {
        if(size == 'sm'){
            return({height: 20})
        }
        else if(size == 'md'){
            return({height: 60})
        }
        return 
    }

    const isFullWidth = (fullWidth)=> {
        if(fullWidth){
            return({width: '100%'})
        }
        return 
    }

    const setColor = (error, isHovering,isFocusing) =>{
        if(isHovering && error && !isFocusing){
            return '#000'
        }
        else if(error && isFocusing){
            return '#D32F2F'
        }
        else if(!isHovering && error && !isFocusing){
            return '#D32F2F'
        }
        else if(!isHovering && !error && !isFocusing){
            return '#000'
        }
        else if(!error && isFocusing){
            return '#5A72FE'
        }
        return '#000'
        
    }
    const styleSize = setSize(size)
    const styleFullWidth =isFullWidth(fullWidth)
    const rootStyle ={...styleSize, ...styleFullWidth}

    const rootClass = [isErro(error),isImageInput(startIcon,endIcon)]

    return(
        <div className="input__content">
            {helperText &&
            <p className="label" style={{color: setColor(error,isHovering,isFocusing)}}>{helperText}</p>
            }
            {multiline? 
            <textarea name="postContent"  ref={ref} rows={row} style={rootStyle} className={rootClass.join(' ')+' input'} placeholder="Placeholder" disabled={disabled} value={value}/>
            :
            <input style={rootStyle} ref={ref} type="text" className={rootClass.join(' ')+' input'}  placeholder="Placeholder" disabled={disabled} value={value}/>
            }
            
            <label className="label"  style={{color: setColor(error,isHovering,isFocusing)}}>Label</label>
            
        </div>

    )
}

export default Input