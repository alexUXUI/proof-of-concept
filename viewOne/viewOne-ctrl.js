app.controller('viewOne', function($stateParams, $state, $scope, $http, redditService){
  $scope.yo = "This is viewOne scope";
  $scope.query = '';
  $scope.submit = redditService.getReddit;
})
