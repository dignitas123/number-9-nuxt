<template>
  <b-sidebar
    id="sidebarBackdrop"
    v-touch:swipe.right="hideSidebar"
    aria-labelledby="sidebar-no-header-title"
    no-header
    backdrop-variant="dark"
    bg-variant="dark"
    text-variant="light"
    backdrop
    shadow
    right
    :visible="showNavSlide"
    @hidden="hideSidebar"
  >
    <div class="px-3 py-2 noselect">
      <header class="text-right p-1" @click="hideSidebar">
        <CloseButton />
      </header>
      <h4 id="sidebar-no-header-title" class="text-center mt-5">
        <b-icon icon="telephone-fill"></b-icon>
        <a class="text-white" href="tel:004915737289767">+49 15737 2897 67</a>
      </h4>
      <div class="accordion text-center">
        <h4 v-b-toggle.accordion-1 align="center">
          Services
          <b-icon v-if="accordion1Toggled" icon="caret-down-fill"></b-icon>
          <b-icon v-else icon="caret-right-fill"></b-icon>
        </h4>
        <b-collapse
          id="accordion-1"
          visible
          accordion="nav-accordion"
          role="tabpanel"
        >
          <b-list-group>
            <router-link to="/">
              <b-list-group-item>Webseiten</b-list-group-item></router-link
            >
            <router-link to="/">
              <b-list-group-item>Mobile Apps</b-list-group-item></router-link
            >
            <router-link to="/">
              <b-list-group-item
                >Desktopanwendung</b-list-group-item
              ></router-link
            >
            <router-link to="/">
              <b-list-group-item>Modernisierung</b-list-group-item></router-link
            >
            <router-link to="/">
              <b-list-group-item>E-Commerce</b-list-group-item></router-link
            >
            <router-link to="/">
              <b-list-group-item>Social Media</b-list-group-item>
            </router-link>
          </b-list-group>
        </b-collapse>

        <h4 v-b-toggle.accordion-2 align="center">
          Tech <b-icon v-if="accordion2Toggled" icon="caret-down-fill"></b-icon>
          <b-icon v-else icon="caret-right-fill"></b-icon>
        </h4>
        <b-collapse
          id="accordion-2"
          visible
          accordion="nav-accordion"
          role="tabpanel"
        >
          <b-list-group>
            <router-link to="/">
              <b-list-group-item
                >Cloud Computing</b-list-group-item
              ></router-link
            >
            <router-link to="/">
              <b-list-group-item
                >Machine Learning</b-list-group-item
              ></router-link
            >
            <router-link to="/">
              <b-list-group-item>Microservices</b-list-group-item></router-link
            >
            <router-link to="/">
              <b-list-group-item>Vue</b-list-group-item></router-link
            >
            <router-link to="/">
              <b-list-group-item>Sanity</b-list-group-item></router-link
            >
            <router-link to="/">
              <b-list-group-item>Electron</b-list-group-item></router-link
            >
          </b-list-group>
        </b-collapse>

        <h4 v-b-toggle.accordion-3 align="center">
          About
          <b-icon v-if="accordion3Toggled" icon="caret-down-fill"></b-icon>
          <b-icon v-else icon="caret-right-fill"></b-icon>
        </h4>
        <b-collapse
          id="accordion-3"
          visible
          accordion="nav-accordion"
          role="tabpanel"
        >
          <b-list-group>
            <router-link to="/"
              ><b-list-group-item>Über Uns</b-list-group-item></router-link
            >
            <router-link to="/"
              ><b-list-group-item>Unser Blog</b-list-group-item></router-link
            >
            <router-link to="/"
              ><b-list-group-item>Philosophie</b-list-group-item></router-link
            >
            <router-link to="/"
              ><b-list-group-item>Team</b-list-group-item></router-link
            >
          </b-list-group>
        </b-collapse>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
import CloseButton from './icons/CloseButton.vue'

export default {
  components: {
    CloseButton,
  },
  data() {
    return {
      showNavSlide: false,
      accordion1Toggled: true,
      accordion2Toggled: false,
      accordion3Toggled: false,
    }
  },
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, open) => {
      if (collapseId === 'accordion-1') {
        this.accordion1Toggled = open
      } else if (collapseId === 'accordion-2') {
        this.accordion2Toggled = open
      } else if (collapseId === 'accordion-3') {
        this.accordion2Toggled = open
      }
    })
  },
  methods: {
    showSidebar() {
      this.showNavSlide = true
    },
    hideSidebar() {
      this.showNavSlide = false
      this.$store.commit('navslider/close')
    },
    // toggle: () => {
    //   const x = this.$refs.BCollapse
    // },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4:focus {
  outline: none !important;
}

.accordion {
  margin-top: 30px;
  h4 {
    margin-bottom: 15px;
    margin-top: 15px;
    &:hover {
      color: #007bff;
    }
  }
  div {
    &:hover {
      cursor: pointer;
    }
    a {
      color: #343a40;
      &:hover {
        text-decoration: none;
        color: #007bff;
      }
    }
  }
}

header:hover {
  cursor: pointer;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
