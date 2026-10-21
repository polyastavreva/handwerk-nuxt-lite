<script setup lang="ts">
import { findTown } from '~/data/area'
import { site } from '~/data/site'

const { t } = useI18n()
const localePath = useLocalePath()
const code = ref('')
const result = ref<null | { kind: 'free' | 'fee' | 'outside' | 'invalid'; msg: string }>(null)

function check() {
  const c = code.value.trim()
  if (!/^\d{4}$/.test(c)) {
    result.value = { kind: 'invalid', msg: t('check.invalid') }
    return
  }
  const town = findTown(c)
  if (!town) result.value = { kind: 'outside', msg: t('check.outside', { code: c }) }
  else if (town.zone === 'free') result.value = { kind: 'free', msg: t('check.free', { town: town.name }) }
  else result.value = { kind: 'fee', msg: t('check.fee', { town: town.name, fee: site.area.travelFee }) }
}

const dot = computed(() => ({
  free: 'bg-ok', fee: 'bg-ochre', outside: 'bg-slate', invalid: 'bg-err',
}[result.value?.kind ?? 'free']))
</script>

<template>
  <form class="rounded-[18px] border border-line bg-paper p-5 shadow-[0_1px_0_#D3D8D2,0_18px_40px_-24px_rgba(22,48,42,.45)] sm:p-6" novalidate @submit.prevent="check">
    <label for="pc" class="h3 block">{{ t('check.title') }}</label>
    <p id="pc-hint" class="mt-1 text-sm text-slate">{{ t('check.hint') }}</p>
    <div class="mt-4 flex gap-2">
      <input
        id="pc"
        v-model="code"
        class="field max-w-[9rem] text-lg font-bold tracking-[0.12em] tabular-nums"
        inputmode="numeric"
        autocomplete="postal-code"
        maxlength="4"
        placeholder="3072"
        aria-describedby="pc-hint pc-result"
        :aria-invalid="result?.kind === 'invalid' ? 'true' : undefined"
      >
      <button type="submit" class="btn btn-primary">{{ t('check.button') }}</button>
    </div>
    <div id="pc-result" aria-live="polite" class="min-h-[1.5rem]">
      <p v-if="result" class="mt-4 flex gap-3 border-t border-line pt-4">
        <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" :class="dot" />
        <span>
          {{ result.msg }}
          <NuxtLink v-if="result.kind !== 'invalid'" :to="localePath('/contact') + `?pc=${code.trim()}`" class="link ml-1 font-semibold">{{ t('cta.quote') }}</NuxtLink>
        </span>
      </p>
    </div>
  </form>
</template>
