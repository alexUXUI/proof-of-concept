var app = angular.module('app');

app.directive('three', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: '../templates/viewThree.html'
    }
})
