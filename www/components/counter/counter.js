/*globals ProgressBar:false*/
angular.module('busymind')
.service('Counter', function ($rootScope) {
  var _count = 0;
  var _limit = 6;

  this.getCount = function () {
    return _count;
  };

  this.getLimit = function () {
    return _limit;
  };

  this.setLimit = function (limit) {
    _limit = limit;
  };

  this.reset = function () {
    _count = 0;
    $rootScope.$digest();
    $rootScope.$broadcast('countReset');
  };

  this.increment = function () {
    _count++;
    $rootScope.$digest();

    if (_count >= _limit) {
      $rootScope.$broadcast('countLimitReached');
      this.reset();
    } else if (_count < _limit) {
      $rootScope.$broadcast('countAdvance');
    }
  };
})
.directive('counter', function ($rootScope, Counter) {
  return {
    restrict: 'E',
    templateUrl: 'components/counter/counter.html',
    replace: true,
    link: function (scope, element, attrs) {
      var counter = new Counter();
      counter.setLimit(attrs.limit);

      var line = new ProgressBar.Line(element, {
        color: '#3767A8',
        trailColor: '#9DCAE5',
        duration: 700,
        easing: 'easeOut'
      });

      counter.$on('countAdvance', function () {
        var percent = counter.getCount() / counter.getLimit();
        line.animate(percent);
      });

      counter.$on('countReset', function () {
        line.set(0);
      });
    }
  };
});
