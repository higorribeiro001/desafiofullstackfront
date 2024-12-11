<template>
  <TransitionRoot
    as="template"
    :show="props.isOpen"
  >
    <Dialog
      class="relative z-10"
      @close="props.funcIsOpen"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      />
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <form @submit.prevent="confirmSubmit">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <h3
                        id="modal-title"
                        class="text-base font-semibold text-gray-900"
                      >
                        Cadastrar telefone
                      </h3>
                      <div class="mt-2 mb-3">
                        <p class="text-sm text-gray-500">
                          Forneça um número válido.
                        </p>
                      </div>
                      <!-- phone -->
                      <div
                        v-for="(field, index) in formFields"
                        :key="index"
                        class="sm:col-span-4 w-full h-[90px] transition-all p-1"
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
                      <div class="my-6 p-1">
                        <p class="text-[12px] text-gray-800 font-semibold">
                          *Campos obrigatórios
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                    @submit.prevent="confirmSubmit"
                  >
                    Cadastrar
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="resetValues"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { FormBuilderAplicationInterface, FormDataInterface } from '@/data/types';
import FormBuilder from '@/forms/FormBuilder';
import FormValidation from '@/forms/FormValidation';
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps<{isOpen: boolean; funcIsOpen: () => void;}>();

const formFields = ref<Array<FormBuilderAplicationInterface>>([])
const formData = ref<Array<FormDataInterface>>([
    {
      name: 'telefone',
      value: '',
      error: ''
    }
]);

const serError = (value: string, index: number) => {
  formData.value[index].error = value;
}

onMounted(() => {
  formFields.value = new FormBuilder()
    .addTextField('phone', 'Telefone *', 'text', 'Digite o número de telefone')
    .build();
});

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

const resetValues = () => {
  for (let f of formData.value) {
    f.value = '';
    f.error = '';
  }

  props.funcIsOpen();
}

</script>