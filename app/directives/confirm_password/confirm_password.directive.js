/**
 * confirmPassword
 *
 * Purpose:
 *      The validation directive for password confirmation boxes. You must set this directive and a niConfirm attribute
 *      passing the password model id for this to work. This is a custom validation to the angular validation.
 *
 * @param niConfirm (string): The id of the password input you are confirming. This is required.
 *
 * @author Nick Pray <nick@inclaninteractive.com>
 *
 * @date 5/26/2016 - 10:47 AM
 */
angular.module('app')
.directive
(
    'niConfirm',
    function()
    {
        return {
            limit: 'A',
            require: 'ngModel',
            scope :
            {
                niConfirm: '@niConfirm'
            },
            link: function(scope, element, attr, model)
            {
                //Dont go any further if there isn't a niConfirm attribute.
                if(scope.niConfirm == undefined)
                    return;

                //Collect the password element
                var for_ele = $('#' + scope.for);

                //Watch this element and the password element for changes an validate on each change.
                scope.$watch
                (
                    function(){return {password: $(for_ele).val(), confirm: $(element).val()}},
                    function (vals)
                    {
                        model.$setValidity('confirm', vals.password == vals.confirm);
                    },
                    true
                );
            }
        };
    }
);