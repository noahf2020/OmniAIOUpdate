import Vue from 'vue'
import App from './App.vue'
import '@/index.css'
import Unicon from 'vue-unicons'
import { uniPlay, uniPen, uniSquareShape, uniTrash, uniTrashAlt, uniRedo, uniPlus, uniBars, uniSlidersV, uniShoppingCart, uniDirection } from 'vue-unicons/src/icons'
import VCalendar from 'v-calendar'

Unicon.add([uniPlay, uniPen, uniSquareShape, uniTrash, uniTrashAlt, uniRedo, uniPlus, uniBars, uniSlidersV, uniShoppingCart, uniDirection])
Vue.use(Unicon)

Vue.use(VCalendar, {});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
