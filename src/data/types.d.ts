/* eslint-disable no-undef */
interface Phone {
    num: string;
    user_id: number;
}

interface User {
    id: number;
    name: string;
    image: string;
    email: string;
    company: string;
    phones: Array<Phone>;
    created_at: string;
    updated_at: string;
}