$(function(){
    
    const bar = $('#bar-menu');
    const navMobile = $('#nav-mobile');
    const orverlay = $('.overlay');

    bar.on('click', function(){
        navMobile.css('display', 'inherit');
    });

    orverlay.on('click', function(){
        navMobile.css('display', 'none');
    });
    $("#country-select").change(function(e){
        let country = $("#country-select").val()
        $(".img-country img").attr('src', `./images/${country}.png`)
    })
});