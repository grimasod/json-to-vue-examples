import menu from '/src/assets/json/menu.json'
import examples from '/src/assets/json/examples.json'
import global from '/src/assets/json/examples-global.json'
import local from '/src/assets/json/examples-local.json'
import dynamic from '/src/assets/json/examples-dynamic.json'

const content = {
  menu,
  examples,
  global,
  local,
  dynamic
}

const getContent = (componentType = 'local') => {
  return componentType in content ? content[componentType] : []
}

export function useCms() {
  return {
    getContent
  }
}
