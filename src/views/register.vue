<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start form -->
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="row">
          <label for="fullname" class="flex flex-col"
            ><span class="font-semibold">Full name</span>
            <input
              id="fullname"
              type="text"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="IMoney..."
          /></label>
        </div>
        <div class="row">
          <label for="email" class="flex flex-col"
            ><span class="font-semibold">Email</span>
            <input
              id="email"
              type="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="example@gmail.com"
              autocomplete="username"
          /></label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col"
            ><span class="font-semibold">Password</span>
            <input
              id="password"
              type="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="password"
              autocomplete="current-password"
          /></label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 w-full text-center bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </form>
      <!-- Start direction -->
      <div class="text-center w-full mt-6">
        <span class="semi-bold">I'm already a member.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'Login', param: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    function onSubmit() {}
    return {
      onSubmit,
    };
  },
};
</script>
