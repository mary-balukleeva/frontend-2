import React, { useRef, useState } from 'react'
import Header from '../Header'
import WeatherInfo from '../Weatherinfo'

const Layout = ({ location, weatherData, children }) => {
    const input = useRef()

    const [inputRef, setInputRef] = useState(input)

    const handleClickRef = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <Header inputRef={inputRef} />
            <WeatherInfo handleClickRef={handleClickRef} weatherData={weatherData} location={location} />
            {children}
        </div>
    )
}

export default Layout
