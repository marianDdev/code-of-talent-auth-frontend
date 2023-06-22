<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://codeoftalent.com/wp-content/uploads/2022/08/logo-black.png"
        alt="Code of Talent logo"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Email address</label
        >
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            v-model="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p class="text-red mt-2 mb-2">
            {{ errors.email ? errors.email : '' }}
          </p>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
        </div>
        <div class="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            v-model="password"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p class="text-red">
            {{ errors.password ? errors.password : '' }}
          </p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          @click="login"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  let errors = ref([]);
  let email = ref(null);
  let password = ref(null);

  const login = async () => {
    errors.value = [];

    let response = await axios.post('/login', {
      email: email.value,
      password: password.value,
    });

    if (response.data.errors !== undefined) {
      errors.value = response.data.errors;
    } else {
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('userName', response.data.userName);
      sessionStorage.setItem('email', response.data.email);
      //console.log(response);

      router.push('/');
    }
  };
</script>
