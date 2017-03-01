/**
 * ValidationService
 *
 * Purpose:
 *      Service for handling form validation via angular validation
 *
 * @author Nick Pray <nick@inclaninteractive.com>
 *
 * @date 7/27/2016 - 2:38 PM
 */
angular.module('app')
.service
(
    'ValidationService',
    function()
    {
        /**
         * Validate
         *
         * Purpose:
         *      Validates a form using its scope and name. Looks through the form for any errors that were not
         *      kicked because it was cleaned and sets the field dirty.
         *
         * @author Nick Pray <nick@inclaninteractive.com>
         *
         * @date 7/27/2016 - 2:38 PM
         */
        this.Validate = function($scope, formName){
            var valid = true;

            if(Object.keys($scope[formName].$error).length > 0)
            {
                for(var key in $scope[formName])
                {
                    if(key[0] != '$' && $scope[formName][key].$$parentForm == $scope[formName])
                    {
                        if(Object.keys($scope[formName][key].$error).length > 0)
                            $scope[formName][key].$setDirty();
                    }
                }
                valid = false;
            }

            return valid;
        };

        /**
         * Reset
         *
         * Purpose:
         *      Resests the form validation on a form
         *
         * @author Nick Pray <nick@inclaninteractive.com>
         *
         * @date 7/27/2016 - 2:39 PM
         */
        this.Reset = function($scope, formName){
            $scope[formName].$setPristine();
            $scope[formName].$setUntouched();
        };
    }
);