<template>
  <div
    class="relative w-3/4 shadow-md sm:rounded-lg flex justify-center items-center mt-10"
  >
    <h3 class="text-base font-semibold leading-7 text-gray-900">
      Welcome {{ userName }}
    </h3>
  </div>
  <div
    class="relative w-3/4 shadow-md sm:rounded-lg flex justify-center items-center mt-10"
  >
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ userName }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            Email address
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ email }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  let userName = '';
  let email = '';

  if (sessionStorage.getItem('token') !== null) {
    userName = sessionStorage.getItem('userName');
    email = sessionStorage.getItem('email');
  } else {
    router.push('/login');
  }
</script>
