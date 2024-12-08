<template>
    <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Nome</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Empresa</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">E-mail</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Telefone</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Data de cadastro</th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Edit</span>
            </th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="user in users" :key="user.email">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 truncate">{{ user.name }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">{{ user.company ?? '-' }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">{{ user.email }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">{{ user.phones[0] ?? '-' }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatDate(user.created_at) }}</td>
            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <a href="#" class="text-indigo-600 hover:text-indigo-900"
                >Editar<span class="sr-only">, {{ user.name }}</span></a
            >
            </td>
        </tr>
        </tbody>
    </table>
    <!-- pagination -->
    <div 
        v-if="itemsPagination.last_page > 1" 
        class="flex flex-row justify-end items-center w-full px-4 py-1 bg-gray-50"
    >
        <div class="flex gap-2 items-center w-[200px] justify-between">
        <button 
            :disabled="itemsPagination.current_page < 2"
            class="flex justify-center items-center text-white font-semibold pb-[3px] bg-indigo-600 rounded w-[30px] h-[30px] disabled:bg-indigo-400"
            @click="backPage"
        >
            {{"<"}}
        </button>
        <button 
            v-if="itemsPagination.last_page > 0"
            :class="{'text-indigo-600': itemsPagination.current_page === itemsPagination.index_one, 'font-semibold': itemsPagination.index_one}"
            @click="() => itemsPagination.current_page = itemsPagination.index_one"
        >
            {{ itemsPagination.index_one }}
        </button>
        <button 
            v-if="itemsPagination.last_page > 1"
            :class="{'text-indigo-600': itemsPagination.current_page === itemsPagination.index_two, 'font-semibold': itemsPagination.index_two}"
            @click="() => itemsPagination.current_page = itemsPagination.index_two"
        >
            {{ itemsPagination.index_two }}
        </button>
        <button
            v-if="itemsPagination.last_page > 2" 
            :class="{'text-indigo-600': itemsPagination.current_page === itemsPagination.index_three, 'font-semibold': itemsPagination.index_three}"
            @click="() => itemsPagination.current_page = itemsPagination.index_three"
        >
            {{ itemsPagination.index_three }}
        </button>
        <p 
            v-if="(itemsPagination.last_page > 4 && itemsPagination.current_page + 1 < itemsPagination.last_page) || itemsPagination.index_three + 1 !== itemsPagination.last_page"
            class="font-semibold"
        >
            ...
        </p>
        <button 
            v-if="itemsPagination.last_page > 3"
            :class="{'text-indigo-600': itemsPagination.current_page === itemsPagination.last_page, 'font-semibold': itemsPagination.last_page}"
            @click="() => itemsPagination.current_page = itemsPagination.last_page"
        >
            {{ itemsPagination.last_page }}
        </button>
        <button 
            :disabled="itemsPagination.last_page < 2 || itemsPagination.current_page === itemsPagination.last_page"
            class="flex justify-center items-center text-white font-semibold pb-[3px] bg-indigo-600 rounded w-[30px] h-[30px] disabled:bg-indigo-400"
            @click="nextPage"
        >
            {{">"}}
        </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import { User } from '@/data/types';
import { formatDate } from '@/utils/dateUtils';

onMounted(() => {

getUsers();

})

const getUsers = async () => {
// try {
//     const response = await fetch(  process.env.VUE_APP_BACKEND_URL + '/users');
//     const responseData: ResponseUser = response.data;
//     users.value = await response.json();
// } catch (error) {
//     console.error(error);
// }
}

const users = ref<Array<User>>([
  {
    id: 1,
    name: 'Usuário 1',
    image: null,
    email: 'user@gmail.com',
    company: 'Teste',
    phones: [],
    created_at: '2024-12-08T03:05:44.000000Z',
    updated_at: '2024-12-08T03:05:44.000000Z'
  }
]);

const itemsPagination = ref(
  {
    current_page: 1,
    last_page: 0,
    index_one: 1,
    index_two: 2,
    index_three: 3,
  }
);

const nextPage = () => {
  itemsPagination.value.current_page += 1;
  if (itemsPagination.value.current_page < itemsPagination.value.last_page - 2) {
    itemsPagination.value.index_one += 1;
    itemsPagination.value.index_two += 1;
    itemsPagination.value.index_three += 1;
  }
}

const backPage = () => {
  if (itemsPagination.value.current_page === itemsPagination.value.last_page) {
    itemsPagination.value.index_one = itemsPagination.value.current_page - 3;
    itemsPagination.value.index_two = itemsPagination.value.current_page - 2;
    itemsPagination.value.index_three = itemsPagination.value.current_page - 1;
  }

  itemsPagination.value.current_page -= 1;

  if (itemsPagination.value.current_page < itemsPagination.value.index_one) {
    itemsPagination.value.index_one -= 1;
    itemsPagination.value.index_two -= 1;
    itemsPagination.value.index_three -= 1;
  } 
}
</script>