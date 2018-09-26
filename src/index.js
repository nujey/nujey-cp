import nujeyElPage from './nujey-el-page/index.vue'
import nujeyXlsxExport from './nujey-xlsx-export/..'

const nujeyCp = {
  install: function(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('nujeyElPage', nujeyElPage)
    Vue.component('nujeyXlsxExport', nujeyXlsxExport)
  }
}

export default nujeyCp
