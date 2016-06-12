var app = angular.module('app');

app.directive('parent', function() {
  return {
    restrict: 'E',
    controller: 'parent',
    templateUrl: './parent/parent.html'
  }
})
