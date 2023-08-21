import $ from 'jquery';

var $background     = $('#navigation_background');
var $navigation     = $('#navigation');
var $menuItems      = $('li.has-submenu');

$menuItems.each(function(index, el){
    el.querySelector('a').addEventListener("click",  function(event){
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