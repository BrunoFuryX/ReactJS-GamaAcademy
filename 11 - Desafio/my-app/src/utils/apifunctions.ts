import api from './api'

async function getAllPoke(limit: number | string, offset: number | string) {
    try {
        const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function getPokeByName(search: number | string) {
    try {
        const response = await api.get(`pokemon/${search}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function getPokeByType(search: number | string) {
    try {
        const response = await api.get(`type/${search}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}


export { getAllPoke, getPokeByName, getPokeByType }