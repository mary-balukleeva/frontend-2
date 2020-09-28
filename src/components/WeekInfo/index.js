import React from 'react'
import styles from './styles.module.scss'
import moment from 'moment'
import WeatherInfo from '../Weatherinfo'

const WeekInfo = ({ forecast, location }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1>Week</h1>

                <div>
                    {moment().format('MMMM, DD')} -{' '}
                    {moment().add(5, 'days').format('MMMM, DD')}
                </div>
            </div>

            <div className={styles.Week}>
                {forecast.map((item) => (
                    <div className={styles.day} key={item.dt}>
                        {moment(item.dt_txt).format('DD-MM-YYYY')}
                        <WeatherInfo weatherData={item} location={location} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default WeekInfo
