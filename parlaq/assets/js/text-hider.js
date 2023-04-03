$(document).ready(function () {
    $(".read__more").click(function () {
       $(".text-2").slideDown();
       $(".text-grayScale").removeClass("grayscale--text")
       $(".read__more").hide()
       $('.text-1').removeClass('grayscale--text')
    });
    $(".close__text").click(function () {
       $(".text-2").slideUp();
       $(".read__more").show()
       $(".text-grayScale").addClass("grayscale--text")
       $('.text-1').addClass('grayscale--text')
    });
 });
 