import { useJsonToVue } from 'json-to-vue'
import MyLocalFoo from '@/components/MyLocalFoo.vue'
import MyLocalBar from '@/components/MyLocalBar.vue'

const { generate, registerComponents } = useJsonToVue()

export default {
  name: 'MyCMS',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  setup (props) { // , { attrs, slots, emit, expose }
    registerComponents({
      MyLocalFoo,
      MyLocalBar
    })
    return () => generate(props.content)
  }
}