(function() {
  angular.module('primeiraApp').component('valueBox', {
    bindings: {
      grid: '@',
      bg: '@',
      value: '@',
      text: '@',
      icon: '@'
    },
    controller: [
      'gridSystem',
      function(gridSystem){
        this.$onInit = () =>
          this.gridClasses = gridSystem.toCssClasses(this.grid) //Arrow function, mesmo que function () { code }
      }
    ],
    template: `
    <div class="{{ $ctrl.gridClasses }}">
      <div class="small-box {{ $ctrl.bg }}">
        <div class="inner">
          <h3>{{ $ctrl.value }}</h3>
          <p>{{ $ctrl.text }}</p>
        </div>
        <div class="icon">
          <i class="fa {{ $ctrl.icon }}"></i>
        </div>
      </div>
    </div>
    `
  })
})()
