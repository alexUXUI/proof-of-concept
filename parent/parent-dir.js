var app = angular.module('app');

app.directive('parent', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: './parent/parent.html'
    }
})
