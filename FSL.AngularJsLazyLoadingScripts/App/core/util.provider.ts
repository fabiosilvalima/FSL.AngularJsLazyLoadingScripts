namespace App {

    export class Util implements ng.IServiceProvider {

        constructor() {

            this.cacheGuid = '?guid=' + this.generateGuid();
            this.definition = <IDefinition>window['definitions'];

        }

        private cacheGuid: string;
        private definition: IDefinition;

        getDependency(value: string): IDependency {
            return this.definition[value];
        }

        getCacheGuid() {
            return this.cacheGuid
        }

        generateGuid() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };

            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }

        buildTemplateUrl(template: string, layout?: string) {
            return template = 'app/' + template + (layout ? '.' + layout : '') + '.html?' + this.generateGuid();
        }

        $get(): IUtilProvider {
            return {
                getDependency: (value: string) => {
                    return this.getDependency(value);
                },
                getCacheGuid: () => {
                    return this.generateGuid();
                },
                generateGuid: () => {
                    return this.generateGuid();
                },
                buildTemplateUrl: (template: string, layout?: string) => {
                    return this.buildTemplateUrl(template, layout);
                }
            }
        }
    }

    angular
        .module('app.core', [])
        .provider('util', Util);
}