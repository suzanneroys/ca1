<template>
  <div id="app">
    <NavBar />
    <router-view />
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
