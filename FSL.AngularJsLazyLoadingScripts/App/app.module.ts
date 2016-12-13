(() => {
    angular
        .module('app', [
            'app.core.state',
            'oc.lazyLoad'
        ]);
})();

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});