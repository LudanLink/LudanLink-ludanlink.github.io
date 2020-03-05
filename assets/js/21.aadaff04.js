(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{167:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"jwt-json-web-tokens"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt-json-web-tokens","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT(JSON Web Tokens)")]),t._v(" "),e("h2",{attrs:{id:"什么是jw？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是jw？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是JW？")]),t._v(" "),e("p",[t._v("Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519)")]),t._v(" "),e("h3",{attrs:{id:"jwt构成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt构成","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT构成")]),t._v(" "),e("p",[t._v("JWT是由三段信息构成的，将这三段信息文本用.链接一起就构成了Jwt字符串。就像这样:")]),t._v(" "),e("p",[e("code",[t._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ")])]),t._v(" "),e("p",[t._v("分为头部，载荷，签证信息，之间用"),e("code",[t._v(".")]),t._v("分割。")]),t._v(" "),e("h2",{attrs:{id:"为什么要用jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用jwt","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么要用JWT")]),t._v(" "),e("p",[t._v("基于token的认证机制的应用不需要考虑用户在哪一台服务器登录，为应用拓展提供了便利性。")]),t._v(" "),e("h2",{attrs:{id:"怎么用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么用","aria-hidden":"true"}},[t._v("#")]),t._v(" 怎么用")]),t._v(" "),e("p",[t._v("一般是在请求头里加入"),e("code",[t._v("Authorization")]),t._v("，并加上"),e("code",[t._v("Bearer")]),t._v("标注：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("fetch('api/user/1', {\n  headers: {\n    'Authorization': 'Bearer ' + token\n  }\n})\n")])])]),e("p",[t._v("服务端会验证token，通过则会返回相应的资源。\n"),e("img",{attrs:{src:"http://qiniu.xuchen.link/be818efec9c08eabfcded8a57a2bc959.png",alt:"jwt流程"}})]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("h3",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),e("ul",[e("li",[t._v("由于json的通用性，所以可以跨语言")]),t._v(" "),e("li",[t._v("payload部分可以承载部分非敏感信息")]),t._v(" "),e("li",[t._v("构成简单，占用空间少，便于传输")]),t._v(" "),e("li",[t._v("不需要在服务端保存会话信息，易于应用扩展")])]),t._v(" "),e("h3",{attrs:{id:"安全相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全相关","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全相关")]),t._v(" "),e("ul",[e("li",[t._v("payload部分不存放敏感信息")]),t._v(" "),e("li",[t._v("保护好secret私钥")]),t._v(" "),e("li",[t._v("尽量使用https协议，保护token不外泄")])])])}],!1,null,null,null);a.default=s.exports}}]);