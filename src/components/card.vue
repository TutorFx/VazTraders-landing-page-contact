<template>
  <div class="golden-bg text-center grid gap-3 grid-rows-[repeat(3,max-content)] items-start p-6 rounded-3xl">
    <nuxt-img sizes="xs:64px sm:64px lg:64px" class="mx-auto w-16" densities="x1 x2 x3 x4" :src="`/assets/icons/${data.icon}`" :alt="data.title" />
    <h3 class="text-lg px-6 font-bold">
      {{ data.title }}
    </h3>
    <div v-html="data.content" />
  </div>
</template>

<script setup lang="ts">
import { ICard } from "@/types"
defineProps<{ data: ICard }>()
</script>