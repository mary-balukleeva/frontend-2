import React, { useEffect } from 'react'
import Cities from '../Cities'
import Layout from '../Layout'
import { detectUserCity } from '../../redux/user/actions'
import { connect } from 'react-redux'
import { loadWeather } from '../../redux/weather/actions'
import { usePosition } from '../../hooks/usePosition'

const Main = ({ user, weatherData, loadWeather, detectUserCity }) => {
    const { city } = user
    const { latitude, longitude } = usePosition()

    useEffect(() => {
        if (latitude && longitude) {
            detectUserCity({latitude, longitude})
        }
    }, [latitude, longitude, detectUserCity])

    useEffect(() => {
        if (city) {
            loadWeather(`${city.components.city}`)
        }
    }, [loadWeather, city])

    return (
        <Layout
            weatherData={weatherData.weather}
            location={city ? `${city.components.city}, ${city.components.country_code.toUpperCase()}` : 'Location not detected'}
        >
            <Cities />
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    weatherData: state.weather
})

const mapDispatchToProps = (dispatch) => ({
    detectUserCity: (params) => dispatch(detectUserCity(params)),
    loadWeather: (params) => dispatch(loadWeather(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
