import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMailBulk,
  faPhone,
  faMap,
  faAlignRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faGithub,
  faFacebook,
  faLinkedinIn,
  faMailBulk,
  faPhone,
  faMap,
  faAlignRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
