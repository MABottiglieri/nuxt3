<template>
  <div>
    {{ runtimeConfig.public.COMPANY_NAME }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
