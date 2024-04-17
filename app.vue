<template>
  <div>
    <h1>
      Request from internal
      API to our external API
    </h1>
    <h3>CATEGORIES:</h3>
    <div v-if="data">
      <pre>{{
        JSON.stringify(
          data,
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
  </div>
</template>

<script setup lang="ts">
const {
  data,
  pending,
  error,
  refresh,
} = await useAsyncData(
  'mountains',
  () =>
    $fetch(
      'api/v1/categories',
      {
        mode: 'no-cors',
        method: 'GET',
        baseURL:
          'https://www.digitalrestrorevamp.com',
        headers: {
          'Static-Token':
            'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3NTYwNzYxMSwiaWF0IjoxNjc1NjA3NjExfQ.gFwBsljyJCcvSxiAcgO9c2jt0wPbSc61hg7Bc_nKVWA',
        },
      },
    ),
);
</script>
