(() => {
    angular
        .module('app', [
            'app.core.state'
        ]);
})();

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});