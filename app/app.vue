<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const head = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang },
  link: [...(head.value.link || [])],
  meta: [...(head.value.meta || [])],
  titleTemplate: (title?: string) => (title ? `${title} | ${site.shortName}` : site.name),
}))

// Structured data for Google (LocalBusiness subtype from site.ts)
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': site.schemaType,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      foundingDate: String(site.foundedYear),
      openingHours: site.openingHours,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      ...(site.rating
        ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: site.rating.value, reviewCount: site.rating.count } }
        : {}),
    }),
  }],
})
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ochre focus:px-4 focus:py-2 focus:font-bold">{{ t('skip') }}</a>
    <SiteHeader />
    <main id="main" class="flex-1">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
