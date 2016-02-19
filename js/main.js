$(function () {
    left_container1();
    function left_container1() {
        var new_width = window.innerWidth,
            width_container1 = $('#container1').css('width'),
            new_left;
        new_left = (new_width - Number(width_container1.substr(0, width_container1.length - 2))) / 2
        $('#container1').css('left', new_left);
        console.log(new_width);
    };
    $(window).resize(function () {
        if (window.innerWidth < 800) { return };
        left_container1();
    });
    $('#main').on('click', function () {
        $('#mainpage, #promo').css('display', 'block');
        $('#logo').css('display', 'inline');
        $('.header').text('Художественная мастерская');
        $('#contact, #maincontainer').css('display', 'none');
        $('#container2').css('min-height', '572px');
    });
    $('#contacts').on('click', function () {
        $('#mainpage, #maincontainer, #promo').css('display', 'none');
        $('#logo').css('display', 'inline');
        $('.header').text('Контакты');
        $('#contact').css( 'display', 'block');
        if (window.innerWidth < 1200) {
            $('#container2').css('min-height', '500px');
            return
        };
        $('#container2').css('min-height', '423px');
    });
    $('.pointmenu').on('click', function () {
        $('.pointmenu').removeClass('pointmenu2');
        $(this).toggleClass('pointmenu2');
    });
    $('#levo').on('click', function () {
        var step_right = 656,
            length_moviecontainer = Math.ceil(model.length / 8) * step_right,
            now_left = $('#moviecontainer').css('left'),
            new_left = Number(now_left.substr(0, now_left.length - 2)) + step_right;
        if (now_left == 'auto') {
            new_left = 0 + step_right;
        };//This checking is for brouser Google Chrome
        if (new_left > 0) {
            new_left = -(length_moviecontainer - step_right);
            $('#moviecontainer').css('left', new_left);
            return
        };
        $('#moviecontainer').animate({
            left: new_left
        });
    });
    $('#pravo').on('click', function () {
        var step_left = 656,
            length_moviecontainer = Math.ceil(model.length / 8) * step_left,
            now_left = $('#moviecontainer').css('left'),
            new_left = Number(now_left.substr(0, now_left.length - 2)) - step_left;
        if (now_left == 'auto') {
            new_left = 0 - step_left;
        };//This checking is for brouser Google Chrome
        if (new_left <= -length_moviecontainer) {
            new_left = 0;
            $('#moviecontainer').css('left', '0px');
            return
        };
        $('#moviecontainer').animate({
            left: new_left
        });
    })
})
