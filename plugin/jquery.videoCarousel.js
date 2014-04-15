
$.fn.videoCarousel = function (options) {
   var imgs = this.find('img'), state = $('#img-carousel'),
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
