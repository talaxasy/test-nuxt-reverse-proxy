<template>
  <div>
    Request from internal API
    to our external API
    <h1>CATEGORIES:</h1>
    <div
      v-if="
        categories?.length
      "
    >
      <pre>{{
        JSON.stringify(
          categories,
          null,
          2,
        )
      }}</pre>
    </div>
    <div v-else>
      loading... or fail
    </div>
    <br />
    <button
      @click="() => refresh()"
    >
      Make another request
    </button>
    <br />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const {
  data: categories,
  refresh,
} = await useLazyFetch<any>(
  `/api/category`,
  {
    method: 'get',
    key: `categories-all`,
  },
);
</script>
