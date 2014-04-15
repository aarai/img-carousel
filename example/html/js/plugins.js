// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$.fn.videoCarousel = function (options) {
   var imgs = this.find('img'), state = $('#img-carousel');

   var settings = $.extend({
       prev: '.left',
       next: '.right',
       centerImgClass: 'main',
       minWidth: '150px',
       maxWidth: '368px',
       left: 0,
       center: '22%',
       right: '76%',
       timing: 500,
   }, options);

   $(settings.prev).click(function () {
      if (state.attr('data-state')==="one") {
        imgs.eq(0).animate({left: settings.right, width: settings.minWidth});
        imgs.eq(1).animate({left: settings.left, width: settings.minWidth})
        .removeClass(settings.centerImgClass);
        imgs.eq(2).animate({left: settings.center, width: settings.maxWidth})
        .addClass(settings.centerImgClass);
        state.attr('data-state','two');
      } else if (state.attr('data-state')==="two") {
        imgs.eq(0).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
        imgs.eq(1).animate({left: settings.right, width: settings.minWidth});
        imgs.eq(2).animate({left: settings.left, width: settings.minWidth}).removeClass(settings.centerImgClass);
        state.attr('data-state','three');
      } else {
        imgs.eq(0).animate({left: 0, width: settings.minWidth}).removeClass(settings.centerImgClass);
        imgs.eq(1).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
        imgs.eq(2).animate({left: settings.right, width: settings.minWidth});
        state.attr('data-state','one');
      }

   });

   $(settings.next).click(function () {
      if (state.attr('data-state')==="one") {
        imgs.eq(0).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
        imgs.eq(1).animate({left: settings.right, width: settings.minWidth}).removeClass(settings.centerImgClass);
        imgs.eq(2).animate({left: settings.left, width: settings.minWidth});
        state.attr('data-state','three');
      } else if (state.attr('data-state')==="two") {
        imgs.eq(0).animate({left: settings.left, width: settings.minWidth});
        imgs.eq(1).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
        imgs.eq(2).animate({left: settings.right, width: settings.minWidth}).removeClass(settings.centerImgClass);
        state.attr('data-state','one');
      } else {
        imgs.eq(0).animate({left: settings.right, width: settings.minWidth}).removeClass(settings.centerImgClass);
        imgs.eq(1).animate({left: settings.left, width: settings.minWidth});
        imgs.eq(2).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
        state.attr('data-state','two');
      }
   });
    
   return this;
};


$('#img-carousel').videoCarousel();
