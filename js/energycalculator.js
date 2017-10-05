window.addEventListener('load', function () {

  var app = new Vue({
    el: '#app',
    data: {
      wattage: 0.0,
      price: 0.0,
      usageHours: 0
    },
    computed: {
      dailyCost: function () {
        let wattageHour = this.wattage * this.usageHours
        let kiloWattageHour = wattageHour / 1000.00

        return kiloWattageHour * this.price / 100.00
      },
      monthlyCost: function () {
        return this.dailyCost * 30
      }
    },
    methods: {
      convertToCurrency: function(number, format) {
        return numeral(number).format(format)
      }
    }
  })

})
