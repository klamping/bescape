/*globals ProgressBar:false*/
angular.module('busymind')
.factory('counter', function ($rootScope, $timeout) {
  var _count = 0;
  var _limit = 6;

  var counter = {};

  counter.getCount = function () {
    return _count;
  };

  counter.getLimit = function () {
    return _limit;
  };

  counter.reset = function () {
    _count = 0;
    $rootScope.$broadcast('countReset');
  };
  $rootScope.$on('reset', counter.reset);

  counter.increment = function (limit) {
    _limit = limit;
    _count++;

    if (_count == _limit) {
      $timeout(function () {
        $rootScope.$broadcast('countLimitReached');
        counter.reset();
      }, 300);
    }

    if (_count <= _limit) {
      $rootScope.$broadcast('countAdvance');
    }
  };

  return counter;
})
.factory('waiter', function ($rootScope, $interval, $timeout, slideManager, $cordovaVibration) {
  var _waitTime = 15;
  var _timeWaited = 0;
  var _isWaiting = false;
  var _interval;

  var waiter = {};

  waiter.reset = function () {
    waiter.pause();
    _timeWaited = 0;
    $rootScope.$broadcast('waitReset');
  };

  $rootScope.$on('reset', waiter.reset);

  var advanceClock = function () {
    _timeWaited += 1;
    $rootScope.$broadcast('waitAdvance');

    if (_timeWaited >= _waitTime) {
      try {
        $cordovaVibration.vibrate(100);
      } catch (e) {
        // if vibration fails, no biggie
      }

      $timeout(function () {
        waiter.reset();

        $rootScope.$broadcast('waitFinished');
      }, 300);

    }
  };

  waiter.getWait = function () {
    return _waitTime;
  };

  waiter.setWait = function (time) {
    _waitTime = time;
  };

  waiter.getWaited = function () {
    return _timeWaited;
  };

  waiter.isWaiting = function () {
    return _isWaiting;
  };

  waiter.start = function () {
    _isWaiting = true;

    _interval = $interval(advanceClock, 1000);
  };

  waiter.pause = function () {
    _isWaiting = false;
    $interval.cancel(_interval);
  };

  return waiter;
})
.directive('progressIndicators', function ($rootScope, slideManager, waiter, counter, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/progress/progress.html',
    replace: true,
    link: function (scope) {
      scope.waiter = waiter;
      scope.counter = counter;

      var seconds = new ProgressBar.Circle('#wait-clock', {
          color: '#3767A8',
          trailColor: '#9DCAE5',
          strokeWidth: 10
      });
      seconds.setText(0);

      $rootScope.$on('waitAdvance', function () {
        var timeWaited = waiter.getWaited();
        seconds.animate(timeWaited / waiter.getWait(), {
          'duration': 200
        }, function() {
          seconds.setText(timeWaited);
        });
      });

      var resetSeconds = function () {
        seconds.set(0);
        $timeout(function () {
          seconds.setText(0);
        }, 500);
      };

      $rootScope.$on('waitReset', resetSeconds);

      var line = new ProgressBar.Line('#count-bar', {
        color: '#3767A8',
        trailColor: '#9DCAE5',
        duration: 700,
        easing: 'easeOut'
      });

      $rootScope.$on('countAdvance', function () {
        var percent = counter.getCount() / counter.getLimit();
        line.animate(percent);
      });

      $rootScope.$on('countReset', function () {
        line.set(0);
      });
    }
  };
});
