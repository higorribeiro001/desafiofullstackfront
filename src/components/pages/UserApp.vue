<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <HeaderApp 
      title="Usuário"
      description="Detalhes do usuário."
      :button-back="true"
      :button-edit="true"
      :edit-user="editUser"
      :func-edit-user="handleEditUser"
    />
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="flex flex-wrap overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white lg:p-10 p-4">
            <div
              v-if="!editUser"
              class="flex flex-wrap w-full"
            >
              <div 
                class="flex flex-col lg:w-1/2 md:w-full sm:w-full p-2"
              >
                <div class="flex flex-wrap items-start gap-6">
                  <div class="flex flex-col gap-4">
                    <ImageProfile />
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 
                      class="text-[20px] font-bold truncate transition-all max-w-[460px] truncate"
                    >
                      Higor Ribeiro Araujo
                    </h2>
                    <div class="flex flex-col">
                      <h3 class="text-[16px] font-medium">
                        Empresa:
                      </h3>
                      <p class="text-[16px] max-w-[460px] truncate">
                        -
                      </p>
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-[16px] font-medium">
                        E-mail:
                      </h3>
                      <p class="text-[16px] max-w-[460px] truncate">
                        higor@gmail.com
                      </p>
                    </div>
                    <div class="flex flex-row gap-6">
                      <div class="flex flex-col">
                        <h3 class="text-[16px] font-medium">
                          Data de criação:
                        </h3>
                        <p class="text-[16px]">
                          12/12/2024
                        </p>
                      </div>
                      <div class="flex flex-col">
                        <h3 class="text-[16px] font-medium">
                          Data de edição:
                        </h3>
                        <p class="text-[16px]">
                          12/12/2024
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="hidden sm:inline-flex w-full items-center justify-center rounded-md border border-transparent 
                    bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-[150px] mt-2"
                    >
                      Excluir Perfil
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-if="!editUser"
                class="flex flex-col w-full lg:w-1/2 p-2"
              >
                <div class="flex flex-col w-full">
                  <h3 class="text-[16px] font-medium">
                    Telefone(s):
                  </h3>
                  <div class="flex flex-col p-2 rounded bg-gray-200 w-full mb-2">
                    <div class="flex flex-row justify-between">
                      <p class="text-[16px] font-medium truncate">
                        (91) 98485-0712
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="block sm:hidden w-full items-center justify-center rounded-md border border-transparent 
                 bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-2"
              >
                Excluir Perfil
              </button>
            </div>
            <div
              v-else 
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
                    <div class="sm:col-span-4 lg:w-1/2 w-full transition-all p-1">
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
                    <div class="sm:col-span-4 lg:w-1/2 w-full transition-all p-1">
                      <h3 class="text-[16px] font-medium">
                        Telefone(s):
                      </h3>
                      <div class="flex flex-col p-2 rounded bg-gray-200 w-full mb-2">
                        <div class="flex flex-row justify-between">
                          <p class="text-[16px] font-medium truncate">
                            (91) 98485-0712
                          </p>
                          <div class="flex flex-row gap-2">
                            <button class="flex justify-center items-center bg-green-600 hover:bg-green-500 w-6 h-6 rounded">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <rect
                                  width="15"
                                  height="15"
                                  fill="url(#pattern0_23_792)"
                                />
                                <defs>
                                  <pattern
                                    id="pattern0_23_792"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                  >
                                    <use
                                      xlink:href="#image0_23_792"
                                      transform="scale(0.0166667)"
                                    />
                                  </pattern>
                                  <image
                                    id="image0_23_792"
                                    width="60"
                                    height="60"
                                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYElEQVR4nO3ZMUrEQBSA4bGz0BsInmB7ES9gLx7CwtZCRBvRxsJCW++hnSCewF4Q7PUCnwRWUFnXbBIwM/O+OkV+ZuZlmU0phBBCGAR28YA3POEUy6lEODbbPVZSSXBivmbVV1MlseVEax+bf7TFY7+e6eWaghunKUc40M1TypVuK/2eahteKYOgkxbPtLWTxsr3kCGij9NYmR1w3mOQZRfbJzrb2C7R2ccucqbnPpPjN3XuSpf6U/E8VRSbV7RhYvOINmxsUdO4jYgdBbGyvcQ2HgWxjXuJbTwKYhv3Ett4FFS2jddwhNuBYsd7U/HT9F+6OmIbuKkmtoHLamJ7DK/xDqi/YL+Klf2EzSJjMfnthbGBPRw2l2u4wl22sQ2cLfrieMw1dgnPi64WLrKLbWCry3nEesoRrrO8DO8Kr0VM3rbwMiP0eTrIJqk02J5Gv04/Oc2ZXvrv9wohhJAK9gGQeulTjtsxygAAAABJRU5ErkJggg=="
                                  />
                                </defs>
                              </svg>
                            </button>
                            <button class="flex justify-center items-center bg-red-600 hover:bg-red-500 w-6 h-6 rounded">
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <rect
                                  width="15"
                                  height="15"
                                  fill="url(#pattern0_23_789)"
                                />
                                <defs>
                                  <pattern
                                    id="pattern0_23_789"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                  >
                                    <use
                                      xlink:href="#image0_23_789"
                                      transform="scale(0.01)"
                                    />
                                  </pattern>
                                  <image
                                    id="image0_23_789"
                                    width="100"
                                    height="100"
                                    xlink:href="data:image/png;base64,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"
                                  />
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md border border-transparent 
                                    bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mb-2"
                      >
                        Adicionar telefone
                      </button>
                    </div>
                  </div>
                  <div class="my-6 p-1">
                    <p class="text-[12px] text-gray-800 font-semibold">
                      *Campos obrigatórios
                    </p>
                  </div>
                  <div class="flex flex-row w-full justify-between gap-2">
                    <button
                      type="button"
                      class="inline-flex w-full items-center justify-center rounded-md border border-transparent 
                                        bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-[120px] w-1/2"
                    >
                      Salvar
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-md border border-indigo-600 
                      bg-white-600 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-100 
                      focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 sm:w-[120px] w-1/2"
                      @click="handleEditUser"
                    >
                      Cancelar
                    </button>
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
import { ref } from 'vue';
import HeaderApp from '../components/HeaderApp.vue';
import ImageProfile from '../components/ImageProfile.vue';
// import { RequestUser } from '@/data/types';

const editUser = ref<boolean>(false);

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

const handleEditUser = () => {
    editUser.value = !editUser.value;
}

</script>