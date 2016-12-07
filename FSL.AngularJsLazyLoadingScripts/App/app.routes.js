(function () {
    var AppRoutes = (function () {
        function AppRoutes(utilProvider, $stateProvider, $urlRouterProvider) {
            this.utilProvider = utilProvider;
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            var genericRoute = new App.Core.State.GenericState(this.utilProvider);
            this.$stateProvider.state('menu', genericRoute.getState({
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'home/home'
                    }
                }
            }));
            this.$stateProvider.state('menuhome', genericRoute.getState({
                url: '/menu',
                views: {
                    root: {
                        template: '<fsl-home></fsl-home>'
                    }
                }
            }));
            this.$stateProvider.state('menu.personlist', genericRoute.getState({
                url: '/menu/person',
                dependencies: ['grid'],
                views: {
                    content: {
                        template: '<fsl-person-list></fsl-person-list>'
                    }
                }
            }));
            this.$stateProvider.state('menu.personnew', genericRoute.getState({
                url: '/menu/person/new-person',
                views: {
                    content: {
                        template: '<fsl-person layout="new"></fsl-person>'
                    }
                }
            }));
            this.$stateProvider.state('menu.personedit', genericRoute.getState({
                url: '/menu/person/:person/edit',
                views: {
                    content: {
                        template: '<fsl-person layout="edit"></fsl-person>'
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