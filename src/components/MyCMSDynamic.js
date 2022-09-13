import { defineAsyncComponent } from 'vue'
import { useJsonToVue } from 'json-to-vue'

const { generate, registerComponents } = useJsonToVue()

const asyncComponents = {}

const getAsyncComponents = (content) => {
  if (!Array.isArray(content)) {
    return null
  }
  for (const item of content) {
    if (item.component && !(item.component in asyncComponents)) {
      asyncComponents[item.component] = defineAsyncComponent(() => import(`./library/${item.component}.vue`))
    }
    if (item.children) {
      getAsyncComponents(item.children)
    }
  }
}

export default {
  name: 'MyCMS',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  setup (props) { // , { attrs, slots, emit, expose }
    getAsyncComponents(props.content)
    registerComponents(asyncComponents)
    return () => generate(props.content)
  }
}