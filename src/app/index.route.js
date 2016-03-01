(function() {
  'use strict';

  angular
    .module('testRocketFirm')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingController',
        controllerAs: 'landing'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
