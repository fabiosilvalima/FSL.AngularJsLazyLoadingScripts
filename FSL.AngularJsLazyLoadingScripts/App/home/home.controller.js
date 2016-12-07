var App;
(function (App) {
    var HomeComponentController = (function () {
        function HomeComponentController($timeout, $element, util) {
            this.$timeout = $timeout;
            this.$element = $element;
            this.util = util;
            this.$onInit = function () {
            };
        }
        return HomeComponentController;
    }());
    App.HomeComponentController = HomeComponentController;
    HomeComponentController.$inject = [
        '$timeout',
        '$element',
        'util'
    ];
})(App || (App = {}));
//# sourceMappingURL=home.controller.js.map