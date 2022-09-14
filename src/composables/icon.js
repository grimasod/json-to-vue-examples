const svg = {
  element: "svg",
  attributes: {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'currentColor',
    viewBox: '0 0 48 48',
    class: 'inline-flex h-8 w-8'
  },
  children: []
}

const standardPath = {
  stroke: 'currentColor',
  'stroke-width': '4',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  'fill-opacity': '0'
}

const definitions = {
  info: [
    'M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z',
    'M24.5 34V20H23.5H22.5',
    'M21 34H28'
  ],
  help: [
    'M24 28.6249V24.6249C27.3137 24.6249 30 21.9386 30 18.6249C30 15.3112 27.3137 12.6249 24 12.6249C20.6863 12.6249 18 15.3112 18 18.6249',
    'M24 37.6249C25.3807 37.6249 26.5 36.5056 26.5 35.1249C26.5 33.7442 25.3807 32.6249 24 32.6249C22.6193 32.6249 21.5 33.7442 21.5 35.1249C21.5 36.5056 22.6193 37.6249 24 37.6249Z'
  ],
  check: [
    'M16 24L22 30L34 18'
  ],
  down: [
    'M33 21L24 30L15 21'
  ],
  close: [
    'M29.6569 18.3431L18.3432 29.6568',
    'M18.3432 18.3431L29.6569 29.6568'
  ],
  right: [
    'M21 33L30 24L21 15'
  ]
}

const getIcon = (icon) => {
  return {
    ...svg,
    children: definitions[icon].map(d => ({
      element: 'path',
      attributes: {
        ...standardPath,
        d
      }
    }))
  }
}

export function useIcon() {
  return {
    getIcon
  }
}
