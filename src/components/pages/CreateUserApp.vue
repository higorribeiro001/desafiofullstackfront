<template>
  <div class="px-4 sm:px-6 lg:px-8 animate-fade-left">
    <HeaderApp 
      title="Cadastrar Usuário"
      description="Forneça os dados necessários para realização do cadastro."
      :button-back="true"
      :func-button-back="backPage"
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
                          accept="image/png, image/jpeg, image/jpg"
                          @change="onFileChange"
                        >
                      </label>
                      <p class="text-xs/5 text-gray-600">
                        PNG, JPG, JPEG de até 10MB
                      </p>
                      <span class="text-red-600 text-sm/6 w-[220px]">{{ errorFile }}</span>
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
                      <div
                        v-if="field.type !== 'password'"
                        :class="[
                          'flex items-center rounded-md bg-white h-[40px] outline outline-1 -outline-offset-1',
                          formData[index].error ? 'border-red-500 outline-red-500' : 'border-gray-300 outline-gray-300',
                          'focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'
                        ]"
                      >
                        <input
                          :id="field.name"
                          v-model="formData[index].value"
                          :type="field.type"
                          :name="field.name"
                          class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          :placeholder="field.placeholder"
                        >
                      </div>
                      <div
                        v-else
                        :class="[
                          'flex items-center rounded-md bg-white h-[40px] outline outline-1 -outline-offset-1',
                          formData[index].error ? 'border-red-500 outline-red-500' : 'border-gray-300 outline-gray-300',
                          'focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'
                        ]"
                      >
                        <input
                          :id="field.name"
                          v-model="formData[index].value"
                          :type="isVisiblePassword && field.name === 'password' ? 'text' : isVisibleConfPassword && field.name === 'confPassword' ? 'text' : field.type"
                          :name="field.name"
                          class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          :placeholder="field.placeholder"
                        >
                        <button
                          v-if="field.name === 'password'"
                          class="p-3"
                          type="button"
                          @click="() => setVisiblePassword(!isVisiblePassword)"
                        >
                          <svg
                            v-if="!isVisiblePassword && field.name === 'password'"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                          >    <path d="M 1.7070312 0.29296875 L 0.29296875 1.7070312 L 28.292969 29.707031 L 29.707031 28.292969 L 23.681641 22.267578 C 27.777456 19.49434 29.799165 15.616636 29.826172 15.564453 A 1 1 0 0 0 30 15 A 1 1 0 0 0 29.783203 14.378906 C 29.679012 14.21118 23.918297 5 15 5 C 12.469857 5 10.199331 5.7501922 8.234375 6.8203125 L 1.7070312 0.29296875 z M 15 8 C 18.866 8 22 11.134 22 15 C 22 16.571956 21.470043 18.012848 20.59375 19.179688 L 17.701172 16.287109 C 17.889655 15.897819 18 15.462846 18 15 C 18 13.343 16.657 12 15 12 C 14.537154 12 14.102181 12.110345 13.712891 12.298828 L 10.820312 9.40625 C 11.987152 8.5299565 13.428044 8 15 8 z M 4.9511719 9.0761719 C 1.9791583 11.576125 0.27498083 14.287031 0.21875 14.376953 A 1 1 0 0 0 0 15 A 1 1 0 0 0 0.16210938 15.544922 A 1 1 0 0 0 0.16601562 15.550781 C 0.18320928 15.586261 5.0188313 25 15 25 C 16.85 25 18.520531 24.673484 20.019531 24.146484 L 17.431641 21.556641 C 16.672641 21.838641 15.856 22 15 22 C 11.134 22 8 18.866 8 15 C 8 14.144 8.1613594 13.327359 8.4433594 12.568359 L 4.9511719 9.0761719 z" /></svg>
                          <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                          >    <path d="M 15 5 C 6.081703 5 0.32098813 14.21118 0.21679688 14.378906 A 1 1 0 0 0 0 15 A 1 1 0 0 0 0.16210938 15.544922 A 1 1 0 0 0 0.16601562 15.550781 C 0.18320928 15.586261 5.0188313 25 15 25 C 24.938822 25 29.767326 15.678741 29.826172 15.564453 A 1 1 0 0 0 29.837891 15.544922 A 1 1 0 0 0 30 15 A 1 1 0 0 0 29.785156 14.380859 A 1 1 0 0 0 29.783203 14.378906 C 29.679012 14.21118 23.918297 5 15 5 z M 15 8 C 18.866 8 22 11.134 22 15 C 22 18.866 18.866 22 15 22 C 11.134 22 8 18.866 8 15 C 8 11.134 11.134 8 15 8 z M 15 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 18 A 3 3 0 0 0 18 15 A 3 3 0 0 0 15 12 z" /></svg>
                        </button>
                        <button
                          v-else
                          class="p-3"
                          type="button"
                          @click="() => setVisibleConfPassword(!isVisibleConfPassword)"
                        >
                          <svg
                            v-if="!isVisibleConfPassword && field.name === 'confPassword'"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                          >    <path d="M 1.7070312 0.29296875 L 0.29296875 1.7070312 L 28.292969 29.707031 L 29.707031 28.292969 L 23.681641 22.267578 C 27.777456 19.49434 29.799165 15.616636 29.826172 15.564453 A 1 1 0 0 0 30 15 A 1 1 0 0 0 29.783203 14.378906 C 29.679012 14.21118 23.918297 5 15 5 C 12.469857 5 10.199331 5.7501922 8.234375 6.8203125 L 1.7070312 0.29296875 z M 15 8 C 18.866 8 22 11.134 22 15 C 22 16.571956 21.470043 18.012848 20.59375 19.179688 L 17.701172 16.287109 C 17.889655 15.897819 18 15.462846 18 15 C 18 13.343 16.657 12 15 12 C 14.537154 12 14.102181 12.110345 13.712891 12.298828 L 10.820312 9.40625 C 11.987152 8.5299565 13.428044 8 15 8 z M 4.9511719 9.0761719 C 1.9791583 11.576125 0.27498083 14.287031 0.21875 14.376953 A 1 1 0 0 0 0 15 A 1 1 0 0 0 0.16210938 15.544922 A 1 1 0 0 0 0.16601562 15.550781 C 0.18320928 15.586261 5.0188313 25 15 25 C 16.85 25 18.520531 24.673484 20.019531 24.146484 L 17.431641 21.556641 C 16.672641 21.838641 15.856 22 15 22 C 11.134 22 8 18.866 8 15 C 8 14.144 8.1613594 13.327359 8.4433594 12.568359 L 4.9511719 9.0761719 z" /></svg>
                          <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                          >    <path d="M 15 5 C 6.081703 5 0.32098813 14.21118 0.21679688 14.378906 A 1 1 0 0 0 0 15 A 1 1 0 0 0 0.16210938 15.544922 A 1 1 0 0 0 0.16601562 15.550781 C 0.18320928 15.586261 5.0188313 25 15 25 C 24.938822 25 29.767326 15.678741 29.826172 15.564453 A 1 1 0 0 0 29.837891 15.544922 A 1 1 0 0 0 30 15 A 1 1 0 0 0 29.785156 14.380859 A 1 1 0 0 0 29.783203 14.378906 C 29.679012 14.21118 23.918297 5 15 5 z M 15 8 C 18.866 8 22 11.134 22 15 C 22 18.866 18.866 22 15 22 C 11.134 22 8 18.866 8 15 C 8 11.134 11.134 8 15 8 z M 15 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 18 A 3 3 0 0 0 18 15 A 3 3 0 0 0 15 12 z" /></svg>
                        </button>
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
                      @click="backPage"
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
  <AlertMessage
    :is-open="itemsAlertMessage.active"
    :is-error="itemsAlertMessage.isError"
    :title="itemsAlertMessage.title"
    :description="itemsAlertMessage.message"
    :func-is-open="setOpenAlertMessage"
  />
  <LoadingApp
    :is-open="isOpenLoading"
    :func-is-open="setOpenLoading"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderApp from '../components/HeaderApp.vue';
import ImageProfile from '../components/ImageProfile.vue';
import FormBuilder from '@/forms/FormBuilder';
import FormValidation from '@/forms/FormValidation';
import { FormBuilderAplicationInterface, FormDataInterface } from '@/data/types';
import AlertMessage from '../components/AlertMessage.vue';
import LoadingApp from '../components/LoadingApp.vue';

const isOpenLoading = ref(false);
const itemsAlertMessage = ref({
  active: false,
  title: '',
  message: '',
  isError: false
});
const fileUpload = ref<File | null>(null);
const errorFile = ref('');
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

    if (file) {
        const allowedTypes = ['image/png', 'image/jpeg', 'application/jpg'];
        const MAX_SIZE = 10 * 1024 * 1024;
        
        if (!allowedTypes.includes(file.type)) {
            errorFile.value = '🚫 Tipo de arquivo inválido! Por favor, selecione uma imagem PNG, JPEG ou um arquivo JPG.';
        } else if (file.size > MAX_SIZE) {
          errorFile.value = '🚫 Arquivo ultrapassa o limite de tamanho.';
        } else {
            errorFile.value = '';
            fileUpload.value = file;
        }
    }
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

    if (formFields.value[i].type === 'email') {
      serError(validation.validationEmail(formData.value[i].value, formData.value[i].name), i);
    }

    if (formFields.value[i].name === 'password') {
      serError(validation.validationPassword(formData.value[i].value, formData.value[i].name), i);
    }

    if (formFields.value[i].name === 'confPassword') {
      serError(validation.validationConfirmPassword(formData.value[i].value, formData.value[i-1].value, formData.value[i].name), i);
    }
  }

  for (let f of formData.value) {
    if (f.error !== '') {
      return;
    }
  }
}

const isVisiblePassword = ref(false);
const isVisibleConfPassword = ref(false);

const setVisiblePassword = (value: boolean) => {
  isVisiblePassword.value = value;
}

const setVisibleConfPassword = (value: boolean) => {
  isVisibleConfPassword.value = value;
}

const backPage = () => {
  window.location.href = '/users';
}

const setOpenLoading = () => {
  isOpenLoading.value = !isOpenLoading.value;
}

const setOpenAlertMessage = () => {
  itemsAlertMessage.value.active = !itemsAlertMessage.value.active;
}

</script>