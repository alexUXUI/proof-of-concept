app.service('redditService', function($http){
  this.getReddit = function(query){
    $http.get('http://www.reddit.com/search.json?q=' + query).then(function(data){
      console.log('yo data: ', data);
    })
  }
})
