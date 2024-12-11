<template>
  <div class="px-4 sm:px-6 lg:px-8 animate-fade-left">
    <HeaderApp 
      title="Usuários"
      description="Lista de usuários cadastros no sistema."
      :button-create="true"
      :func-button-back="() => {}"
      :func-edit-user="() => {}"
    />
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <!-- table -->
            <TableApp />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import TableApp from '@/components/components/TableApp.vue';
import HeaderApp from '../components/HeaderApp.vue';

</script>