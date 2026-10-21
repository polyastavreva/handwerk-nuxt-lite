<script setup lang="ts">
defineProps<{ title: string; lead?: string }>()
</script>

<template>
  <section class="relative overflow-hidden border-b border-line">
    <div class="blob -right-20 -top-24 h-80 w-80 bg-sky" aria-hidden="true" />
    <div class="blob left-1/3 top-1/2 h-64 w-64 bg-mint [animation-delay:-6s]" aria-hidden="true" />
    <div class="wrap fade-up relative pb-12 pt-12 md:pb-16 md:pt-20">
      <slot name="above" />
      <h1 class="display max-w-4xl">{{ title }}</h1>
      <p v-if="lead" class="lead mt-6">{{ lead }}</p>
      <slot />
    </div>
  </section>
</template>
