<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: () => t('nav.contact'), description: () => t('quote.lead') })
</script>

<template>
  <div>
    <PageHead :title="t('quote.title')" :lead="t('quote.lead')" />
    <div class="wrap section grid gap-12 lg:grid-cols-[1.6fr_1fr]">
      <QuoteForm />
      <aside class="space-y-8">
        <ContactBlock />
        <AreaCheck />
      </aside>
    </div>
  </div>
</template>
