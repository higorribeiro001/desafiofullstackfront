import { FormDataUser } from '@/data/types';
import axios from 'axios';

const url = process.env.VUE_APP_BACKEND_URL;
const config = {headers: { 'Accept': 'application/json' }};

export async function getUsers(page: number) {
    return await axios.get(url+`/user?page=${page}`, config);
}

export async function getUser(id: number) {
    return await axios.get(url+`/user/${id}`, config);
}

export async function createUser(data: FormDataUser) {
    const formData = new FormData;
    
    if (data.image) {
        formData.append('image', data.image!);
    }
    formData.append('name', data.name);
    formData.append('company', data.company);
    formData.append('email', data.email);
    formData.append('password', data.password!);

    return await axios.post(url+'/user/', formData, config);
}

export async function updateUser(data: FormDataUser) {
    const formData = new FormData;
    
    if (data.image) {
        formData.append('image', data.image!);
    }
    formData.append('name', data.name);
    formData.append('company', data.company);
    formData.append('email', data.email);
    formData.append('_method', 'patch');

    return await axios.post(url+`/user/${data.id!}`, formData, config);
}

export async function deleteUser(id: number) {
    return await axios.delete(url+`/user/${id}`, config);
}