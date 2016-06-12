var app = angular.module('app');

app.directive('two', function() {
  return {
    restrict: 'E',
    controller: "viewTwo",
    templateUrl: './viewTwo/viewTwo.html'
  }
})
