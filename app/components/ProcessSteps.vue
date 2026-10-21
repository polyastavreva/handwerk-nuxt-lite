<script setup lang="ts">
import { site } from '~/data/site'

const { t, tm, rt } = useI18n()
const steps = computed(() => (tm('process.steps') as any[]).map((s) => ({ title: rt(s.title), text: rt(s.text, { days: site.quoteDays }) })))
</script>

<template>
  <ol class="grid gap-px overflow-hidden rounded-[18px] bg-plaster/15 sm:grid-cols-2 lg:grid-cols-4">
    <li v-for="(s, i) in steps" :key="i" class="bg-pine p-6 transition-colors hover:bg-pine-2 lg:p-7">
      <span class="block text-5xl font-extrabold text-ochre tabular-nums [font-stretch:125%]">{{ i + 1 }}</span>
      <h3 class="h3 mt-5">{{ s.title }}</h3>
      <p class="mt-2 text-plaster/75">{{ s.text }}</p>
    </li>
  </ol>
</template>
