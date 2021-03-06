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
   var imgs = this.find('img'), state, settings;

   if (options.count === 3) {
      settings = $.extend({
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
     state = $('#img-carousel')

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
        return false;
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
        return false;
     });

   } else if(options.count === 4) {
      settings = $.extend({
         prev: '.left1',
         next: '.right1',
         centerImgClass: 'main',
         minWidth: '150px',
         maxWidth: '368px',
         left: 0,
         center: '22%',
         back: '38%',
         right: '76%',
         timing: 500,
     }, options);
     state = $('#img-carousel1')

     $(settings.prev).click(function () {
        if (state.attr('data-state')==="one") {
          imgs.eq(0).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          imgs.eq(1).animate({left: settings.left, width: settings.minWidth}).removeClass(settings.centerImgClass);
          imgs.eq(2).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
          imgs.eq(3).animate({left: settings.right, width: settings.minWidth}).css('z-index','0');
          state.attr('data-state','four');
        } else if (state.attr('data-state')==="two") {
          imgs.eq(0).animate({left: settings.right, width: settings.minWidth}).css('z-index','0');
          imgs.eq(1).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          imgs.eq(2).animate({left: settings.left, width: settings.minWidth}).removeClass(settings.centerImgClass);
          imgs.eq(3).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
          state.attr('data-state','three');
        } else if (state.attr('data-state')==="three") {
          imgs.eq(0).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
          imgs.eq(1).animate({left: settings.right, width: settings.minWidth}).css('z-index','0');
          imgs.eq(2).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          imgs.eq(3).animate({left: settings.left, width: settings.minWidth}).removeClass(settings.centerImgClass);
          state.attr('data-state','four');
        } else {
          imgs.eq(0).animate({left: settings.right, width: settings.minWidth}).css('z-index','0');
          imgs.eq(1).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          imgs.eq(2).animate({left: settings.left, width: settings.minWidth}).removeClass(settings.centerImgClass);
          imgs.eq(3).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
          state.attr('data-state','three');

        }
        return false;
     });

     $(settings.next).click(function () {
        if (state.attr('data-state')==="one") {
          imgs.eq(0).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
          imgs.eq(1).animate({left: settings.right, width: settings.minWidth}).removeClass(settings.centerImgClass);
          imgs.eq(2).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          imgs.eq(3).animate({left: settings.left, width: settings.minWidth});
          state.attr('data-state','two');
        } else if (state.attr('data-state')==="two") {
          imgs.eq(0).animate({left: settings.right, width: settings.minWidth}).removeClass(settings.centerImgClass);
          imgs.eq(1).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          imgs.eq(2).animate({left: settings.left, width: settings.minWidth}).css('z-index','0');
          imgs.eq(3).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass).css('z-index','0');
          state.attr('data-state','three');
        } else if (state.attr('data-state')==="three") {
          imgs.eq(0).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          imgs.eq(2).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
          imgs.eq(3).animate({left: settings.right, width: settings.minWidth}).removeClass(settings.centerImgClass);
          state.attr('data-state','four');
        } else {
          imgs.eq(0).animate({left: settings.left, width: settings.minWidth}).css('z-index','0');
          imgs.eq(1).animate({left: settings.center, width: settings.maxWidth}).addClass(settings.centerImgClass);
          imgs.eq(2).animate({left: settings.right, width: settings.minWidth}).removeClass(settings.centerImgClass);
          imgs.eq(3).animate({left: settings.back, width: settings.minWidth}).css('z-index','-1');
          state.attr('data-state','one');
        }
        return false;
     });
   } else {
      throw "Invalid image count: " + options.count;
   }

   return this;
};
