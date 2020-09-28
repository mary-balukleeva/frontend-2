import ApiService from './ApiService'

const URL = 'http://ip-api.com/json'

export default {
    fetchUserLocation() {
        return ApiService.get(URL)
    },
}
