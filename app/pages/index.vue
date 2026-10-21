<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('meta.homeTitle'),
  description: () => t('meta.homeDescription'),
  ogTitle: () => `${site.name} – ${t('meta.homeTitle')}`,
  ogDescription: () => t('meta.homeDescription'),
  ogImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=75&auto=format&fit=crop',
})

const words = computed(() => t('hero.title').split(' '))
const hero = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=75&auto=format&fit=crop'
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="blob -left-24 top-10 h-80 w-80 bg-mint" aria-hidden="true" />
      <div class="blob right-[-6rem] top-[-4rem] h-96 w-96 bg-sky [animation-delay:-5s]" aria-hidden="true" />
      <div class="blob bottom-[-6rem] left-1/3 h-72 w-72 bg-ochre/40 [animation-delay:-9s]" aria-hidden="true" />

      <div class="wrap relative grid items-center gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-24">
        <div>
          <p class="fade-up inline-flex items-center gap-2 rounded-full border border-line bg-paper/70 px-3.5 py-1.5 text-sm font-semibold text-slate backdrop-blur">
            <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" /><span class="relative inline-flex h-2 w-2 rounded-full bg-ok" /></span>
            {{ t('hero.kicker', { year: site.foundedYear }) }}
          </p>
          <h1 class="display rise mt-5" :aria-label="t('hero.title')">
            <template v-for="(w, i) in words" :key="i"><span aria-hidden="true" :style="{ animationDelay: `${120 + i * 70}ms` }">{{ w }}</span>{{ ' ' }}</template>
          </h1>
          <p class="lead fade-up mt-6 [animation-delay:.55s]">{{ t('hero.lead', { days: site.quoteDays }) }}</p>
          <div class="fade-up mt-8 flex flex-wrap gap-3 [animation-delay:.7s]">
            <NuxtLink :to="localePath('/contact')" class="btn btn-primary">{{ t('cta.quote') }}</NuxtLink>
            <a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="btn btn-ghost">{{ t('cta.call') }}: {{ site.phoneDisplay }}</a>
          </div>
          <dl class="fade-up mt-10 grid max-w-xl grid-cols-3 gap-3 [animation-delay:.85s]">
            <div v-if="site.rating" class="rounded-[18px] border border-line bg-paper/80 p-4 backdrop-blur">
              <dd class="text-2xl font-extrabold [font-stretch:115%]">{{ site.rating.value.toFixed(1) }}<span class="text-base text-ochre-2"> ★</span></dd>
              <dt class="text-sm leading-snug text-slate">{{ t('hero.rating', { count: site.rating.count, source: site.rating.source }) }}</dt>
            </div>
            <div class="rounded-[18px] border border-line bg-paper/80 p-4 backdrop-blur">
              <dd class="text-2xl font-extrabold [font-stretch:115%]">{{ site.quoteDays }}</dd>
              <dt class="text-sm leading-snug text-slate">{{ t('hero.quoteDays') }}</dt>
            </div>
            <div class="rounded-[18px] border border-line bg-paper/80 p-4 backdrop-blur">
              <dd class="text-2xl font-extrabold [font-stretch:115%]">{{ site.warrantyYears }}</dd>
              <dt class="text-sm leading-snug text-slate">{{ t('hero.warranty') }}</dt>
            </div>
          </dl>
        </div>

        <div class="relative">
          <div class="stroke-in absolute -right-3 -top-3 h-[62%] w-[78%] rounded-[24px] bg-ochre sm:-right-5 sm:-top-5" aria-hidden="true" />
          <div class="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-line shadow-[0_30px_60px_-30px_rgba(15,43,38,.45)] sm:aspect-square lg:aspect-[4/5]">
            <img :src="hero" alt="" class="settle h-full w-full object-cover" width="1400" height="1750" fetchpriority="high">
          </div>
          <AreaCheck class="fade-up relative -mt-24 ml-3 mr-3 [animation-delay:1s] sm:ml-[-1.5rem] sm:mr-auto sm:max-w-sm lg:ml-[-3rem]" />
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="section border-t border-line bg-paper">
      <div class="wrap">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 class="h2">{{ t('services.title') }}</h2>
            <p class="lead mt-4">{{ t('services.lead') }}</p>
          </div>
          
        </div>
        <ServiceTable class="mt-12" />
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section scroll-mt-20">
      <div class="wrap">
        <h2 class="h2">{{ t('projects.title') }}</h2>
        <p class="lead mt-4">{{ t('projects.lead') }}</p>
        <ProjectGrid class="mt-12" />
      </div>
    </section>

    <!-- Process -->
    <section id="process" class="section on-dark scroll-mt-20 bg-pine text-plaster">
      <div class="wrap">
        <h2 class="h2">{{ t('process.title') }}</h2>
        <ProcessSteps class="mt-12" />
      </div>
    </section>

    <!-- Reviews -->
    <section class="section bg-mint">
      <div class="wrap">
        <h2 class="h2">{{ t('reviews.title') }}</h2>
        <ReviewList class="mt-12" />
      </div>
    </section>

    <!-- Area -->
    <section id="area" class="section bg-sky">
      <div class="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 class="h2">{{ t('area.title') }}</h2>
          <p class="lead mt-4">{{ t('area.lead', { free: site.area.freeRadiusKm, max: site.area.maxRadiusKm, fee: site.area.travelFee }) }}</p>
        </div>
        <AreaList class="lg:pt-3" />
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <h2 class="h2">{{ t('faq.title') }}</h2>
        <FaqList />
      </div>
    </section>

    <!-- Quote -->
    <section id="quote" class="section relative overflow-hidden bg-blush">
      <div class="blob -right-24 top-10 h-80 w-80 bg-ochre/50" aria-hidden="true" />
      <div class="wrap relative grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 class="h2">{{ t('quote.title') }}</h2>
          <p class="lead mt-4">{{ t('quote.lead') }}</p>
          <ContactBlock class="mt-10" />
        </div>
        <QuoteForm class="rounded-[24px] bg-paper p-6 shadow-[0_30px_60px_-35px_rgba(15,43,38,.35)] sm:p-8" />
      </div>
    </section>
  </div>
</template>
