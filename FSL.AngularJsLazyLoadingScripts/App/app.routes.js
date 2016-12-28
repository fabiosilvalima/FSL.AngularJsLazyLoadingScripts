(function () {
    var AppRoutes = (function () {
        function AppRoutes(utilProvider, $stateProvider, $urlRouterProvider) {
            this.utilProvider = utilProvider;
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            var genericRoute = new App.Core.State.GenericState(this.utilProvider);
            this.$urlRouterProvider.otherwise("/login");
            this.$stateProvider.state('homemenu', genericRoute.getState({
                url: '/',
                views: {
                    root: {
                        template: 'The page does not use GRID scripts. Go to <a ui-sref="homeperson">Person Page</a>'
                    }
                }
            }));
            this.$stateProvider.state('homeperson', genericRoute.getState({
                url: '/person',
                dependencies: ['grid'],
                views: {
                    root: {
                        template: 'That page uses GRID scripts. Back to <a ui-sref="homemenu">Home Page</a>'
                    }
                }
            }));
        }
        return AppRoutes;
    }());
    AppRoutes.$inject = [
        'utilProvider',
        '$stateProvider',
        '$urlRouterProvider'
    ];
    angular
        .module('app')
        .config(AppRoutes);
})();
