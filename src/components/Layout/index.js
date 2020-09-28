import React from 'react'
import Header from '../Header'
import WeatherInfo from '../Weatherinfo'

const Layout = ({ location, weatherData, children }) => {
    return (
        <div>
            <Header />
            <WeatherInfo weatherData={weatherData} location={location} />
            {children}
        </div>
    )
}

export default Layout
