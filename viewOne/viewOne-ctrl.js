'use strict'

app.controller('viewOne', function($stateParams, $state, $scope, $http){

  $scope.post = {}
  $scope.posts = []

  $scope.getReddit = (query) => {
    $http.get('http://www.reddit.com/search.json?q=' + query).then((data) => {
      let d = data.data.data.children
      for(var i = 0; i < d.length; i = i + 1) {
        $scope.post = d[i].data
        $scope.post.title = d[i].data.title
        $scope.post.author = d[i].data.author
        $scope.post.score = d[i].data.score
        $scope.post.thumbnail = d[i].data.thumbnail
        $scope.post.url = d[i].data.url
        $scope.post.ups = d[i].data.ups
        $scope.posts.push($scope.post)
      }
    })
  }

  $scope.blowAway = () => {
    $scope.thisPost().delete();
  }

})
