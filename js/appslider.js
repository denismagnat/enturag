var model,
    appslider = angular.module("slider", []);
appslider.controller("sliderCtrl", function ($scope, $http) {
    angular.element('.mainimges').click(function (event) {
        var number_image = angular.element(event.target).attr('id');
        angular.element('#container2').css('min-height', '450px');
        switch (number_image) {
            case 'one':
                generateFirstSlider("gallary/data1.json");
                angular.element('.header').text('Галерея: Иконы');
                break;
            case 'two':
                generateFirstSlider("gallary/data2.json");
                angular.element('.header').text('Живопись');
                break;
            case 'three':
                generateFirstSlider("gallary/data3.json");
                angular.element('.header').text('Картины');
                break;
            case 'four':
                generateFirstSlider("gallary/data4.json");
                angular.element('.header').text('Художественное оформление');
                break;
            default:
                break;
        };
    });
    function generateFirstSlider(source) {
        angular.element('#mainpage, #logo, #promo').css('display', 'none');
        angular.element('#maincontainer').css('display', 'block');
        $http.get(source).success(function (model1) {
            var widthfirsslider,
                data1 = [],
                data2 = [];
            $scope.data = model1;
            model = model1;
            for (var i = 0, k = 0, r = model1.length; i < r; i++) {
                k++;
                if (k > 8) {
                    k = 1;
                    data1[i] = model1[i];
                }
                else if (k <= 4) {
                    data1[i] = model1[i];
                }
                else if (k > 4 && k <= 8) {
                    data2[i] = model1[i];
                };
            };
            $scope.data1 = data1;
            $scope.data2 = data2;
            width_first_slider = Math.ceil(model.length / 8) * 656;
            angular.element('#moviecontainer').css('width', width_first_slider);
        });
        $scope.selectItems = function (item) {
            if (angular.element(".mainimg ng-scope[src='']")) {
            }
            return item;
        };
    };
});
appslider.directive('secondSlider', function () {
    return function (scope, element, attributes) {
        scope.secondslider = function () {
            var window_height = window.innerHeight,
                window_width = window.innerWidth,
                flank_height = window_height * 0.6,
                flank_top = (window_height - flank_height) / 2,
                midle_block_width = (window_height * 0.8 / 168) * 152,
                flank_block_width = (flank_height * 0.8 / 168) * 152,
                left_left = ((window_width - midle_block_width) / 2) - (flank_block_width + 55),
                left_midle = (window_width - midle_block_width) / 2,
                left_right = left_left + midle_block_width + flank_block_width + 110,
                counter1 = Number($(element).attr('number')),
                speed_animate = 200;
            //set parametrs of shadow-background of second slider and main div of second slider
            angular.element('#shadow, #secsl').css({
                'display': 'block',
                'height': '100%',
                'width': '100%',
            });
            //set parametrs of left div of second slider
            angular.element('#secslleft, #secslright').css({
                'display': 'block',
                'height': flank_height,
                'width': flank_block_width,
                'left': left_left,
                'top': flank_top
            });
            //set parametrs of 
            angular.element('#movesecslleft, #movesecslright').css({
                'height': flank_height * 0.8,
                'width': flank_block_width * (model.length + .5),
                'left': -flank_block_width * (counter1 - 1),
            });
            //set parametrs of
            angular.element('#movesecslleft>img, #movesecslright>img').each(function () {
                angular.element('#movesecslleft>img').css({
                    'height': flank_height * 0.8,
                    'width': flank_block_width - 30,
                });
                angular.element('#movesecslright>img').css({
                    'height': flank_height * 0.8,
                    'width': flank_block_width - 30,
                })
            });
            //set parametrs of description left and right
            angular.element('.description').css({
                'display': 'block',
                'height': flank_height * 0.09,
                'width': flank_block_width - 32,
            });
            //set parametrs of midle div of second slider
            angular.element('#secslmidle').css({
                'display': 'block',
                'height': window_height * 0.99,
                'width': midle_block_width,
                'left': left_midle,
            });
            //set parametrs of 
            angular.element('#movesecslmidle').css({
                'height': window_height * 0.8,
                'width': midle_block_width * (model.length + .5),
                'left': -midle_block_width * counter1,
            });
            //set parametrs of 
            angular.element('#movesecslmidle>img').each(function () {
                angular.element('#movesecslmidle>img').css({
                    'height': window_height * 0.8,
                    'width': midle_block_width - 30,
                })
            });
            //set
            angular.element('.descriptionmidle').css({
                'display': 'block',
                'height': window_height * 0.12,
                'width': midle_block_width - 32,
            });
            //set parametrs of right div of second slider
            angular.element('#secslright').css({
                'left': left_right
            });
            //set parametrs of 
            angular.element('#movesecslright').css({
                'left': -flank_block_width * (counter1 + 1),
            });
            //set position of left button
            angular.element('#secsllevo').css({
                'left': left_midle - 50,
            });
            //set position of right button
            angular.element('#secslpravo').css({
                'left': left_right - 50,
            });
            //event 'click' for left key
            angular.element('#secsllevo').on('click', function () {
                counter1--;
                if (counter1 < 0) { counter1 = model.length - 1 };
                angular.element('#movesecslmidle').animate({ left: -midle_block_width * counter1 }, speed_animate);
                angular.element('#movesecslleft').animate({ left: -flank_block_width * (counter1 - 1) }, speed_animate);
                angular.element('#movesecslright').animate({ left: -flank_block_width * (counter1 + 1) }, speed_animate);
            });
            //event 'click' for right key 
            angular.element('#secslpravo').on('click', function () {
                counter1++;
                if (counter1 >= model.length) { counter1 = 0 };
                angular.element('#movesecslmidle').animate({ left: -midle_block_width * counter1 }, speed_animate);
                angular.element('#movesecslleft').animate({ left: -flank_block_width * (counter1 - 1) }, speed_animate);
                angular.element('#movesecslright').animate({ left: -flank_block_width * (counter1 + 1) }, speed_animate);
            });
            angular.element('#escape').on('click', function () {
                angular.element('#shadow').css({
                    'display': 'none',
                });
                //set parametrs of main div of second slider
                angular.element('#secsl').css({
                    'display': 'none',
                });
                //set off
                angular.element('#secsllevo').off();
                angular.element('#secslpravo').off();
            });
        };
    };
})