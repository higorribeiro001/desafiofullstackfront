<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th
          scope="col"
          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
        >
          Nome
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Empresa
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          E-mail
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Telefone
        </th>
        <th
          scope="col"
          class="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Data de cadastro
        </th>
        <th
          scope="col"
          class="relative py-3.5 pl-3 pr-4 sm:pr-6 max-w-[24px]"
        >
          <span class="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody
      v-if="!isLoading"
      class="divide-y divide-gray-200 bg-white animate-fade-up"
    >
      <tr v-if="users?.length === 0">
        <td />
        <td />
        <td
                        
          class="text-[16px] font-medium truncate p-4"
        >
          Nenhum telefone cadastrado.
        </td>
        <td />
        <td />
        <td />
      </tr>
      <tr
        v-for="user in users"
        :key="user.email"
        class="animate-fade-up"
      >
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 truncate">
          {{ user.name }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">
          {{ user.company ?? '-' }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">
          {{ user.email }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">
          {{ user.phones[0] ? user.phones[0].num : '-' }}
        </td>
        <td class="hidden lg:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatDate(user.created_at) }}
        </td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <a
            :href="'/user/'+user.id"
            class="flex justify-end"
          >
            <svg
              fill="#4f45e5"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            ><g id="Rounded"><circle
              cx="12"
              cy="12"
              r="3"
            /><path d="M12,4C5.142,4,1.885,9.879,1.095,11.557c-0.132,0.28-0.132,0.605,0,0.885C1.885,14.121,5.142,20,12,20c6.834,0,10.093-5.838,10.897-7.54c0.138-0.293,0.138-0.627,0-0.92C22.093,9.838,18.834,4,12,4z M12,17c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S14.761,17,12,17z" /></g></svg>
          </a>
        </td>
      </tr>
    </tbody>
    <tbody
      v-else
      class="divide-y divide-gray-200 bg-white animate-fade-up"
    >
      <tr class="animate-fade-up">
        <td />
        <td />
        <td>
          <div class="flex justify-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <svg
              fill="#4f46e5"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="animate-spin h-5 w-5 mr-3 text-indigo-600"
              viewBox="0 0 50 50"
              width="100px"
              height="100px"
            ><path d="M25,3c-1.654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3s3-1.346,3-3V6C28,4.346,26.654,3,25,3z" /><path d="M25,33c-1.654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3s3-1.346,3-3v-8C28,34.346,26.654,33,25,33z" /><path d="M14,22H6c-1.654,0-3,1.346-3,3s1.346,3,3,3h8c1.654,0,3-1.346,3-3S15.654,22,14,22z" /><g><path d="M44,28h-8c-1.654,0-3-1.346-3-3s1.346-3,3-3h8c1.654,0,3,1.346,3,3S45.654,28,44,28z M36,24c-0.552,0-1,0.449-1,1s0.448,1,1,1h8c0.552,0,1-0.449,1-1s-0.448-1-1-1H36z" /></g><g><path d="M38.435,41.434c-0.768,0-1.536-0.292-2.121-0.876L30.658,34.9c-0.565-0.564-0.877-1.317-0.877-2.121c0-0.803,0.312-1.556,0.876-2.121l0,0c0.001,0,0.001,0,0.001,0s0,0,0-0.001c1.131-1.13,3.112-1.129,4.243,0.001l5.656,5.656c1.169,1.17,1.169,3.073,0.001,4.243C39.972,41.141,39.203,41.434,38.435,41.434z M32.778,31.78c-0.269,0-0.52,0.104-0.706,0.291l-0.001,0.001c-0.188,0.187-0.291,0.438-0.291,0.706s0.104,0.52,0.291,0.706l5.656,5.658c0.392,0.389,1.025,0.389,1.415-0.001c0.39-0.389,0.39-1.024-0.001-1.414l-5.656-5.656C33.298,31.884,33.047,31.78,32.778,31.78z" /></g><path d="M19.343,15.102l-5.656-5.657c-1.17-1.168-3.073-1.169-4.243,0c-1.169,1.169-1.169,3.073,0,4.242l5.657,5.657c0.564,0.564,1.318,0.876,2.121,0.876c0.802,0,1.556-0.312,2.121-0.874c0.565-0.566,0.877-1.319,0.877-2.122C20.22,16.42,19.908,15.667,19.343,15.102z" /><path d="M19.343,30.658c-0.001,0-0.001,0-0.001,0s0,0,0-0.001c-1.132-1.129-3.114-1.128-4.242,0.001l-5.658,5.656c-1.168,1.17-1.168,3.073,0.001,4.244c0.585,0.584,1.353,0.876,2.121,0.876c0.769,0,1.538-0.293,2.122-0.877l5.656-5.656c0.565-0.565,0.877-1.318,0.877-2.122C20.219,31.976,19.907,31.223,19.343,30.658z" /><g><path d="M32.778,20.22c-0.803,0-1.557-0.312-2.121-0.876c-0.565-0.565-0.877-1.318-0.877-2.121s0.312-1.557,0.877-2.122l5.656-5.656c1.169-1.168,3.072-1.17,4.243,0l0,0c1.169,1.169,1.169,3.073,0,4.242l-5.657,5.657C34.335,19.908,33.581,20.22,32.778,20.22z M38.436,10.566c-0.257,0-0.513,0.097-0.708,0.292l-5.656,5.656c-0.188,0.188-0.291,0.438-0.291,0.708c0,0.269,0.104,0.52,0.291,0.707c0.375,0.376,1.039,0.375,1.414,0l5.657-5.657c0.39-0.39,0.39-1.024,0-1.414C38.947,10.663,38.691,10.566,38.436,10.566z" /></g></svg>
            <p>Carregando...</p>
          </div>
        </td>
        <td />
        <td />
        <td />
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
        {{ "<" }}
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
        v-if="itemsPagination.last_page > 4"
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
        {{ ">" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import { UserAdaptInterface } from '@/data/types'
import { formatDate } from '@/utils/dateUtils';
import { getUsers } from "@/services/api/user";
import UsersAdapt from "@/services/adapt/UsersAdapt";

const isLoading = ref(true);
const users = ref<Array<UserAdaptInterface>>([]);

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

  listUsers();
}

const backPage = () => {
  if (itemsPagination.value.current_page > 5 &&  itemsPagination.value.current_page === itemsPagination.value.last_page) {
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
  listUsers();
}

onMounted(() => {

  listUsers();

})

const listUsers = async () => {
  isLoading.value = true;
  const response = await getUsers(itemsPagination.value.current_page);

  if (response.status === 200) {
    const usersAdapt = new UsersAdapt(response.data);
    users.value = usersAdapt.externalUsersAdapt!.data;
    itemsPagination.value.current_page = usersAdapt.externalUsersAdapt!.current_page;
    itemsPagination.value.last_page = usersAdapt.externalUsersAdapt!.last_page;
  }

  isLoading.value = false;
}
</script>