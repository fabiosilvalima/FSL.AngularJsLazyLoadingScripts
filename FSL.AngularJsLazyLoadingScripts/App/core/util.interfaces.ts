namespace App {

    export interface IDependency {
        devDependencies?: Array<string>;
        dependencies?: Array<string>;
    }

    export interface IDefinition {
        jqGrid?: IDependency;
        iCheck?: IDependency;
    }

    export interface IUtilProvider {
        generateGuid: () => string;
        buildTemplateUrl: (template: string, layout?: string) => string;
        getCacheGuid: () => string;
        getDependency: (value: string) => IDependency;
    }

}