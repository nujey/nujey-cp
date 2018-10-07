import nujeyElPage from './nujey-el-page/index.vue'
import nujeyXlsxExport from './nujey-xlsx-export/index.vue'
import nujeySendMsg from './send-msg/index.vue'

const nujeyCp = {
  install: function(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('nujeyElPage', nujeyElPage)
    Vue.component('nujeyXlsxExport', nujeyXlsxExport)
    Vue.component('nujeySendMsg', nujeySendMsg)
  }
}

export default nujeyCp
