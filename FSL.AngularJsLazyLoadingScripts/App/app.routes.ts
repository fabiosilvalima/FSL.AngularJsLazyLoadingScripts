(function () {

    class AppRoutes {

        constructor(
            private utilProvider: App.Util,
            private $stateProvider: ng.ui.IStateProvider,
            private $urlRouterProvider: ng.ui.IUrlRouterProvider
        ) {
            let genericRoute = new App.Core.State.GenericState(this.utilProvider);

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
    }

    AppRoutes.$inject = [
        'utilProvider',
        '$stateProvider',
        '$urlRouterProvider'
    ];

    angular
        .module('app')
        .config(AppRoutes);

})();