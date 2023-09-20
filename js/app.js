$(function () {

    new VenoBox({
        selector: '.venoBox',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: 'yellow',
        navSpeed: '1000',
    });
    new VenoBox({
        selector: '.videos',
        share: true,
        spinner: 'plane',
        spinColor: 'yellow',
    });
    AOS.init();

    new TypeIt("#ripon", {
            speed: 300,
        })
        .delete(7)
        .type("Failure")
        .delete(7)
        .type("Success")
        .go();

    var mixer = mixitup('.wrapper');
})