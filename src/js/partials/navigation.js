import $ from 'jquery';

var $background     = $('#navigation_background');
var $navigation     = $('#navigation');
var $menuItems      = $('li.has-submenu');

var toggle 	= document.querySelector('#toggle');
var menu 	= document.querySelector('#menu');

toggle.addEventListener('click', function(){
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-active');
    //   header.classList.remove('is-active');
    } else {
      menu.classList.add('is-active'); 
    //   header.classList.add('is-active'); 
      this.setAttribute('aria-expanded', 'true');
    }
  });

$menuItems.each(function(index, el){
    el.querySelector('a').addEventListener("click",  function(event){
        $menuItems.not(el).each(function(index, element){
            var $this = $(this);
            $this.removeClass('open');
            $this.find('a').attr('aria-expanded', "false");
        });

		if (this.parentNode.className == "has-submenu") {
			this.parentNode.className = "has-submenu open";
			this.setAttribute('aria-expanded', "true");
		} else {
			this.parentNode.className = "has-submenu";
			this.setAttribute('aria-expanded', "false");
		}

		event.preventDefault();
        updateNavigation();
		return false;
	});
});

function updateNavigation() {
    var $menus          = $('.has-submenu.open');
    var $menus_inner    = $menus.find('ul');

    if($menus.length) {
        $navigation.addClass('active');

        var maxHeight = -1;
        $menus_inner.each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $background.css('height', maxHeight + 'px');

    } else {
        $navigation.removeClass('active');
        $background.css('height', '0px');
    }
}