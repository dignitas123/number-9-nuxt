<template>
  <b-container class="min-vh-100">
    <b-row class="mt-5">
      <b-col
        ><h1>I am rendered on the {{ renderedOn }} side. Cool. 2</h1></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  asyncData() {
    return { renderedOn: process.client ? "client" : "server" }
  },
  layout: "subpages",
  data() {
    return {
      isHover: false,
    }
  },
}
</script>

<style scoped lang="scss"></style>
