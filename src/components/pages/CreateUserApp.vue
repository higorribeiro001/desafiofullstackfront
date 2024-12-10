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
                @submit.prevent="confirmSubmit"
              >
                <div class="col-span-full p-1">
                  <label
                    for="photo"
                    class="block text-[16px] font-medium text-gray-900"
                  >Foto</label>
                  <div class="flex flex-col gap-1">
                    <img
                      v-if="fileUpload"
                      class="w-[220px] max-h-[240px] rounded"
                      :src="urlImage(fileUpload)"
                    >
                    <ImageProfile v-else />
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
                          accept="image/*"
                          @change="onFileChange"
                        >
                      </label>
                      <p class="text-xs/5 text-gray-600">
                        PNG, JPG, JPEG de até 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col w-full lg:w-3/4">
                  <div
                    class="flex flex-wrap w-full"
                  >
                    <div
                      v-for="(field, index) in formFields"
                      :key="index"
                      class="sm:col-span-4 lg:w-1/2 w-full h-[90px] transition-all p-1"
                    >
                      <label
                        class="block text-[16px] font-medium text-gray-900"
                      >{{ field.label }}</label>
                      <div class="flex items-center rounded-md bg-white h-[40px] outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                          :id="field.name"
                          v-model="formData[index].value"
                          :type="field.type"
                          :name="field.name"
                          class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          :placeholder="field.placeholder"
                        >
                      </div>
                      <span class="text-red-600 text-sm/6">{{ formData[index].error }}</span>
                    </div>
                  </div>
                  <div class="my-6 p-1">
                    <p class="text-[12px] text-gray-800 font-semibold">
                      *Campos obrigatórios
                    </p>
                  </div>
                  <div class="flex flex-row w-full justify-between gap-2">
                    <button
                      type="submit"
                      class="inline-flex w-full items-center justify-center rounded-md border border-transparent 
                                        bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-[120px] w-1/2"
                    >
                      Cadastrar
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-md border border-indigo-600 
                      bg-white-600 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-100 
                      focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 sm:w-[120px] w-1/2"
                      @click="() => {}"
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
import { onMounted, ref } from 'vue';
import HeaderApp from '../components/HeaderApp.vue';
import ImageProfile from '../components/ImageProfile.vue';
import FormBuilder from '@/forms/FormBuilder';
import FormValidation from '@/forms/FormValidation';
import { FormBuilderAplicationInterface, FormDataInterface } from '@/data/types';
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

const fileUpload = ref<File | null>(null);
const formFields = ref<Array<FormBuilderAplicationInterface>>([])
const formData = ref<Array<FormDataInterface>>([
    {
      name: 'nome',
      value: '',
      error: ''
    },
    {
      name: 'empresa',
      value: '',
      error: ''
    },
    {
      name: 'email',
      value: '',
      error: ''
    },
    {
      name: 'senha',
      value: '',
      error: ''
    },
    {
      name: 'confirmação de senha',
      value: '',
      error: ''
    },
    // {
    //   name: 'imagem',
    //   value: '',
    //   error: ''
    // },
]);

onMounted(() => {
  formFields.value = new FormBuilder()
    .addTextField('username', 'Nome *', 'text', 'Digite seu nome completo')
    .addTextField('company', 'Empresa *', 'text', 'Digite o nome da empresa')
    .addTextField('email', 'E-mail *', 'email', 'Digite seu e-mail')
    .addTextField('password', 'Senha *', 'password', 'Digite sua senha')
    .addTextField('confPassword', 'Confirmar senha *', 'password', 'Digite sua senha novamente')
    .build();
});

const urlImage = (file: File) => {
  return URL.createObjectURL(file);
}

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0]; 
    fileUpload.value = file!;
};

const serError = (value: string, index: number) => {
  formData.value[index].error = value;
}

const confirmSubmit = async () => {
  const validation = new FormValidation();

  for (let i = 0; i < formFields.value.length; i++) {
    if (formFields.value[i].type === 'text') {
      serError(validation.validationText(formData.value[i].value, formData.value[i].name), i);
    }
  }

  for (let f of formData.value) {
    if (f.error !== '') {
      return;
    }
  }
}

</script>