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

export interface RequestUser {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    error: string;
}

export interface PropsHeader {
    title: string;
    description: string;
    buttonCreate?: boolean;
    buttonEdit?: boolean;
    buttonBack?: boolean;
    editUser?: boolean;
    funcEditUser: () => void;
}

interface FormBuilderInterface {
  formFields: {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
  }[]
}

interface FormBuilderAplicationInterface {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    error?: string;
}

interface FormDataInterface {
    name: string;
    value: string;
    error: string;
}

interface UserAdaptInterface {
    id: number;
    image?: string;
    name: string;
    email: string;
    company: string;
    created_at: string;
    updated_at: string;
    phones: [
        {
            user_id: number;
            num: string;
        }
    ]
}

interface UsersAdaptInterface {
    current_page: number;
    last_page: number;
    data: UserAdaptInterface[]
}