<template>
  <section id="pageContent" class="text-capitalize text-left">
    <hero-content />
    <contact-button
      :is-hover="isHover"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      @click.native="openContact"
    />
    <kontakt-popup ref="kontaktpopup" />
    <star-animation />
  </section>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      isHover: false,
    }
  },
  methods: {
    openContact() {
      this.$refs.kontaktpopup.$bvModal.show('modal-center')
    },
  },
  head: {
    script: [
      {
        // hid: 'staranimation',
        src: 'js/loadCanvasAnimation.js',
      },
    ],
  },
}
</script>
