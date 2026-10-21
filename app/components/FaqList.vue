<script setup lang="ts">
import { faqs } from '~/data/content'

const { tx } = useTx()
</script>

<template>
  <div class="divide-y divide-line border-y border-line">
    <details v-for="f in tx(faqs)" :key="f.q" class="group py-1">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
        {{ f.q }}
        <span class="relative h-4 w-4 shrink-0" aria-hidden="true">
          <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-pine" />
          <span class="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-pine transition-transform group-open:rotate-90 group-open:opacity-0" />
        </span>
      </summary>
      <p class="max-w-2xl pb-5 text-slate">{{ f.a }}</p>
    </details>
  </div>
</template>
