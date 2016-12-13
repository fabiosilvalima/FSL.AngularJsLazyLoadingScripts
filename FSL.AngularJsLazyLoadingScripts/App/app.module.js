(function () {
    angular
        .module('app', [
        'app.core.state',
        'oc.lazyLoad'
    ]);
})();
angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});
//# sourceMappingURL=app.module.js.map