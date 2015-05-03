angular.module('busymind')
.directive('prompt', function() {
    return {
        restrict: 'E',
        templateUrl: '/components/prompt/prompt.html',
        transclude: true,
        replace: true
    };
});
