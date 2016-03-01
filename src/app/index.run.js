(function() {
  'use strict';

  angular
    .module('testRocketFirm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
