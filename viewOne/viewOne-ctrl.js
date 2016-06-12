app.controller('viewOne', function($stateParams, $state, $scope, $http, redditService){
  $scope.submit = redditService.getReddit;
})
