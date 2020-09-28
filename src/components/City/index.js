import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useParams } from 'react-router-dom'
import { loadCityWeather } from '../../redux/weather/actions'
import { connect } from 'react-redux'
import DayInfo from '../../components/DayInfo'

const City = ({ weather, loadCityWeather }) => {
    const { city } = useParams()

    const { forecast, cityWeather } = weather

    useEffect(() => {
        loadCityWeather(city)
    }, [loadCityWeather, city])

    return (
        <Layout weatherData={cityWeather} location={city}>
            <DayInfo day={'today'} forecast={forecast} />
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather,
})

const mapDispatchToProps = (dispatch) => ({
    loadCityWeather: (params) => dispatch(loadCityWeather(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(City)
