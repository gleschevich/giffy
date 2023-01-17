import React, {useEffect, useRef, useState} from 'react'

export function useNearScreen({distance = '100px'} ={} ){
    const elementRef = useRef()
    const [isNearScreen, setNearScreen] = useState(false)

useEffect(() => {

    const onChange=(entries,observer)=>{
        const element=entries[0]
        if (element.isIntersecting)
        {
            setNearScreen(true)
            observer.disconnect()
        }
     
    }

    const observer= new IntersectionObserver(onChange,{
        rootMargin:distance
    })
    observer.observe(elementRef.current)
    return () => observer.disconnect()

})
    return {isNearScreen,elementRef}
}