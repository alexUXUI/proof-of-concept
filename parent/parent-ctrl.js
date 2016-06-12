app.controller('parent', function($rootScope, $scope, $state, $stateParams, $http){
  $scope.helloWorld = "Hello, World! this is parent controller";
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
})
