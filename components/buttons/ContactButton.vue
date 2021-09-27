<template>
  <button
    id="contact-main-button"
    class="btn btn-primary border rounded-0 mt-5"
    type="button"
    :class="{ 'contact-button-hover': isHover }"
  >
    Kontaktieren Sie Uns
  </button>
</template>

<script>
export default {
  props: {
    isHover: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
#contact-button {
  margin-right: 7%;
  margin-left: 7%;
}

#contact-main-button {
  position: relative;
  display: block;
  border: 2px solid white !important;
  background: none;
  font-size: 20px;
  margin: 0 auto;
  border-radius: 20px !important;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  &:hover {
    background: rgba(0, 123, 255, 0.678) !important;
  }
  &:focus {
    box-shadow: none;
  }
}

@media (min-width: 956px) {
  #contact-main-button {
    bottom: 2%;
  }
}
</style>
