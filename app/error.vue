<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader />
    <main class="wrap flex flex-1 flex-col justify-center py-24">
      <p class="text-7xl font-extrabold text-ochre [font-stretch:125%]">{{ error.statusCode }}</p>
      <h1 class="h2 mt-4">{{ t('notFound.title') }}</h1>
      <p class="lead mt-3">{{ t('notFound.text') }}</p>
      <button class="btn btn-primary mt-8 self-start" @click="clearError({ redirect: localePath('/') })">{{ t('notFound.home') }}</button>
    </main>
    <SiteFooter />
  </div>
</template>
