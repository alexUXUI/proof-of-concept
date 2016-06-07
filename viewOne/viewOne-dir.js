var app = angular.module('app');

app.directive('one', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: '../templates/viewOne.html'
    }
})
