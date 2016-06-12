var app = angular.module('app');

app.directive('navbar', function(){
  return {
    restrict: 'E',
    scope: true,
    templateUrl: '../partials/nav-bar.html'
  }
})
