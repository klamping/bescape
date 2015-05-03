/*globals cordova:false, StatusBar:false, AppRate:false*/
angular.module('busymind', ['ionic', 'ngCordova', 'gettext'])
.run(function($ionicPlatform, $cordovaGlobalization, gettextCatalog) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(typeof navigator.globalization !== 'undefined') {
      $cordovaGlobalization.getPreferredLanguage().then(function(language) {
        gettextCatalog.setCurrentLanguage((language.value).split('-')[0]);
      });
    }
  });
})
.factory('slideManager', function ($rootScope) {
  var _activeSlide = 0;
  var slideManager = {};

  slideManager.advance = function (distance) {
    if (isNaN(distance)) {
      distance = 1;
    }

    _activeSlide += 1 * distance;
  };

  slideManager.reset = function () {
    _activeSlide = 0;
    $rootScope.$broadcast('reset');
  };

  slideManager.get = function () {
    return _activeSlide;
  };

  return slideManager;
})
.controller('busymindCtrl', function($rootScope, $scope, $ionicPlatform, slideManager, waiter) {
  $scope.slideManager = slideManager;
  $scope.waiter = waiter;
  waiter.setWait(2);

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
