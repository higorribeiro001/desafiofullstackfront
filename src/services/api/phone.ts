import { FormDataPhone } from '@/data/types';
import axios from 'axios';

const url = process.env.VUE_APP_BACKEND_URL;
const config = {headers: { 'Accept': 'application/json' }};

export async function getPhones(page: number) {
    return await axios.get(url+`/phone?page=${page}`, config);
}

export async function getPhone(id: number) {
    return await axios.get(url+`/phone/${id}`, config);
}

export async function createPhone(data: FormDataPhone) {
    return await axios.post(url+'/phone/', data, config);
}

export async function updatePhone(data: FormDataPhone) {
    return await axios.patch(url+`/phone/${data.id!}`, data, config);
}

export async function deletePhone(id: number) {
    return await axios.delete(url+`/phone/${id}`, config);
}