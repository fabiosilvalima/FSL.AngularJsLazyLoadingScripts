(() => {

    class AppConfig {

        constructor(
            private $locationProvider: ng.ILocationProvider,
            private $httpProvider: ng.IHttpProvider,
            private $compileProvider: ng.ICompileProvider
        ) {
            this.$locationProvider.html5Mode(true).hashPrefix('!');
            this.$httpProvider.useApplyAsync(true);
            this.$compileProvider.debugInfoEnabled(false);
        }
    }

    AppConfig.$inject = [
        '$locationProvider',
        '$httpProvider',
        '$compileProvider'
    ];

    angular
        .module('app')
        .config(AppConfig);

})();
