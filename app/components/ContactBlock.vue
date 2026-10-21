<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <dl class="grid gap-5">
    <div>
      <dt class="text-sm text-slate">{{ t('contact.phone') }}</dt>
      <dd><a class="text-2xl font-extrabold [font-stretch:115%] hover:text-ochre-2" :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phoneDisplay }}</a></dd>
    </div>
    <div>
      <dt class="text-sm text-slate">{{ t('contact.email') }}</dt>
      <dd><a class="link font-semibold" :href="`mailto:${site.email}`">{{ site.email }}</a></dd>
    </div>
    <div>
      <dt class="text-sm text-slate">{{ t('contact.hours') }}</dt>
      <dd class="font-semibold">{{ t('contact.hoursValue') }}</dd>
    </div>
    <div>
      <dt class="text-sm text-slate">{{ t('contact.address') }}</dt>
      <dd class="font-semibold">{{ site.address.street }}, {{ site.address.postalCode }} {{ site.address.city }}</dd>
    </div>
  </dl>
</template>
