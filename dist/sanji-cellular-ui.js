!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("sanji-core-ui")):"function"==typeof define&&define.amd?define(["angular","sanji-core-ui"],t):"object"==typeof exports?exports.sjCellular=t(require("angular"),require("sanji-core-ui")):n.sjCellular=t(n.angular,n["sanji-core-ui"])}(this,function(n,t){return function(n){function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,t,e){Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=43)}([function(n,t){"use strict";t.__esModule=!0,t.default=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var i=e(15),r=a(i);t.default=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}()},function(n,t,e){n.exports=!e(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=n},function(n,e){n.exports=t},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t){var e=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(n,t){n.exports=function(n){try{return!!n()}catch(t){return!0}}},function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t,e){var a=e(18),i=e(23),r=e(25),s=Object.defineProperty;t.f=e(2)?Object.defineProperty:function(n,t,e){if(a(n),t=r(t,!0),a(e),i)try{return s(n,t,e)}catch(l){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){"use strict";t.a=function(n){"ngInject";n.translations("en",e(29)),n.translations("zh-tw",e(30))}},function(n,t,e){"use strict";var a=e(0),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=e(1),s=r&&r.__esModule?function(){return r.default}:function(){return r};e.d(s,"a",s);var l=["$q","rest","exception","_","pathToRegexp","$filter","logger"],o=e(28),c=function(){function n(){for(var t=this,e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];switch(i()(this,n),n.$inject.forEach(function(n,e){return t[n]=a[e]}),o.get.type){case"collection":this.data=[];break;case"model":this.data={};break;default:this.data=[]}}return s()(n,[{key:"_transform",value:function(n){switch(o.get.type){case"collection":return this._.map(n,function(n,t){return{title:(o.get.titlePrefix||"tab")+t,content:n,formOptions:{},fields:o.fields}});case"model":return{content:n,formOptions:{},fields:o.fields};default:return this._.map(n,function(n,t){return{title:(o.get.titlePrefix||"tab")+t,content:n,formOptions:{},fields:o.fields}})}}},{key:"get",value:function(){var n=this,t=this.pathToRegexp.compile(o.get.url);return this.rest.get(t(),void 0).then(function(t){n.data=n._transform(t.data)}).catch(function(t){return n.exception.catcher("[CellularService] Get data error.")(t),n.$q.reject()})}},{key:"update",value:function(n){var t=this,e=this.pathToRegexp.compile(o.put.url),a=void 0!==n.content.id?e({id:n.content.id}):e();return this.rest.put(a,n.content,n.formOptions.files,void 0).then(function(n){return t.logger.success(t.$filter("translate")("CELLULAR_FORM_SAVE_SUCCESS"),n.data),n.data}).catch(function(n){return t.exception.catcher("[CellularService] Update data error.")(n),t.$q.reject()})}}]),n}();c.$inject=l,t.a=c},function(n,t,e){"use strict";var a=e(3),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=e(4),s=r&&r.__esModule?function(){return r.default}:function(){return r};e.d(s,"a",s);var l=e(40),o=l&&l.__esModule?function(){return l.default}:function(){return l};e.d(o,"a",o);var c=e(31),u=e(32),d=i.a.module("sanji.cellular.form",[s.a]);d.component("sanjiCellularFormContainer",c.a),d.component("sanjiCellularForm",u.a),t.a=d=d.name},function(n,t,e){"use strict";var a=e(3),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=e(4),s=r&&r.__esModule?function(){return r.default}:function(){return r};e.d(s,"a",s);var l=e(41),o=l&&l.__esModule?function(){return l.default}:function(){return l};e.d(o,"a",o);var c=e(27),u=c&&c.__esModule?function(){return c.default}:function(){return c};e.d(u,"a",u);var d=e(34),L=e(42),f=L&&L.__esModule?function(){return L.default}:function(){return L};e.d(f,"a",f);var _=e(36),p=e(38),m=i.a.module("sanji.cellular.info",[s.a]);m.component("sanjiCellularInfoContainer",_.a),m.component("sanjiCellularInfo",p.a),m.component("cellularSignal",d.a),t.a=m=m.name},function(n,t,e){"use strict";var a={template:'<sanji-window window-id="sanji-cellular-ui"\n              window-name="{{\'CELLULAR\' | translate}}" show-loading-btn>\n              <sanji-window-state default-state\n                state-name="sanji-info"\n                link-name="{{\'CELLULAR_WINDOW_INFO\' | translate}}"\n                icon="info">\n                <sanji-cellular-info-container></sanji-cellular-info-container>\n              </sanji-window-state>\n              <sanji-window-state\n                state-name="sanji-form"\n                link-name="{{\'CELLULAR_FORM_SETTING\' | translate}}"\n                icon="settings">\n                <sanji-cellular-form-container></sanji-cellular-form-container>\n              </sanji-window-state>\n            </sanji-window>'};t.a=a},function(n,t,e){n.exports={"default":e(16),__esModule:!0}},function(n,t,e){e(26);var a=e(6).Object;n.exports=function(n,t,e){return a.defineProperty(n,t,e)}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,e){var a=e(5);n.exports=function(n){if(!a(n))throw TypeError(n+" is not an object!");return n}},function(n,t,e){var a=e(17);n.exports=function(n,t,e){if(a(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,a){return n.call(t,e,a)};case 3:return function(e,a,i){return n.call(t,e,a,i)}}return function(){return n.apply(t,arguments)}}},function(n,t,e){var a=e(5),i=e(8).document,r=a(i)&&a(i.createElement);n.exports=function(n){return r?i.createElement(n):{}}},function(n,t,e){var a=e(8),i=e(6),r=e(19),s=e(22),l="prototype",o=function(n,t,e){var c,u,d,L=n&o.F,f=n&o.G,_=n&o.S,p=n&o.P,m=n&o.B,E=n&o.W,v=f?i:i[t]||(i[t]={}),A=v[l],b=f?a:_?a[t]:(a[t]||{})[l];f&&(e=t);for(c in e)u=!L&&b&&void 0!==b[c],u&&c in v||(d=u?b[c]:e[c],v[c]=f&&"function"!=typeof b[c]?e[c]:m&&u?r(d,a):E&&b[c]==d?function(n){var t=function(t,e,a){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,a)}return n.apply(this,arguments)};return t[l]=n[l],t}(d):p&&"function"==typeof d?r(Function.call,d):d,p&&((v.virtual||(v.virtual={}))[c]=d,n&o.R&&A&&!A[c]&&s(A,c,d)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,n.exports=o},function(n,t,e){var a=e(9),i=e(24);n.exports=e(2)?function(n,t,e){return a.f(n,t,i(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){n.exports=!e(2)&&!e(7)(function(){return 7!=Object.defineProperty(e(20)("div"),"a",{get:function(){return 7}}).a})},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,e){var a=e(5);n.exports=function(n,t){if(!a(n))return n;var e,i;if(t&&"function"==typeof(e=n.toString)&&!a(i=e.call(n)))return i;if("function"==typeof(e=n.valueOf)&&!a(i=e.call(n)))return i;if(!t&&"function"==typeof(e=n.toString)&&!a(i=e.call(n)))return i;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var a=e(21);a(a.S+a.F*!e(2),"Object",{defineProperty:e(9).f})},function(n,t){},function(n,t){n.exports={get:{url:"/network/cellulars",type:"collection",titlePrefix:"cellular"},put:{url:"/network/cellulars/:id",type:"model"},fields:[{key:"enable",type:"switch",templateOptions:{label:"CELLULAR_FORM_LABEL_ENABLE",required:!0}},{key:"apn",type:"input",templateOptions:{label:"CELLULAR_FORM_LABEL_APN",required:!0}},{key:"pinCode",type:"input",templateOptions:{label:"CELLULAR_FORM_LABEL_PINCODE",required:!0}},{key:"keepalive.enable",type:"switch",templateOptions:{label:"CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE",required:!0}},{key:"keepalive.targetHost",type:"input",templateOptions:{label:"CELLULAR_FORM_LABEL_TARGET_HOST",required:!0},hideExpression:"!model.keepalive.enable"},{key:"keepalive.intervalSec",type:"number",templateOptions:{label:"CELLULAR_FORM_LABEL_PING_INTERVAL",min:0,max:null,required:!0},hideExpression:"!model.keepalive.enable"}]}},function(n,t){n.exports={CELLULAR:"Cellular",CELLULAR_WINDOW_INFO:"Information",CELLULAR_SEC:"sec.",CELLULAR_FORM_SETTING:"Setting",CELLULAR_FORM_LABEL_ENABLE:"Enable",CELLULAR_FORM_LABEL_APN:"APN",CELLULAR_FORM_LABEL_PINCODE:"Pin Code",CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE:"Enable Keep-alive",CELLULAR_FORM_LABEL_TARGET_HOST:"Target Host",CELLULAR_FORM_LABEL_PING_INTERVAL:"Ping Interval",CELLULAR_FORM_SAVE:"Save",CELLULAR_FORM_SAVE_SUCCESS:"Update data successfully.",CELLULAR_INFO_BASIC:"Basic Information",CELLULAR_INFO_OPERATOR:"Operator Name",CELLULAR_INFO_CONNECTION_STATUS:"Connection Status",CELLULAR_INFO_APN:"APN",CELLULAR_INFO_MODE:"Mode",CELLULAR_INFO_LAC:"LAC",CELLULAR_INFO_IMEI:"IMEI",CELLULAR_INFO_PIN_REMAIN_TIME:"PIN Remain Times",CELLULAR_INFO_NETWORK:"Network Information",CELLULAR_INFO_IP:"IP",CELLULAR_INFO_NETMASK:"Netmask",CELLULAR_INFO_GATEWAY:"Gateway",CELLULAR_INFO_DNS:"DNS",CELLULAR_INFO_USAGE:"Usage",CELLULAR_INFO_TRANSMIT_USAGE:"Transmit",CELLULAR_INFO_RECEIVE_USAGE:"Receive",CELLULAR_INFO_KEEPALIVE:"Keep-alive",CELLULAR_INFO_STATUS:"Status",CELLULAR_INFO_TARGET_HOST:"Target Host",CELLULAR_INFO_PING_INTERVAL:"Ping Interval",CELLULAR_SIGNAL_CHART_TITLE:"Profile Strength Meter",CELLULAR_INFO_NO_MODULE_MSG:"Please insert cellular module."}},function(n,t){n.exports={CELLULAR:"Cellular",CELLULAR_FORM_SETTING:"設定",CELLULAR_FORM_LABEL_ENABLE:"啟用",CELLULAR_FORM_LABEL_APN:"APN",CELLULAR_FORM_LABEL_PINCODE:"Pin 碼",CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE:"啟用保持連線",CELLULAR_FORM_LABEL_TARGET_HOST:"目標主機",CELLULAR_FORM_LABEL_PING_INTERVAL:"Ping 間隔",CELLULAR_FORM_SAVE:"儲存",CELLULAR_FORM_SAVE_SUCCESS:"更新資料成功",CELLULAR_INFO_BASIC:"基本資訊",CELLULAR_INFO_OPERATOR:"營運商名稱",CELLULAR_INFO_CONNECTION_STATUS:"連線狀態",CELLULAR_INFO_APN:"APN",CELLULAR_INFO_MODE:"模式",CELLULAR_INFO_LAC:"位置區域碼",CELLULAR_INFO_IMEI:"IMEI",CELLULAR_INFO_PIN_REMAIN_TIME:"PIN 輸入剩餘次數",CELLULAR_INFO_NETWORK:"網路資訊",CELLULAR_INFO_IP:"網路位址",CELLULAR_INFO_NETMASK:"網路遮罩",CELLULAR_INFO_GATEWAY:"閘道器",CELLULAR_INFO_DNS:"網域伺服器",CELLULAR_INFO_USAGE:"使用量",CELLULAR_INFO_TRANSMIT_USAGE:"傳輸",CELLULAR_INFO_RECEIVE_USAGE:"接收",CELLULAR_INFO_KEEPALIVE:"保持連線",CELLULAR_INFO_STATUS:"狀態",CELLULAR_INFO_TARGET_HOST:"目標主機",CELLULAR_INFO_PING_INTERVAL:"Ping 間隔",CELLULAR_SIGNAL_CHART_TITLE:"訊號強度圖",CELLULAR_INFO_NO_MODULE_MSG:"請插入 Cellular 模組"}},function(n,t,e){"use strict";var a={template:'<sanji-cellular-form data="vm.data" on-submit="vm.onSave(data)"></sanji-cellular-form>',controller:"CellularFormContainerController",controllerAs:"vm"};t.a=a},function(n,t,e){"use strict";var a=e(33),i={bindings:{tabs:"<data",submitCallback:"&onSubmit"},templateUrl:"sanji-cellular-form.tpl.html",controller:a.a,controllerAs:"vm"};t.a=i},function(n,t,e){"use strict";var a=e(0),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=e(1),s=r&&r.__esModule?function(){return r.default}:function(){return r};e.d(s,"a",s);var l=[],o=function(){function n(){for(var t=this,e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];i()(this,n),n.$inject.forEach(function(n,e){return t[n]=a[e]})}return s()(n,[{key:"save",value:function(n){this.submitCallback({data:n})}}]),n}();o.$inject=l,t.a=o},function(n,t,e){"use strict";var a=e(35),i={bindings:{signal:"<"},templateUrl:"sanji-cellular-signal.tpl.html",controller:a.a,controllerAs:"vm"};t.a=i},function(n,t,e){"use strict";var a=e(0),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=[],s=function l(){for(var n=this,t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];i()(this,l),l.$inject.forEach(function(t,a){return n[t]=e[a]})};s.$inject=r,t.a=s},function(n,t,e){"use strict";var a=e(37),i={template:'<sanji-cellular-info data="vm.data"></sanji-cellular-info>',controller:a.a,controllerAs:"vm"};t.a=i},function(n,t,e){"use strict";var a=e(0),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=e(1),s=r&&r.__esModule?function(){return r.default}:function(){return r};e.d(s,"a",s);var l=["$scope","sanjiWindowService","cellularService"],o="sanji-cellular-ui",c=function(){function n(){for(var t=this,e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];i()(this,n),n.$inject.forEach(function(n,e){return t[n]=a[e]}),this.sanjiWindowMgr=this.sanjiWindowService.get(o),this.data=this.cellularService.data,this.$scope.$on("sj:window:refresh",this.onRefresh.bind(this))}return s()(n,[{key:"$onInit",value:function(){var n=this;this.sanjiWindowMgr.promise=this.cellularService.get().then(function(){n.data=n.cellularService.data})}},{key:"onRefresh",value:function(n,t){t.id===o&&this.$onInit()}}]),n}();c.$inject=l,t.a=c},function(n,t,e){"use strict";var a=e(39),i={bindings:{tabs:"<data"},templateUrl:"sanji-cellular-info.tpl.html",controller:a.a,controllerAs:"vm"};t.a=i},function(n,t,e){"use strict";var a=e(0),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=e(1),s=r&&r.__esModule?function(){return r.default}:function(){return r};e.d(s,"a",s);var l=[],o=function(){function n(){for(var t=this,e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];i()(this,n),n.$inject.forEach(function(n,e){return t[n]=a[e]})}return s()(n,[{key:"save",value:function(n){this.submitCallback({data:n})}}]),n}();o.$inject=l,t.a=o},function(n,t){var e,a=window.angular;try{e=a.module(["ng"])}catch(i){e=a.module("ng",[])}var r='<div ng-if="0 === vm.tabs.length" layout="column" layout-align="center center">\n    <div flex>\n      <ng-md-icon icon="portable_wifi_off" size="100" style="width: 100px; height: 100px;"></ng-md-icon>\n    </div>\n    <md-subheader class="md-warn">\n      <span translate="CELLULAR_INFO_NO_MODULE_MSG"></span>\n    </md-subheader>\n  </div>\n  <md-tabs ng-if="0 < vm.tabs.length" md-dynamic-height md-border-bottom>\n    <md-tab ng-repeat="tab in vm.tabs track by $index"\n    label="{{::tab.content.name}}">\n      <form ng-submit="vm.save(tab)"\n        role="form" layout="column" layout-padding novalidate>\n          <formly-form model="tab.content"\n          options="tab.formOptions" fields="tab.fields" form="tab.form">\n            <div layout layout-align="end center">\n              <md-button type="submit" class="md-raised md-primary"\n              aria-label="sumit"\n              ng-disabled="tab.form.$invalid">\n                <sapn translate="CELLULAR_FORM_SAVE"></span>\n              </md-button>\n            </div>\n          </formly-form>\n      </form>\n    </md-tab>\n  </md-tabs>';e.run(["$templateCache",function(n){n.put("sanji-cellular-form.tpl.html",r)}]),n.exports=r},function(n,t){var e,a=window.angular;try{e=a.module(["ng"])}catch(i){e=a.module("ng",[])}var r='<section class="cellular-signal">\n    <div class="progress-meter">\n      <div class="horizontal-bars">\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n        <div class="horizontal-bar"></div>\n      </div>\n      <div class="circle">\n        <div class="circle-text">\n          <span ng-bind="vm.signal"></span></br>\n          <span class="circle-text-under">dBm</span>\n        </div>\n      </div>\n      <span class="meter-text" translate="CELLULAR_SIGNAL_CHART_TITLE"></span>\n      <div class="signal-bars">\n        <div class="signal-bar" ng-class="{\'ten-percent\': -125 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'ten-percent-top\': -125 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'twenty-percent\': -110 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'twenty-percent-top\': -110 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'thirty-percent\': -110 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'thirty-percent-top\': -110 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'fifty-percent\': -90 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'fifty-percent-top\': -90 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'sixty-percent\': -70 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'sixty-percent-top\': -70 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'eighty-percent\': -70 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'eighty-percent-top\': -70 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'ninety-percent\': -60 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'ninety-percent-top\': -60 <= vm.signal}"></div>\n        </div>\n        <div class="signal-bar" ng-class="{\'one-hundred-percent\': -60 <= vm.signal}">\n          <div class="signal-bar-top" ng-class="{\'one-hundred-percent-top\': -60 <= vm.signal}"></div>\n        </div>\n      </div>\n    </div>\n\n  </section>';e.run(["$templateCache",function(n){n.put("sanji-cellular-signal.tpl.html",r)}]),n.exports=r},function(n,t){var e,a=window.angular;try{e=a.module(["ng"])}catch(i){e=a.module("ng",[])}var r='<div ng-if="0 === vm.tabs.length" layout="column" layout-align="center center">\n    <div flex>\n      <ng-md-icon icon="portable_wifi_off" size="100" style="width: 100px; height: 100px;"></ng-md-icon>\n    </div>\n    <md-subheader class="md-warn">\n      <span translate="CELLULAR_INFO_NO_MODULE_MSG"></span>\n    </md-subheader>\n  </div>\n  <md-tabs md-dynamic-height md-border-bottom ng-if="0 < vm.tabs.length">\n    <md-tab ng-repeat="tab in vm.tabs track by $index"\n    label="{{::tab.content.name}}">\n      <cellular-signal signal="tab.content.signal"></cellular-signal>\n      <md-list>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_BASIC"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_CONNECTION_STATUS"></p>\n          <span ng-bind="tab.content.status"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_OPERATOR"></p>\n          <span ng-bind="tab.content.operatorName"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_APN"></p>\n          <span ng-bind="tab.content.apn"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_MODE"></p>\n          <span ng-bind="tab.content.mode"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_LAC"></p>\n          <span ng-bind="tab.content.lac"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_IMEI"></p>\n          <span ng-bind="tab.content.imei"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_PIN_REMAIN_TIME"></p>\n          <span ng-bind="tab.content.pinRetryRemain"></span>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_NETWORK"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_IP"></p>\n          <span ng-bind="tab.content.ip"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_NETMASK"></p>\n          <span ng-bind="tab.content.netmask"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_GATEWAY"></p>\n          <span ng-bind="tab.content.gateway"></span>\n        </md-list-item>\n        <md-list-item ng-repeat="dns in tab.content.dns track by $index">\n          <p class="md-body-2">{{\'CELLULAR_INFO_DNS\' | translate}} {{$index + 1}}</p>\n          <span ng-bind="dns || \'\'"></span>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_USAGE"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_TRANSMIT_USAGE"></p>\n          <span ng-bind="tab.content.usage.txkbyte | kbFmt:0"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_RECEIVE_USAGE"></p>\n          <span ng-bind="tab.content.usage.rxkbyte | kbFmt:0"></span>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-subheader class="md-accent">\n          <span translate="CELLULAR_INFO_KEEPALIVE"></span>\n        </md-subheader>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_STATUS"></p>\n          <span ng-bind="tab.content.keepalive.enable"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_TARGET_HOST"></p>\n          <span ng-bind="tab.content.keepalive.targetHost"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="CELLULAR_INFO_PING_INTERVAL"></p>\n          <span ng-bind="tab.content.keepalive.intervalSec"></span>\n          <span translate="CELLULAR_SEC"></span>\n        </md-list-item>\n      </md-list>\n    </md-tab>\n  </md-tabs>';e.run(["$templateCache",function(n){n.put("sanji-cellular-info.tpl.html",r)}]),n.exports=r},function(n,t,e){"use strict";var a=e(3),i=a&&a.__esModule?function(){return a.default}:function(){return a};e.d(i,"a",i);var r=e(4),s=r&&r.__esModule?function(){return r.default}:function(){return r};e.d(s,"a",s);var l=e(13),o=e(12),c=e(10),u=e(11),d=e(14),L=i.a.module("sanji.cellular",[s.a,l.a,o.a]);L.config(c.a),L.service("cellularService",u.a),L.component("sanjiCellularWindow",d.a),t.default=L=L.name}])});