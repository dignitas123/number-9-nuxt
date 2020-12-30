<template>
  <nav class="navbar navbar-light navbar-expand-md text-white">
    <div class="container">
      <div class="navbar-brand"></div>
      <div id="openMenuArea" @click="openMenu">
        <DirtyHamburger />
      </div>
      <div
        id="navcol-1"
        class="collapse navbar-collapse text-white justify-content-end"
        data-aos="fade"
      >
        <ul class="nav navbar-nav t">
          <li class="nav-item"></li>
          <li class="nav-item"></li>
          <li class="nav-item"></li>
          <li class="nav-item dropdown show text-white">
            <a
              class="dropdown-toggle nav-link text-white"
              :class="{ 'dropdown-toggle-hover': hover2 }"
              data-toggle="dropdown"
              aria-expanded="true"
              href="#"
              >Services</a
            >
            <div
              class="dropdown-menu show"
              data-bs-hover-animate="bounce"
              @mouseover="hover2 = true"
              @mouseleave="hover2 = false"
            >
              <div class="row">
                <div class="col">
                  <ul class="list-unstyled text-center col-xs-2">
                    <li class="nav-item">
                      <a href="#">Webseiten</a>
                    </li>
                    <li class="nav-item">
                      <a href="#">Mobile Apps</a>
                    </li>
                    <li class="nav-item">
                      <a href="#">Desktopanwendung</a>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list-unstyled text-center col-xs-2">
                    <li class="nav-item"><a href="#">Modernisierung</a></li>
                    <li class="nav-item"><a href="#">E-Commerce</a></li>
                    <li class="nav-item">
                      <a href="#">Social Media</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown show">
            <a
              class="dropdown-toggle nav-link text-white"
              :class="{ 'dropdown-toggle-hover': hover1 }"
              data-toggle="dropdown"
              aria-expanded="true"
              href="#"
              >Tech</a
            >
            <div
              class="dropdown-menu show"
              @mouseover="hover1 = true"
              @mouseleave="hover1 = false"
            >
              <div class="row">
                <div class="col">
                  <ul class="list-unstyled text-center col-xs-2">
                    <li class="nav-item">
                      <a href="#">Cloud Computing</a>
                    </li>
                    <li class="nav-item">
                      <a href="#">Machine Learning</a>
                    </li>
                    <li class="nav-item">
                      <router-link to="/">Microservices</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list-unstyled text-center col-xs-2">
                    <li class="nav-item">
                      <router-link to="/">Vue</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/">Sanity</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/">Electron</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown show">
            <a
              class="dropdown-toggle nav-link text-white"
              :class="{ 'dropdown-toggle-hover': hover3 }"
              data-toggle="dropdown"
              aria-expanded="true"
              href="#"
              >About</a
            >
            <div
              class="dropdown-menu show"
              @mouseover="hover3 = true"
              @mouseleave="hover3 = false"
            >
              <div class="row">
                <div class="col">
                  <ul class="list-unstyled text-center col-xs-2">
                    <li class="nav-item">
                      <router-link to="/About">Über Uns</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/">Unser Blog</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list-unstyled text-center col-xs-2">
                    <li class="nav-item">
                      <router-link to="/">Philosophie</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/">Team</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <a class="text-white phone-shaking" href="tel:004915737289767"
          ><b-icon icon="telephone-fill" animation="shake"></b-icon
        ></a>
      </div>
    </div>
    <NavSlider ref="navSlider" />
    <!-- <div class="touch-event" v-touch:swipe.left="navSliderOpen"></div> -->
  </nav>
</template>

<script>
import NavSlider from './NavSlider.vue'
import DirtyHamburger from './icons/DirtyHamburger.vue'

export default {
  components: {
    NavSlider,
    DirtyHamburger,
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      navSliderIsOpen: false,
    }
  },
  watch: {
    '$store.state.navslider.open': function () {
      this.navSliderIsOpen = !this.navSliderIsOpen
    },
    navSliderIsOpen: function () {
      this.navSliderIsOpen ? this.showSidebar() : this.hideSidebar()
    },
  },
  methods: {
    openMenu() {
      this.$store.commit('navslider/open')
    },
    showSidebar() {
      this.navSliderIsOpen = true
      this.$refs.navSlider.showSidebar()
    },
    hideSidebar() {
      this.navSliderIsOpen = false
      this.$refs.navSlider.hideSidebar()
    },
  },
}
</script>

<style lang="scss">
.navbar {
  margin-right: 5%;
  margin-left: 5%;
}

.phone-shaking svg:hover {
  fill: #007bff;
  font-size: 25px;
  animation: increase 2s;
}

@keyframes increase {
  0% {
    font-size: inherit;
  }
  100% {
    font-size: 25px;
  }
}

#openMenuArea {
  font-size: 30px;
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 0 1em 2.5em 2em;
  margin: 0 -1em -2.5em -2em;
  &:hover {
    cursor: pointer;
  }
}

@media (min-width: 776px) {
  #openMenuArea {
    display: none;
  }
}

@media (max-width: 776px) {
  .navbar-brand {
    margin: 0 !important;
  }
}

.navbar-light .navbar-brand {
  background: url('~@/assets/img/logo.svg') center / contain no-repeat;
  width: 150px;
  height: 41px;
  margin: 23px;
  margin-left: 12px;
  margin-top: 16px;
}

.navbar-light .navbar-nav .nav-link.active {
  color: #fff;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
  margin-right: 45px;
}

.navbar .navbar-toggler {
  border-color: rgba(0, 0, 0, 0.6);
}

.navbar .nav-item .dropdown-menu {
  display: none;
}

.nav-item:hover {
  color: #fff !important;
}

.nav-item:hover .nav-link {
  color: #fff;
}

.navbar .nav-item:hover .dropdown-menu {
  display: block;
}

.navbar .nav-item .dropdown-menu {
  margin-top: 0;
}

@keyframes show-menu-slide {
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}

.dropdown-toggle {
  border-bottom: 2px solid transparent;
}

.dropdown-toggle:hover {
  border-bottom: 2px solid white;
}

.dropdown-menu {
  padding-left: 10px;
  padding-right: 10px;
  animation-name: show-menu-slide;
  transform-origin: top;
  animation-duration: 0.7s;
  width: 400px;
  line-height: 3;
  margin-left: -30vh !important;
}

.dropdown-menu a {
  color: black !important;
}

.dropdown-menu a:hover {
  text-decoration: none;
  color: #007bffad !important;
}

.dropdown-toggle-hover {
  border-bottom: 2px solid white;
}

.navbar.navbar-light.navbar-expand-md.text-white {
  z-index: 2;
}

.b-icon-animation-shake {
  animation-name: shake;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 0s;
}

@keyframes shake {
  0% {
  }
  5%,
  25% {
    transform: translate(1px, 1px) rotate(-1deg);
  }
  15%,
  35% {
    transform: translate(-1px, -1px) rotate(11deg);
  }
  40% {
    transform: translate(0, 0) rotate(0deg);
  }
}
</style>
