import { useEffect, useState } from "react";

export default function useFocus(ref){
    const [isFocusing, setFocusing] = useState(false)

    const on = () => { setFocusing(true)}
    const off = () => { setFocusing(false)}

    useEffect(()=>{
        if(!ref.current){
            return
        }
        const node = ref.current

        node.addEventListener('focus', on)
        node.addEventListener('focusout', off)

        return ()=>{
            node.removeEventListener('focus', on)
            node.removeEventListener('focusout', off)
        }
    },[])

    return isFocusing
}