<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <HeaderApp 
      title="Cadastrar Usuário"
      description="Forneça os dados necessários para realização do cadastro."
      :func-edit-user="() => {}"
    />
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="flex flex-wrap overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white lg:p-10 p-4">
            <div
              class="flex w-full p-2"
            >
              <form 
                class="flex flex-wrap w-full justify-between"
                method="post"
              >
                <div class="col-span-full p-1">
                  <label
                    for="photo"
                    class="block text-[16px] font-medium text-gray-900"
                  >Foto</label>
                  <div class="flex flex-col gap-1">
                    <ImageProfile />
                    <div class="flex flex-col">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Buscar arquivo</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        >
                      </label>
                      <p class="text-xs/5 text-gray-600">
                        PNG, JPG, JPEG de até 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col w-full lg:w-3/4">
                  <div class="flex flex-wrap w-full">
                    <div class="sm:col-span-4 lg:w-1/2 w-full transition-all p-1">
                      <label
                        for="username"
                        class="block text-[16px] font-medium text-gray-900"
                      >Nome *</label>
                      <div>
                        <div class="flex items-center rounded-md bg-white h-[40px] pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="username"
                            type="text"
                            name="username"
                            class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            placeholder="Digite seu nome completo"
                          >
                        </div>
                      </div>
                    </div>
                    <div 
                      class="sm:col-span-4 lg:w-1/2 w-full transition-all p-1"
                    >
                      <label
                        for="company"
                        class="block text-[16px] font-medium text-gray-900"
                      >Empresa *</label>
                      <div>
                        <div class="flex items-center rounded-md bg-white h-[40px] pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="company"
                            type="text"
                            name="company"
                            class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            placeholder="Digite o nome da empresa pela qual trabalha"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap w-full">
                    <div class="sm:col-span-4 w-full transition-all p-1">
                      <div class="flex flex-col w-full">
                        <label
                          for="email"
                          class="block text-[16px] font-medium text-gray-900"
                        >E-mail *</label>
                        <div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            class="block w-full h-[40px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            placeholder="Digite seu email"
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap w-full mt-2">
                      <div class="sm:col-span-4 lg:w-1/2 w-full transition-all p-1">
                        <label
                          for="password"
                          class="block text-[16px] font-medium text-gray-900"
                        >Senha *</label>
                        <div>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            class="block w-full h-[40px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            placeholder="Digite sua senha"
                          >
                        </div>
                      </div>
                      <div class="sm:col-span-4 lg:w-1/2 w-full transition-all p-1">
                        <label
                          for="confirmPassword"
                          class="block text-[16px] font-medium text-gray-900"
                        >Confirmar Senha *</label>
                        <div>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="confirmPassword"
                            class="block w-full h-[40px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            placeholder="Digite a confirmação da sua senha"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-6 p-1">
                    <p class="text-[12px] text-gray-800 font-semibold">
                      *Campos obrigatórios
                    </p>
                  </div>
                  <div class="flex flex-row w-full justify-between">
                    <div class="w-full p-1">
                      <button
                        type="submit"
                        class="inline-flex w-full items-center justify-center rounded-md border border-transparent 
                                        bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-[120px]"
                      >
                        Cadastrar
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md border border-indigo-600 
                      bg-white-600 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-100 
                      focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 w-[120px]"
                        @click="() => {}"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderApp from '../components/HeaderApp.vue';
import ImageProfile from '../components/ImageProfile.vue';
// import { ref } from 'vue';
// import { RequestUser } from '@/data/types';

// const requestUser: RequestUser[] = [
//     {
//         label: 'Nome *',
//         type: 'text',
//         placeholder: 'Digite seu nome',
//         value: '',
//         error: ''
//     },
//     {
//         label: 'Empresa *',
//         type: 'text',
//         placeholder: 'Digite o nome da empresa pela qual trabalha',
//         value: '',
//         error: ''
//     },
//     {
//         label: 'Email *',
//         type: 'text',
//         placeholder: 'Digite seu nome',
//         value: '',
//         error: ''
//     },
//     {
//         label: 'Password *',
//         type: 'text',
//         placeholder: 'Digite seu nome',
//         value: '',
//         error: ''
//     }
// ]

</script>