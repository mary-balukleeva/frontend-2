import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styles from './styles.module.scss'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import Marker from '../Marker'

const DayInfo = ({ day, forecast, city }) => {
    useEffect(() => {
        if (city.selectedCity && city.selectedCity.coords) {
            setCoords(city.selectedCity.coords)
        }
    }, [city])

    const [coords, setCoords] = useState({
        lat: 55.75,
        lng: 37.61,
    })

    let tableData = []

    const detectDay = () => {
        switch (day) {
            case 'today':
                tableData = forecast.filter((item) =>
                    item.dt_txt.match(moment().format('YYYY-MM-DD'))
                )
                return moment().format('MMMM, DD')
            case 'tomorrow':
                tableData = forecast.filter((item) =>
                    item.dt_txt.match(
                        moment().add(1, 'days').format('YYYY-MM-DD')
                    )
                )
                return moment().add(1, 'days').format('MMMM, DD')
            default:
                return moment().format('MMMM, DD')
        }
    }

    return (
        <div className={styles.DayInfo}>
            <div className={styles.infoBlock}>
                <h1 className={styles.day}>{day}</h1>
                <div>{detectDay()}</div>

                <table className={styles.table}>
                    <thead>
                        <tr className={styles.row}>
                            <th className={styles.cell}>Time</th>
                            <th className={styles.cell}>Weather</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData &&
                            tableData.map((item) => (
                                <tr className={styles.row} key={item.dt}>
                                    <td className={styles.cell}>
                                        {moment(item.dt_txt).format('HH:mm')}
                                    </td>
                                    <td className={styles.cell}>
                                        {item.main.temp} °C,{' '}
                                        {item.weather[0].main}, Wind -{' '}
                                        {item.wind.speed} meter per second
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.mapBlock}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_GOOGLE_API_KEY,
                    }}
                    center={coords}
                    defaultZoom={12}
                >
                    {city.selectedCity && <Marker
                        lat={coords.lat}
                        lng={coords.lng}
                        city={city.selectedCity}
                    />}
                </GoogleMapReact>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    city: state.cities,
})

export default connect(mapStateToProps)(DayInfo)
