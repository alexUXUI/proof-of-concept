'use strict'

app.controller('viewOne', function($stateParams, $state, $scope, $http){

  let post    = {}
  let s       = $scope
      s.p     = post
      s.posts = []

  s.getReddit = (query) => {
    s.posts = []
    $http.get('http://www.reddit.com/search.json?q=' + query).then((data) => {
      let d = data.data.data.children
      for(var i = 0; i < d.length; i = i + 1) {
        post           = d[i].data
        post.title     = d[i].data.title
        post.author    = d[i].data.author
        post.score     = d[i].data.score
        post.thumbnail = d[i].data.thumbnail
        post.url       = d[i].data.url
        post.ups       = d[i].data.ups
        s.posts.push(post)
      }
    })
  }

  s.blowAway = () => {
    s.thisPost().delete();
  }

})
