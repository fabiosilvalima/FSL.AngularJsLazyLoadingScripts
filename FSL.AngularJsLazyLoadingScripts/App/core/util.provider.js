var App;
(function (App) {
    var Util = (function () {
        function Util() {
            this.cacheGuid = '?guid=' + this.generateGuid();
            this.definition = window['Definitions'];
        }
        Util.prototype.getDependency = function (value) {
            return this.definition[value];
        };
        Util.prototype.getCacheGuid = function () {
            return this.cacheGuid;
        };
        Util.prototype.generateGuid = function () {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        };
        Util.prototype.buildTemplateUrl = function (template, layout) {
            return template = 'app/' + template + (layout ? '.' + layout : '') + '.html?' + this.generateGuid();
        };
        Util.prototype.$get = function () {
            var _this = this;
            return {
                getDependency: function (value) {
                    return _this.getDependency(value);
                },
                getCacheGuid: function () {
                    return _this.generateGuid();
                },
                generateGuid: function () {
                    return _this.generateGuid();
                },
                buildTemplateUrl: function (template, layout) {
                    return _this.buildTemplateUrl(template, layout);
                }
            };
        };
        return Util;
    }());
    App.Util = Util;
    angular
        .module('app.core', [])
        .provider('util', Util);
})(App || (App = {}));
//# sourceMappingURL=util.provider.js.map