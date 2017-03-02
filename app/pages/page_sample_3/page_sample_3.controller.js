angular.module('app')
.controller
(
    'PageSample3Controller',
    function()
    {
        function LoadingOut()
        {
            $('.sample-page-3  .loading').animate({'opacity' : '1'}, 1000, LoadingIn);
        }
        function LoadingIn()
        {
            $('.sample-page-3  .loading').animate({'opacity' : '0'}, 1000, LoadingOut);
        }

        LoadingOut();

        var menShadow = false;
        var sample_3_ready = function(){
            $('.sample-page-3').animate({scrollTop: 0}, "slow");

            $(window).scroll(function()
            {
                var top = $(window).scrollTop();

                if(top != 0 && !menShadow)
                {
                    menShadow = true;
                    $('.ni-menu').animate({'background-color' : 'rgba(0,0,0,0.8)'}, 1000);
                }
                else if(top == 0 && menShadow)
                {
                    menShadow = false;
                    $('.ni-menu').animate({'background-color' : 'rgba(0,0,0,0)'}, 1000);
                }
            });

            $('.sample-page-3 .ni-menu .ni-menu-item a')
                .mouseover(function(){$(this).siblings('hr').animate({'opacity' : '1', 'width' : '100%'}, 500)})
                .mouseleave(function(){$(this).siblings('hr').animate({'opacity' : '0', 'width' : '0'}, 500)});

            $('.sample-page-3  button.form-control')
                .mouseover(function(){$(this).animate({backgroundColor: 'rgba(255,255,255,0.4)', color: 'black'}, 500);})
                .mouseleave(function(){$(this).animate({backgroundColor: 'background: rgba(0,0,0, 0.8)', color: 'white'}, 500);});

            setTimeout
            (
                function()
                {
                    $('.sample-page-3 .loader').animate({backgroundColor: 'rgba(0,0,0,0)'}, 1000, function(){$(this).hide(); Initiate();});
                },
                4000
            );
        };

        function Initiate(){
            $('.main-logo').animate
            (
                {
                    opacity: 1
                },
                3000,
                function()
                {

                }
            );

            $('.main-logo-underline').animate
            (
                {width: '100%', opacity: 1},
                3000,
                function()
                {
                    $('.main-logo-sub').animate({opacity: 1}, 3000);
                    $('.arrow.up-down').animate({opacity: 1}, 3000);
                }
            );
        }

        sample_3_ready();
    }
);