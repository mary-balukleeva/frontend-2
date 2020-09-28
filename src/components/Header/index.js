import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import Search from '../Search'
import { connect } from 'react-redux'

const Header = ({ cities }) => {
    const { selectedCity } = cities

    return (
        <header className={styles.Header}>
            <div className={styles.dates}>
                <Link to='/' className={styles.link}>
                    Home
                </Link>
                <Link to='/today' className={styles.link}>
                    Today
                </Link>
                <Link to='/tomorrow' className={styles.link}>
                    Tomorrow
                </Link>
                <Link to='/week' className={styles.link}>
                    Week
                </Link>
            </div>

            <div className='city'>
                {selectedCity && selectedCity.description}
            </div>

            <div className='search-container'>
                <Search />
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    cities: state.cities,
})

export default connect(mapStateToProps)(Header)
