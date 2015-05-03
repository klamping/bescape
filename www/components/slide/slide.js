angular.module('busymind')
.directive('slide', function(slideManager) {
  return {
    restrict: 'E',
    templateUrl: '/components/slide/slide.html',
    transclude: true,
    scope: {
      index: '@'
    },
    link: function($scope) {
      $scope.slideManager = slideManager;
    }
  };
});
