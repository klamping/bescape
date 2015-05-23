angular.module('busymind')
.directive('thebutton', function($rootScope, slideManager, counter, waiter) {
  return {
    restrict: 'E',
    templateUrl: 'components/thebutton/thebutton.html',
    transclude: true,
    scope: {
      skin: '@',
      type: '@?',
      classes: '@?',
      limit: '@?',
      distance: '@?',
    },
    replace: true,
    link: function(scope) {
      scope.skin = scope.skin || 'calm';
      var evListener;

      if (scope.type == 'count') {
        scope.classes = 'breath';
        scope.onrelease = function () {
          counter.increment(scope.limit);

          if (!evListener) {
            evListener = $rootScope.$on('countLimitReached', function () {
              slideManager.advance(scope.distance);
              evListener();
              evListener = null;
            });
          }
        };
      }

      if (scope.type == 'wait') {
        scope.ontouch = function () {
          waiter.start();

          if (!evListener) {
            evListener = $rootScope.$on('waitFinished', function () {
              slideManager.advance(scope.distance);
              evListener();
              evListener = null;
            });
          }
        };
        scope.onrelease = waiter.pause;
      }

      if (scope.type == 'reset') {
        scope.onrelease = slideManager.reset;
      }

      if (!scope.type) {
        scope.onrelease = function () {
          slideManager.advance(scope.distance);
        };
      }
    }
  };
});
