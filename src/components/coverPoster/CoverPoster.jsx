import React, { useEffect } from 'react'
import coverPoster from '../../assets/cs7.jpg'
import coverPosterSm from '../../assets/cover-sm.jpg'
import './CoverPoster.css'
import { useState } from 'react'

const CoverPoster = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const windowSize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', windowSize)
        return () => {
            window.removeEventListener('resize', windowSize)
        }
    }, [])

    return (
        <>
            <div style={{ backgroundImage: `url(${width >= 640 ? coverPoster : coverPosterSm})` }} className="cover-poster">
            </div>
            
        </>
    )
}

export default CoverPoster