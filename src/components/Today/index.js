import React from 'react'
import Layout from '../Layout'
import DayInfo from '../DayInfo'
import { connect } from 'react-redux'

const Today = ({ weather }) => {
    return (
        <Layout weatherData={weather.forecast[0]}>
            <DayInfo day={'today'} forecast={weather.forecast} />
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather,
})

export default connect(mapStateToProps)(Today)
