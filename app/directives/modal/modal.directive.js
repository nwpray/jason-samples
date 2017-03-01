angular.module('app')
.directive(
    'niModal',
    function(){
        return {
            restrict : 'E',
            controllerAs : "Modal",
            scope : {
                niView : '@',
                niBind : '=',
                niAlias : '@'
            },
            link : function($scope, $element, $attrs){
                $element.css
                (
                    {
                        'position' : 'fixed',
                        'background' : 'rgba(0,0,0,0.6)',
                        'width' : '100%',
                        'height' : '100%',
                        'top' : '0',
                        'left' : '0',
                        'overflow' : 'hidden',
                        'z-index' : '7000'
                    }
                );
            },
            templateUrl: function(element, attrs){
                return attrs['niView'];
            },
            controller: function($sce, $scope, $element, $timeout){
                this.data = {};
                this.events = {};
                this.time;
                this.timer_halt = false;

                //Modal open-close
                this.Open = function(){
                    $('html, body').addClass('prevent-scroll');

                    this.Trigger('on.modal.show');
                    $($element).css('opacity', '0');
                    $($element).removeClass('hidden');
                    $($element).animate({opacity: 1}, 200, function(){this.Trigger('on.modal.shown');}.bind(this));
                };
                this.Scope = function(){
                    return $scope;
                };
                this.Element = function(){
                    return $element;
                };
                this.Close = function(){
                    $('html, body').removeClass('prevent-scroll');

                    this.Trigger('on.modal.hide');

                    //Kill the timer so the expire event wont fire
                    this.timer_halt = true;
                    this.timer = 0;

                    $($element).animate({opacity: 0}, 200, function()
                    {
                        $($element).addClass('hidden');
                        this.data = {};

                        this.Trigger('on.modal.hidden', {});
                        this.events = {};
                    }.bind(this));
                };

                this.EscapeHtml = function($html){
                    return $sce.trustAsHtml($html);
                };

                this.Tick = function(){

                    if(this.timer_halt) return;

                    if(this.time <= 0)
                    {
                        this.Trigger('on.timer.expire', {});
                        return;
                    }

                    $timeout
                    (
                        function()
                        {

                            $timeout(function(){
                                this.time -= 1;
                                this.Tick();
                            }.bind(this), 1000);
                        }.bind(this)
                    );
                };

                this.TimerStart = function(time){
                    this.timer_halt = false;
                    this.time = time;
                    this.Trigger('on.timer.start', {});
                    this.Tick();
                };

                //Sub-Pub methods
                this.On = function(name, callback) {
                    if(!(name in this.events))
                        this.events[name] = [];

                    this.events[name].push(callback);
                };

                this.Trigger = function(name, data){
                    if(name in this.events)
                    {
                        for(var event in this.events[name])
                        {
                            this.events[name][event](data);
                        }
                    }
                };

                //Binding-Init
                $($element).addClass('hidden');

                var alias = (($scope.niAlias != undefined) ? $scope.niAlias : 'Modal');

                if('niBind' in $scope)
                    $scope.niBind[alias] = this;

                if('onModalReady' in $scope.niBind)
                    $scope.niBind.onModalReady(alias);
            }
        }
    }
);