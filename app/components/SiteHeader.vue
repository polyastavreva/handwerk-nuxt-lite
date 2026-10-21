<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const open = ref(false)
watch(() => route.fullPath, () => (open.value = false))

const links = computed(() => [
  { to: localePath('/') + '#services', label: t('nav.services') },
  { to: localePath('/') + '#projects', label: t('nav.projects') },
  { to: localePath('/') + '#process', label: t('nav.process') },
  { to: localePath('/contact'), label: t('nav.contact') },
])
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-plaster/95 backdrop-blur supports-[backdrop-filter]:bg-plaster/85">
    <div class="wrap flex h-[4.5rem] items-center gap-4">
      <NuxtLink :to="localePath('/')" class="mr-auto flex items-center gap-3 no-underline">
        <BrandMark />
        <span class="leading-tight">
          <span class="block text-[1.05rem] font-extrabold [font-stretch:118%]">{{ site.shortName }}</span>
          <span class="block text-[0.8rem] text-slate">{{ t('brandSub') }}</span>
        </span>
      </NuxtLink>

      <nav class="hidden lg:block" :aria-label="t('nav.services')">
        <ul class="flex items-center gap-1">
          <li v-for="l in links" :key="l.to">
            <NuxtLink :to="l.to" class="rounded-full px-3 py-2 font-semibold hover:bg-line/60">{{ l.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <NuxtLink :to="localePath('/contact')" class="btn btn-primary hidden md:inline-flex">{{ t('cta.quote') }}</NuxtLink>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-pine lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        @click="open = !open"
      >
        <span class="sr-only">Menu</span>
        <svg v-if="!open" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>

    <div v-show="open" id="mobile-nav" class="border-t border-line bg-plaster lg:hidden">
      <div class="wrap py-4">
        <ul class="divide-y divide-line">
          <li v-for="l in links" :key="l.to">
            <NuxtLink :to="l.to" class="block py-3 text-lg font-semibold">{{ l.label }}</NuxtLink>
          </li>
        </ul>
        <div class="mt-4 flex flex-wrap items-center gap-3">
          <NuxtLink :to="localePath('/contact')" class="btn btn-primary flex-1">{{ t('cta.quote') }}</NuxtLink>
          <a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="btn btn-ghost flex-1">{{ site.phoneDisplay }}</a>
        </div>
      </div>
    </div>
  </header>
</template>
