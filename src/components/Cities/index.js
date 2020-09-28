import React from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.scss'
import { useHistory } from 'react-router-dom'

const Cities = ({ data }) => {
    const history = useHistory()

    const handleClick = (city) => history.push(`/location/${city}`)

    const { cities } = data

    return (
        <div className={styles.Cities}>
            <div className={styles.titleWrapper}>
                <h1>Saved cities</h1>
            </div>
            {cities &&
                cities.map((city, index) => (
                    <div
                        className={styles.city}
                        key={index}
                        onClick={() =>
                            handleClick(city.formattedSuggestion.mainText)
                        }
                    >
                        {city.description}
                    </div>
                ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.cities,
})

export default connect(mapStateToProps)(Cities)
