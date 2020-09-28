import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { selectCity } from '../../redux/cities/actions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './styles.module.scss'
import { loadForecast } from '../../redux/weather/actions'

const Search = ({ selectCity, loadForecast }) => {
    const history = useHistory()

    const [address, setAddress] = useState('')

    const handleChange = (value) => {
        setAddress(value)
    }

    const handleSelect = (address, placeId, suggestion) => {
        selectCity(suggestion)
        loadForecast(suggestion.formattedSuggestion.mainText)
        history.push('/today')
    }

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
            }) => (
                <div className={styles.Search}>
                    <input
                        {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: styles.searchInput,
                        })}
                    />
                    <div className={styles.autocompleteDropdownContainer}>
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                            const style = suggestion.active
                                ? {
                                      backgroundColor: '#e5e3e3',
                                      cursor: 'pointer',
                                  }
                                : {
                                      backgroundColor: '#ffffff',
                                      cursor: 'pointer',
                                  }
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        style,
                                    })}
                                    key={suggestion.placeId}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}

const mapDispatchToProps = (dispatch) => ({
    selectCity: (params) => dispatch(selectCity(params)),
    loadForecast: (params) => dispatch(loadForecast(params)),
})

export default connect(null, mapDispatchToProps)(Search)
