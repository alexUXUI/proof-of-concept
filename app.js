'use strict'

var app = angular.module('app', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider) {

  $stateProvider
  .state('parent', parentState)
  .state('parent.viewOne', viewOneState)
  .state('parent.viewTwo', viewTwoState)
  .state('parent.viewThree', viewThreeState)
}])

const parentState = {    url: "/parent",      template: "<parent></parent>", controller: "parent" }
const viewOneState = {   url: "/viewOne",     template: "<one></one>",       controller: "viewOne" }
const viewTwoState = {   url: "/viewTwo",     template: "<two></two>",       controller: "viewTwo" }
const viewThreeState = { url: "/viewThree",   template: "<three></three>",   controller: "viewThree" }
