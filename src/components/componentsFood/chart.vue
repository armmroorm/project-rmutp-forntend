<template>
  <div class="animated fadeIn">
    <apexchart type="radialBar" height="400" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  mounted(){
    this.add()
  },
  props:{
    menuCalories : {
      required : true
    }
  },
  methods:{
    add(){
      this.series.push(this.menuCalories)
    }
  },
  data() {
    return {
      series: [],
      stroke: {
        lineCap: 'round'
      },
      chartOptions: {
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        labels: ['CALORIE'],
        plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
            hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },

          track: {
            background: '#fff',
            strokeWidth: '70%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      }
    }
  }
}
</script>