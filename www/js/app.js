// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bescape', ['ionic', 'ngCordova'])

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

.controller('bescapeCtrl', function($scope, $timeout, $cordovaVibration, $ionicPlatform) {
  var waiter;
  $scope.activeSlide = 0;

  $scope.advanceSlide = function (distance) {
    if (isNaN(distance)) {
      $scope.activeSlide++;
    } else {
      $scope.activeSlide += distance;
    }
  };

  $scope.count = 0;
  $scope.countThenAdvance = function (total) {
    console.log($scope.count);
    $scope.count++;
    if ($scope.count === total) {
      $scope.advanceSlide();
      $scope.count = 0;
    }

  };

  $scope.waiting = false;

  $scope.startWait = function () {
    $scope.waiting = true;
  };

  $scope.waitThenAdvance = function (duration, distance) {
    $scope.waiting = true;

    waiter = $timeout(function () {
      $scope.waiting = false;

      // $ionicPlatform.ready(function() {
      //   if ($cordovaVibration) {
      //     $cordovaVibration.vibrate(100);
      //   }
      // });

      $scope.advanceSlide(distance);

    }, duration * 1000);
  };

  $scope.cancelAdvance = function () {
    $scope.waiting = false;
    $timeout.cancel(waiter);
  };
});
