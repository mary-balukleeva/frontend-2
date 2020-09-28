class ApiService {
    call(url, method, options, params) {
        const headers = options.headers || {}

        const token = localStorage.getItem('token')
        if (token) {
            headers['Authorization'] = token
        }

        options.headers = headers
        options.method = method

        return fetch(url, options)
            .then((response) => {
                let result
                const contentType = response.headers.get('Content-type')
                if (contentType && contentType === 'application/json') {
                    result = response.json()
                } else {
                    result = response.text()
                }

                return Promise.all([result, response.status])
            })
            .then(([result, status]) => {
                const data = JSON.parse(result)

                if (status === 401) {
                    return Promise.reject(data)
                } else if (status === 200) {
                    return data
                }
            })
    }

    get(url, params, options = {}) {
        return this.call(url, 'GET', options, params)
    }

    post(url, params = null, options = {}) {
        if (params) {
            options.body = JSON.stringify(params)
            options.headers = {
                'Content-Type': 'application/json',
            }
        }

        return this.call(url, 'POST', options)
    }

    put(url, data = null, options = {}) {
        if (data) {
            options.body = JSON.stringify(data)
            options.headers = {
                'Content-Type': 'application/json',
            }
        }

        return this.call(url, 'PUT', options)
    }

    delete(url, params, options = {}) {
        return this.call(url, 'DELETE', options)
    }
}

export default new ApiService()
