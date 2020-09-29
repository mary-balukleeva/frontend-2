import React, { useEffect } from 'react'
import Cities from '../Cities'
import Layout from '../Layout'
import { detectUserCity } from '../../redux/user/actions'
import { connect } from 'react-redux'
import { loadWeather } from '../../redux/weather/actions'

const Main = ({ user, weatherData, loadWeather, detectUserCity }) => {
    const { city } = user

    useEffect(() => {
        detectUserCity()
    }, [detectUserCity])

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
    detectUserCity: () => dispatch(detectUserCity()),
    loadWeather: (params) => dispatch(loadWeather(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
