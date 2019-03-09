angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http', //Caso não utilizasse pratica global, usaria '$scope' como dependencia
    DashboardController
  ])

  function DashboardController($http){
    const vm = this // Usado para tornar o $scope local, fugindo do acoplamento global
    vm.getSummary = function() {
      const url = 'http://localhost:3003/api/billingSummary/'
      $http.get(url).then(function(response){
        const {credit = 0, debt = 0} = response.data
        vm.credit = credit
        vm.debt = debt
        vm.total = credit - debt
      })
    }

    vm.getSummary()
  }
