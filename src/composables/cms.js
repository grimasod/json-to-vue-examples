const content = {
  global: [
    {
      children: ['Another headline'],
      element: 'span'
    },
    {
      element: 'h3',
      children: [
        'A child of an h3 is string'
      ]
    },
    {
      element: 'ul',
      children: [
        {
          children: ['first'],
          element: 'li'
        },
        {
          children: ['second', 'plus'],
          element: 'li'
        },
        {
          children: [
            'with stop ',
            {
              children: ['third'],
              element: 'span',
              attributes: {
                class: 'underline text-blue-600',
                id: 'xyz'
              }
            },
            '.'
          ],
          element: 'li'
        }
      ]
    },
    {
      component: 'MyGlobalFoo',
      attributes: {
        headline: 'Foo Headline'
      },
      children: [
        {
          slot: 'default',
          element: 'h4',
          children: [
            'Slot child 1'
          ]
        },
        {
          children: [
            {
              children: ['sc1']
            },
            {
              children: ['sc2']
            }
          ],
          attributes: {
            class: 'text-red-600'
          }
        },
        {
          element: 'h4',
          slot: 'other',
          children: [
            'Slot child 3 - other slot',
            {
              component: 'MyGlobalBar',
              attributes: {
                tagline: 'Bar tagline'
              },
              children: [
                {
                  slot: 'default',
                  element: 'h4',
                  children: [
                    'Bar Slot child 1'
                  ]
                },
                {
                  children: [
                    {
                      children: ['Bar c1']
                    },
                    {
                      children: ['Bar c2']
                    }
                  ],
                  attributes: {
                    class: 'text-green-300'
                  }
                },
                {
                  element: 'h4',
                  slot: 'bar',
                  children: [
                    'Bar Slot child 3 - other slot'
                  ]
                },
              ]
            }
          ]
        },
      ]
    }
  ],
  local: [
    {
      children: ['Another headline'],
      element: 'span'
    },
    {
      element: 'h3',
      children: [
        'A child of an h3 is string'
      ]
    },
    {
      element: 'ul',
      children: [
        {
          children: ['first'],
          element: 'li'
        },
        {
          children: ['second', 'plus'],
          element: 'li'
        },
        {
          children: [
            'with stop ',
            {
              children: ['third'],
              element: 'span',
              attributes: {
                class: 'underline text-blue-600',
                id: 'xyz'
              }
            },
            '.'
          ],
          element: 'li'
        }
      ]
    },
    {
      component: 'MyLocalFoo',
      attributes: {
        headline: 'Foo Headline'
      },
      children: [
        {
          slot: 'default',
          element: 'h4',
          children: [
            'Slot child 1'
          ]
        },
        {
          children: [
            {
              children: ['sc1']
            },
            {
              children: ['sc2']
            }
          ],
          attributes: {
            class: 'text-red-600'
          }
        },
        {
          element: 'h4',
          slot: 'other',
          children: [
            'Slot child 3 - other slot',
            {
              component: 'MyLocalBar',
              attributes: {
                tagline: 'Bar tagline'
              },
              children: [
                {
                  slot: 'default',
                  element: 'h4',
                  children: [
                    'Bar Slot child 1'
                  ]
                },
                {
                  children: [
                    {
                      children: ['Bar c1']
                    },
                    {
                      children: ['Bar c2']
                    }
                  ],
                  attributes: {
                    class: 'text-green-300'
                  }
                },
                {
                  element: 'h4',
                  slot: 'bar',
                  children: [
                    'Bar Slot child 3 - other slot'
                  ]
                },
              ]
            }
          ]
        },
      ]
    }
  ],
  dynamic: [
    {
      children: ['Another headline'],
      element: 'span'
    },
    {
      element: 'h3',
      children: [
        'A child of an h3 is string'
      ]
    },
    {
      element: 'ul',
      children: [
        {
          children: ['first'],
          element: 'li'
        },
        {
          children: ['second', 'plus'],
          element: 'li'
        },
        {
          children: [
            'with stop ',
            {
              children: ['third'],
              element: 'span',
              attributes: {
                class: 'underline text-blue-600',
                id: 'xyz'
              }
            },
            '.'
          ],
          element: 'li'
        }
      ]
    },
    {
      component: 'MyDynamicFoo',
      attributes: {
        headline: 'Foo Headline'
      },
      children: [
        {
          slot: 'default',
          element: 'h4',
          children: [
            'Slot child 1'
          ]
        },
        {
          children: [
            {
              children: ['sc1']
            },
            {
              children: ['sc2']
            }
          ],
          attributes: {
            class: 'text-red-600'
          }
        },
        {
          element: 'h4',
          slot: 'other',
          children: [
            'Slot child 3 - other slot',
            {
              component: 'MyDynamicBar',
              attributes: {
                tagline: 'Bar tagline'
              },
              children: [
                {
                  slot: 'default',
                  element: 'h4',
                  children: [
                    'Bar Slot child 1'
                  ]
                },
                {
                  children: [
                    {
                      children: ['Bar c1']
                    },
                    {
                      children: ['Bar c2']
                    }
                  ],
                  attributes: {
                    class: 'text-green-300'
                  }
                },
                {
                  element: 'h4',
                  slot: 'bar',
                  children: [
                    'Bar Slot child 3 - other slot'
                  ]
                },
              ]
            }
          ]
        },
      ]
    }
  ]
}

const getContent = (componentType = 'local') => {
  return content[componentType]
}

export function useCms() {
  return {
    getContent
  }
}
