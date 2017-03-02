angular.module('app')
.controller
(
    'MyHealthController',
    function()
    {
        this.top_fix = "$('.site-body').prepend('<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">')\n\n.find('.site-secondary-col')\n.removeClass('site-secondary-col')\n.addClass('col-xs-12 col-sm-12 col-md-3 col-lg-3')\n\n.siblings('#main-content')\n.removeClass('site-main')\n.addClass('col-xs-12 col-sm-12 col-md-9 col-lg-9');\n\n$('#homepageRecordOverview').siblings('.row.section').remove();\n\n$('.container-fluid-large').css({'margin' : '0 auto'});\n\n$('.site-footer').before('<div class=\"clearfix\"></div>');";
        this.iframe_fix = "$('#angular-dashboard').attr('style', 'width: 100%');";

        function escapeHtml(str) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(str));
            return div.innerHTML;
        }
    }
);