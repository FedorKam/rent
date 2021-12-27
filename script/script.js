$('.owl-carousel_js_default').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    items:1,
})

$('.owl-carousel_js_withNav').owlCarousel({
    items:1,
    loop:false,
    center:true,
    nav:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
})