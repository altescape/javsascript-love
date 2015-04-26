/*
  JavaScript plugin for shopify to enable normal posts with images
  to function as a gallery with packery style look and fancybox lightbox.
  
  Dependencies:
    jQuery 1.11.2 -https://jquery.com/,
    Fancybox 2.1.5 -http://fancyapps.com/fancybox/,
    Packery 1.4 -http://packery.metafizzy.co/
*/

var PHOTOS = (function () {
  
  var image_container =  $('.image-container');
  var photos = $.makeArray(image_container.children());

  var check_img = function () {
    var photos_array = [];
    $.each(photos, function (index, value) {
      if ($(value).is('img')) {
      	photos_array.push(value);
      } else {
      	$(value).remove();
      }
    });
  return photos_array;
  };
  
  var treat_photos = function () {
    var validated_photos = check_img();
  	$.each(validated_photos, function (index, value) {
      var url = value.src;
      var filename = url.split('/').pop();
      var name_size = filename.split('.').shift();
      var name = name_size.split('_').shift();
      var size = name_size.split('_').pop();

      var new_url = url.replace(size, '1024x1024');
      $(value).wrap(function() {
        return "<a href='" + new_url + "' rel='gallery_group' class='fancybox'></a>";
      });
    });
  };
  
  var packery = function () {
    image_container.packery({"gutter": 20});
  };
  
  var fancybox = function () {
  	$('.fancybox').fancybox();
  };
  
  var fade_in = function () {
  	image_container.addClass('active');
  };
  
  return {
    treat_photos: treat_photos,
    packery: packery,
    fancybox: fancybox,
    fade_in: fade_in
  }
}());
    
$(window).load(function() {
  PHOTOS.treat_photos();
  PHOTOS.packery();
  PHOTOS.fancybox();
  PHOTOS.fade_in();
});
