import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { addCity } from '../../redux/cities/actions'
import { connect } from 'react-redux'

const WeatherInfo = ({ location, weatherData, weatherState, addCity }) => {
    const [weather, setWeather] = useState(weatherData)
    const [isAdded, setIsAdded] = useState(false)

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

            {!isLoading && !weather && <h1>No data found</h1>}

            {!isLoading && weather && (
                <>
                    <div className={styles.info}>{weather.main.temp} °C</div>
                    {location && <div className={styles.info}>{location}</div>}
                    <div className={styles.info}>
                        {weather.weather[0].main}, Wind - {weather.wind.speed}{' '}
                        meter per second
                    </div>

                    <button
                        className={styles.addContainer}
                        onClick={handleClick}
                    >
                        {isAdded ? '✓' : '+'}
                    </button>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    weatherState: state.weather,
})

const mapDispatchToProps = (dispatch) => ({
    addCity: () => dispatch(addCity()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo)
