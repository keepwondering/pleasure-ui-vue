import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
// import esLocale from 'element-ui/lib/locale/lang/es'
// import 'less-loader!../assets/styles/font-awesome.less';

console.log(`setting up element ui`)

Vue.use(Element, { locale })
