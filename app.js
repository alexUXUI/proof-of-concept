'use strict'

// import viewOne from './viewOne/viewOne-dir.js'.viewOne;

var app = angular.module('app', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {

    $stateProvider

    .state('parent', {
      url: "/parent",
      templateUrl: "./parent/parent.html",
    })

    .state('parent.viewOne', {
      url: "/viewOne",
      template: "<one></one>"
    })

    .state('parent.viewTwo', {
      url: "/viewTwo",
      template: "<two></two>"
    })

    .state('parent.viewThree', {
      url: "/viewThree",
      template: "<three></three>"
    })

    .state('home', {
      url: "/",
      templateUrl: "./index.html"
    })

}])
