import React from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import WeekInfo from '../WeekInfo'

const Week = ({ weather, cities }) => {
    const forecast = weather.forecast.filter((item) => {
        return item.dt_txt.match('15:00')
    })

    return (
        <Layout weatherData={weather.forecast[0]}>
            <WeekInfo
                forecast={forecast}
                location={cities.selectedCity ? cities.selectedCity.description : ''}
            />
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather,
    cities: state.cities,
})

export default connect(mapStateToProps)(Week)
