app.factory('redditService', function($http, $scope, $state, $stateParams){
  return $http.get('http://www.reddit.com/search.json?q=ferrari').then(function(data){
    console.log(data);
  })
})
