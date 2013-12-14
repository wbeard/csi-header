define([	
		'jquery'
		, 'underscore'
		, 'backbone'
		, 'views/PageAppView']
		, function($, _, Backbone, PageAppView) {
	$(function() {
	
		$(".toolbar__group__unit__link").on("click", function(evt) {
			evt.preventDefault();
			
			var toolbarGroup = $(this).parent(),
				currentGroup = $(".toolbar__group__unit__indicator--on").parent();

			$(".toolbar__group__unit__indicator--on").toggleClass("toolbar__group__unit__indicator--on");
			$(".toolbar__group__unit__dropDownMenu--on").toggleClass("toolbar__group__unit__dropDownMenu--on");

			if (toolbarGroup[0] === currentGroup[0]) return;

			toolbarGroup.children(".toolbar__group__unit__indicator").toggleClass("toolbar__group__unit__indicator--on");
			toolbarGroup.children(".toolbar__group__unit__dropDownMenu").toggleClass("toolbar__group__unit__dropDownMenu--on");
		});
		
		$(".app__body__sidebar__menu__option").on("click", function(evt) {
			evt.preventDefault();
			
			var sideBarOption = $(this),
				currentSideBarOption = $(".app__body__sidebar__menu__option--on"),
				relatedModule = $('.' + $(this).attr("data-module"));
				
				console.log(relatedModule, $(evt.target).attr("data-module"));

			if (sideBarOption[0] === currentSideBarOption[0]) return;
				
			$(".app__body__sidebar__menu__option--on").toggleClass("app__body__sidebar__menu__option--on");
			$(".app__body__module--on").toggleClass("app__body__module--on");

			sideBarOption.toggleClass("app__body__sidebar__menu__option--on");
			
			relatedModule.toggleClass("app__body__module--on");
			
		});

		$('.btn-spin').on("mouseover", function(evt) {
			$(this).children('.fa-stack').children('.fa-upper-right').addClass('fa-rotate-180');
		}).on("mouseout", function(evt) {
			$(this).children('.fa-stack').children('.fa-upper-right').removeClass('fa-rotate-180');
		});

		new PageAppView();

	});
});