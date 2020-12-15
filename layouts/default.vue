<template>
  <div v-touch:swipe.left="setNavSliderOpen">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    setNavSliderOpen() {
      this.$store.commit('toggleNavbar', true)
    },
  },
}
</script>

<style>
body {
  width: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
