import axios from 'axios';

const url = process.env.VUE_APP_BACKEND_URL;
const config = {headers: { 'Accept': 'application/json' }};

export async function getUsers(page: number) {
    return await axios.get(url+`/user?page=${page}`, config);
}

export async function getUser(id: number) {
    return await axios.get(url+`/user/${id}`, config);
}