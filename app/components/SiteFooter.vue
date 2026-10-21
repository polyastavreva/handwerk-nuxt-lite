<script setup lang="ts">
import { site } from '~/data/site'
import { services } from '~/data/services'

const { t } = useI18n()
const { tx } = useTx()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="on-dark bg-pine text-plaster">
    <div class="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div class="flex items-center gap-3">
          <BrandMark />
          <span class="text-lg font-extrabold [font-stretch:118%]">{{ site.name }}</span>
        </div>
        <address class="mt-5 not-italic leading-relaxed text-plaster/80">
          {{ site.address.street }}<br>
          {{ site.address.postalCode }} {{ site.address.city }}<br>
          <a class="link text-plaster" :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phoneDisplay }}</a><br>
          <a class="link text-plaster" :href="`mailto:${site.email}`">{{ site.email }}</a>
        </address>
        <p class="mt-4 text-plaster/80">{{ t('contact.hoursValue') }}</p>
      </div>
      <div>
        <h2 class="text-base font-bold">{{ t('nav.services') }}</h2>
        <ul class="mt-3 space-y-2 text-plaster/80">
          <li v-for="s in services" :key="s.slug">
            <NuxtLink :to="localePath(`/services/${s.slug}`)" class="hover:text-ochre">{{ tx(s.text).name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-base font-bold">{{ site.shortName }}</h2>
        <ul class="mt-3 space-y-2 text-plaster/80">
          <li><NuxtLink :to="localePath('/contact')" class="hover:text-ochre">{{ t('nav.contact') }}</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-plaster/15">
      <p class="wrap py-5 text-sm text-plaster/60">© {{ year }} {{ site.legalName }}. {{ t('footer.rights') }} · Built with <a class="link" href="https://stavreva68.gumroad.com/l/handwerk-nuxt-template">Handwerk</a></p>
    </div>
  </footer>
</template>
