<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signin } = useSignIn();
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) router.push({ name: "Home", params: {} });
    }

    return {
      onSubmit,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>

<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start form -->
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="row">
          <label for="email" class="flex flex-col"
            ><span class="font-semibold">Email</span>
            <input
              id="email"
              type="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              placeholder="example@gmail.com"
              autocomplete="username"
              v-model="email"
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
              v-model="password"
          /></label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 w-full text-center bg-primary text-white font-bold rounded-lg"
          >
            Sign In
          </button>

          <button
            v-if="isPending"
            type="submit"
            class="py-3 w-full text-center bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
            disabled
          >
            Loading
          </button>
        </div>
      </form>
      <!-- Start Error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span>{{ error }}</span>
      </div>
      <!-- Start direction -->
      <div class="text-center w-full mt-6">
        <span class="semi-bold">I'm a user.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'Register', param: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>
