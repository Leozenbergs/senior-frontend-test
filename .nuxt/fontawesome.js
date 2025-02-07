import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  far as freeFarFar
} from '@fortawesome/free-regular-svg-icons'

import {
  fas as freeFasFas
} from '@fortawesome/free-solid-svg-icons'

import {
  fab as freeFabFab
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFarFar,
  freeFasFas,
  freeFabFab
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
