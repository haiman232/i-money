<template>
  <div class="home">Home</div>
  <p v-if="user">{{ user.displayName }}</p>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
