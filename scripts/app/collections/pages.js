define(['jquery', 'underscore', 'backbone', 'models/page', 'config'], function($, _, Backbone, Page, config) {
	var Pages = Backbone.Collection.extend({
		model: Page,
		url: config.pages.url,
		comparator: function(page) {
			return page.get('id');
		}
	});

	return Pages;
})