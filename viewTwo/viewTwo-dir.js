var app = angular.module('app');

app.directive('two', function() {
  return {
    restrict: 'E',
    templateUrl: './viewTwo/viewTwo.html'
  }
})
