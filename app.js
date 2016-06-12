'use strict'

// import viewOne from './viewOne/viewOne-dir.js'.viewOne;

var app = angular.module('app', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {

    $stateProvider

    .state('parent', {
      url: "/parent",
      template: "<parent></parent>",
    })

    .state('parent.viewOne', {
      url: "/viewOne",
      template: "<one></one>",
      controller: ['$scope', '$state', '$stateParams',
        function ($scope, $state, $stateParams) {
        }
      ]
    })

    .state('parent.viewTwo', {
      url: "/viewTwo",
      template: "<two></two>",
      controller: ['$scope', '$state', '$stateParams',
        function ($scope, $state, $stateParams) {
        }
      ]
    })

    .state('parent.viewThree', {
      url: "/viewThree",
      template: "<three></three>",
      controller: ['$scope', '$state', '$stateParams',
        function ($scope, $state, $stateParams) {
        }
      ]
    })

    .state('home', {
      url: "/",
      templateUrl: "./index.html",
      controller: ['$scope', '$state', '$stateParams',
        function ($scope, $state, $stateParams) {
        }
      ]
    })

    // $urlRouterProvider.otherwise('/parent');

}])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
])
