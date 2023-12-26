$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 8,
      pagination:false,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 5],
      navigation: true,
      navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ]
    });
  });

