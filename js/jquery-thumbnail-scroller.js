
jQuery(document).ready(function() {
    var resim = jQuery('#unique-pager li img:first').data('src');
   jQuery("#show img").attr('src',resim);

   jQuery("#unique-pager li img").click(function() {
	    var resim = jQuery(this).data('src');
	    jQuery("#show img").attr('src',resim);
	});

});



//slide function  
function slide(where) {
    element = '#unique-pager';
    //get the item width
    var item_width = jQuery(element + ' li').outerWidth() + 10;

    /* using a if statement and the where variable check 
    we will check where the user wants to slide (left or right)*/
    if (where == 'left') {
        //...calculating the new left indent of the unordered list (ul) for left sliding
        var left_indent = parseInt(jQuery(element).css('left')) + item_width;
    } else {
        //...calculating the new left indent of the unordered list (ul) for right sliding
        var left_indent = parseInt(jQuery(element + '').css('left')) - item_width;

    }
    //make the sliding effect using jQuery's animate function... '
    jQuery(element + ':not(:animated)').animate({
        'left': left_indent
    }, 100, function() {

        /* when the animation finishes use the if statement again, and make an ilussion
        of infinity by changing place of last or first item*/
        if (where == 'left') {
            //...and if it slided to left we put the last item before the first item
            jQuery(element + ' li:first').before(jQuery(element + ' li:last'));
        } else {
            //...and if it slided to right we put the first item after the last item
            jQuery(element + ' li:last').after(jQuery(element + ' li:first'));
        }

        //...and then just get back the default left indent
        jQuery(element).css({
            'left': '-100px'
        });
    });




}