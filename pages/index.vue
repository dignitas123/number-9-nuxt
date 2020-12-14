<template>
  <section class="text-capitalize text-left" id="pageContent">
    <HeroContent />
    <ContactButton
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      @click="openContact"
      :isHover="isHover"
    />
    <KontaktPopup ref="kontaktpopup" />
    <StarAnimation />
  </section>
</template>

<script>
import HeroContent from '~/components/HeroContent.vue'
import ContactButton from '~/components/buttons/ContactButton.vue'
import KontaktPopup from '~/components/KontaktPopup.vue'
import StarAnimation from '~/components/StarAnimation.vue'

export default {
  components: {
    HeroContent,
    ContactButton,
    KontaktPopup,
    StarAnimation,
  },
  data() {
    return {
      isHover: false,
    }
  },
  methods: {
    openContact: function () {
      this.$refs.kontaktpopup.$bvModal.show('modal-center')
    },
  },
}
</script>

<style scoped>
#pageContent {
  width: 100%;
  min-height: 800px;
  background: url('~@/assets/img/galaxy-11098_m.jpg') center / cover no-repeat;
  background-size: auto;
  height: 100vh;
  color: white !important;
}

@media (min-width: 768px) {
  #pageContent {
    background: url('~@/assets/img/galaxy-11098.jpg') center / cover no-repeat;
  }
}
</style>
