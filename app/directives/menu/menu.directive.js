angular.module('app')
.directive
(
    'niMenu',
    function()
    {
        return {
            templateUrl : '/app/directives/menu/menu.html',
            controller : 'MenuController',
            controllerAs : 'Menu'
        }
    }
);