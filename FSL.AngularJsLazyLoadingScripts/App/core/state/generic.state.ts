namespace App.Core.State {

    export class GenericState {

        static resolverName: string = 'repository';
        private isLocal: boolean;

        constructor(
            private util: App.Util
        ) {
            this.isLocal = true;
        }

        getState(options: IGenericStateOptions): ng.ui.IState {
            let resolve: any = null;
            let targetFiles: string[] = [];
            let state = <IRouteState>{};

            if (angular.isDefined(options)) {

                var isLazyLoading = false;

                if (angular.isDefined(options.dependencies)) {
                    targetFiles = this.setDependencies(options.dependencies, targetFiles);
                    isLazyLoading = true;
                }

                if (angular.isDefined(options.templateUrl)) {
                    options.templateUrl = this.util.buildTemplateUrl(options.templateUrl);
                }
                
                if (angular.isDefined(options.files)) {
                    targetFiles = this.setFiles(options.files, targetFiles);
                    isLazyLoading = true;
                }

                if (isLazyLoading) {
                    resolve = this.configureLazyLoad(targetFiles, resolve);
                }

                if (options.abstract) state.abstract = options.abstract;
                if (options.template) state.template = options.template;
                if (options.templateUrl) state.templateUrl = options.templateUrl;
                state.controllerAs = options.controllerAs || '$ctrl';
                if (options.data) state.data = options.data;
                if (resolve) {
                    state.resolve = resolve;
                }
                if (options.url) state.url = options.url;
                if (options.views) {
                    state.views = options.views;
                    angular.forEach(state.views, (value: ng.ui.IState, key) => {
                        if (value.templateUrl) {
                            value.templateUrl = this.util.buildTemplateUrl(<string>value.templateUrl)
                        }
                    });
                }
            }

            return state;
        }

        private configureLazyLoad(files: string[], resolve: any): any {
            files = files || [];

            if (files.length > 0) {
                resolve = resolve || {};
                resolve.loadPlugins = ($ocLazyLoad: oc.ILazyLoad) => {
                    return $ocLazyLoad.load([
                        {
                            files: files
                        }
                    ]);
                }
            }

            return resolve;
        }

        private setDependencies(definitions: string[], targetFiles: string[]): string[] {
            definitions = definitions || [];

            if (definitions.length > 0) {
                angular.forEach(definitions, (value, key) => {
                    let dependency = this.util.getDependency(value);
                    if (angular.isDefined(dependency)) {
                        let dependencies = this.isLocal ? dependency.devDependencies : dependency.dependencies;

                        targetFiles = this.setFiles(dependencies, targetFiles);
                    }
                });
            }

            return targetFiles;
        }

        private setFiles(files: string[], targetFiles: string[]): string[] {
            files = files || [];

            if (files.length > 0) {
                angular.forEach(files, (value, key) => {
                    targetFiles.push(value + '?' + this.util.getCacheGuid());
                });
            }

            return targetFiles;
        }
        
        private buildUrlWithParams(resolverUrl: string, $stateParams: ng.ui.IStateParamsService) {
            var newUrl = '';
            var segments = resolverUrl.split('/');
            angular.forEach(segments, (value, key) => {
                if (newUrl.length > 0) newUrl += '/';

                if (value.indexOf(':') !== -1) {
                    newUrl += ($stateParams[value.replace(':', '')] || '').toString();
                } else {
                    newUrl += value;
                }
            });

            return newUrl;
        }
    }

    GenericState.$inject = [
        'util'
    ];
}