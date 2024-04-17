export default defineEventHandler(async (event) => {

    const categories = await $fetch('https://www.digitalrestrorevamp.com/api/v1/categories', {
        method: 'GET',
        query: {
            page: 1,
            items: 999,
            store_ids: [3],
            with_locales: true
        },
        headers: {
            'Static-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3NTYwNzYxMSwiaWF0IjoxNjc1NjA3NjExfQ.gFwBsljyJCcvSxiAcgO9c2jt0wPbSc61hg7Bc_nKVWA'
        }
    }).then(categories => (categories as any).records)

    return categories;
})
