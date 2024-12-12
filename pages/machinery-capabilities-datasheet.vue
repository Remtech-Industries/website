<template>
  <div :class="{ 'max-h-0': menuIsOpen, 'overflow-hidden': menuIsOpen }">
    <Header @open="menuIsOpen = true" @close="menuIsOpen = false" menuclass="bg-red-700 text-gray-50" />
    <div v-show="!menuIsOpen">
      <div class="flex justify-end px-4 md:px-8 lg:px-12 xl:px-16 print:hidden">
        <button @click="print" class="underline font-bold">Print Datasheet</button>
      </div>
      <div class="relative">
        <div class="flex sticky lg:relative z-10 top-0 justify-between items-center bg-gray-50 py-2 md:py-4 lg:py-6 xl:py-8 px-4 md:px-8 lg:px-12 xl:px-16">
          <h1 class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora mb-4 lg:mb-6 xl:mb-8">Machinery Capabilities Datasheet</h1>
          <div class="flex justify-end flex-wrap sm:flex-nowrap" v-if="hasScroll">
            <button class="relative py-4 md:py-6 ml-6 lg:ml-12" @click="left" aria-label="scroll table left">
              <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
              <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-b-2 border-l-2 rotate-45 absolute top-1/2 left-0.5 lg:left-1 -translate-y-1/2"></span>
            </button>
            <button class="relative py-4 md:py-6 ml-6 lg:ml-12" @click="right" aria-label="scroll table right">
              <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
              <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-t-2 border-r-2 rotate-45 absolute top-1/2 right-0.5 lg:right-1 -translate-y-1/2"></span>
            </button>
          </div>
        </div>
        <div class="w-full">
          <div class="overflow-x-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-2 md:mb-4 lg:mb-6 xl:mb-8" ref="table">
            <table class="min-w-full text-nowrap print:text-wrap text-left text-xs xl:text-sm 2xl:text-base mb-2 md:mb-4 lg:mb-6 xl:mb-8">
              <tbody>
                <template v-for="(machineGroup, i) in machineGroups">
                  <tr class="bg-gray-200 text-lg 2xl:text-xl">
                    <th v-for="(column, j) in machineGroup.columns" :id="i + '-' + j" class="p-2 print:border-2 border-gray-950" :colspan="column.span === undefined ? 1 : column.span">{{ column.text }}</th>
                  </tr>
                  <tr v-for="(machine, j) in machineGroup.machines" :class="j % 2 === 1 ? 'bg-gray-100' : ''">
                    <td v-for="(data, k) in machine" :headers="i + '-' + k" class="p-2 print:border-2 border-gray-950" :colspan="data.span === undefined ? 1 : data.span">{{ data.text }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
        <p class="text-xs mb-8 md:mb-12 lg:mb-16 xl:mb-18 2xl:mb-24 px-4 md:px-8 lg:px-12 xl:px-16">* Dimensions are approximate and may vary depending on the features of the part.</p>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
    title: 'Machinery Capabilities Datasheet',
    ogTitle: 'Machinery Capabilities Datasheet',
    description: 'For over 25 years, Rem-Tech has delivered fast, high-precision machining to industries like manufacturing, pharmaceutical, oil & gas, nuclear, and more. Our expertise spans components like sleeves, shafts, pump rings, and seal faces. We specialize in rapid-turnaround CNC and manual machining of super alloys and hard-to-machine materials like Stainless Steel, Super Duplex, Titanium, Inconel, and Hastelloy.',
    ogDescription: 'For over 25 years, Rem-Tech has delivered fast, high-precision machining to industries like manufacturing, pharmaceutical, oil & gas, nuclear, and more. Our expertise spans components like sleeves, shafts, pump rings, and seal faces. We specialize in rapid-turnaround CNC and manual machining of super alloys and hard-to-machine materials like Stainless Steel, Super Duplex, Titanium, Inconel, and Hastelloy.',
    ogImage: '/images/og/machinery-capabilities-datasheet.png',
    twitterImage: '/images/og/machinery-capabilities-datasheet.png'
})

const table = useTemplateRef('table')
const hasScroll = ref(false)
let menuIsOpen = ref(false)

function print() {
  window.print()
}

function scroll(el, distance, left = false, time = 100) {
  if (distance > 0) {
    const tickTime = 10
    const tickCount = (time / tickTime)
    const scrollPerTick = distance / tickCount
    el.scrollBy({
      left: left ? -scrollPerTick : scrollPerTick
    })
    window.setTimeout(() => {
      scroll(el, distance - scrollPerTick, left, time - tickTime)
    }, tickTime)
  }
}

function left() {
  scroll(table.value, table.value.clientWidth * 3 / 4, true)
}

function right() {
  scroll(table.value, table.value.clientWidth * 3 / 4)
}

function showHideArrows() {
  if (table.value) {
    if (table.value.scrollWidth - table.value.clientWidth > 50) {
      hasScroll.value = true
    } else {
      hasScroll.value = false
    }
  }
}

onMounted(() => {
  window.setTimeout(showHideArrows, 1)
  window.addEventListener('resize', showHideArrows)
})

const machineGroups = [
  {
    columns: [
      {
        text: 'Machine Type'
      },
      {
        text: 'Qty'
      },
      {
        text: 'Description'
      },
      {
        text: 'Max. Capacity *'
      },
      {
        text: 'Max. Capacity (L) *'
      },
      {
        text: 'Max *'
      }
    ],
    machines: [
      [ 
        { 
          text: 'Lathe - CNC',
        },
        { 
          text: '19',
        },
        { 
          text: 'Up to 4 Axis',
        },
        { 
          text: '34" Ø',
        },
        { 
          text: '120"',
        },
        { 
          text: '6.4" Draw Tube Bore'
        }
      ],
      [ 
        { 
          text: 'Lathe - Manual',
        },
        { 
          text: '6',
        },
        { 
          text: '2 Axis',
        },
        { 
          text: '26" Ø',
        },
        { 
          text: '80"',
        },
        { 
          text: '4" Ø Thru Spindle'
        }
      ],
      [ 
        { 
          text: 'Milling Machines - CNC',
        },
        { 
          text: '11',
        },
        { 
          text: 'Up to 5 Axis(swing diameter 31")',
        },
        { 
          text: 'X Axis 83"',
        },
        { 
          text: 'Y Axis 47"',
        },
        { 
          text: 'Z Axis 37"'
        }
      ],
      [ 
        { 
          text: 'Milling Machines - Manual',
        },
        { 
          text: '5',
        },
        { 
          text: '3 Axis',
        },
        { 
          text: 'X Axis 52"',
        },
        { 
          text: 'Y Axis 16"',
        },
        { 
          text: '-'
        }
      ],
      [ 
        { 
          text: 'Saws',
        },
        { 
          text: '4',
        },
        { 
          text: 'Band Saw',
        },
        { 
          text: '20" Ø',
        },
        { 
          text: '-',
        },
        { 
          text: '-'
        }
      ],
      [ 
        { 
          text: 'Grinders - Surface',
        },
        { 
          text: '2',
        },
        { 
          text: 'Surface Grinder',
        },
        { 
          text: 'X-Axis 12"',
        },
        { 
          text: 'Y-Axis 24"',
        },
        { 
          text: '-'
        }
      ],
      [ 
        { 
          text: 'Grinders - Precision',
        },
        { 
          text: '2',
        },
        { 
          text: 'Vertical Spindle',
        },
        { 
          text: '12" Ø',
        },
        { 
          text: '6"',
        },
        { 
          text: '-'
        }
      ],
      [ 
        { 
          text: 'Grinders - OD/ID',
        },
        { 
          text: '4',
        },
        { 
          text: 'OD/ID Grinder',
        },
        { 
          text: '24"OD/30"ID Ø',
        },
        { 
          text: '60"',
        },
        { 
          text: ''
        }
      ],
      [ 
        { 
          text: 'Grinders NC- OD/ID',
        },
        { 
          text: '2',
        },
        { 
          text: 'OD/ID Grinder',
        },
        { 
          text: '11.8" OD',
        },
        { 
          text: '23.6"',
        },
        { 
          text: '-'
        }
      ],
      [ 
        { 
          text: 'Lapping',
        },
        { 
          text: '1',
        },
        { 
          text: 'Face Lapping',
        },
        { 
          text: '10" Ø',
        },
        { 
          text: '12"',
        },
        { 
          text: '-'
        }
      ],
      [
        {
          text: 'EDM'
        },
        {
          text: '1'
        },
        {
          text: 'Wire EDM'
        },
        {
          text: '25.5" Wide'
        },
        {
          text: '17.5" Deep'
        },
        {
          text: '16" High'
        }
      ]
    ]
  },
  {
    columns: [
      {
        text: 'Machine Type'
      },
      {
        text: 'Qty'
      },
      {
        text: 'Description'
      },
      {
        text: 'Max. Capacity *'
      },
      {
        text: 'Max. Capacity (L) *'
      },
      {
        text: 'Max *'
      }
    ],
    machines: [
      [ 
        { 
          text: 'Thermal Spray',
        },
        { 
          text: '1',
        },
        { 
          text: '(Booth 1) F-4 Plasma Gun',
        },
        { 
          text: '30" Ø',
        },
        { 
          text: '36"',
        },
        { 
          text: '-'
        }
      ],
      [ 
        { 
          text: 'Thermal Spray',
        },
        { 
          text: '1',
        },
        { 
          text: '(Booth 1) JP-5000 HVOF Gun (Kerosene)',
        },
        { 
          text: '30" Ø',
        },
        { 
          text: '36"',
        },
        { 
          text: '-'
        }
      ],
      [ 
        { 
          text: 'Thermal Spray',
        },
        { 
          text: '1',
        },
        { 
          text: '(Booth 2) JP-5000 HVOF Gun (Kerosene)',
        },
        { 
          text: '34" Ø',
        },
        { 
          text: '168"',
        },
        { 
          text: '-'
        }
      ]
    ]
  },
  {
    columns: [
      {
        text: 'Machine Type'
      },
      {
        text: 'Qty'
      },
      {
        text: 'Description'
      },
      {
        text: 'Max *',
        span: 3
      }
    ],
    machines: [
      [ 
        { 
          text: 'Static Leak Testing'
        },
        { 
          text: ''
        },
        { 
          text: 'Test Bench'
        },
        { 
          text: 'Up to 6000 psi.',
          span: 3
        }
      ]
    ]
  },
  {
    columns: [
      {
        text: 'Machine Type'
      },
      {
        text: 'Qty'
      },
      {
        text: 'Description',
        span: 4
      },
    ],
    machines: [
      [ 
        { 
          text: 'PMI (XRF) Non-Destructive Material Testing'
        },
        { 
          text: '1'
        },
        { 
          text: 'Niton XRF gun (X-Ray Fluorescence Analysis) - used to evaluate/validate chemical composition of parts or materials',
          span: 4
        }
      ],
    ]
  },
  {
    columns: [
      {
        text: 'Machine Type'
      },
      {
        text: 'Qty'
      },
      {
        text: 'Description',
        span: 2
      },
      {
        text: 'Max *',
        span: 2
      }
    ],
    machines: [
      [ 
        { 
          text: 'Metrology'
        },
        { 
          text: '1'
        },
        { 
          text: 'MITUTOYO CMM',
          span: 2
        },
        { 
          text: 'Capacity 16"W X 16"LX12"H & 20" Ø',
          span: 2
        }
      ],
      [ 
        { 
          text: 'Metrology'
        },
        { 
          text: '1'
        },
        { 
          text: 'WENZEL XOPLUS 98 1500 MM Y AXIS CNC CMM',
          span: 2
        },
        { 
          text: 'Capacity X35", Y59", Z31"',
          span: 2
        }
      ],
      [ 
        { 
          text: 'Metrology'
        },
        { 
          text: '1'
        },
        { 
          text: 'MAHR Surface Roughness Tester',
          span: 2
        },
        { 
          text: 'Ra, Rz, Rmax',
          span: 2
        }
      ],
      [ 
        { 
          text: 'Metrology'
        },
        { 
          text: '1'
        },
        { 
          text: 'MAHR RCF (Profile) Gauge',
          span: 2
        },
        { 
          text: 'Dynamic Roundness, Concentricity, Flatness measurement',
          span: 2
        }
      ],
      [ 
        { 
          text: 'Metrology'
        },
        { 
          text: '1'
        },
        { 
          text: 'MITUTOYO Hardness Tester',
          span: 2
        },
        { 
          text: 'Various Hardness Scales',
          span: 2
        }
      ],
      [ 
        { 
          text: 'Metrology'
        },
        { 
          text: '1'
        },
        { 
          text: 'GV METROLOGIA (SHIMANA) Universal pre-setting gauge',
          span: 2
        },
        { 
          text: '19.68" Length',
          span: 2
        }
      ],
      [ 
        { 
          text: 'Metrology'
        },
        { 
          text: '1'
        },
        { 
          text: 'Universal Setting Machine (TRIMOS) ALESTA 300',
          span: 2
        },
        { 
          text: '11.81" Length',
          span: 2
        }
      ]
    ]
  },
  {
    columns: [
      {
        text: 'Special Processes through Strategic Partnerships',
        span: 6
      }
    ],
    machines: [
      [ 
        { 
          text: 'Heat Treating',
          span: 6
        }
      ],
      [ 
        { 
          text: 'EDM - both Wire and Ram',
          span: 6
        }
      ],
      [ 
        { 
          text: 'Plating/Coatings - NCB, Oxide Finishes',
          span: 6
        }
      ],
      [ 
        { 
          text: 'Laser Cutting',
          span: 6
        }
      ],
      [ 
        { 
          text: 'Gear Cutting',
          span: 6
        }
      ],
      [ 
        { 
          text: 'Pressure Vessel Welding',
          span: 6
        }
      ],
      [ 
        { 
          text: 'Welding and fabricating Steel and Stainless steel',
          span: 6
        }
      ]
    ]
  }
]
</script>