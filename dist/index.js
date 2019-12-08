"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var _regeneratorRuntime=_interopDefault(require("@babel/runtime/regenerator/index.js")),_classCallCheck=_interopDefault(require("@babel/runtime/helpers/classCallCheck.js")),_createClass=_interopDefault(require("@babel/runtime/helpers/createClass.js")),request=_interopDefault(require("request")),requiredTokenFields=["number","exp_month","exp_year","cvc"],requiredPaymentFields=["amount","currency","source"];function isObject(e){return!!e&&e.constructor===Object}function validatePayload(e){return isObject(e)?e.hasOwnProperty("data")?e.data.hasOwnProperty("attributes")?{valid:!0}:{valid:!1,message:"Invalid payload. Missing 'data.attributes' property."}:{valid:!1,message:"Invalid payload. Missing 'data' property."}:{valid:!1,message:"Data must be an Object."}}var validateTokenPayload=function(t){var e=validatePayload(t);return e.valid?(requiredTokenFields.forEach(function(e){if(!t.data.attributes.hasOwnProperty(e))throw new Error("Invalid payload. Missing 'data.attributes.".concat(e,"' property."))}),{valid:!0}):e},validatePaymentPayload=function(t){var e=validatePayload(t);return e.valid?(requiredPaymentFields.forEach(function(e){if(!t.data.attributes.hasOwnProperty(e)||"source"===e){if("source"!==e||!t.data.attributes.source)throw new Error("Invalid payload. Missing 'data.attributes.".concat(e,"' property."));if(!t.data.attributes.source.hasOwnProperty("id"))throw new Error("Invalid payload. Missing 'data.attributes.".concat(e,".id' property."));if(!t.data.attributes.source.hasOwnProperty("type"))throw new Error("Invalid payload. Missing 'data.attributes.".concat(e,".type' property."))}}),{valid:!0}):e},PAYMONGO_API_URL="https://api.paymongo.com/v1";function makeRequest(o){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(a,n){var e=o.secret,t=o.method,r=o.path,s=o.data,u={method:t,url:"".concat(PAYMONGO_API_URL,"/").concat(r),json:!0,auth:{username:e,password:""}};s&&(u.body=s),request(u,function(e,t,r){e&&n(e),a(r)})}));case 1:case"end":return e.stop()}})}var createToken=function(t,r){var a;return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if((a=validateTokenPayload(r)).valid){e.next=3;break}throw new Error(a.message);case 3:return e.abrupt("return",makeRequest({secret:t,method:"POST",path:"/tokens",data:r}));case 4:case"end":return e.stop()}})},getToken=function(t,r){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}throw new Error("Token id is required.");case 2:return e.abrupt("return",makeRequest({secret:t,method:"GET",path:"/tokens/".concat(r)}));case 3:case"end":return e.stop()}})},createPayment=function(t,r){var a;return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if((a=validatePaymentPayload(r)).valid){e.next=3;break}throw new Error(a.message);case 3:return e.abrupt("return",makeRequest({secret:t,method:"POST",path:"/payments",data:r}));case 4:case"end":return e.stop()}})},getPayment=function(t,r){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}throw new Error("Payment id is required.");case 2:return e.abrupt("return",makeRequest({secret:t,method:"GET",path:"/payments/".concat(r)}));case 3:case"end":return e.stop()}})},getPayments=function(t){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",makeRequest({secret:t,method:"GET",path:"/payments"}));case 1:case"end":return e.stop()}})},Paymongo=function(){function t(e){if(_classCallCheck(this,t),!e)throw new Error("API is required!");this.secret=e}return _createClass(t,[{key:"createPayment",value:function(t){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",createPayment(this.secret,t));case 1:case"end":return e.stop()}},null,this)}},{key:"getPayment",value:function(t){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",getPayment(this.secret,t));case 1:case"end":return e.stop()}},null,this)}},{key:"getPayments",value:function(){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",getPayments(this.secret));case 1:case"end":return e.stop()}},null,this)}},{key:"getToken",value:function(t){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",getToken(this.secret,t));case 1:case"end":return e.stop()}},null,this)}},{key:"createToken",value:function(t){return _regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",createToken(this.secret,t));case 1:case"end":return e.stop()}},null,this)}}]),t}();module.exports=Paymongo;
