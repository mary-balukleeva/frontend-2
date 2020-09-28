import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { loadCurrentWeather } from '../../redux/weather/actions'
import { connect } from 'react-redux'

const Marker = ({ city, weather, loadCurrentWeather }) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const handleClick = () => setShowTooltip(true)

    const { currentWeather } = weather

    useEffect(() => {
        if (city) {
            loadCurrentWeather(city.formattedSuggestion.mainText)
        }
    }, [loadCurrentWeather, city])

    return (
        <div className={styles.marker} onClick={handleClick}>
            {showTooltip && (
                <div className={styles.tooltip}>
                    <div>{currentWeather.main.temp} °C</div>
                    <div>Feels like {currentWeather.main.feels_like} °C</div>
                    <div>
                        {currentWeather.weather[0].main}, Wind -{' '}
                        {currentWeather.wind.speed} meter per second
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather,
})

const mapDispatchToProps = (dispatch) => ({
    loadCurrentWeather: (params) => dispatch(loadCurrentWeather(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Marker)
