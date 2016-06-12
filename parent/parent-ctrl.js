app.controller('parent', function($rootScope, $scope, $state, $stateParams, $http /*redditService*/){
  $scope.helloWorld = "Hello, World! this is parent controller";
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  // redditService();
})
