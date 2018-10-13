$(function(){
    setTimeout(function(){
       $('.site-name, .copy, .title').fadeIn(1000);

        setTimeout(function(){
            $('.fadein').fadeIn(1000);
                $('.container').imagesLoaded(function(){
                    $('.container').masonry({
                        itemSelector: '.grid-item'
                    });
                });
        },1200);
    },1000);

    $('a:not([target]):not(.iframe):not(.img_box)').on("click",function() {
        var url = $(this).attr('href');
        if (url != '') {
            $('body').fadeOut(1000);
                setTimeout(function(){
                location.href = url;
            }, 800);
        }
        return false;
    });

    $(".iframe").colorbox({
        iframe:true, fixed: true, width:"60%", height:"80%"
    });

    $(".img_box").colorbox({
        fixed: true, maxWidth:"60%", maxHeight:"80%"
    });

    $(window).resize(function(){
        $.colorbox.resize({
            width:'60%', height:'80%'
        });
    });

    $(window).scroll(function(){
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.01) {
            $('.scroll').fadeOut();
        } else {
            $('.scroll').fadeIn();
        }
    });
});


