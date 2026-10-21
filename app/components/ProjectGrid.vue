<script setup lang="ts">
import { projects } from '~/data/content'

const { t } = useI18n()
const { tx } = useTx()
</script>

<template>
  <ul class="grid gap-6 md:grid-cols-3">
    <li v-for="(p, i) in projects" :key="p.image" :class="i === 0 ? 'md:col-span-2 md:row-span-2' : ''">
      <figure class="flex h-full flex-col">
        <div class="zoom overflow-hidden rounded-[18px] bg-line" :class="i === 0 ? 'aspect-[4/3] md:aspect-auto md:flex-1' : 'aspect-[4/3]'">
          <img :src="p.image" :alt="tx(p.text).title" class="h-full w-full object-cover" loading="lazy" width="1200" height="900">
        </div>
        <figcaption class="mt-3">
          <span class="block font-bold">{{ tx(p.text).title }}</span>
          <span class="block text-slate">{{ tx(p.text).scope }}</span>
          <span class="mt-1 block text-sm text-slate">{{ p.place }}, {{ t('projects.days', { n: p.days }, p.days) }}</span>
        </figcaption>
      </figure>
    </li>
  </ul>
</template>
