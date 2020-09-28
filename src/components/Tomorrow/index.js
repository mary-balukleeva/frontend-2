import React from 'react'
import Layout from '../Layout'
import DayInfo from '../DayInfo'
import { connect } from 'react-redux'

const Tomorrow = ({ weather }) => {
    return (
        <Layout weatherData={weather.forecast[1]}>
            <DayInfo day={'tomorrow'} forecast={weather.forecast} />
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather,
})

export default connect(mapStateToProps)(Tomorrow)
