(function($) {
  $.fn.StncThumbnailScroller = function(options) {
    // Establish our default settings
    var settings = $.extend({
      speed: 100,
      imagePictureAttr: '#showPicture'
    }, options);
    return this.each(function() {
      var element = $(this);
      var picture = jQuery('li img:first', element).data('src');
      jQuery(settings.imagePictureAttr ).attr('src', picture);
      //picture show click
      jQuery("li img", element).click(function() {
        var picture = jQuery(this).data('src');
        jQuery(settings.imagePictureAttr).attr('src', picture);
      });
      //direction button 
      jQuery(".directionBtn").click(function() {
        where = jQuery(this).data('direction');
        var item_width = jQuery(' li', element).outerWidth() + 10;
        if (where == 'next') {
          var left_indent = parseInt(jQuery(element).css('left')) + item_width;
        } else {
          var left_indent = parseInt(jQuery('', element).css('left')) - item_width;
        }
        //make the sliding effect using jQuery's animate function... '
        jQuery(':not(:animated)', element).animate({
          'left': left_indent
        }, settings.speed, function() {
          if (where == 'next') {
            jQuery(' li:first', element).before(jQuery(' li:last', element));
          } else {
            jQuery(' li:last', element).after(jQuery(' li:first', element));
          }
          jQuery(element).css({
            'left': '-100px'
          });
        });
      });
    });
  }
}(jQuery));
