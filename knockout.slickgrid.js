(function(root, factory) {
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        factory(module.exports = require("knockout"));
    } else if (typeof define === 'function' && define.amd) {
        define(["knockout"], factory);
    } else {
        factory(ko);
    }
}(this, function (ko) {

    ko.bindingHandlers.slickgrid = {

        init: function(element, valueAccessor, allBindings, viewModel)
        {
            var config = allBindings.get('slickgridConfig');
            var grid = new Slick.Grid(element, [], config.columns, config.options);
            $(element).data('slickgrid', grid);

            var handleWindowResize = function() {
                grid.resizeCanvas();
            };

            $(window).on('resize', handleWindowResize);

            if (config.afterInit) {
                config.afterInit(grid);
            }

            ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                if (config.beforeDestroy) {
                    config.beforeDestroy();
                }
                $.removeData(element, 'slickgrid');
                grid.destroy();
                $(window).off('resize', handleWindowResize);

            });
        },

        update: function(element, valueAccessor, allBindingsAccessor, viewModel)
        {
            var items = ko.unwrap(valueAccessor());
            var grid = $(element).data('slickgrid');
            grid.setData(_.isArray(items) ? items : []);
            grid.render();
        }
    };

}));
