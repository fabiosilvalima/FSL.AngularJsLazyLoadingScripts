var App;
(function (App) {
    var Core;
    (function (Core) {
        var State;
        (function (State) {
            var GenericState = (function () {
                function GenericState(util) {
                    this.util = util;
                    this.isLocal = true;
                }
                GenericState.prototype.getState = function (options) {
                    var _this = this;
                    var resolve = null;
                    var targetFiles = [];
                    var state = {};
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
                        if (options.abstract)
                            state.abstract = options.abstract;
                        if (options.template)
                            state.template = options.template;
                        if (options.templateUrl)
                            state.templateUrl = options.templateUrl;
                        state.controllerAs = options.controllerAs || '$ctrl';
                        if (options.data)
                            state.data = options.data;
                        if (resolve) {
                            console.log(resolve);
                            state.resolve = resolve;
                        }
                        if (options.url)
                            state.url = options.url;
                        if (options.views) {
                            state.views = options.views;
                            angular.forEach(state.views, function (value, key) {
                                if (value.templateUrl) {
                                    value.templateUrl = _this.util.buildTemplateUrl(value.templateUrl);
                                }
                            });
                        }
                    }
                    return state;
                };
                GenericState.prototype.configureLazyLoad = function (files, resolve) {
                    files = files || [];
                    if (files.length > 0) {
                        resolve = resolve || {};
                        resolve.loadPlugins = function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    files: files
                                }
                            ]);
                        };
                        console.log('files', files);
                    }
                    return resolve;
                };
                GenericState.prototype.setDependencies = function (definitions, targetFiles) {
                    var _this = this;
                    definitions = definitions || [];
                    if (definitions.length > 0) {
                        angular.forEach(definitions, function (value, key) {
                            var dependency = _this.util.getDependency(value);
                            if (angular.isDefined(dependency)) {
                                var dependencies = _this.isLocal ? dependency.devDependencies : dependency.dependencies;
                                targetFiles = _this.setFiles(dependencies, targetFiles);
                            }
                        });
                    }
                    return targetFiles;
                };
                GenericState.prototype.setFiles = function (files, targetFiles) {
                    var _this = this;
                    files = files || [];
                    if (files.length > 0) {
                        angular.forEach(files, function (value, key) {
                            targetFiles.push(value + '?' + _this.util.getCacheGuid());
                        });
                    }
                    return targetFiles;
                };
                GenericState.prototype.buildUrlWithParams = function (resolverUrl, $stateParams) {
                    var newUrl = '';
                    var segments = resolverUrl.split('/');
                    angular.forEach(segments, function (value, key) {
                        if (newUrl.length > 0)
                            newUrl += '/';
                        if (value.indexOf(':') !== -1) {
                            newUrl += ($stateParams[value.replace(':', '')] || '').toString();
                        }
                        else {
                            newUrl += value;
                        }
                    });
                    return newUrl;
                };
                GenericState.resolverName = 'repository';
                return GenericState;
            }());
            State.GenericState = GenericState;
            GenericState.$inject = [
                'util'
            ];
        })(State = Core.State || (Core.State = {}));
    })(Core = App.Core || (App.Core = {}));
})(App || (App = {}));
//# sourceMappingURL=generic.state.js.map