import { useEffect, useState } from 'react'

/**
 * The useWindowSize hook.
 *
 * @return {{width : *, height : *}}
 */
const useWindowSize = function () {
    // the window size state
    const [state, set] = useState({ height: void 0, width: void 0 })

    useEffect(function () {
        // the window resize event callback
        const onResize = function () {
            set({ height: window.innerHeight, width: window.innerWidth })
        }

        // add event callback
        window.addEventListener('resize', onResize)
        // call the callback to get the initial window size
        onResize()

        // remove event callback on cleanup
        return function () {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return state
}

export default useWindowSize
