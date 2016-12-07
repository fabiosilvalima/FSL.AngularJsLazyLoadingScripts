namespace App {

    export interface IUtilProvider {
        generateGuid: () => string;
        buildTemplateUrl: (template: string, layout?: string) => string;
    }

}