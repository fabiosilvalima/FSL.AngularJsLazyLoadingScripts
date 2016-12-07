namespace App {

    export class HomeComponentController implements ng.IComponentController {
        
        constructor(
            private $timeout: ng.ITimeoutService,
            private $element: ng.IRootElementService,
            private util: App.IUtilProvider
        ) {

        }

        $onInit = () => {
            
        }

    }

    HomeComponentController.$inject = [
        '$timeout',
        '$element',
        'util'
    ];

}