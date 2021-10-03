<template>
  <div v-touch:swipe.left="setNavSliderOpen">
    <HeaderSub />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    setNavSliderOpen() {
      this.$store.commit('navslider/open')
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
