(() => {
    angular
        .module('app', [
            'app.pessoa'
        ]);
})();

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});