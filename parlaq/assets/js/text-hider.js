$(document).ready(function () {
    $(".read__more").click(function () {
       $(".text-2").slideDown();
       $(".text-grayScale").removeClass("grayscale--text")
       $(".read__more").hide()
    });
    $(".close__text").click(function () {
       $(".text-2").slideUp();
       $(".read__more").show()
       $(".text-grayScale").addClass("grayscale--text")
    });
 });
 