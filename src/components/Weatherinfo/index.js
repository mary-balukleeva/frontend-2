import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { addCity } from '../../redux/cities/actions'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'

const WeatherInfo = ({ handleClickRef, location, cities, weatherData, weatherState, addCity }) => {
    const [weather, setWeather] = useState(weatherData)
    const [isAdded, setIsAdded] = useState(false)

    const { selectedCity } = cities

    const { pathname } = useLocation()

    const { isLoading } = weatherState

    const handleClick = () => {
        setIsAdded(true)
        setTimeout(() => {
            setIsAdded(false)
        }, 2000)
        addCity()
    }

    useEffect(() => {
        setWeather(weatherData)
    }, [weatherData])

    return (
        <div className={styles.WeatherInfo}>
            {isLoading && <h1>Loading...</h1>}

            {!isLoading && !weather && <>
                <h2>{pathname === '/' ? 'Please allow app to know your geolocation ' : 'You have not selected city'}</h2>
                {pathname !== '/' &&
                <button className={styles.selectButton} onClick={handleClickRef}>Select city</button>}
            </>}

            {!isLoading && weather && (
                <>
                    <div className={styles.info}>{weather.main.temp} °C</div>
                    {location && <div className={styles.info}>{location}</div>}
                    <div className={styles.info}>
                        {weather.weather[0].main}, Wind - {weather.wind.speed}{' '}
                        meter per second
                    </div>

                    {selectedCity && <button
                        className={styles.addContainer}
                        onClick={handleClick}
                    >
                        {isAdded ? '✓' : '+'}
                    </button>}
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    weatherState: state.weather,
    cities: state.cities
})

const mapDispatchToProps = (dispatch) => ({
    addCity: () => dispatch(addCity())
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo)
