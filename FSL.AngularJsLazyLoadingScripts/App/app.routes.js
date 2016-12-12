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
                        template: 'The page does not use GRID. Go to <a href="person">Person Page</a>'
                    }
                }
            }));
            this.$stateProvider.state('homeperson', genericRoute.getState({
                url: '/person',
                dependencies: ['grid'],
                views: {
                    root: {
                        template: 'That page uses GRID'
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
//# sourceMappingURL=app.routes.js.map