define(['jquery', 'underscore', 'backbone', 'text!templates/page.html'], function($, _, Backbone, template) {
	var PageView = Backbone.View.extend({
		tagName: 'div',
		className: 'panel panel-default',
		'template': _.template(template),
		render: function() {
			this.$el.html(this.template(this.model.attributes));
			if(this.model.attributes.checkedout) {
				this.$el.addClass('panel--locked');
			}
			return this;
		}
	});

	return PageView;
});