import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const refCurrent = ref.current
        const mouseenterListener = refCurrent.addEventListener("mouseenter", enter)
        const mouseleaveListener = refCurrent.addEventListener("mouseleave", leave)
        
        return () => {    
            refCurrent.removeEventListener(mouseenterListener, enter)
            refCurrent.removeEventListener(mouseleaveListener, leave)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover