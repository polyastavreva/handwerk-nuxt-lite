<script setup lang="ts">
import { towns } from '~/data/area'

const { t } = useI18n()
const free = towns.filter((x) => x.zone === 'free')
const fee = towns.filter((x) => x.zone === 'fee')
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2">
    <div>
      <h3 class="flex items-center gap-2 font-bold"><span class="h-2.5 w-2.5 rounded-full bg-ok" />{{ t('area.freeZone') }}</h3>
      <p class="mt-3 leading-relaxed text-slate">{{ free.map((x) => x.name).join(', ') }}</p>
    </div>
    <div>
      <h3 class="flex items-center gap-2 font-bold"><span class="h-2.5 w-2.5 rounded-full bg-ochre" />{{ t('area.feeZone') }}</h3>
      <p class="mt-3 leading-relaxed text-slate">{{ fee.map((x) => x.name).join(', ') }}</p>
    </div>
  </div>
</template>
