<template>
  <div class="relative pt-12 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-40">
    <div class="flex sticky lg:relative z-10 top-0 justify-between items-center bg-gray-50 py-2 md:py-4 lg:py-6 xl:py-8 px-4 md:px-8 lg:px-12 xl:px-16">
      <h2 class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora">Material Inventory</h2>
      <div class="flex justify-end flex-wrap sm:flex-nowrap" v-if="hasScroll">
        <button class="relative py-4 md:py-6 ml-6 lg:ml-12" @click="left">
          <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
          <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-b-2 border-l-2 rotate-45 absolute top-1/2 left-0.5 lg:left-1 -translate-y-1/2"></span>
        </button>
        <button class="relative py-4 md:py-6 ml-6 lg:ml-12" @click="right">
          <span class="block w-8 lg:w-12 2xl:w-16 border-color-unset border-b-2"></span>
          <span class="block w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 border-color-unset border-t-2 border-r-2 rotate-45 absolute top-1/2 right-0.5 lg:right-1 -translate-y-1/2"></span>
        </button>
      </div>
    </div>
    <div class="w-full">
      <div class="overflow-x-auto px-4 md:px-8 lg:px-12 xl:px-16" ref="table">
        <table class="min-w-full text-nowrap text-left text-xs xl:text-sm 2xl:text-base table-row-alternate mb-2 md:mb-4 lg:mb-6 xl:mb-8">
          <tbody>
            <template v-for="materialGroup in materialGroups">
              <tr class="bg-blue-900 text-gray-50">
                <th colspan="6" :id="materialGroup.headingId" class="pb-1 lg:pb-2 pt-3 lg:pt-4"><span class="sticky left-0 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-2">{{ materialGroup.heading }}</span></th>
              </tr>
              <tr class="bg-blue-900 text-gray-50">
                <th :id="materialGroup.headingId + 'materialgrade'" class="p-2">Material Grade * (AISI/ASTM/SAE)</th>
                <th :id="materialGroup.headingId + 'category'" class="p-2">Category</th>
                <th :id="materialGroup.headingId + 'unsno'" class="p-2">UNS No.</th>
                <th :id="materialGroup.headingId + 'dinenno'" class="p-2">DIN / EN No.</th>
                <th :id="materialGroup.headingId + 'largestdiam'" class="p-2">Largest Diam (Inches)</th>
                <th :id="materialGroup.headingId + 'viewstock'" class="p-2">View Stock</th>
              </tr>
              <template v-for="material in materialGroup.materials">
                <tr>
                  <td :id="material.materialgrade.replaceAll(' ', '_')" :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'materialgrade'" class="p-2">{{ material.materialgrade }}</td>
                  <td :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'category'" class="p-2">{{ material.category }}</td>
                  <td :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'unsno'" class="p-2">{{ material.unsNo }}</td>
                  <td :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'dinenno'" class="p-2">{{ material.dinEnNo }}</td>
                  <td :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'largestdiam'" class="p-2">{{ material.largestDiam }}</td>
                  <td :headers="materialGroup.headingId + ' ' + materialGroup.headingId + 'viewstock'" class="p-2"><button @click="selectedMaterial = material.materialgrade" v-if="material.products.length > 0" class="underline">View Stock</button></td>
                </tr>
                <template v-if="selectedMaterial === material.materialgrade">
                  <tr class="bg-blue-900 text-gray-50">
                    <th :id="material.materialgrade.replaceAll(' ', '_') + 'size'" colspan="4" class="py-2 px-4 border-blue-900 border-l-2">Size</th>
                    <th :id="material.materialgrade.replaceAll(' ', '_') + 'stock'" colspan="2" class="py-2 px-4 border-blue-900 border-r-2">Stock</th>
                  </tr>
                  <tr v-for="(product, i) in material.products">
                    <td :headers="material.materialgrade.replaceAll(' ', '_') + ' ' + material.materialgrade.replaceAll(' ', '_') + 'size'" colspan="4" class="py-2 px-4 border-blue-900 border-l-2" :class="i + 1 === material.products.length ? 'border-b-2' : ''">{{ product.partno }}</td>
                    <td :headers="material.materialgrade.replaceAll(' ', '_') + ' ' + material.materialgrade.replaceAll(' ', '_') + 'stock'" colspan="2" class="py-2 px-4 border-blue-900 border-r-2" :class="i + 1 === material.products.length ? 'border-b-2' : ''">{{ product.qtyonhand }}" in stock</td>
                  </tr>
                </template>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <p class="text-xs mb-8 md:mb-12 lg:mb-16 xl:mb-18 2xl:mb-24 px-4 md:px-8 lg:px-12 xl:px-16">* Grade Names shown may be proprietary or registered ® trademarks and are used for reference only. Actual material stocked may be a close equivalent rather than the exact brand. Certification available for review.</p>
    <p class="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold px-4 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 lg:mb-16 xl:mb-18 2xl:mb-24">Looking for something else? <NuxtLink to="/contact" class="underline">Contact</NuxtLink> us and let us help you find the solution you need.</p>
  </div>
</template>

<script setup>
const table = useTemplateRef('table')
const hasScroll = ref(false)
const selectedMaterial = ref('')

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

const materialGroups = ref([
  {
    heading: 'Nickel and Nickel-Based Alloys (High Nickel Alloys)',
    headingId: 'nickelalloys',
    materials: [
      {
        materialgrade: 'Alloy C276 (Hastelloy C-276 ®)',
        category: 'Superalloy',
        unsNo: 'N10276',
        dinEnNo: '2.4819',
        productCode: 'ALLOY C-276',
        products: [],
        largestDiam: '12.2'
      },
      {
        materialgrade: 'Alloy C4 (Hastelloy C-4 ®)',
        category: 'Superalloy',
        unsNo: 'N06455',
        dinEnNo: '2.461',
        products: [],
        largestDiam: '4.33'
      },
      {
        materialgrade: 'Alloy B2 (Hastelloy B-2 ®)',
        category: 'Superalloy',
        unsNo: 'N10665',
        dinEnNo: '2.4617',
        products: [],
        largestDiam: '4'
      },
      {
        materialgrade: 'Alloy 400 (Monel 400 ®)',
        category: 'Superalloy',
        unsNo: 'N04400',
        dinEnNo: '2.4360/2.4361',
        productCode: 'ALLOY 400',
        products: [],
        largestDiam: '12.2'
      },
      {
        materialgrade: 'Alloy K500 (Monel K-500 ®)',
        category: 'Superalloy',
        unsNo: 'N05500',
        dinEnNo: '2.4375',
        products: [],
        largestDiam: '7.87'
      },
      {
        materialgrade: 'Alloy 22 (Inconel Alloy 22 ®)',
        category: 'Superalloy',
        unsNo: 'N06022',
        dinEnNo: '2.4602',
        productCode: 'ALLOY C-22',
        products: [],
        largestDiam: '2'
      },
      {
        materialgrade: 'Alloy 600 (Inconel 600 ®)',
        category: 'Superalloy',
        unsNo: 'N06600',
        dinEnNo: '2.4816',
        productCode: 'ALLOY 600',
        products: [],
        largestDiam: '3.5'
      },
      {
        materialgrade: 'Alloy 625 (Inconel 625 ®)',
        category: 'Superalloy',
        unsNo: 'N06625',
        dinEnNo: '2.4856',
        products: [],
        largestDiam: '6.5'
      },
      {
        materialgrade: 'Alloy 825 (Incoloy 825 ®)',
        category: 'Superalloy',
        unsNo: 'N08825',
        dinEnNo: '2.4858',
        products: [],
        largestDiam: '4.5'
      },
      {
        materialgrade: 'Nickel 200/201 (Ni-200)',
        category: 'Low Alloy Nickel',
        unsNo: 'N02200/N02201',
        dinEnNo: '2.4066/2.4068',
        products: [],
        largestDiam: '2.5'
      }
    ]
  },
  {
    heading: 'Duplex Stainless Steels - Ferritic/Austenitic',
    headingId: 'duplex',
    materials: [
      {
        materialgrade: '2205 (A182 F51, F60)',
        category: '(Hollow = Rolled Ring Forging)',
        unsNo: 'S31803/S32205',
        dinEnNo: '1.4462',
        productCode: 'DUPLEX 2205',
        products: [],
        largestDiam: '17.63'
      },
      {
        materialgrade: 'CD4MCuN',
        category: 'Centrifugal Casting',
        unsNo: 'J93372',
        dinEnNo: '1.4517',
        productCode: 'CD4MCUN',
        products: [],
        largestDiam: '19.25'
      },
      {
        materialgrade: '2507 (A182 F53)',
        category: 'Super Duplex',
        unsNo: 'S32750',
        dinEnNo: '1.441',
        productCode: 'DUPLEX 2507',
        products: [],
        largestDiam: '14'
      },
      {
        materialgrade: 'Ferralium 255 (A182 F61)',
        category: 'Super Duplex',
        unsNo: 'S32550',
        dinEnNo: '1.4507',
        productCode: 'DUPLEX 255',
        products: [],
        largestDiam: '12'
      },
      {
        materialgrade: 'Zeron 100 ® (A182 F55)',
        category: 'Super Duplex',
        unsNo: 'S32760',
        dinEnNo: '1.4501',
        productCode: 'ZERON 100',
        products: [],
        largestDiam: '18'
      }
    ]
  },
  {
    heading: 'Stainless Steels - Austenitic',
    headingId: 'austeniticstainless',
    materials: [
      {
        materialgrade: '304/304L',
        category: '-',
        unsNo: 'S30400/S30403',
        dinEnNo: '1.4301/1.4307',
        products: [],
        largestDiam: '5'
      },
      {
        materialgrade: '316/316L',
        category: '(Hollow = Rolled Ring Forging)',
        unsNo: 'S31600/S31603',
        dinEnNo: '1.4401/1.4404',
        products: [],
        largestDiam: '20'
      },
      {
        materialgrade: '316Ti',
        category: '-',
        unsNo: 'S31635',
        dinEnNo: '1.4571',
        productCode: '316TI SS',
        products: [],
        largestDiam: '9.84'
      },
      {
        materialgrade: '317/317L',
        category: '(Hollow = Centrifugal Casting)',
        unsNo: 'S31700/S31703',
        dinEnNo: '1.4438',
        productCode: '317 SS',
        products: [],
        largestDiam: '14.25'
      },
      {
        materialgrade: '904L',
        category: 'Super Austenitic',
        unsNo: 'N08904',
        dinEnNo: '1.4539',
        products: [],
        largestDiam: '11.81'
      },
      {
        materialgrade: 'Alloy 20 (Carpenter 20 ®) (20 SS)',
        category: 'Super Austenitic',
        unsNo: 'N08020',
        dinEnNo: '2.466',
        productCode: 'ALLOY 20',
        products: [],
        largestDiam: '11.02'
      },
      {
        materialgrade: 'Nitronic 50 ® (XM-19)',
        category: '-',
        unsNo: 'S20910',
        dinEnNo: '1.3964',
        products: [],
        largestDiam: '5'
      },
      {
        materialgrade: 'Nitronic 60 ®',
        category: '-',
        unsNo: 'S21800',
        dinEnNo: '-',
        productCode: 'NIT 60',
        products: [],
        largestDiam: '7'
      }
    ]
  },
  {
    heading: 'Stainless Steels - Martensitic',
    headingId: 'martensiticstainless',
    materials: [
      {
        materialgrade: '17-4 PH Cond. A (Type 630)',
        category: 'Precipitation Hardening',
        unsNo: 'S17400',
        dinEnNo: '1.4542',
        productCode: '17-4 COND A',
        products: [],
        largestDiam: '16'
      },
      {
        materialgrade: '17-4 PH Cond. H1150 (Type 630)',
        category: 'Precipitation Hardening',
        unsNo: 'S17400',
        dinEnNo: '1.4548',
        products: [],
        largestDiam: '13'
      },
      {
        materialgrade: '410',
        category: '-',
        unsNo: 'S41000',
        dinEnNo: '1.4006',
        products: [],
        largestDiam: '17'
      },
      {
        materialgrade: '416',
        category: '-',
        unsNo: 'S41600',
        dinEnNo: '1.4005',
        productCode: '416 SS',
        products: [],
        largestDiam: '14'
      },
      {
        materialgrade: '420',
        category: '-',
        unsNo: 'S42000',
        dinEnNo: '1.4021/1.4031',
        productCode: '420 SS',
        products: [],
        largestDiam: '12.2'
      },
      {
        materialgrade: '431',
        category: '-',
        unsNo: 'S43100',
        dinEnNo: '1.4057',
        productCode: '431 SS',
        products: [],
        largestDiam: '8.5'
      },
      {
        materialgrade: '440A',
        category: 'Centrifugal Casting',
        unsNo: 'S44002',
        dinEnNo: '1.411',
        products: [],
        largestDiam: '15'
      },
      {
        materialgrade: '440C',
        category: '-',
        unsNo: 'S44004',
        dinEnNo: '1.4125',
        products: [],
        largestDiam: '5.5'
      },
      {
        materialgrade: 'CA40/CA40F',
        category: 'Centrifugal Casting',
        unsNo: 'J91153/J91154',
        dinEnNo: '1.4028/1.4029',
        productCode: 'CA40',
        products: [],
        largestDiam: '17.25'
      }
    ]
  },
  {
    heading: 'Non-Ferrous Materials (includes Reactive and Refactory Metals and Alloys)',
    headingId: 'nonferrous',
    materials: [
      {
        materialgrade: '6061 Aluminum',
        category: 'Aluminum Alloys',
        unsNo: 'A96061',
        dinEnNo: '3.3211',
        productCode: 'ALUM 6061 T651',
        products: [],
        largestDiam: '17'
      },
      {
        materialgrade: 'SAE 660 Bronze (CuSn7ZnPb)',
        category: 'Copper Alloys',
        unsNo: 'C93200',
        dinEnNo: '2.1090.04',
        productCode: '660 BRONZE',
        products: [],
        largestDiam: '16'
      },
      {
        materialgrade: 'Bearium® B-4 Bronze (CuSnPb (70-26-4))',
        category: 'Copper Alloys',
        unsNo: '-',
        dinEnNo: '-',
        products: [],
        largestDiam: '4'
      },
      {
        materialgrade: 'Titanium Grade 2',
        category: 'Titanium Alloys',
        unsNo: 'R50400',
        dinEnNo: '3.7035',
        products: [],
        largestDiam: '12.2'
      },
      {
        materialgrade: 'Titanium Grade 7 (Ti Gr.2Pd)',
        category: 'Titanium Alloys',
        unsNo: 'R52400',
        dinEnNo: '3.7235',
        productCode: 'TITAN GR7',
        products: [],
        largestDiam: '6.5'
      },
      {
        materialgrade: 'Zirconium 702',
        category: 'Zirconium Alloys',
        unsNo: 'R60702',
        dinEnNo: 'Zirkonium',
        productCode: 'ZIRCONIUM 702',
        products: [],
        largestDiam: '8'
      },
      {
        materialgrade: 'METCAR M-400 Resin-Impregnated Carbon',
        category: 'Carbon Graphite Composites',
        unsNo: '-',
        dinEnNo: '-',
        products: [],
        largestDiam: '10.94'
      },
      {
        materialgrade: 'METCAR M-10 Carbon Graphite',
        category: 'Carbon Graphite Composites',
        unsNo: '-',
        dinEnNo: '-',
        products: [],
        largestDiam: '2'
      }
    ]
  },
  {
    heading: 'Cast Irons and Nickel Cast Irons',
    headingId: 'cast',
    materials: [
      {
        materialgrade: 'A48 Class 40 Cast Iron (Dura-Bar Type G2)',
        category: 'Continuous Casting',
        unsNo: 'F12801',
        dinEnNo: '0.6025',
        products: [],
        largestDiam: '18'
      },
      {
        materialgrade: 'Ni-Resist - Grade D2 (GGG-NiCr 20 2)',
        category: 'Centrifugal Casting (Ductile)',
        unsNo: 'F43000',
        dinEnNo: '0.766',
        products: [],
        largestDiam: '15'
      },
      {
        materialgrade: 'A48 Class 40 Cast Iron (GG-25)',
        category: 'Centrifugal Casting',
        unsNo: 'F12801',
        dinEnNo: '0.6025',
        products: [],
        largestDiam: '18'
      }
    ]
  },
  {
    heading: 'Carbon Steels, Alloy Steels and Tool Steels',
    headingId: 'steels',
    materials: [
      {
        materialgrade: '4140 Heat Treated & Stress Relieved',
        category: 'Alloy Steel',
        unsNo: 'G41400',
        dinEnNo: '1.7225',
        products: [],
        largestDiam: '16'
      },
      {
        materialgrade: '4340 Annealed',
        category: 'Alloy Steel',
        unsNo: 'G43400',
        dinEnNo: '1.6565',
        products: [],
        largestDiam: '5'
      },
      {
        materialgrade: '8620',
        category: 'Alloy Steel',
        unsNo: 'G86200',
        dinEnNo: '1.6523',
        products: [],
        largestDiam: '4'
      },
      {
        materialgrade: '1018',
        category: 'Low Carbon Steel',
        unsNo: 'G10180',
        dinEnNo: '1.0453',
        products: [],
        largestDiam: '18'
      },
      {
        materialgrade: '1045',
        category: 'Medium Carbon Steel',
        unsNo: 'G10450',
        dinEnNo: '1.1191/1.1730',
        productCode: '1045 HRS',
        products: [],
        largestDiam: '16'
      },
      {
        materialgrade: 'D2',
        category: 'Tool Steel',
        unsNo: 'T40302',
        dinEnNo: '1.2379',
        products: [],
        largestDiam: '4'
      }
    ]
  },
  {
    heading: 'Plastics, Polymers and Laminates',
    headingId: 'plastic',
    materials: [
      {
        materialgrade: 'Acetal (Delrin®) (Acetron ®)',
        category: 'Polyoxymethylene',
        unsNo: '(POM)',
        dinEnNo: '-',
        products: [],
        largestDiam: '5'
      },
      {
        materialgrade: 'Nylon - Natural',
        category: 'Polyamides',
        unsNo: '(PA)',
        dinEnNo: '-',
        products: [],
        largestDiam: '13.5'
      },
      {
        materialgrade: 'Nylon - Blue (Nylatron GSM ®)',
        category: 'Polyamides',
        unsNo: '(PA)',
        dinEnNo: '-',
        products: [],
        largestDiam: '7'
      },
      {
        materialgrade: 'Nylon - Black (Nylatron GSM ®)',
        category: 'Polyamides',
        unsNo: '(PA)',
        dinEnNo: '-',
        products: [],
        largestDiam: '3.5'
      },
      {
        materialgrade: 'Teflon™ - Pure',
        category: 'Polytetrafluoroethylene',
        unsNo: '(PTFE)',
        dinEnNo: '-',
        products: [],
        largestDiam: '8'
      },
      {
        materialgrade: 'Teflon™ - Glass Filled (15% or 25%)',
        category: 'PTFE Composite',
        unsNo: '(PTFE)',
        dinEnNo: '-',
        products: [],
        largestDiam: '10'
      },
      {
        materialgrade: 'Teflon™ - Carbon Filled (10% or 25%)',
        category: 'PTFE Composite',
        unsNo: '(PTFE)',
        dinEnNo: '-',
        products: [],
        largestDiam: '7.75'
      },
      {
        materialgrade: 'HY49® - Carbon Filled PTFE (58%)',
        category: 'PTFE Composite',
        unsNo: '(PTFE)',
        dinEnNo: '-',
        products: [],
        largestDiam: '2.13'
      },
      {
        materialgrade: 'HYDEX® 4320BK - 20% Glass Filled',
        category: 'Polycarbonate',
        unsNo: '(PC)',
        dinEnNo: '-',
        products: [],
        largestDiam: '2'
      },
      {
        materialgrade: 'UHMW-PE (Ultra-High-Molecular-Weight)',
        category: 'Polyethylene',
        unsNo: '(HMPE, HPPE)',
        dinEnNo: '-',
        products: [],
        largestDiam: '7'
      },
      {
        materialgrade: 'PVC Type 1 Rod - Dark Grey',
        category: 'Polyvinyl Chloride',
        unsNo: '(PVC)',
        dinEnNo: '-',
        products: [],
        largestDiam: '6'
      },
      {
        materialgrade: 'Phenolic Grade CE (Canvas Based)',
        category: 'Phenolics',
        unsNo: '-',
        dinEnNo: '-',
        products: [],
        largestDiam: '4'
      },
      {
        materialgrade: 'Phenolic Grade LE (Linen Based)',
        category: 'Phenolics',
        unsNo: '-',
        dinEnNo: '-',
        products: [],
        largestDiam: '3'
      }
    ]
  }
])

$fetch('https://data.remtechalloys.com/remtech_alloys_inventory_levels.json').then(res => {
  res.products.forEach(product => {
    materialGroups.value.forEach((materialGroup, i) => {
      materialGroup.materials.forEach((material, j) => {
        if (material.productCode === product.partno.split(' - ')[0]) {
          materialGroups.value[i].materials[j].products.push(product)
        }
      });
    })
  });
})
</script>
