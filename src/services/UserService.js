import ApiService from './ApiService'

const URL = 'https://api.opencagedata.com/geocode/v1/json'

const detectLocation = () => {
    const onSuccess = (location) => {
        const { latitude, longitude } = location.coords

        localStorage.setItem('latitude', latitude)
        localStorage.setItem('longitude', longitude)
    }

    navigator.geolocation.getCurrentPosition(onSuccess)
}

const generateUrl = (url) => `${url}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}`

export default {
    fetchUserLocation() {
        detectLocation()
        const latitude = localStorage.latitude
        const longitude = localStorage.longitude
        return ApiService.get(generateUrl(`${URL}?q=${latitude}+${longitude}`))
    }
}
