angular.module('busymind')
.directive('buttons', function() {
    return {
        restrict: 'E',
        templateUrl: '/components/buttons/buttons.html',
        transclude: true,
        replace: true
    };
});
