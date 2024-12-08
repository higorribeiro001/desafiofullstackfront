/* eslint-disable no-undef */
export interface Phone {
    num: string;
    user_id: number;
}

export interface User {
    id: number;
    name: string;
    image: string | null;
    email: string;
    company: string;
    phones: Array<Phone>;
    created_at: string;
    updated_at: string;
}

export interface ResponseUser {
    current_page: number;
    last_page: number;
    data: Array<User>;
}

export interface ItemsPagination {
    current_page: number;
    last_page: number;
    index_one: number;
    index_two: number;
    index_three: number;
    backPage: () => void;
    nextPage: () => void;
    actualPage: (page: number) => void;
}