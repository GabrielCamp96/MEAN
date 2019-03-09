(function ()  {
   angular.module('primeiraApp').controller('AuthCtrl', [
       '$location',
       'msgs',
       'auth',
       AuthController
   ]) 

   function AuthController($location, msgs, auth) {
       const vm = this
       
       vm.loginMode = true

       vm.changeMode = () => vm.loginMode = !vm.loginMode

       vm.login = () => {
            auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
       }

       vm.signup = () => {
            auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
       }

       vm.getUser = () => auth.getUser() // retorna o usuário logado no sistema

       vm.logout = () => {
           auth.logout(() => $location.path('/'))
       }
   }
})()