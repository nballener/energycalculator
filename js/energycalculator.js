window.addEventListener('load', function () {

  var app = new Vue({
    el: '#app',
    data: {
      wattage: "",
      price: "",
      usageHours: ""
    },
    computed: {
      dailyCost: function () {
        let wattageHour = this.wattage * this.usageHours
        let kiloWattageHour = wattageHour / 1000.00

        return kiloWattageHour * this.price / 100.00
      },
      monthlyCost: function () {
        return this.dailyCost * 30
      },
      seasonalCost: function () {
        return this.dailyCost * 90
      }
    },
    methods: {
      convertToCurrency: function(number, format) {
        return numeral(number).format(format)
      }
    }
  })

})
