<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <HeaderApp 
      title="Usuário"
      description="Detalhes do usuário."
      :button-back="true"
      :func-button-back="backPage"
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
              class="flex flex-wrap w-full animate-fade-left"
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
                      {{ user?.name }}
                    </h2>
                    <div class="flex flex-col">
                      <h3 class="text-[16px] font-medium">
                        Empresa:
                      </h3>
                      <p class="text-[16px] max-w-[460px] truncate">
                        {{ user?.company ?? '-' }}
                      </p>
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-[16px] font-medium">
                        E-mail:
                      </h3>
                      <p class="text-[16px] max-w-[460px] truncate">
                        {{ user?.email }}
                      </p>
                    </div>
                    <div class="flex flex-row gap-6">
                      <div class="flex flex-col">
                        <h3 class="text-[16px] font-medium">
                          Data de criação:
                        </h3>
                        <p class="text-[16px]">
                          {{ formatDate(user?.created_at!) }}
                        </p>
                      </div>
                      <div class="flex flex-col">
                        <h3 class="text-[16px] font-medium">
                          Data de edição:
                        </h3>
                        <p class="text-[16px]">
                          {{ formatDate(user?.updated_at!) }}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="hidden sm:inline-flex w-full items-center justify-center rounded-md border border-transparent 
                      bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 
                      focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-[150px] mt-2"
                      @click="setOpenAlertDeletePhone"
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
                  <div
                    class="flex flex-col p-2 rounded bg-gray-200 w-full mb-2"
                  >
                    <div
                      v-for="(phone, index) in user?.phones"
                      :key="index"
                      class="flex flex-row justify-between"
                    >
                      <p
                        
                        class="text-[16px] font-medium truncate"
                      >
                        {{ phone.num }}
                      </p>
                    </div>
                    <div v-if="user?.phones && user?.phones.length < 1">
                      <p
                        
                        class="text-[16px] font-medium truncate"
                      >
                        Nenhum telefone cadastrado.
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
              class="flex w-full p-2 animate-fade-left"
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
                      <span class="text-red-600 text-sm/6">{{ formData[index].error }}</span>
                    </div>
                    <div class="sm:col-span-4 lg:w-1/2 w-full transition-all p-1">
                      <h3 class="text-[16px] font-medium">
                        Telefone(s):
                      </h3>
                      <div class="flex flex-col p-2 rounded bg-gray-200 w-full mb-2">
                        <div
                          v-for="(phone, index) in user?.phones"
                          :key="index"
                          class="flex flex-row justify-between"
                        >
                          <p class="text-[16px] font-medium truncate">
                            {{ phone.num }}
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
                        <div v-if="user?.phones && user?.phones.length < 1">
                          <p
                        
                            class="text-[16px] font-medium truncate"
                          >
                            Nenhum telefone cadastrado.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md border border-transparent 
                                    bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mb-2"
                        @click="setOpenRegisterPhone"
                      >
                        Adicionar telefone
                      </button>
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
                        Salvar
                      </button>
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md border border-indigo-600 
                      bg-white-600 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-100 
                      focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 sm:w-[120px] w-1/2"
                        @click="resetValues"
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
  <AlertRegisterPhone
    :is-open="isOpenRegisterPhone"
    :func-is-open="setOpenRegisterPhone"
  />
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
  <AlertDeletePhone
    :is-open="isOpenAlertDeletePhone"
    :func-is-open="setOpenAlertDeletePhone"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderApp from '../components/HeaderApp.vue';
import ImageProfile from '../components/ImageProfile.vue';
import FormBuilder from '@/services/forms/FormBuilder';
import { FormBuilderAplicationInterface, FormDataInterface, UserAdaptInterface } from '@/data/types';
import FormValidation from '@/services/forms/FormValidation';
import AlertRegisterPhone from '../components/AlertRegisterPhone.vue';
import AlertMessage from '../components/AlertMessage.vue';
import LoadingApp from '../components/LoadingApp.vue';
import AlertDeletePhone from '../components/AlertDeletePhone.vue';
import { useRoute } from 'vue-router';
import { getUser } from '@/services/api/user';
import UserAdapt from '@/services/adapt/UserAdapt';
import { formatDate } from '@/utils/dateUtils';

const route = useRoute();
const userId = ref(route.params.id);
console.log(userId)

const editUser = ref<boolean>(false);
const isOpenRegisterPhone = ref(false);
const isOpenLoading = ref(false);
const isOpenAlertDeletePhone = ref(false);
const itemsAlertMessage = ref({
  active: false,
  title: '',
  message: '',
  isError: false
});

const user = ref<UserAdaptInterface | null>();

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
    }
]);

onMounted(() => {
  detailUser();
  formFields.value = new FormBuilder()
    .addTextField('username', 'Nome *', 'text', 'Digite seu nome completo')
    .addTextField('company', 'Empresa *', 'text', 'Digite o nome da empresa')
    .addTextField('email', 'E-mail *', 'email', 'Digite seu e-mail')
    .build();
});

const handleEditUser = () => {
    editUser.value = !editUser.value;
}

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
            errorFile.value = '🚫 Tipo de arquivo inválido! Por favor, selecione uma imagem PNG, JPEG ou JPG.';
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

const resetValues = () => {
  fileUpload.value = null;

  for (let f of formData.value) {
    f.value = '';
    f.error = '';
  }

  editUser.value = false;
}

const setOpenRegisterPhone = () => {
  isOpenRegisterPhone.value = !isOpenRegisterPhone.value;
}

const setOpenLoading = () => {
  isOpenLoading.value = !isOpenLoading.value;
}

const setOpenAlertMessage = () => {
  itemsAlertMessage.value.active = !itemsAlertMessage.value.active;
}

const setOpenAlertDeletePhone = () => {
  isOpenAlertDeletePhone.value = !isOpenAlertDeletePhone.value;
}

const backPage = () => {
  window.location.href = '/users';
}

const detailUser = async () => {
  const response = await getUser(Number(userId.value));
  if (response.status === 200) {
    const userAdapt = new UserAdapt(response.data);
    user.value = userAdapt.externalUserAdapt;

    formData.value[0].value = user.value!.name! ?? '';
    formData.value[1].value = user.value!.company! ?? '';
    formData.value[2].value = user.value!.email! ?? '';
  }
}
</script>