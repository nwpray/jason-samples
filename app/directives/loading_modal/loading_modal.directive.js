angular.module('app')
.directive
(
    'niLoadingModal',
    function()
    {
        return {
            restrict : 'E',
            scope : {
                niView : '@'
            },
            templateUrl: function(element, attrs){
                return attrs['niView'];
            }
        }
    }
);