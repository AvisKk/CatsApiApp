import axios from 'axios'

export const breedsAPI = {
    getListOfBreeds (page = 1, pageSize = 6) {
        return axios.get(`https://catfact.ninja/breeds?page=${page}&limit=${pageSize}`)
            .then(response => response.data)
    }
}