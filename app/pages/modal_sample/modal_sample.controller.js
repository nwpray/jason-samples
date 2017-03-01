angular.module('app')
.controller
(
    'ModalSampleController',
    function(ValidationService, $timeout)
    {
        //Basic modal event handlers
        this.onBasicModalClick = function(){

            this.BasicModal.data = {
                message : "This is a sample of how a basic modal works"
            };
            //Bind Events
            this.BasicModal.On('on.close.click', this.onBasicModalCloseClick.bind(this));

            //Open the modal
            this.BasicModal.Open();
        };
        this.onBasicModalCloseClick = function(e){
            this.BasicModal.Close();
        };

        //Timer modal event handlers
        this.onTimerModalClick = function(){

            //Bind Events
            this.TimerModal.On('on.timer.expire', this.onTimerModalTimerExpire.bind(this));

            //Start the timer
            this.TimerModal.TimerStart(5);

            //Open the modal
            this.TimerModal.Open();
        };
        this.onTimerModalTimerExpire = function(){
            this.TimerModal.Close();
        };

        //Form modal event handlers
        this.onFormModalClick = function(){

            //Bind Events
            this.FormModal.On('on.submit.click', this.onFormModalSubmitClick.bind(this));
            this.FormModal.On('on.cancel.click', this.onFormModalCancelClick.bind(this));
            this.FormModal.On('on.modal.hidden', this.onFormModalHidden.bind(this));

            //Open the modal
            this.FormModal.Open();
        };
        this.onFormModalSubmitClick = function(){

            /*
                Validates that there are no form errors
                If there are errors, for each element that has an error validation service
                sets touched so the css will display the error
            */
            if(!ValidationService.Validate(this.FormModal.Scope(), 'sample_form'))
            {
                var error_inputs = $('.has-error');
                $(error_inputs).addClass('blink-0-25');
                $timeout(function(){$(error_inputs).removeClass('blink-0-25');}, 500);
                return;
            }

            this.BasicModal.data = {
                message : "Hello " + this.FormModal.data.first_name + ' ' + this.FormModal.data.last_name + '!'
            };

            this.FormModal.Close();

            //Bind Events
            this.BasicModal.On('on.close.click', this.onBasicModalCloseClick.bind(this));

            //Open the modal
            this.BasicModal.Open();

        };
        this.onFormModalCancelClick = function(){
            this.FormModal.Close();
        };
        this.onFormModalHidden = function(){

            //clears form validation errors for next open
            ValidationService.Reset(this.FormModal.Scope(), 'sample_form');
        };
    }
);