<template>
  <div class="home">
    <Header id="header" />
    <ThoughtsList />
  </div>
</template>

<script>
// @ is an alias to /src
import ThoughtsList from '@/components/ThoughtsList.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    ThoughtsList,
    Header
  }
}
</script>

<style scoped>
#header {
  position: sticky;
}
</style>
