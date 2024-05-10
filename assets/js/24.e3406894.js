(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{226:function(e,a,r){"use strict";r.r(a);var n=r(0),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"springmvc的一个完成请求流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springmvc的一个完成请求流程","aria-hidden":"true"}},[e._v("#")]),e._v(" springmvc的一个完成请求流程")]),e._v(" "),r("h2",{attrs:{id:"_1-整体流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-整体流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.整体流程")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://qiniu.xuchen.link/bef393282f9682e005a1072e3604aeb3.png",alt:"整体流程"}})]),e._v(" "),r("ol",[r("li",[e._v("首先用户发送请求到前端控制器，前端控制器根据请求信息（如 URL）来决定选择哪一个页面控制器进行处理并把请求委托给它，即以前的控制器的控制逻辑部分；图中的 1、2 步骤；")]),e._v(" "),r("li",[e._v("页面控制器接收到请求后，进行功能处理，首先需要收集和绑定请求参数到一个对象，这个对象在 Spring Web MVC 中叫命令对象，并进行验证，然后将命令对象委托给业务对象进行处理；处理完毕后返回一个 ModelAndView（模型数据和逻辑视图名）；图中的 3、4、5 步骤；")]),e._v(" "),r("li",[e._v("前端控制器收回控制权，然后根据返回的逻辑视图名，选择相应的视图进行渲染，并把模型数据传入以便视图渲染；图中的步骤 6、7；")]),e._v(" "),r("li",[e._v("前端控制器再次收回控制权，将响应返回给用户，图中的步骤 8；至此整个结束。")])]),e._v(" "),r("h2",{attrs:{id:"_2-具体步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-具体步骤","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.具体步骤")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://qiniu.xuchen.link/7fd61d3ed68270d4566c4a22eae8c265.png",alt:"具体步骤"}}),e._v("\n第一步：发起请求到前端控制器(DispatcherServlet)")]),e._v(" "),r("p",[e._v("第二步：前端控制器请求HandlerMapping查找 Handler （可以根据xml配置、注解进行查找）")]),e._v(" "),r("p",[e._v("第三步：处理器映射器HandlerMapping向前端控制器返回Handler，HandlerMapping会把请求映射为HandlerExecutionChain对象（包含一个Handler处理器（页面控制器）对象，多个HandlerInterceptor拦截器对象），通过这种策略模式，很容易添加新的映射策略")]),e._v(" "),r("p",[e._v("第四步：前端控制器调用处理器适配器去执行Handler")]),e._v(" "),r("p",[e._v("第五步：处理器适配器HandlerAdapter将会根据适配的结果去执行Handler")]),e._v(" "),r("p",[e._v("第六步：Handler执行完成给适配器返回ModelAndView")]),e._v(" "),r("p",[e._v("第七步：处理器适配器向前端控制器返回ModelAndView （ModelAndView是springmvc框架的一个底层对象，包括 Model和view）")]),e._v(" "),r("p",[e._v("第八步：前端控制器请求视图解析器去进行视图解析 （根据逻辑视图名解析成真正的视图(jsp)），通过这种策略很容易更换其他视图技术，只需要更改视图解析器即可")]),e._v(" "),r("p",[e._v("第九步：视图解析器向前端控制器返回View")]),e._v(" "),r("p",[e._v("第十步：前端控制器进行视图渲染 （视图渲染将模型数据(在ModelAndView对象中)填充到request域）")]),e._v(" "),r("h2",{attrs:{id:"_3-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.总结")]),e._v(" "),r("ol",[r("li",[e._v("DispatcherServlet 在 web.xml 中的部署描述，从而拦截请求到 Spring Web MVC")]),e._v(" "),r("li",[e._v("HandlerMapping 的配置，从而将请求映射到处理器")]),e._v(" "),r("li",[e._v("HandlerAdapter 的配置，从而支持多种类型的处理器\n注：处理器映射求和适配器使用纾解的话包含在了注解驱动中，不需要在单独配置")]),e._v(" "),r("li",[e._v("ViewResolver 的配置，从而将逻辑视图名解析为具体视图技术")]),e._v(" "),r("li",[e._v("处理器（页面控制器）的配置，从而进行功能处理 \nView是一个接口，实现类支持不同的View类型（jsp、freemarker、pdf...）")])])])}],!1,null,null,null);a.default=t.exports}}]);