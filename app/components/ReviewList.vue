<script setup lang="ts">
import { reviews } from '~/data/content'

const { tx } = useTx()
</script>

<template>
  <ul class="grid gap-8 md:grid-cols-3">
    <li v-for="(r, i) in reviews" :key="r.name" class="rounded-[18px] bg-paper p-6 shadow-[0_20px_40px_-30px_rgba(15,43,38,.4)] transition-transform duration-300 hover:-translate-y-1">
      <figure>
        <div class="flex gap-0.5 text-ochre" role="img" aria-label="5/5">
          <svg v-for="n in 5" :key="n" viewBox="0 0 20 20" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 6L10 15l-5.3 2.9 1.1-6L1.4 7.8l6-.8z" /></svg>
        </div>
        <blockquote class="mt-3 text-[1.1rem] leading-relaxed">{{ tx(r.text) }}</blockquote>
        <figcaption class="mt-4 text-sm"><span class="font-bold">{{ r.name }}</span>, <span class="text-slate">{{ r.place }}</span></figcaption>
      </figure>
    </li>
  </ul>
</template>
