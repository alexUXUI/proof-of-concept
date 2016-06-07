var app = angular.module('app');

app.directive('two', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: '../viewTwo.html'
    }
})
