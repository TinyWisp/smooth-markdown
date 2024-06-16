const n=`<template>
  <div class="echarts-wrapper" ref="chartEl">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  }
})

const chartEl = ref(null)

onMounted(() => {
  const options = JSON.parse(props.code)
  const myChart = echarts.init(chartEl.value)
  myChart.setOption(options)
})
<\/script>

<style scoped>
.echarts-wrapper {
  width: 400px;
  height: 300px;
}
</style>`;export{n as default};
