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
  
  $('.slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-big',
    dots: false,
    centerMode: true,
    focusOnSelect: true
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

  $("#showmore").click(function(e){
    $("#more-facilities").toggleClass("hidden");
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
