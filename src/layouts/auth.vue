<script>
import NavigationBrand from "@/components/NavigationBrand.vue";
export default {
  name: "NavigationBrandVue",
  components: {
    NavigationBrand,
  },
};
</script>
<template>
  <NavigationBrand />
  <slot />
</template>
