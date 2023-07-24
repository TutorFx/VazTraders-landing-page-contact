<template>
  <div>
    <div v-if="status === TheMoment.running">
      <div class="text-center text-white py-6 text-3xl">
        Ao vivo agora no YouTube
      </div>
    </div>
    <div v-else-if="status === TheMoment.waiting">
      <div class="max-w-5xl mx-auto text-center grid gap-1 py-6 px-3">
        <div>
          <span class="bg-clip font-bold uppercase max-sm:text-sm">AS OPERAÇÕES AO VIVO COMEÇAM EM...</span>
        </div>
        <div class="flex justify-center">
          <span class="gap-9 max-sm:gap-6 bg-clip grid grid-flow-col">
            <span class="text-3xl font-black max-sm:grid">
              00
              <span class="text-xl font-bold uppercase">dias</span>
            </span>
            <span class="text-3xl font-black max-sm:grid">
              {{ pendingtime.hours.toString().padStart(2,'0') }}
              <span class="text-xl font-bold uppercase">hrs</span>
            </span>
            <span class="text-3xl font-black max-sm:grid">
              {{ pendingtime.minutes.toString().padStart(2,'0') }}
              <span class="text-xl font-bold uppercase">min</span>
            </span>
            <span class="text-3xl font-black max-sm:grid">
              {{ pendingtime.seconds.toString().padStart(2,'0') }}
              <span class="text-xl font-bold uppercase">segs</span>
            </span>
          </span>
        </div>
        <div class="mt-2">
          <span class="bg-clip font-bold uppercase max-sm:text-sm">Cadastre-se e seja avisado!</span>
        </div>
      </div>
    </div>
    <div v-else-if="status === TheMoment.tomorrow">
      <div class="text-center text-white py-6 text-3xl">
        amanhã tem mais
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'

const livetime = new LiveTime()
livetime.add(moment().hour(8).minute(0).second(0), 3)
livetime.add(moment().hour(18).minute(0).second(0), 3)
const pendingtime = livetime.getPendingTime()
const status = livetime.getStatus()
const TheMoment = livetime.getStatusEnum()
</script>