/*globals cordova:false, StatusBar:false, ProgressBar:false, AppRate:false*/
angular.module('busymind', ['ionic', 'ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('busymindCtrl', function($rootScope, $scope, $interval,
    $cordovaVibration, $ionicPlatform, slides, $timeout) {
  var waiter;
  $scope.activeSlide = 0;
  $scope.slides = slides;
  $scope.holdDelay = 15;

  $scope.advanceSlide = function (distance) {
    if (isNaN(distance)) {
      $scope.activeSlide++;
    } else {
      $scope.activeSlide += distance;
    }
  };

  $scope.restartSlides = function () {
    $scope.activeSlide = 0;
    $scope.count = 0;
    $scope.countTotal = 0;
    $scope.waiting = false;
    seconds.set(0);
    seconds.setText('');
  };

  $scope.count = 0;
  $scope.countTotal = 0;

  var line = new ProgressBar.Line('#count-bar', {
    color: '#3767A8',
    trailColor: '#9DCAE5',
    duration: 700,
    easing: 'easeOut'
  });

  $scope.countThenAdvance = function (total) {
    $scope.countTotal = total;
    $scope.count++;

    var percent = $scope.count / $scope.countTotal;
    line.animate(percent);

    if ($scope.count === total) {
      $scope.advanceSlide();
      $timeout(function () {
      $scope.countTotal = 0;
      $scope.count = 0;
      line.set(0);
      }, 250);
    }
  };

  $scope.waiting = false;
  var seconds = new ProgressBar.Circle('#wait-clock', {
      color: '#3767A8',
      trailColor: '#9DCAE5',
      strokeWidth: 2
  });

  $scope.waitThenAdvance = function (distance) {
    $scope.waiting = true;

    $scope.total = $scope.holdDelay;

    waiter = $interval(function () {
      $scope.count += 1;

      seconds.animate($scope.count / $scope.holdDelay, {
        'duration': 200
      }, function() {
        seconds.setText($scope.count);
      });

      if ($scope.count > $scope.holdDelay) {
        $scope.waiting = false;

        $scope.total = 0;
        $scope.count = 0;
        seconds.set(0);
        seconds.setText('');

        try {
          $cordovaVibration.vibrate(100);
        } catch (e) {
          // if vibration fails, no biggie
        }

        $interval.cancel(waiter);
        $scope.advanceSlide(distance);
      }
    }, 1000);
  };

  $scope.cancelAdvance = function () {
    $scope.waiting = false;
    $interval.cancel(waiter);
  };

  $ionicPlatform.ready(function() {
    $scope.$apply(function () {
      $scope.canRate = (typeof AppRate !== 'undefined');
    });
  });

  $scope.rateApp = function () {
    AppRate.preferences.storeAppURL.android = 'market://details?id=com.ionicframework.bescape550966';
    AppRate.preferences.storeAppURL.ios = '979420569';
    AppRate.promptForRating(true);
  };
});
