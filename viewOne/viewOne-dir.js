var app = angular.module('app');

app.directive('one', function() {
  return {
    restrict: 'E',
    templateUrl: './viewOne/viewOne.html'
  }
})
