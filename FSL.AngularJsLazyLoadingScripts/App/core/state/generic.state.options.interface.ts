namespace App.Core.State {

    export interface IGenericStateOptions {
        abstract?: boolean;
        controllerAs?: string;
        data?: any;
        dependencies?: string[];
        files?: string[];
        templateUrl?: string;
        template?: string;
        url?: string;
        views?: { [name: string]: ng.ui.IState };
    }

}