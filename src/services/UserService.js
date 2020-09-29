import ApiService from './ApiService'

const URL = 'https://api.opencagedata.com/geocode/v1/json'

const generateUrl = (url) => `${url}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}`

export default {
    fetchUserLocation({ latitude, longitude }) {
        return ApiService.get(generateUrl(`${URL}?q=${latitude}+${longitude}`))
    }
}
