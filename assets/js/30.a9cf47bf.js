(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{207:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("在使用有赞云进行自定义开发时，无法获取到springboot的启动类，开发完的程序只能提交代码后，在有赞云提供的沙箱中进行测试。有日志延迟不说，还存在着日志时间混乱的问题。此外，当有多位开发人员在使用时，打印出来的日志无法分辨，不知道哪些日志是自己的请求触发，哪些是别人的请求触发的。")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("无法进行本地调试，只能对日志进行改造，所以最后决定对输出的日志进行自定义改造。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("在slf4j打出的日志中，通过全局拦截器，为每一次的请求创建requestId。\n在需要关注的方法上，打上自定义日志注解，在切面中，项Mdc中添加sessionId和requestId。在请求前打出请求参数的日志，在请求结束后，打出返回结果的日志，在被自定义注解注视的方法中，所有的日志都带有sessionId和requestId，便于日志的追溯。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),n("p",[t._v("生成requestId的方式可以按照各自的喜好生成。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),n("p",[t._v("切面代码")]),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/LudanLink/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"自定义日志-日志追踪篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义日志-日志追踪篇","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义日志-日志追踪篇")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_0-先导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-先导","aria-hidden":"true"}},[this._v("#")]),this._v(" 0.先导")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.解决方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-涉及知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-涉及知识点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.涉及知识点")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("log4j 自定义配置")]),t._v(" "),n("li",[t._v("slf4j Mdc(Mapped Diagnostic Contexts)")]),t._v(" "),n("li",[t._v("springboot配置自定义注解")]),t._v(" "),n("li",[t._v("springboot配置Aop切面")]),t._v(" "),n("li",[t._v("springboot配置过滤器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-正文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-正文","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.正文")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-1设计思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1设计思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.1设计思路")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-2代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2代码实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.2代码实现")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-3配置springboot拦截器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3配置springboot拦截器","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.3配置springboot拦截器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-3-1创建类requestidfilter并实现filter接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1创建类requestidfilter并实现filter接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.3.1创建类RequestIdFilter并实现Filter接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("public class RequestIdFilter implements Filter {}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-3-2添加-component注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2添加-component注解","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.3.2添加@Component注解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-3-3重写dofilter-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3重写dofilter-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.3.3重写doFilter()方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('@Override\n    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {\n        String requestId = UUID.randomUUID().toString().replace("-", "");\n        servletRequest.setAttribute("requestId", requestId);\n        filterChain.doFilter(servletRequest, servletResponse);\n    }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-4配置自定义注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4配置自定义注解","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.4配置自定义注解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-4-1-mylog注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-mylog注解","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.4.1@MyLog注解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('/**\n * 自定义日志注解\n */\n@Target({ElementType.TYPE, ElementType.METHOD})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\npublic @interface MyLog {\n\n    /**\n     * 打印日志类型，{@link LogTypeEnum}\n     *\n     * @return\n     */\n    LogTypeEnum value() default LogTypeEnum.ALL;\n\n    /**\n     * 日志输出前缀（建议配置接口名称）\n     *\n     * @return\n     */\n    String prefix() default "";\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-4-2-mylog注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-mylog注解","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.4.2@MyLog注解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('/**\n * 指定参数名字\n */\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.FIELD, ElementType.PARAMETER})\npublic @interface LogMask {\n\n    /**\n     * 参数名称\n     *\n     * @return\n     */\n    String paramName() default "";\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-4-3输出参数还是结果的枚举类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3输出参数还是结果的枚举类","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.4.3输出参数还是结果的枚举类")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("public enum LogTypeEnum {\n    /**\n     * 方法前后执行\n     */\n    ALL,\n\n    /**\n     * 只输出参数\n     */\n    PARAMETER,\n\n    /**\n     * 只输出结果\n     */\n    RESULT\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-5配置切面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5配置切面","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.5配置切面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-5-1配置切入点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1配置切入点","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.5.1配置切入点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('    /**\n     * 切入点\n     */\n    @Pointcut("@annotation(link.xuchen.testlog.annotation.MyLog)")\n    public void pointcut() {\n    }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_3-5-2使用-around来处理日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2使用-around来处理日志","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.5.2使用@Around来处理日志")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在切面中，拿到请求中携带的sessionId和过滤器中添加的requestId，将sessionId和requestId放入Mdc中，并且搭配自定义的slf4j的配置，在日志中输出sessionId和requestId。\n日志的配置，其中"),e("code",[this._v("[%X{sessionId}, %X{requestId}]")]),this._v("和Mdc中名称要相同。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('logging:\n  level:\n    ROOT: info\n  pattern:\n    console: "${CONSOLE_LOG_PATTERN:-%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %boldCyan([%X{sessionId}, %X{requestId}]) %clr(${LOG_LEVEL_PATTERN:-%5p}) %clr(${PID:- }){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}}"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('@Aspect\n@Component\n@Slf4j\npublic class LogAspect {\n\n    /**\n     * 切入点\n     */\n    @Pointcut("@annotation(link.xuchen.testlog.annotation.MyLog)")\n    public void pointcut() {\n    }\n\n    /**\n     * 环绕通知\n     * @param joinPoint\n     * @return\n     * @throws Throwable\n     */\n    @Around("pointcut()")\n    public Object doLog(ProceedingJoinPoint joinPoint) throws Throwable {\n        Method method = this.getSpecificmethod(joinPoint);\n\n        // 获取sessionId\n        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();\n        String sessionId = requestAttributes.getSessionId();\n        String requestId = (String)requestAttributes.getAttribute("requestId", 0);\n        MyLog myLog = this.getMethodAnnotations(method, MyLog.class);\n        if (Objects.isNull(myLog)) {\n            myLog = AnnotationUtils.findAnnotation(joinPoint.getTarget().getClass(), MyLog.class);\n        }\n\n        boolean isSuccess = setMdc(sessionId, requestId);\n        try {\n            // 获取日志输出前缀\n            String prefix = getPrefix(myLog, method);\n            // 执行方法前输出日志\n            logBefore(myLog, prefix, method, joinPoint.getArgs());\n            // 执行方法，并获取返回值\n            Object result = joinPoint.proceed();\n            // 执行方法后输出日志\n            logAfter(myLog, prefix, result);\n            return null;\n        } catch (Throwable t) {\n            throw t;\n        } finally {\n            try {\n                if (isSuccess) {\n                    MDC.remove(MdcConstant.SESSION_KEY);\n                    MDC.remove(MdcConstant.REQUEST_KEY);\n                }\n            } catch (Exception e) {\n                log.warn(e.getMessage(), e);\n            }\n        }\n    }\n\n    /**\n     * 为每个请求设置唯一标示到MDC容器中\n     *\n     * @return\n     */\n    private boolean setMdc(String sessionId, String requestId) {\n        try {\n            // 设置SessionId\n            if (StringUtils.isEmpty(MDC.get(MdcConstant.SESSION_KEY))) {\n                MDC.put(MdcConstant.SESSION_KEY, sessionId);\n                MDC.put(MdcConstant.REQUEST_KEY, requestId);\n                return true;\n            }\n        } catch (Exception e) {\n            log.warn(e.getMessage(), e);\n        }\n        return false;\n    }\n    /**\n     * 输出方法执行结果\n     *\n     * @param myLog    log注解\n     * @param prefix 输出前缀\n     * @param result 方法执行结果\n     */\n    private void logAfter(MyLog myLog, String prefix, Object result) {\n        // 判断是否是方法之前输出日志，不是就输出参数日志\n        if (!LogTypeEnum.PARAMETER.equals(myLog.value())) {\n            log.info("【返回参数 {}】：{}", prefix, JSON.toJSON(result));\n        }\n    }\n\n    /**\n     * 输出方法调用参数\n     *\n     * @param myLog    log注解\n     * @param prefix 输出日志前缀\n     * @param method 代理方法\n     * @param args   方法参数\n     */\n    private void logBefore(MyLog myLog, String prefix, Method method, Object[] args) {\n        // 判断是否是方法之后输出日志，不是就输出参数日志\n        if (!LogTypeEnum.RESULT.equals(myLog.value())) {\n            Map<String, Object> paramMap = new LinkedHashMap<>();\n            // 获取参数注解\n            Annotation[][] parameterAnnotations = method.getParameterAnnotations();\n\n            for (int i = 0; i < parameterAnnotations.length; i++) {\n                Annotation[] parameterAnnotation = parameterAnnotations[i];\n                // 找到参数上面的注解，并根据注解获取脱敏的类型\n                LogMask logMask = getLogMask(parameterAnnotation);\n                String paramName = "args" + (i + 1);\n                if (logMask != null) {\n                    paramName = StringUtils.isEmpty(logMask.paramName()) ? paramName : logMask.paramName();\n                }\n\n                // 忽略这些类型参数的输出\n                if (args[i] instanceof ServletResponse || args[i] instanceof ServletRequest\n                        || args[i] instanceof HttpSession || args[i] instanceof Model) {\n\n                    break;\n                }\n\n                paramMap.put(paramName, args[i]);\n            }\n            log.info("【请求参数 {}】：{}", prefix, JSON.toJSON(paramMap));\n        }\n    }\n\n    /**\n     * 获取日志前缀对象\n     *\n     * @param myLog       日志注解对象\n     * @param method    注解日志的方法对象\n     * @return\n     */\n    private String getPrefix(MyLog myLog, Method method) {\n        // 日志格式：流水号 + 注解的日志前缀 + 方法的全类名\n        StringBuilder sb = new StringBuilder();\n        sb.append(myLog.prefix());\n        sb.append(":");\n        sb.append(method.getDeclaringClass().getName());\n        sb.append(".");\n        sb.append(method.getName());\n        sb.append("() ");\n\n        return sb.toString();\n    }\n\n    /**\n     * 获取参数上的LogMask注解\n     *\n     * @param parameterAnnotation\n     * @return\n     */\n    private LogMask getLogMask(Annotation[] parameterAnnotation) {\n        for (Annotation annotation : parameterAnnotation) {\n            // 检查参数是否需要脱敏\n            if (annotation instanceof LogMask) {\n                return (LogMask) annotation;\n            }\n        }\n        return null;\n    }\n\n    private <T extends Annotation> T getMethodAnnotations(AnnotatedElement ae, Class<T> annotationType) {\n        // look for raw annotation\n        T ann = ae.getAnnotation(annotationType);\n        return ann;\n    }\n\n    private Method getSpecificmethod(ProceedingJoinPoint pjp) {\n        MethodSignature methodSignature = (MethodSignature) pjp.getSignature();\n        Method method = methodSignature.getMethod();\n        // The method may be on an interface, but we need attributes from the\n        // target class. If the target class is null, the method will be\n        // unchanged.\n        Class<?> targetClass = AopProxyUtils.ultimateTargetClass(pjp.getTarget());\n        if (targetClass == null && pjp.getTarget() != null) {\n            targetClass = pjp.getTarget().getClass();\n        }\n        Method specificMethod = ClassUtils.getMostSpecificMethod(method, targetClass);\n        // If we are dealing with method with generic parameters, find the\n        // original method.\n        specificMethod = BridgeMethodResolver.findBridgedMethod(specificMethod);\n        return specificMethod;\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-6实现效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6实现效果","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.6实现效果")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://qiniu.xuchen.link/9caa27af01a960408bff1d2dd32c53d3.png",alt:"日志效果"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-7代码地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-7代码地址","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.7代码地址")])}],!1,null,null,null);e.default=r.exports}}]);