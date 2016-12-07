(function () {
    var HomeComponent = (function () {
        function HomeComponent() {
            this.controller = App.HomeComponentController;
            this.templateUrl = ['util', '$attrs', function (util, $attrs) {
                    return util.buildTemplateUrl('home/home', $attrs['layout'] || '');
                }];
        }
        return HomeComponent;
    }());
    angular
        .module('app')
        .component('fslHome', new HomeComponent());
})();
//# sourceMappingURL=home.component.js.map