// This is where it all goes :)

$(document).ready(function(){
  $("#item_login").click(function(e){
    $("#loginbox").toggleClass("u-block");
    $("#dark").toggleClass("u-block");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is("#loginbox") === false) {
      $("#loginbox").removeClass("u-block");
      $("#dark").removeClass("u-block");
    }
  });

   $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
});


$(document).ready(function(){
    // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("searchsmall");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > 850) {
      header.classList.add("fix-search");
    } else {
      header.classList.remove("fix-search");
    }
  }
});


$(document).ready(function(){
      
  $('#captions-demo').slickLightbox({
    caption: 'caption',
    useHistoryApi: 'true',
    background: 'rgba(255,255,255,1)'
  });

  $('#accordion').collapse({
    toggle: false
  })
  
  $('.slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });


  $('.slider-inspiration').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true
  });

  $('.slider-region').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    arrows: true
  });

  $('.Slider-home').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    centerMode: true
  });

  $("#item_suche").click(function(e){
    $("#searchbox").toggleClass("u-block");
    $("#dark").toggleClass("u-block");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is("#searchbox") === false) {
      $("#searchbox").removeClass("u-block");
      $("#dark").removeClass("u-block");
    }
  });

  $("#burger").click(function(e){
    $("#burger_menu").toggleClass("u-block");
  });

  $("#showmore").click(function(e){
    $("#more_filter").toggleClass("hidden");
  });

  $("#showdetails").click(function(e){
    $("#facilitydetails").toggleClass("hidden");
  });

  $("#showmore").click(function(e){
    $("#more-facilities").toggleClass("hidden");
  });

  var favorites = $('a.favorite');

  favorites.click(function(){
    $(this).toggleClass('favor');  
  });

  $(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));



  $(".circle").inViewport(function(px){
      if(px) $(this).addClass("progress-animation") ;
  });

  var maxLength = 450;
    $(".show-read-more").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="Button u-ff-lato u-bg-lightGrey u-ta-center u-transform-up u-c-petrol read-more">Mehr</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });

});

$(document).ready(function(){
  $(".menu-item").click(function(){
    $(this).toggleClass("active");
  });
});

$(document).ready(function(){
  $(".Search-option").click(function(){
    $(this).toggleClass("chosen");
  });
});

$(function() {
  $('.lazy').Lazy();

  $('#datepicker').dateRangePicker(
  {
    separator : '',
    getValue: function()
    {
      if ($('#date-range01').val() && $('#date-range02').val() )
        return $('#date-range01').val() + ' to ' + $('#date-range02').val();
      else
        return '';
    },
    setValue: function(s,s1,s2)
    {
      $('#date-range01').val(s1);
      $('#date-range02').val(s2);
    }
  });

  $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
  });
});