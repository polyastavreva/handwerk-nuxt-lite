<script setup lang="ts">
import { getService, services } from '~/data/services'

const route = useRoute()
const { t } = useI18n()
const { tx, chf } = useTx()
const localePath = useLocalePath()

const service = getService(String(route.params.slug))
if (!service) throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
const s = computed(() => tx(service.text))
const others = services.filter((x) => x.slug !== service.slug)

useSeoMeta({
  title: () => s.value.name,
  description: () => s.value.intro,
  ogImage: service.image,
})
</script>

<template>
  <div v-if="service">
    <PageHead :title="s.name" :lead="s.intro">
      <template #above>
        <NuxtLink :to="localePath('/') + '#services'" class="mb-5 inline-block font-semibold text-slate hover:text-pine">← {{ t('services.pageTitle') }}</NuxtLink>
      </template>
      <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <NuxtLink :to="localePath('/contact') + `?service=${service.slug}`" class="btn btn-primary">{{ t('cta.quote') }}</NuxtLink>
        <p><span class="text-xl font-extrabold">{{ t('services.from', { price: chf(service.priceFrom) }) }}</span> <span class="text-slate">{{ s.priceUnit }} · {{ s.duration }}</span></p>
      </div>
    </PageHead>

    <div class="wrap section grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <img :src="service.image" alt="" class="aspect-[3/2] w-full rounded-[18px] bg-line object-cover" width="1400" height="933">
        <div class="mt-10 max-w-2xl space-y-5 text-lg">
          <p v-for="(p, i) in s.body" :key="i">{{ p }}</p>
        </div>
      </div>
      <aside class="lg:sticky lg:top-28 lg:self-start">
        <div class="rounded-[18px] border border-line bg-paper p-6">
          <h2 class="h3">{{ t('services.included') }}</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="pt in s.points" :key="pt" class="flex gap-3">
              <svg viewBox="0 0 24 24" class="mt-1 h-5 w-5 shrink-0 text-ok" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              <span>{{ pt }}</span>
            </li>
          </ul>
        </div>
        <AreaCheck class="mt-6" />
      </aside>
    </div>

    <section class="border-t border-line bg-paper">
      <div class="wrap section">
        <h2 class="h2">{{ t('services.other') }}</h2>
        <ul class="mt-8 grid gap-x-8 sm:grid-cols-2">
          <li v-for="o in others" :key="o.slug" class="border-b border-line">
            <NuxtLink :to="localePath(`/services/${o.slug}`)" class="flex items-baseline justify-between gap-4 py-4 hover:text-ochre-2">
              <span class="text-lg font-bold">{{ tx(o.text).name }}</span>
              <span class="whitespace-nowrap text-slate">{{ t('services.from', { price: chf(o.priceFrom) }) }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
