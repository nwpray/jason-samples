angular.module('app')
.controller
(
    'LoadingSampleController',
    function(LoadingService, $timeout)
    {
        /*
            !!!!!!!!!
            Want to see how useful the loading modal setup can be? Go to index.html and just uncomment the other loader
            and comment the current one and whalla! new loading spinner.
         */
        this.OpenLoader = function()
        {
            LoadingService.Open("Loading");
            $timeout(function(){LoadingService.Close();}, 5000);
        };

        this.onLoaderShowClick = function()
        {
            this.OpenLoader();
        };

        this.OpenLoader();
    }
);