$(document).ready(function(){

    $('.case-tracker-cols .col').click(function(){
        var getValue = $(this).attr('data-percent');
        $(".case-tracker-bar-inside").css("width",getValue);

        var getId = $(this).attr('data-id');

        // $('.case-tracker-tab').removeClass('active');
        // $(getId).addClass('active');
        $('.case-tracker-tab').not('#'+getId).slideUp();
        $('#'+getId).slideToggle();


    });
    // $("#col-1").click(function(){
    //     $(".case-tracker-bar-inside").css("width","0%")
    // });

    // $("#col-2").click(function(){
    //     $(".case-tracker-bar-inside").css("width","25%")
    // });

    // $("#col-3").click(function(){
    //     $(".case-tracker-bar-inside").css("width","50%")
    // });

    // $("#col-4").click(function(){
    //     $(".case-tracker-bar-inside").css("width","75%")
    // });

    // $("#col-5").click(function(){
    //     $(".case-tracker-bar-inside").css("width","100%")
    // });



});