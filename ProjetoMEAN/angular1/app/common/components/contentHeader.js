(function() {
  angular.module('primeiraApp').component('contentHeader', {
    bindings: {
      name: '@',
      small : '@'
    },
    template: `
      <section class="content-header">
        <h1><b>{{ $ctrl.name }}</b><small><p class="text-info" style="padding-left: 10px">{{ $ctrl.small }}</p></small></h1>
      </section>
    ` //Interpolação de variável, ou concatenação de strings de multiplas linhas
  })
})()
