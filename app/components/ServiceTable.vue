<script setup lang="ts">
import { services } from '~/data/services'

const { t } = useI18n()
const { tx, chf } = useTx()
const localePath = useLocalePath()
</script>

<template>
  <div>
    <!-- Desktop: a real price table -->
    <table class="hidden w-full border-collapse text-left md:table">
      <thead>
        <tr class="border-b-2 border-pine text-sm text-slate">
          <th scope="col" class="py-3 pl-3 pr-6 font-semibold">{{ t('services.colService') }}</th>
          <th scope="col" class="py-3 pr-6 font-semibold">{{ t('services.colIncluded') }}</th>
          <th scope="col" class="py-3 pr-6 font-semibold">{{ t('services.colTime') }}</th>
          <th scope="col" class="py-3 pr-3 text-right font-semibold">{{ t('services.colPrice') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, i) in services" :key="s.slug" class="group border-b border-line align-top transition-colors hover:bg-plaster">
          <th scope="row" class="py-6 pl-3 pr-6">
            <NuxtLink :to="localePath(`/services/${s.slug}`)" class="text-xl font-bold [font-stretch:110%] group-hover:underline decoration-ochre decoration-2 underline-offset-4">{{ tx(s.text).name }}</NuxtLink>
            <span class="mt-1 block font-normal text-slate">{{ tx(s.text).short }}</span>
          </th>
          <td class="py-6 pr-6 text-[0.95rem]">{{ tx(s.text).included }}</td>
          <td class="whitespace-nowrap py-6 pr-6 text-[0.95rem]">{{ tx(s.text).duration }}</td>
          <td class="whitespace-nowrap py-6 pr-3 text-right">
            <span class="block text-xl font-extrabold tabular-nums [font-stretch:110%]">{{ chf(s.priceFrom) }}</span>
            <span class="text-sm text-slate">{{ tx(s.text).priceUnit }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Mobile: stacked rows -->
    <ul class="divide-y divide-line border-y-2 border-pine md:hidden">
      <li v-for="(s, i) in services" :key="s.slug">
        <NuxtLink :to="localePath(`/services/${s.slug}`)" class="block py-5">
          <span class="flex items-baseline justify-between gap-4">
            <span class="text-lg font-bold [font-stretch:110%]">{{ tx(s.text).name }}</span>
            <span class="whitespace-nowrap text-right font-extrabold tabular-nums">{{ chf(s.priceFrom) }}</span>
          </span>
          <span class="mt-1 block text-slate">{{ tx(s.text).short }}</span>
          <span class="mt-2 block text-sm text-slate">{{ tx(s.text).duration }} · {{ tx(s.text).priceUnit }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
