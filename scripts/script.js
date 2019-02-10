var open = document.querySelector("#mobail-menu");
var link = document.querySelector(".nav-menu");
var close = document.querySelector(".mobail-menu-close");

open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("close");
    open.classList.add("mobail-openclose");
  });

close.addEventListener("click", function () {
	link.classList.remove("responsive");
	close.classList.remove("close");
	open.classList.remove("mobail-openclose");
});




  
// var site = function() {
//   this.navLi = $('#nav li').children('ul').hide().end();
//   this.init();
// };

// site.prototype = {
  
//   init : function() {
//     this.setMenu();
//   },
  
//   // Enables the slidedown menu, and adds support for IE6
  
//   setMenu : function() {
  
//   $.each(this.navLi, function() {
//     if ( $(this).children('ul')[0] ) {
//       $(this)
//         .append('<span />')
//         .children('span')
//           .addClass('open-submenu')
//     }
//   });
  
//     this.navLi.hover(function() {
//       // mouseover
//       $(this).find('> ul').stop(true, true).slideDown('slow', 'easeOutBounce');
//     }, function() {
//       // mouseout
//       $(this).find('> ul').stop(true, true).hide();     
//     });
    
//   }
 
// }


// new site();







jQuery("document").ready(function($){
 
  var nav = $('.hevader-top');
  var menuBlock = $('.block-menu-top');
  var search = $('.search-top');
  var logo = $('.logo');
  var submenu =$('.submenu');
  var list = $('.list-nav');
// $(window).innerWidth() <= 751
 
  $(window).scroll(function () {
    if (window.scrollY > 200 && $(window).innerWidth() >= 1250) {
      nav.addClass("fixed");
      menuBlock.addClass("menuHeignt");
      search.addClass("searchFix");
      logo.addClass("logoFix");
      submenu.addClass("subtop");
      list.addClass("listborder");
      
    } else {
      nav.removeClass("fixed");
      menuBlock.removeClass("menuHeignt");
       search.removeClass("searchFix");
        logo.removeClass("logoFix");
        submenu.removeClass("subtop");
         list.removeClass("listborder");
      
    }
  }); 
});




$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.open-submenu');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    // if (!e.data.multiple) {
    //   $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    // };
  } 

  var accordion = new Accordion($('.ul-nav'), false);
});

