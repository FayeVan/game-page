import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '963a2360f6ea4d7b8397e7cafa6b718b'
    }
})