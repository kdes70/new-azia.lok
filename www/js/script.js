/**
 * Created by ִלטענטי on 28.09.2015.
 */
$(function(){
    $("#slides").slidesjs({
        width: 980,
        height: 510,
        effect: {
            slide: {speed: 500},
        },

        play: {
            active: false,
            auto: true,
            interval: 4000,
            swap: true
        },
        navigation: false,
        // pagination: {active: true},
    });
});