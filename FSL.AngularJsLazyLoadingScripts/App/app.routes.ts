(function () {

    class AppRoutes {

        constructor(
            private utilProvider: App.Util,
            private $stateProvider: ng.ui.IStateProvider,
            private $urlRouterProvider: ng.ui.IUrlRouterProvider
        ) {
            let genericRoute = new App.Core.State.GenericState(this.utilProvider);

            this.$urlRouterProvider.otherwise("/");
            this.$stateProvider.state('menu', genericRoute.getState({
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'home/home'
                    }
                }
            }));
            this.$stateProvider.state('menuhome', genericRoute.getState({
                url: '/',
                views: {
                    root: {
                        template: '<fsl-home></fsl-home>'
                    }
                }
            }));
            this.$stateProvider.state('menu.personlist', genericRoute.getState({
                url: '/person',
                //dependencies: ['grid'],
                views: {
                    content: {
                        template: '<fsl-person-list></fsl-person-list>'
                    }
                }
            }));
            this.$stateProvider.state('menu.personnew', genericRoute.getState({
                url: '/person/new-person',
                views: {
                    content: {
                        template: '<fsl-person layout="new"></fsl-person>'
                    }
                }
            }));
            this.$stateProvider.state('menu.personedit', genericRoute.getState({
                url: '/person/:person/edit',
                views: {
                    content: {
                        template: '<fsl-person layout="edit"></fsl-person>'
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