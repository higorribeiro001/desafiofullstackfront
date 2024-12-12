<template>
  <div class="flex flex-wrap overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white lg:p-10 p-4 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 hover:shadow-lg before:animate-[shimmer_1.5s_infinite] w-full">
    <div 
      class="flex flex-wrap w-full p-2"
    >
      <div class="flex flex-row lg:w-1/2 md:w-full sm:w-full items-start gap-6">
        <div class="flex flex-wrap gap-4">
          <div class="w-[220px] h-[240px] rounded bg-gray-200" />
          <div class="flex flex-col gap-1 py-1">
            <div
              class="flex flex-col p-2 w-[270px] h-[25px] rounded bg-gray-200 w-full mb-2 gap-2"
            />
            <div class="flex flex-col">
              <div
                class="flex flex-col p-2 w-[65px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
              />
              <div
                class="flex flex-col p-2 w-[100px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
              />
            </div>
            <div class="flex flex-col">
              <div
                class="flex flex-col p-2 w-[50px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
              />
              <div
                class="flex flex-col p-2 w-[100px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
              />
            </div>
            <div class="flex w-full flex-row gap-2">
              <div class="flex flex-col w-1/2">
                <div
                  class="flex flex-col p-2 w-[120px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
                />
                <div
                  class="flex flex-col p-2 w-[100px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
                />
              </div>
              <div class="flex flex-col w-1/2">
                <div
                  class="flex flex-col p-2 w-[120px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
                />
                <div
                  class="flex flex-col p-2 w-[100px] h-[15px] rounded bg-gray-200 w-full mb-2 gap-2"
                />
              </div>
            </div>
            <button
              type="button"
              class="hidden sm:inline-flex w-full items-center justify-center rounded-md border border-transparent 
                      bg-gray-200 px-4 py-2 text-sm font-medium text-white shadow-sm 2 sm:w-[150px] h-[40px]"
            />
          </div>
        </div>
      </div>
      <div 
        class="flex flex-col lg:w-1/2 md:w-full sm:w-full p-2"
      >
        <div class="flex flex-col w-full">
          <div
            class="flex flex-col p-2 w-[85px] h-[20px] rounded bg-gray-200 w-full mb-2 gap-2"
          />
          <div
            class="flex flex-col p-2 w-full h-[40px] rounded bg-gray-200 w-full mb-2 gap-2"
          />
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
  </div>
</template>