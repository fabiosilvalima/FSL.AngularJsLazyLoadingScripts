# FSL.AngularJsLazyLoadingScripts

**AngularJS reloaded: lazy loading files**

In this article I will show you how to load your scripts and styles using AngularJS and UI router resolve just when it's needed.

---

What is in the source code?
---

#### <i class="icon-file"></i> FSL.AngularJsLazyLoadingScripts

- Angular files in typescript format
- 2 routes for demonstration os lazy loading scripts and styles

> **Remarks:**

> - I created a typescript application in Visual Studio 2015. 
> - Use the same virtual directory from this article

---

What is the goal?
---

- Use a combination of lazy loading AngularJS plugin and AngularJS UI router resolve to do all stuff before page load.

**Assumptions:**

- You need to create a virtual directory in your IIS for that application.


Explaining...
---

You have a page "A" that uses jqGrid plugin and two other pages "B" and "C" that does not use that plugin. And you normally references jqGrid plugin in your master page, so pages "A", "B" and "C" will load that script plugin but only page "A" will need it. This is a network performance issue and it becomes complex with many scripts.


**app.definition.ts**
```javascript
var definitions = function () {
    var baseFolder = '';
    return {
        grid: {
            devDependencies: [
                baseFolder + 'Css/plugins/jQueryUI/jquery-ui-1.10.4.custom.min.css',
                baseFolder + 'Css/plugins/jqGrid/ui.jqgrid.css',
                baseFolder + 'Css/style.jqGrid.css',
                baseFolder + 'Scripts/plugins/jqGrid/i18n/grid.locale-pt.js',
                baseFolder + 'Scripts/plugins/jqGrid/jquery.jqGrid.min.js',
                baseFolder + 'Scripts/plugins/jquery-ui/jquery-ui.min.js'
            ]
        }
    };
} ();
```

**app.routes.ts**
```javascript
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
                        template: 'The page does not use GRID scripts. Go to <a ui-sref="homeperson">Person Page</a>'
                    }
                }
            }));
            this.$stateProvider.state('homeperson', genericRoute.getState({
                url: '/person',
                dependencies: ['grid'],
                views: {
                    root: {
                        template: 'That page uses GRID scripts. Back to <a ui-sref="homemenu">Home Page</a>'
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
```

**core/state/generic.state.ts**

```javascript
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
```
----------

References:
---

- More at my blog [click here][1];

Licence:
---

- Licence MIT


  [1]: http://www.fabiosilvalima.com.br
