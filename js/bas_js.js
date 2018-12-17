$(window).ready(function () {
    bas.getInstagram(bas.fetchInstagram);
//  set external links on the site to open in a new window/tab 
    $(document.links).filter(function () {
        return this.hostname !== window.location.hostname;
    }).attr('target', '_blank');
// get current URL path and assign 'active' class
     if (!$('.category-page').length) {
        var pathname = window.location.pathname;
    } else {
        var pathname = $('.category-page').text();
    }
    $('.nav > li > a[href="' + pathname + '"]').parent().addClass('active');
//    collapse button text
    $('#comments-btn').click(function () {
        $(this).find('span').text(function (i, old) {
             return old === 'More on comments' ? 'Show less' : 'More on comments';
        });
    });
});