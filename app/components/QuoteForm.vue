<script setup lang="ts">
import { site } from '~/data/site'
import { services } from '~/data/services'

const { t } = useI18n()
const { tx } = useTx()
const route = useRoute()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  postcode: typeof route.query.pc === 'string' ? route.query.pc : '',
  service: typeof route.query.service === 'string' ? route.query.service : '',
  message: '',
  website: '', // honeypot: real people leave this empty
})
const errors = reactive<Record<string, string>>({})
const state = ref<'idle' | 'sending' | 'sent' | 'failed'>('idle')
const summary = ref<HTMLElement | null>(null)

function validate() {
  for (const k of Object.keys(errors)) delete errors[k]
  if (!form.name.trim()) errors.name = t('form.errName')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = t('form.errEmail')
  if (!/^\d{4}$/.test(form.postcode.trim())) errors.postcode = t('form.errPostcode')
  if (form.message.trim().length < 5) errors.message = t('form.errMessage')
  return Object.keys(errors).length === 0
}

async function submit() {
  if (!validate()) {
    await nextTick()
    const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
    first?.focus()
    return
  }
  if (form.website) { state.value = 'sent'; return }
  state.value = 'sending'
  try {
    if (site.formEndpoint) {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, website: undefined }),
      })
      if (!res.ok) throw new Error(String(res.status))
    } else {
      await new Promise((r) => setTimeout(r, 600)) // demo mode
    }
    state.value = 'sent'
    await nextTick()
    summary.value?.focus()
  } catch {
    state.value = 'failed'
  }
}
</script>

<template>
  <div>
    <div v-if="state === 'sent'" ref="summary" tabindex="-1" role="status" class="rounded-[18px] border-2 border-ok bg-paper p-6">
      <p class="flex items-start gap-3 text-lg font-semibold">
        <svg viewBox="0 0 24 24" class="mt-0.5 h-6 w-6 shrink-0 text-ok" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        {{ t('form.sent') }}
      </p>
    </div>

    <form v-else class="grid gap-5 sm:grid-cols-2" novalidate @submit.prevent="submit">
      <p v-if="Object.keys(errors).length" class="rounded-xl bg-err/10 px-4 py-3 font-semibold text-err sm:col-span-2" role="alert">{{ t('form.fixErrors') }}</p>

      <div>
        <label class="label" for="f-name">{{ t('form.name') }}</label>
        <input id="f-name" v-model="form.name" class="field" autocomplete="name" :aria-invalid="errors.name ? 'true' : undefined" aria-describedby="e-name">
        <p v-if="errors.name" id="e-name" class="mt-1 text-sm text-err">{{ errors.name }}</p>
      </div>
      <div>
        <label class="label" for="f-email">{{ t('form.email') }}</label>
        <input id="f-email" v-model="form.email" type="email" class="field" autocomplete="email" :aria-invalid="errors.email ? 'true' : undefined" aria-describedby="e-email">
        <p v-if="errors.email" id="e-email" class="mt-1 text-sm text-err">{{ errors.email }}</p>
      </div>
      <div>
        <label class="label" for="f-phone">{{ t('form.phone') }} <span class="font-normal text-slate">({{ t('form.optional') }})</span></label>
        <input id="f-phone" v-model="form.phone" type="tel" class="field" autocomplete="tel">
      </div>
      <div>
        <label class="label" for="f-pc">{{ t('form.postcode') }}</label>
        <input id="f-pc" v-model="form.postcode" class="field" inputmode="numeric" maxlength="4" autocomplete="postal-code" :aria-invalid="errors.postcode ? 'true' : undefined" aria-describedby="e-pc">
        <p v-if="errors.postcode" id="e-pc" class="mt-1 text-sm text-err">{{ errors.postcode }}</p>
      </div>
      <div class="sm:col-span-2">
        <label class="label" for="f-service">{{ t('form.service') }}</label>
        <select id="f-service" v-model="form.service" class="field">
          <option value="">—</option>
          <option v-for="s in services" :key="s.slug" :value="s.slug">{{ tx(s.text).name }}</option>
          <option value="other">{{ t('form.serviceOther') }}</option>
        </select>
      </div>
      <div class="sm:col-span-2">
        <label class="label" for="f-msg">{{ t('form.message') }}</label>
        <textarea id="f-msg" v-model="form.message" rows="5" class="field" :placeholder="t('form.messagePh')" :aria-invalid="errors.message ? 'true' : undefined" aria-describedby="e-msg" />
        <p v-if="errors.message" id="e-msg" class="mt-1 text-sm text-err">{{ errors.message }}</p>
      </div>
      <div class="hidden" aria-hidden="true">
        <label for="f-web">Website</label>
        <input id="f-web" v-model="form.website" tabindex="-1" autocomplete="off">
      </div>
      <div class="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" class="btn btn-primary min-w-[12rem]" :disabled="state === 'sending'">
          {{ state === 'sending' ? t('form.sending') : t('form.submit') }}
        </button>
        <p v-if="state === 'failed'" class="text-err" role="alert">{{ t('form.failed') }}</p>
      </div>
    </form>
  </div>
</template>
