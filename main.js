$("document").ready(function() {


    $(".images").each(function() {
        var slider = $(this),
            slides = slider.find("img"),
            totalSlides = slides.length,
            currIndex = 0,

            intervalTime = 5000,
            sliderInterval;
        startSlider(intervalTime = 10000);


        function cycleItems() {

            var currSlide = slides.eq(currIndex);

            slides.fadeOut(400).css("z-index", 1);
            currSlide.fadeIn(400).css("z-index", 5);
            // $(".facons i").css("color", "yellow");

        }


        function changeSlide() {
            currIndex += 1;

            if (currIndex > totalSlides - 1) {
                currIndex = 0;
            }

            cycleItems();
        }


        function startSlider() {
            clearInterval(sliderInterval);

            sliderInterval = setInterval(function() {
                changeSlide();
            }, intervalTime);
        }


        $(".next").on("click", function() {
            currIndex += 1;

            if (currIndex > totalSlides - 1) {
                currIndex = 0;
            }

            cycleItems();
            startSlider(intervalTime = 10000);
        });


        $(".prev").on("click", function() {
            currIndex -= 1;

            if (currIndex < 0) {
                currIndex = totalSlides - 1;
            }


            cycleItems();
            startSlider(intervalTime = 10000);
        });
        $(".current").on("click", function() {
            currIndex = 1;
            cycleItems();

            startSlider(intervalTime = 10000);
        });
        $(".nextt").on("click", function() {
            currIndex = 2;



            cycleItems();
            startSlider(intervalTime = 10000);
        });
        $(".prevv").on("click", function() {
            currIndex = 0;

            cycleItems();
            startSlider(intervalTime = 10000);
        });









    });
});






$(document).scroll(function(e) {
    var scrollAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);

    // For scrollbar 1
    $(".scrollBar1").css("width", scrollPercent + "%");
    $(".scrollBar1 span").text(roundScroll);


});