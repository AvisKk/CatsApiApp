import axios from 'axios'

export const factAPI = {
    getFact () {
        return axios.get('https://catfact.ninja/fact')
            .then(response => response.data);
    }
}