<template>
  <div class="relative pt-12 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-40">
    <div class="flex sticky lg:relative z-10 top-0 justify-between items-center bg-gray-50 py-2 md:py-4 lg:py-6 xl:py-8 px-4 md:px-8 lg:px-12 xl:px-16">
      <h3 class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl sora">Thermal Spray Coating List</h3>
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
      <div class="overflow-x-auto mb-8 md:mb-12 lg:mb-16 xl:mb-18 2xl:mb-24 px-4 md:px-8 lg:px-12 xl:px-16" ref="table">
        <table class="min-w-full text-nowrap text-left text-xs xl:text-sm 2xl:text-base table-row-alternate mb-2 md:mb-4 lg:mb-6 xl:mb-8">
          <tbody>
            <template v-for="coatingGroup in coatingGroups">
              <tr class="bg-yellow-300">
                <th colspan="6" :id="coatingGroup.headingId" class="pb-1 lg:pb-2 pt-3 lg:pt-4"><span class="sticky left-0 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-2">{{ coatingGroup.heading }}</span></th>
              </tr>
              <tr class="bg-yellow-300">
                <th :id="coatingGroup.headingId + 'composition'" class="p-2">Composition</th>
                <th :id="coatingGroup.headingId + 'tradename'" class="p-2">Trade Name</th>
                <th :id="coatingGroup.headingId + 'description'" class="p-2">Description</th>
                <th :id="coatingGroup.headingId + 'manufacturer'" class="p-2">Manufacturer</th>
                <th :id="coatingGroup.headingId + 'hardness'" class="p-2">Hardness</th>
                <th :id="coatingGroup.headingId + 'remtechnumber'" class="p-2">RemTech #</th>
              </tr>
              <tr v-for="coating in coatingGroup.coatings">
                <td :headers="coatingGroup.headingId + ' ' + coatingGroup.headingId + 'composition'" class="p-2">{{ coating.composition }}</td>
                <td :headers="coatingGroup.headingId + ' ' + coatingGroup.headingId + 'tradename'" class="p-2">{{ coating.tradeName }}</td>
                <td :headers="coatingGroup.headingId + ' ' + coatingGroup.headingId + 'description'" class="p-2">{{ coating.description }}</td>
                <td :headers="coatingGroup.headingId + ' ' + coatingGroup.headingId + 'manufacturer'" class="p-2">{{ coating.manufacturer }}</td>
                <td :headers="coatingGroup.headingId + ' ' + coatingGroup.headingId + 'hardness'" class="p-2">{{ coating.hardness }}</td>
                <td :headers="coatingGroup.headingId + ' ' + coatingGroup.headingId + 'remtechnumber'" class="p-2">{{ coating.remtechNumber }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <p class="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold px-4 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 lg:mb-16 xl:mb-18 2xl:mb-24">Looking for something else? <NuxtLink to="/contact" class="underline">Give us a call</NuxtLink> and let us help you find the solution you need.</p>
  </div>
</template>

<script setup>
const table = useTemplateRef('table')
const hasScroll = ref(false)

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
  if (table.value.scrollWidth - table.value.clientWidth > 50) {
    hasScroll.value = true
  } else {
    hasScroll.value = false
  }
}
window.setTimeout(showHideArrows, 1)
window.addEventListener('resize', showHideArrows)

const coatingGroups = [
    {
        heading: 'Carbides',
        headingId: 'carbides',
        coatings: [
            {
                composition: 'Cr3C2 Ni-Cr (75-25)',
                tradeName: '-',
                description: 'Chromium Carbide Nickel-Chromium',
                manufacturer: 'AMPERIT 558.074',
                hardness: 'HV 1390',
                remtechNumber: 'RTHVOF-02'
            },
            {
                composition: 'Cr3C2 25% NiChrome',
                tradeName: '-',
                description: 'Chromium Carbide 25% Nickel-Chromium',
                manufacturer: 'TAFA 1375 VM',
                hardness: '-',
                remtechNumber: 'RTHVOF-31'
            },
            {
                composition: 'WC Co-Cr (86-10-4)',
                tradeName: '-',
                description: 'Tungsten Carbide Cobalt-Chromium',
                manufacturer: 'AMPERIT 558.074',
                hardness: 'HV 1100',
                remtechNumber: 'RTHVOF-03'
            },
            {
                composition: 'WC Co-Cr (86-10-4)',
                tradeName: '(RAM®21)',
                description: 'Tungsten Carbide Cobalt-Chromium**',
                manufacturer: 'WOKA 3652',
                hardness: 'HV 1385',
                remtechNumber: 'RTHVOF-19'
            },
            {
                composition: 'WC Co-Cr (86-10-4)',
                tradeName: '-',
                description: 'Tungsten Carbide Cobalt-Chromium',
                manufacturer: 'TAFA 1350VM',
                hardness: '-',
                remtechNumber: 'RTHVOF-24'
            },
            {
                composition: 'WC Co-Cr (86-10-4)',
                tradeName: '-',
                description: 'Tungsten Carbide Cobalt-Chromium (Fine Carbide)',
                manufacturer: 'WOKA 3652 FC',
                hardness: 'HV750-1450',
                remtechNumber: 'RTHVOF-35'
            },
            {
                composition: 'WC Ni (88-12)',
                tradeName: '(RAM®11)',
                description: 'Tungsten Carbide-Nickel',
                manufacturer: 'AMPERIT 547.074',
                hardness: '-',
                remtechNumber: 'RTHVOF-09'
            },
            {
                composition: 'WC Ni (88-12)',
                tradeName: '-',
                description: 'Tungsten Carbide-Nickel',
                manufacturer: 'CASTOLIN EUTECTIC 55 590',
                hardness: '-',
                remtechNumber: 'RTHVOF-40'
            },
            {
                composition: 'WC Ni (90-10)',
                tradeName: '-',
                description: 'Tungsten Carbide-Nickel',
                manufacturer: 'WOKA 3302',
                hardness: 'HV1000-1200',
                remtechNumber: 'RTHVOF-39'
            },
            {
                composition: 'WC CrC-Ni (73-20-7)',
                tradeName: '(RAM®25)',
                description: 'Tungsten Carbide-Chromium Carbide-Nickel',
                manufacturer: 'AMPERIT 551.074',
                hardness: '-',
                remtechNumber: 'RTHVOF-10'
            },
            {
                composition: 'Co Cr WC (56-30-12-2.5)',
                tradeName: '(STELLITE #1)',
                description: 'Cobalt Chromium Tungsten Carbide',
                manufacturer: 'KENNAMETAL STELLITE 1 JK575',
                hardness: 'HV 1030',
                remtechNumber: 'RTHVOF-11'
            },
            {
                composition: 'Co Cr WC (65-28-4.5-1)',
                tradeName: '(STELLITE #6)',
                description: 'Cobalt Chromium Tungsten Carbide',
                manufacturer: 'KENNAMETAL STELLITE 6 JK576',
                hardness: 'HV 700',
                remtechNumber: 'RTHVOF-12'
            },
            {
                composition: 'Co Cr WC (60-29.5-8)',
                tradeName: '(STELLITE #12)',
                description: 'Cobalt Chrome Tungsten Carbide',
                manufacturer: 'KENNAMETAL STELLITE 12 JK572',
                hardness: 'HV 865',
                remtechNumber: 'RTHVOF-13'
            },
            {
                composition: 'WC Co Ni (superalloy)',
                tradeName: '-',
                description: 'Tungsten Carbide Cobalt Nickel Superalloy',
                manufacturer: 'METCO 5803',
                hardness: 'HV 950',
                remtechNumber: 'RTHVOF-17'
            },
            {
                composition: 'WC Co Ni (superalloy)',
                tradeName: '-',
                description: 'Tungsten Carbide Cobalt',
                manufacturer: 'WOKA 3102',
                hardness: 'HV 1000',
                remtechNumber: 'RTHVOF-29'
            },
            {
                composition: 'WC Co (88-12)',
                tradeName: '-',
                description: 'Tungsten Carbide Cobalt',
                manufacturer: 'TAFA 1342 VM',
                hardness: 'HV 1000',
                remtechNumber: 'RTHVOF-30'
            },
            {
                composition: 'WC Co (83-17)',
                tradeName: '-',
                description: 'Tungsten Carbide Cobalt',
                manufacturer: 'METCO 5143',
                hardness: '-',
                remtechNumber: 'RTHVOF-43'
            }
        ]
    },
    {
        heading: 'Ceramics',
        headingId: 'ceramics',
        coatings: [
            {
                composition: 'Cr2O3',
                tradeName: '-',
                description: 'Chromium Oxide 99.5% (ceramic)',
                manufacturer: 'AMPERIT 707.054',
                hardness: 'HV 1300',
                remtechNumber: 'RTAPS-01'
            },
            {
                composition: 'Cr2O3',
                tradeName: '-',
                description: 'Chromium Oxide 99.5% (ceramic) fine powder',
                manufacturer: 'AMPERIT 707.053',
                hardness: '-',
                remtechNumber: 'RTAPS-44'
            },
            {
                composition: 'Cr2O3 SiO2-TiO2',
                tradeName: '-',
                description: 'Chromium Oxide -Silicon/Titanium Dioxide',
                manufacturer: 'SAINT-GOBAIN #341',
                hardness: '-',
                remtechNumber: 'RTAPS-07'
            },
            {
                composition: 'Cr2O3 SiO2-TiO2',
                tradeName: '-',
                description: 'Chromium Oxide -Silicon/Titanium Dioxide',
                manufacturer: 'AMPERIT 716.054',
                hardness: '-',
                remtechNumber: 'RTAPS-08'
            },
            {
                composition: 'Cr2O3 - TiO4',
                tradeName: '-',
                description: 'Chromium Oxide - Titanium Dioxide',
                manufacturer: 'METCO 106F',
                hardness: 'HV 1140',
                remtechNumber: 'RTAPS-21'
            },
            {
                composition: 'Cr2O3 SiO2-TiO2',
                tradeName: '-',
                description: 'Chromium Oxide - Silicon/Titanium Dioxide',
                manufacturer: 'METCO 136CP',
                hardness: '-',
                remtechNumber: 'RTAPS-26'
            },
            {
                composition: 'Cr2O3 SiO2-TiO2',
                tradeName: '-',
                description: 'Chromium Oxide - Silicon/Titanium Dioxide',
                manufacturer: 'METCO 137F',
                hardness: '-',
                remtechNumber: 'RTAPS-38'
            },
            {
                composition: 'Al2O3',
                tradeName: '-',
                description: 'Aluminum Oxide (ceramic)',
                manufacturer: 'METCO 105NS',
                hardness: '-',
                remtechNumber: 'RTAPS-27'
            },
            {
                composition: 'Cr2O3-Al2O3',
                tradeName: 'Union Carbide LC-19',
                description: 'Chromium Oxide -Aluminum Oxide (70%-30%)',
                manufacturer: 'PRAXAIR CRO-197',
                hardness: '-',
                remtechNumber: 'RTAPS-28'
            },
            {
                composition: 'Cr2O3TiO3',
                tradeName: 'Durchrome',
                description: 'Chromium Oxide - Titania',
                manufacturer: 'SAINT GOBAIN #307',
                hardness: '-',
                remtechNumber: 'RTAPS-32'
            },
            {
                composition: 'TiO245Cr2O3',
                tradeName: '-',
                description: 'Titanium Oxide - 45% Chromium Oxide',
                manufacturer: 'METCO 111',
                hardness: '-',
                remtechNumber: 'RTAPS-37'
            },
            {
                composition: 'AI2O3-40%TiO23',
                tradeName: '-',
                description: 'Aluminum Oxide - 40% Titanium Dioxide',
                manufacturer: 'METCO 131VF',
                hardness: '-',
                remtechNumber: 'RTAPS-42'
            },
            {
                composition: 'TiO2',
                tradeName: '-',
                description: 'Titanium Dioxide',
                manufacturer: 'EUTECTIC METACERAM 25040',
                hardness: '-',
                remtechNumber: 'RTAPS-46'
            }
        ]
    },
    {
        heading: 'Metals / Alloys / Polymers',
        headingId: 'metalsalloyspolymers',
        coatings: [
            {
                composition: 'NiCrMoNb',
                tradeName: '(INCONEL)',
                description: '625 Inconel Superalloy',
                manufacturer: 'DIAMALLOY 1005A',
                hardness: 'HV 380',
                remtechNumber: 'RTHVOF-23'
            },
            {
                composition: 'NiCrBSi',
                tradeName: '(COLMONOY #5)',
                description: 'Nickel Chrome Boron Silicon',
                manufacturer: 'COLMONOY 53HV',
                hardness: '-',
                remtechNumber: 'RTHVOF-20'
            },
            {
                composition: 'NiCrBSi',
                tradeName: '(COLMONOY #6)',
                description: 'Nickel Chrome Boron Silicon',
                manufacturer: 'COLMONOY 63HV',
                hardness: 'HV 845',
                remtechNumber: 'RTHVOF-06'
            },
            {
                composition: 'NiCrBSiCuMo',
                tradeName: '(COLMONOY #69)',
                description: 'Nickel Chrome Boron Silicon',
                manufacturer: 'COLMONOY 69HV',
                hardness: 'HV 700',
                remtechNumber: 'RTHVOF-29'
            },
            {
                composition: 'NiCrBSiCuMo',
                tradeName: '(COLMONOY #88)',
                description: 'Nickel Chrome Boron Silicon Tungsten',
                manufacturer: 'COLMONOY 88HV',
                hardness: 'HV700-800',
                remtechNumber: 'RTHVOF-36'
            },
            {
                composition: 'FeCrNi (Cr33-Ni8-B4.8)',
                tradeName: '-',
                description: 'Iron Chromium Nickel',
                manufacturer: 'DIAMALLOY 1009',
                hardness: 'HV 745',
                remtechNumber: 'RTHVOF-14'
            },
            {
                composition: 'FeCrNi (Cr17-Ni12)',
                tradeName: '-',
                description: 'Iron Chromium Nickel',
                manufacturer: 'DIAMALLOY 1003',
                hardness: 'HV 350',
                remtechNumber: 'RTHVOF-15'
            },
            {
                composition: 'CoMoCrSi',
                tradeName: '(TRIBALOY)',
                description: 'Cobalt Molybdenum Chromium Silicon',
                manufacturer: 'DIAMALLOY 3002NS',
                hardness: 'HV 600',
                remtechNumber: 'RTHVOF-22'
            },
            {
                composition: 'Ni/Co Cr B Si C',
                tradeName: '-',
                description: 'Nickel/Cobalt Self Fluxing Alloy',
                manufacturer: 'METCO 15F',
                hardness: '-',
                remtechNumber: 'RTHVOF-25'
            },
            {
                composition: 'Al 7Si 40Polyester',
                tradeName: '-',
                description: 'Al 7Si 40Polyester',
                manufacturer: 'METCO601NS',
                hardness: '-',
                remtechNumber: 'RTAPS-33'
            },
            {
                composition: 'Ni 5% Al',
                tradeName: '(Bondcoat)',
                description: 'Ni - 5% Aluminum',
                manufacturer: 'METCO 450NS',
                hardness: '-',
                remtechNumber: 'RTAPS-34'
            },
            {
                composition: 'Al 99.0%',
                tradeName: '-',
                description: '99.0+% Aluminum',
                manufacturer: 'METCO 54NS',
                hardness: '-',
                remtechNumber: 'RTAPS-41'
            },
            {
                composition: 'Ni+(Ai/Mo/Fe)',
                tradeName: '(Bondcoat)',
                description: 'Ni based bondcoat',
                manufacturer: 'Castolin ULTRABOND 50000',
                hardness: '-',
                remtechNumber: 'RTAPS-45'
            }
        ]
    }
]
</script>