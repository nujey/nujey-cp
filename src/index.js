import nujeyElPage from './nujey-el-page/index.vue'

const nujeyCp = {
  install: function(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('nujeyElPage', nujeyElPage)
  }
}

export default nujeyCp
