angular.module('app')
.config
(
    function($routeProvider, $locationProvider)
    {
        $routeProvider
        .when
        (
            '/',
            {
                templateUrl : '/app/pages/home/home.html',
                controller : 'HomeController',
                controllerAs : 'Home'
            }
        )
        .when
        (
            '/modal_sample',
            {
                templateUrl : '/app/pages/modal_sample/modal_sample.html',
                controller : 'ModalSampleController',
                controllerAs : 'ModalSample'
            }
        )
        .when
        (
            '/loading_sample',
            {
                templateUrl : '/app/pages/loading_sample/loading_sample.html',
                controller : 'LoadingSampleController',
                controllerAs : 'LoadingSample'
            }
        )
        .when
        (
            '/page_1',
            {
                templateUrl : '/app/pages/page_sample_1/page_sample_1.html'
            }
        )
        .when
        (
            '/page_2',
            {
                templateUrl : '/app/pages/page_sample_2/page_sample_2.html'
            }
        )
        .when
        (
            '/page_3',
            {
                templateUrl : '/app/pages/page_sample_3/page_sample_3.html',
                controller : 'PageSample3Controller'
            }
        )
        .when
        (
            '/my_health',
            {
                templateUrl : '/app/pages/my_health/my_health.html',
                controller : 'MyHealthController',
                controllerAs : 'MyHealth'
            }
        )
        .otherwise
        (
            {
                template : '<h1>Sorry Your Page Cannot Be Found</h1>'
            }
        );

        $locationProvider.html5Mode(true);
    }
);