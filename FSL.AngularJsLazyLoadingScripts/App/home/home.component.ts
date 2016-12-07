(() => {

    class HomeComponent implements ng.IComponentOptions {

        controller = App.HomeComponentController;

        templateUrl = ['util', '$attrs', (util: App.IUtilProvider, $attrs: ng.IAttributes) => {
            return util.buildTemplateUrl('home/home', $attrs['layout'] || '');
        }];
    }

    angular
        .module('app')
        .component('fslHome', new HomeComponent());

})();