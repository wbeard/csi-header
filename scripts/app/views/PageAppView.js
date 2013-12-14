define(['jquery', 'underscore', 'backbone',
		'collections/pages', 'views/page'], 
	function($, _, Backbone,
			 Pages, PageView) {
		var pages = new Pages();

		var PageAppView = Backbone.View.extend({
			el: '#pages_head',
			initialize: function() {

				this.listenTo(pages, 'all', this.addAll);

				pages.fetch();
			},
			addOne: function(page) {
				var view = new PageView({ model: page });
                this.$el.append(view.render().el);
			},
			addAll: function () {
                this.$el.html('');
                pages.each(this.addOne, this);
            }
		});

		return PageAppView;
})