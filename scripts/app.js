var app = angular.module('app1', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/view1");

  $stateProvider
    .state('view1', {
      url: "/view1",
      templateUrl: "views/view1.html"

    })
    .state('view2', {
      url: "/view2",
      templateUrl: "views/view2.html"

    });
});



