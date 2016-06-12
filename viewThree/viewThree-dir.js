var app = angular.module('app');

app.directive('three', function() {
  return {
    restrict: 'E',
    templateUrl: './viewThree/viewThree.html'
  }
})
