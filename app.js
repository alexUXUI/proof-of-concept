'use strict'

// import viewOne from './viewOne/viewOne-dir.js'.viewOne;

var app = angular.module('app', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {

  $stateProvider

  .state('parent', {
    url: "/parent",
    template: "<parent></parent>",
    controller: "parent"
  })

  .state('parent.viewOne', {
    url: "/viewOne",
    template: "<one></one>",
    controller: "viewOne"
  })

  .state('parent.viewTwo', {
    url: "/viewTwo",
    template: "<two></two>",
    controller: "viewTwo"
  })

  .state('parent.viewThree', {
    url: "/viewThree",
    template: "<three></three>",
    controller: "viewThree"
  })

  // .state('home', {
  //   url: "/",
  //   templateUrl: "./index.html",
  //   controller: ['$scope', '$state', '$stateParams',
  //     function ($scope, $state, $stateParams) {
  //     }
  //   ]
  // })

}])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
])
