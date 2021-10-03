<template>
  <div v-touch:swipe.left="setNavSliderOpen">
    <Header />
    <nuxt />
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
#pageContent {
  width: 100%;
  min-height: 800px;
  background: url('~@/assets/img/galaxy-11098_m.jpg') center / cover no-repeat;
  background-size: auto;
  height: 100vh;
  color: white !important;
  margin-top: -61px;
  padding-top: 33vh;
}

@media (min-width: 625px) {
  #pageContent {
    background: url('~@/assets/img/galaxy-11098.jpg') center / cover no-repeat;
    margin-top: -96px;
  }
}
</style>
