<template>
  <div class="sm:flex sm:items-center w-full justify-between">
    <div class="flex flex-row gap-3 items-start">
      <button 
        v-if="props.buttonBack"
        class="mt-1 mr-3"
        @click="props.funcButtonBack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 50 50"
          width="20px"
          height="20px"
        ><g><g><g /></g></g><line
          style="fill:none;stroke:#000000;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
          x1="47"
          y1="25"
          x2="6"
          y2="25"
        /><polyline
          style="fill:none;stroke:#000000;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;"
          points="13,15 3.75,25 13,35 "
        /></svg>
      </button>
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">
          {{ props.title }}
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          {{ props.description }}
        </p>
      </div>
    </div>
    
    <div 
      v-if="props.buttonCreate"
      class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"
    >
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md border border-transparent 
                bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        @click="pageNewUser"
      >
        Novo usuário
      </button>
    </div>
    <div v-if="props.buttonEdit">
      <div 
        v-if="!props.editUser"
        class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"
      >
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent 
                    bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          @click="props.funcEditUser"
        >
          Editar usuário
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface PropsHeader {
    title: string;
    description: string;
    buttonCreate?: boolean;
    buttonEdit?: boolean;
    buttonBack?: boolean;
    funcButtonBack: () => void;
    editUser?: boolean;
    funcEditUser: () => void;
}

const props = defineProps<PropsHeader>();

const pageNewUser = () => {
  window.location.href = 'new-user';
}

</script>