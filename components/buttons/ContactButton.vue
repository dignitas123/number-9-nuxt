<template>
  <button
    class="btn btn-primary border rounded-0"
    id="contact-main-button"
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
    }
  },
}
</script>

<style scoped>
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
}

@media (min-width: 956px) {
  #contact-main-button {
    bottom: 2%;
  }
}

.contact-button-hover {
  background: rgba(0, 123, 255, 0.678) !important;
}
</style>
