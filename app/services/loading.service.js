/**
 * LoadingService
 *
 * Purpose:
 *      Service for handling the loading modal
 *
 * @author Nick Pray <nick@inclaninteractive.com>
 *
 * @date 7/27/2016 - 2:33 PM
 */
angular.module('app')
    .service
    (
        'LoadingService',
        function($timeout)
        {
            var _modal = $('ni-loading-modal .loading-modal');
            var _events = {};

            var _open = false;

            /**
             * Open
             *
             * Purpose:
             *      Opens the loading modal
             *
             * @author Nick Pray <nick@inclaninteractive.com>
             *
             * @date 6/8/2016 - 1:02 PM
             */
            this.Open = function(message){
                this.Trigger('on.modal.show', {});
                var message_ele = $(_modal).find("[name='message']")[0];
                $(message_ele).html(message != undefined ? message : 'Loading...');

                $(_modal).css('opacity', 0).removeClass('hidden').animate({'opacity' : 1}, 500, function(){
                    this.Trigger('on.modal.shown', {});
                }.bind(this));
            };
            /**
             * Close
             *
             * Purpose:
             *      Closes the
             * @author Nick Pray <nick@inclaninteractive.com>
             *
             * @date 6/8/2016 - 1:02 PM
             */
            this.Close = function(){
                this.Trigger('on.modal.hide', {});
                $(_modal).animate({'opacity' : 0}, 500, function(){
                    $(_modal).addClass('hidden');
                    this.Trigger('on.modal.hidden', {});
                }.bind(this));
            };

            /**
             * On
             *
             * Purpose:
             *      Allows subscription to events thrown by this controller.
             *
             * @param event(string): The name of the event
             * @param fn(function): The callback you want called on that event trigger.
             *
             * @author Nick Pray <nick@inclaninteractive.com>
             *
             * @date 6/8/2016 - 1:04 PM
             */
            this.On = function(event, fn){
                if(!(event in _events))
                    _events[event] = [];

                _events[event].push(fn);
            };
            /**
             * Trigger
             *
             * Purpose:
             *      Publishes an event within this controller that calls any functions assigned through subscribe to that
             *      event string
             *
             * @param event (string): The event you want triggered
             * @param data (mixed): The data you want sent to the callback function
             *
             * @author Nick Pray <nick@inclaninteractive.com>
             *
             * @date 6/8/2016 - 1:06 PM
             */
            this.Trigger = function(event, data){
                if(event in _events)
                {
                    for(var e in _events[event])
                    {
                        e = _events[event][e];
                        e(this, data);
                    }
                }
            };
        }
    );