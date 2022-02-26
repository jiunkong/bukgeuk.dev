import { useState, useEffect, MutableRefObject } from "react";

export const useIntersectionObserver = (target: MutableRefObject<null>, className: string, children: boolean) => {
    const [animated, setAnimated] = useState(false)

    const onIntersect: IntersectionObserverCallback = async ([{ isIntersecting, target }], observer) => {
        const delay = 350
        if (isIntersecting) {
            observer.unobserve(target)

            if (children) {
                const add = (idx: number) => { target.children[idx].classList.add(className) }
                for (let i = 0; i < target.children.length; i++) {
                    setTimeout(add, delay * i, i)
                }
            } else {
                target.classList.add(className)
            }

            setAnimated(true)
        }
    }
    
    useEffect(() => {
        if (animated) return
        let observer: IntersectionObserver
        if (target.current) {
            observer = new IntersectionObserver(onIntersect)

            observer.observe(target.current)
        }

        return () => observer && observer.disconnect()
    })
}