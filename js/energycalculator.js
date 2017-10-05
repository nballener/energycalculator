window.addEventListener('load', function () {

  var app = new Vue({
    el: '#app',
    data: {
      wattage: 0.0,
      price: 0.0,
      usageHours: 0,
      cost: 0.0,
      dailyCost: 0.0
    },
    methods: {
      calculateCost: function () {
        let wattageHour = this.wattage * this.usageHours
        let kiloWattageHour = wattageHour / 1000.00

        this.dailyCost = kiloWattageHour * this.price
      }
    }
  })

})
