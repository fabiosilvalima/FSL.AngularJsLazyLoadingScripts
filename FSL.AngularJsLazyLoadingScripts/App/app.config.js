(function () {
    var AppConfig = (function () {
        function AppConfig($locationProvider, $httpProvider, $compileProvider) {
            this.$locationProvider = $locationProvider;
            this.$httpProvider = $httpProvider;
            this.$compileProvider = $compileProvider;
            this.$locationProvider.html5Mode(true).hashPrefix('!');
            this.$httpProvider.useApplyAsync(true);
            this.$compileProvider.debugInfoEnabled(false);
        }
        return AppConfig;
    }());
    AppConfig.$inject = [
        '$locationProvider',
        '$httpProvider',
        '$compileProvider'
    ];
    angular
        .module('app')
        .config(AppConfig);
})();
