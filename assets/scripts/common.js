// console 객체가 없을 경우
if (!window.console) {
	window.console = {
		log : function(){},
		dir : function(){}
	};
} else if (!window.console.dir){
	window.console.dir = function(){};
}




/* Common Menus */
var CommonMenus = (function ($) {
	var scope,
		$container,
		$toggleMenus,
		$menus,
		$liMenus,
		init = function () {
			$container = $('.layout-sidemenu');
			$toggleMenus = $('.layout-header-utils .btn-menus');
			$menus = $container.find('.list-menus > li > .menu');
			$liMenus = $container.find('.list-menus > li');

			initLayout();
			initEvent();
		};//end init

	function initLayout() {
	}

	function initEvent() {
		// toggle menu
		$toggleMenus.on('click', function(e) {
			var state = $('body').attr('data-state');
			$('body').attr('data-state', (state == '' || state == undefined) ? 'is-open' : '')
		});

		// side menu
		$menus.on('click', function(e) {
			$('.list-menus > li').attr('data-state', '');
			
			var $target = $(this).closest('li');
			$target.attr('data-state', 'is-selected');
		});

		$
		$liMenus.on('mouseenter', function(e) {
			if( $('body').attr('data-state') == "is-open" ) return;

			$(this).attr('data-prev-state', $(this).attr('data-state'));
			$(this).attr('data-state', 'is-hover');
		});
		$liMenus.on('mouseleave', function(e) {
			if( $('body').attr('data-state') == "is-open" ) return;

			var prev = '';
			if( $(this).attr('data-prev-state') != undefined ) {
				prev = $(this).attr('data-prev-state');
			}
			$(this).attr('data-state', prev);
			$(this).attr('data-prev-state', '');
		});
	}

	return {
		init: function () {
			scope = this;

			init();
		}
	};
}(jQuery));



$(document).ready(function(e) {
	// jquery confirm default setting
	jconfirm.defaults = {
		title: '',
		content: '',
		theme: '',
		animation: 'top',
		closeAnimation: 'bottom',
		backgroundDismiss: false,
		closeIcon: true,
	};	
	// select box
	$('.selectpicker').selectpicker();

	CommonMenus.init();
});







