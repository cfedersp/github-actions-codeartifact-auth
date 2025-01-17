module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(104);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = __webpack_require__(422);
const package_json_1 = tslib_1.__importDefault(__webpack_require__(81));
const config_resolver_1 = __webpack_require__(529);
const hash_node_1 = __webpack_require__(145);
const middleware_retry_1 = __webpack_require__(286);
const node_config_provider_1 = __webpack_require__(519);
const node_http_handler_1 = __webpack_require__(953);
const util_base64_node_1 = __webpack_require__(287);
const util_body_length_node_1 = __webpack_require__(555);
const util_user_agent_node_1 = __webpack_require__(96);
const util_utf8_node_1 = __webpack_require__(841);
const runtimeConfig_shared_1 = __webpack_require__(892);
const smithy_client_1 = __webpack_require__(973);
const util_defaults_mode_node_1 = __webpack_require__(331);
const smithy_client_2 = __webpack_require__(973);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: (_d = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _d !== void 0 ? _d : (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (_e = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _e !== void 0 ? _e : (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_f = config === null || config === void 0 ? void 0 : config.region) !== null && _f !== void 0 ? _f : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_g = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _g !== void 0 ? _g : new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (_h = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _h !== void 0 ? _h : (0, node_config_provider_1.loadConfig)({
            ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await defaultConfigProvider()).retryMode || middleware_retry_1.DEFAULT_RETRY_MODE,
        }),
        sha256: (_j = config === null || config === void 0 ? void 0 : config.sha256) !== null && _j !== void 0 ? _j : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_k = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _k !== void 0 ? _k : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_l = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _l !== void 0 ? _l : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_m = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _m !== void 0 ? _m : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
        utf8Decoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _o !== void 0 ? _o : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_p = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _p !== void 0 ? _p : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRetryStrategy = void 0;
const protocol_http_1 = __webpack_require__(504);
const service_error_classification_1 = __webpack_require__(927);
const uuid_1 = __webpack_require__(328);
const config_1 = __webpack_require__(701);
const constants_1 = __webpack_require__(373);
const defaultRetryQuota_1 = __webpack_require__(814);
const delayDecider_1 = __webpack_require__(15);
const retryDecider_1 = __webpack_require__(932);
class StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        var _a, _b, _c;
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_1.RETRY_MODES.STANDARD;
        this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : retryDecider_1.defaultRetryDecider;
        this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : delayDecider_1.defaultDelayDecider;
        this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : (0, defaultRetryQuota_1.getDefaultRetryQuota)(constants_1.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = config_1.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            request.headers[constants_1.INVOCATION_ID_HEADER] = (0, uuid_1.v4)();
        }
        while (true) {
            try {
                if (protocol_http_1.HttpRequest.isInstance(request)) {
                    request.headers[constants_1.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options === null || options === void 0 ? void 0 : options.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options === null || options === void 0 ? void 0 : options.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = asSdkError(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delay = this.delayDecider((0, service_error_classification_1.isThrottlingError)(err) ? constants_1.THROTTLING_RETRY_DELAY_BASE : constants_1.DEFAULT_RETRY_DELAY_BASE, attempts);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
exports.StandardRetryStrategy = StandardRetryStrategy;
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeHttp2Handler = void 0;
const protocol_http_1 = __webpack_require__(504);
const querystring_builder_1 = __webpack_require__(979);
const http2_1 = __webpack_require__(565);
const get_transformed_headers_1 = __webpack_require__(458);
const write_request_body_1 = __webpack_require__(426);
class NodeHttp2Handler {
    constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((opts) => {
                    resolve(opts || {});
                })
                    .catch(reject);
            }
            else {
                resolve(options || {});
            }
        });
        this.sessionCache = new Map();
    }
    destroy() {
        for (const sessions of this.sessionCache.values()) {
            sessions.forEach((session) => this.destroySession(session));
        }
        this.sessionCache.clear();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((resolve, rejectOriginal) => {
            let fulfilled = false;
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                fulfilled = true;
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                rejectOriginal(abortError);
                return;
            }
            const { hostname, method, port, protocol, path, query } = request;
            const authority = `${protocol}//${hostname}${port ? `:${port}` : ""}`;
            const session = this.getSession(authority, disableConcurrentStreams || false);
            const reject = (err) => {
                if (disableConcurrentStreams) {
                    this.destroySession(session);
                }
                fulfilled = true;
                rejectOriginal(err);
            };
            const queryString = (0, querystring_builder_1.buildQueryString)(query || {});
            const req = session.request({
                ...request.headers,
                [http2_1.constants.HTTP2_HEADER_PATH]: queryString ? `${path}?${queryString}` : path,
                [http2_1.constants.HTTP2_HEADER_METHOD]: method,
            });
            session.ref();
            req.on("response", (headers) => {
                const httpResponse = new protocol_http_1.HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: (0, get_transformed_headers_1.getTransformedHeaders)(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
                if (disableConcurrentStreams) {
                    session.close();
                    this.deleteSessionFromCache(authority, session);
                }
            });
            if (requestTimeout) {
                req.setTimeout(requestTimeout, () => {
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    reject(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.close();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            req.on("frameError", (type, code, id) => {
                reject(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", reject);
            req.on("aborted", () => {
                reject(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
            });
            req.on("close", () => {
                session.unref();
                if (disableConcurrentStreams) {
                    session.destroy();
                }
                if (!fulfilled) {
                    reject(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            (0, write_request_body_1.writeRequestBody)(req, request);
        });
    }
    getSession(authority, disableConcurrentStreams) {
        var _a;
        const sessionCache = this.sessionCache;
        const existingSessions = sessionCache.get(authority) || [];
        if (existingSessions.length > 0 && !disableConcurrentStreams)
            return existingSessions[0];
        const newSession = (0, http2_1.connect)(authority);
        newSession.unref();
        const destroySessionCb = () => {
            this.destroySession(newSession);
            this.deleteSessionFromCache(authority, newSession);
        };
        newSession.on("goaway", destroySessionCb);
        newSession.on("error", destroySessionCb);
        newSession.on("frameError", destroySessionCb);
        newSession.on("close", () => this.deleteSessionFromCache(authority, newSession));
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.sessionTimeout) {
            newSession.setTimeout(this.config.sessionTimeout, destroySessionCb);
        }
        existingSessions.push(newSession);
        sessionCache.set(authority, existingSessions);
        return newSession;
    }
    destroySession(session) {
        if (!session.destroyed) {
            session.destroy();
        }
    }
    deleteSessionFromCache(authority, session) {
        const existingSessions = this.sessionCache.get(authority) || [];
        if (!existingSessions.includes(session)) {
            return;
        }
        this.sessionCache.set(authority, existingSessions.filter((s) => s !== session));
    }
}
exports.NodeHttp2Handler = NodeHttp2Handler;


/***/ }),
/* 12 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSerdePlugin = exports.serializerMiddlewareOption = exports.deserializerMiddlewareOption = void 0;
const deserializerMiddleware_1 = __webpack_require__(407);
const serializerMiddleware_1 = __webpack_require__(705);
exports.deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
exports.serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add((0, deserializerMiddleware_1.deserializerMiddleware)(config, deserializer), exports.deserializerMiddlewareOption);
            commandStack.add((0, serializerMiddleware_1.serializerMiddleware)(config, serializer), exports.serializerMiddlewareOption);
        },
    };
}
exports.getSerdePlugin = getSerdePlugin;


/***/ }),
/* 13 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRepositoryPermissionsPolicyCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DeleteRepositoryPermissionsPolicyCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DeleteRepositoryPermissionsPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteRepositoryPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteRepositoryPermissionsPolicyResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand)(output, context);
    }
}
exports.DeleteRepositoryPermissionsPolicyCommand = DeleteRepositoryPermissionsPolicyCommand;


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDelayDecider = void 0;
const constants_1 = __webpack_require__(373);
const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(constants_1.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
exports.defaultDelayDecider = defaultDelayDecider;


/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = require("tls");

/***/ }),
/* 17 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOClient = void 0;
const config_resolver_1 = __webpack_require__(529);
const middleware_content_length_1 = __webpack_require__(988);
const middleware_host_header_1 = __webpack_require__(795);
const middleware_logger_1 = __webpack_require__(263);
const middleware_recursion_detection_1 = __webpack_require__(481);
const middleware_retry_1 = __webpack_require__(286);
const middleware_user_agent_1 = __webpack_require__(105);
const smithy_client_1 = __webpack_require__(973);
const runtimeConfig_1 = __webpack_require__(3);
class SSOClient extends smithy_client_1.Client {
    constructor(configuration) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration);
        const _config_1 = (0, config_resolver_1.resolveRegionConfig)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveEndpointsConfig)(_config_1);
        const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_3);
        const _config_5 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_4);
        super(_config_5);
        this.config = _config_5;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.SSOClient = SSOClient;


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromContainerMetadata = exports.ENV_CMDS_AUTH_TOKEN = exports.ENV_CMDS_RELATIVE_URI = exports.ENV_CMDS_FULL_URI = void 0;
const property_provider_1 = __webpack_require__(948);
const url_1 = __webpack_require__(835);
const httpRequest_1 = __webpack_require__(175);
const ImdsCredentials_1 = __webpack_require__(560);
const RemoteProviderInit_1 = __webpack_require__(846);
const retry_1 = __webpack_require__(588);
exports.ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
exports.ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
exports.ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromContainerMetadata = (init = {}) => {
    const { timeout, maxRetries } = (0, RemoteProviderInit_1.providerConfigFromInit)(init);
    return () => (0, retry_1.retry)(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!(0, ImdsCredentials_1.isImdsCredentials)(credsResponse)) {
            throw new property_provider_1.CredentialsProviderError("Invalid response received from instance metadata service.");
        }
        return (0, ImdsCredentials_1.fromImdsCredentials)(credsResponse);
    }, maxRetries);
};
exports.fromContainerMetadata = fromContainerMetadata;
const requestFromEcsImds = async (timeout, options) => {
    if (process.env[exports.ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
            ...options.headers,
            Authorization: process.env[exports.ENV_CMDS_AUTH_TOKEN],
        };
    }
    const buffer = await (0, httpRequest_1.httpRequest)({
        ...options,
        timeout,
    });
    return buffer.toString();
};
const CMDS_IP = "169.254.170.2";
const GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
const GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
const getCmdsUri = async () => {
    if (process.env[exports.ENV_CMDS_RELATIVE_URI]) {
        return {
            hostname: CMDS_IP,
            path: process.env[exports.ENV_CMDS_RELATIVE_URI],
        };
    }
    if (process.env[exports.ENV_CMDS_FULL_URI]) {
        const parsed = (0, url_1.parse)(process.env[exports.ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
            throw new property_provider_1.CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
            throw new property_provider_1.CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
        }
        return {
            ...parsed,
            port: parsed.port ? parseInt(parsed.port, 10) : undefined,
        };
    }
    throw new property_provider_1.CredentialsProviderError("The container metadata credential provider cannot be used unless" +
        ` the ${exports.ENV_CMDS_RELATIVE_URI} or ${exports.ENV_CMDS_FULL_URI} environment` +
        " variable is set", false);
};


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extendedEncodeURIComponent = void 0;
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
exports.extendedEncodeURIComponent = extendedEncodeURIComponent;


/***/ }),
/* 30 */,
/* 31 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegionInfo = void 0;
const getHostnameFromVariants_1 = __webpack_require__(254);
const getResolvedHostname_1 = __webpack_require__(584);
const getResolvedPartition_1 = __webpack_require__(192);
const getResolvedSigningRegion_1 = __webpack_require__(219);
const getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {
    var _a, _b, _c, _d, _e, _f;
    const partition = (0, getResolvedPartition_1.getResolvedPartition)(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : (_b = (_a = partitionHash[partition]) === null || _a === void 0 ? void 0 : _a.endpoint) !== null && _b !== void 0 ? _b : region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = (0, getHostnameFromVariants_1.getHostnameFromVariants)((_c = regionHash[resolvedRegion]) === null || _c === void 0 ? void 0 : _c.variants, hostnameOptions);
    const partitionHostname = (0, getHostnameFromVariants_1.getHostnameFromVariants)((_d = partitionHash[partition]) === null || _d === void 0 ? void 0 : _d.variants, hostnameOptions);
    const hostname = (0, getResolvedHostname_1.getResolvedHostname)(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = (0, getResolvedSigningRegion_1.getResolvedSigningRegion)(hostname, {
        signingRegion: (_e = regionHash[resolvedRegion]) === null || _e === void 0 ? void 0 : _e.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint,
    });
    return {
        partition,
        signingService,
        hostname,
        ...(signingRegion && { signingRegion }),
        ...(((_f = regionHash[resolvedRegion]) === null || _f === void 0 ? void 0 : _f.signingService) && {
            signingService: regionHash[resolvedRegion].signingService,
        }),
    };
};
exports.getRegionInfo = getRegionInfo;


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const url_parser_1 = __webpack_require__(187);
const endpoints_1 = __webpack_require__(567);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2011-06-15",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : endpoints_1.defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "STS",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : url_parser_1.parseUrl,
    });
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSessionTokenResponse = exports.GetSessionTokenRequest = exports.GetFederationTokenResponse = exports.FederatedUser = exports.GetFederationTokenRequest = exports.GetCallerIdentityResponse = exports.GetCallerIdentityRequest = exports.GetAccessKeyInfoResponse = exports.GetAccessKeyInfoRequest = exports.InvalidAuthorizationMessageException = exports.DecodeAuthorizationMessageResponse = exports.DecodeAuthorizationMessageRequest = exports.IDPCommunicationErrorException = exports.AssumeRoleWithWebIdentityResponse = exports.AssumeRoleWithWebIdentityRequest = exports.InvalidIdentityTokenException = exports.IDPRejectedClaimException = exports.AssumeRoleWithSAMLResponse = exports.AssumeRoleWithSAMLRequest = exports.RegionDisabledException = exports.PackedPolicyTooLargeException = exports.MalformedPolicyDocumentException = exports.ExpiredTokenException = exports.AssumeRoleResponse = exports.Credentials = exports.AssumeRoleRequest = exports.Tag = exports.PolicyDescriptorType = exports.AssumedRoleUser = void 0;
const STSServiceException_1 = __webpack_require__(360);
var AssumedRoleUser;
(function (AssumedRoleUser) {
    AssumedRoleUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumedRoleUser = exports.AssumedRoleUser || (exports.AssumedRoleUser = {}));
var PolicyDescriptorType;
(function (PolicyDescriptorType) {
    PolicyDescriptorType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyDescriptorType = exports.PolicyDescriptorType || (exports.PolicyDescriptorType = {}));
var Tag;
(function (Tag) {
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AssumeRoleRequest;
(function (AssumeRoleRequest) {
    AssumeRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumeRoleRequest = exports.AssumeRoleRequest || (exports.AssumeRoleRequest = {}));
var Credentials;
(function (Credentials) {
    Credentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Credentials = exports.Credentials || (exports.Credentials = {}));
var AssumeRoleResponse;
(function (AssumeRoleResponse) {
    AssumeRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumeRoleResponse = exports.AssumeRoleResponse || (exports.AssumeRoleResponse = {}));
class ExpiredTokenException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
exports.ExpiredTokenException = ExpiredTokenException;
class MalformedPolicyDocumentException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
exports.MalformedPolicyDocumentException = MalformedPolicyDocumentException;
class PackedPolicyTooLargeException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
exports.PackedPolicyTooLargeException = PackedPolicyTooLargeException;
class RegionDisabledException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
exports.RegionDisabledException = RegionDisabledException;
var AssumeRoleWithSAMLRequest;
(function (AssumeRoleWithSAMLRequest) {
    AssumeRoleWithSAMLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumeRoleWithSAMLRequest = exports.AssumeRoleWithSAMLRequest || (exports.AssumeRoleWithSAMLRequest = {}));
var AssumeRoleWithSAMLResponse;
(function (AssumeRoleWithSAMLResponse) {
    AssumeRoleWithSAMLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumeRoleWithSAMLResponse = exports.AssumeRoleWithSAMLResponse || (exports.AssumeRoleWithSAMLResponse = {}));
class IDPRejectedClaimException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
exports.IDPRejectedClaimException = IDPRejectedClaimException;
class InvalidIdentityTokenException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
exports.InvalidIdentityTokenException = InvalidIdentityTokenException;
var AssumeRoleWithWebIdentityRequest;
(function (AssumeRoleWithWebIdentityRequest) {
    AssumeRoleWithWebIdentityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumeRoleWithWebIdentityRequest = exports.AssumeRoleWithWebIdentityRequest || (exports.AssumeRoleWithWebIdentityRequest = {}));
var AssumeRoleWithWebIdentityResponse;
(function (AssumeRoleWithWebIdentityResponse) {
    AssumeRoleWithWebIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumeRoleWithWebIdentityResponse = exports.AssumeRoleWithWebIdentityResponse || (exports.AssumeRoleWithWebIdentityResponse = {}));
class IDPCommunicationErrorException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
exports.IDPCommunicationErrorException = IDPCommunicationErrorException;
var DecodeAuthorizationMessageRequest;
(function (DecodeAuthorizationMessageRequest) {
    DecodeAuthorizationMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecodeAuthorizationMessageRequest = exports.DecodeAuthorizationMessageRequest || (exports.DecodeAuthorizationMessageRequest = {}));
var DecodeAuthorizationMessageResponse;
(function (DecodeAuthorizationMessageResponse) {
    DecodeAuthorizationMessageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecodeAuthorizationMessageResponse = exports.DecodeAuthorizationMessageResponse || (exports.DecodeAuthorizationMessageResponse = {}));
class InvalidAuthorizationMessageException extends STSServiceException_1.STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
    }
}
exports.InvalidAuthorizationMessageException = InvalidAuthorizationMessageException;
var GetAccessKeyInfoRequest;
(function (GetAccessKeyInfoRequest) {
    GetAccessKeyInfoRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessKeyInfoRequest = exports.GetAccessKeyInfoRequest || (exports.GetAccessKeyInfoRequest = {}));
var GetAccessKeyInfoResponse;
(function (GetAccessKeyInfoResponse) {
    GetAccessKeyInfoResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessKeyInfoResponse = exports.GetAccessKeyInfoResponse || (exports.GetAccessKeyInfoResponse = {}));
var GetCallerIdentityRequest;
(function (GetCallerIdentityRequest) {
    GetCallerIdentityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCallerIdentityRequest = exports.GetCallerIdentityRequest || (exports.GetCallerIdentityRequest = {}));
var GetCallerIdentityResponse;
(function (GetCallerIdentityResponse) {
    GetCallerIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCallerIdentityResponse = exports.GetCallerIdentityResponse || (exports.GetCallerIdentityResponse = {}));
var GetFederationTokenRequest;
(function (GetFederationTokenRequest) {
    GetFederationTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFederationTokenRequest = exports.GetFederationTokenRequest || (exports.GetFederationTokenRequest = {}));
var FederatedUser;
(function (FederatedUser) {
    FederatedUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FederatedUser = exports.FederatedUser || (exports.FederatedUser = {}));
var GetFederationTokenResponse;
(function (GetFederationTokenResponse) {
    GetFederationTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFederationTokenResponse = exports.GetFederationTokenResponse || (exports.GetFederationTokenResponse = {}));
var GetSessionTokenRequest;
(function (GetSessionTokenRequest) {
    GetSessionTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSessionTokenRequest = exports.GetSessionTokenRequest || (exports.GetSessionTokenRequest = {}));
var GetSessionTokenResponse;
(function (GetSessionTokenResponse) {
    GetSessionTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSessionTokenResponse = exports.GetSessionTokenResponse || (exports.GetSessionTokenResponse = {}));


/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDomains = void 0;
const Codeartifact_1 = __webpack_require__(715);
const CodeartifactClient_1 = __webpack_require__(831);
const ListDomainsCommand_1 = __webpack_require__(724);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListDomainsCommand_1.ListDomainsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listDomains(input, ...args);
};
async function* paginateListDomains(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Codeartifact_1.Codeartifact) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeartifactClient_1.CodeartifactClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListDomains = paginateListDomains;


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeRepositoryCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DescribeRepositoryCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DescribeRepositoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeRepositoryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DescribeRepositoryCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DescribeRepositoryCommand)(output, context);
    }
}
exports.DescribeRepositoryCommand = DescribeRepositoryCommand;


/***/ }),
/* 49 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeProvider = void 0;
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};
exports.normalizeProvider = normalizeProvider;


/***/ }),
/* 50 */,
/* 51 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = __webpack_require__(422);
const package_json_1 = tslib_1.__importDefault(__webpack_require__(824));
const defaultStsRoleAssumers_1 = __webpack_require__(551);
const config_resolver_1 = __webpack_require__(529);
const credential_provider_node_1 = __webpack_require__(125);
const hash_node_1 = __webpack_require__(145);
const middleware_retry_1 = __webpack_require__(286);
const node_config_provider_1 = __webpack_require__(519);
const node_http_handler_1 = __webpack_require__(953);
const util_base64_node_1 = __webpack_require__(287);
const util_body_length_node_1 = __webpack_require__(555);
const util_user_agent_node_1 = __webpack_require__(96);
const util_utf8_node_1 = __webpack_require__(841);
const runtimeConfig_shared_1 = __webpack_require__(34);
const smithy_client_1 = __webpack_require__(973);
const util_defaults_mode_node_1 = __webpack_require__(331);
const smithy_client_2 = __webpack_require__(973);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : (0, defaultStsRoleAssumers_1.decorateDefaultCredentialProvider)(credential_provider_node_1.defaultProvider),
        defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (_f = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _f !== void 0 ? _f : (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_g = config === null || config === void 0 ? void 0 : config.region) !== null && _g !== void 0 ? _g : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_h = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _h !== void 0 ? _h : new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (_j = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _j !== void 0 ? _j : (0, node_config_provider_1.loadConfig)({
            ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await defaultConfigProvider()).retryMode || middleware_retry_1.DEFAULT_RETRY_MODE,
        }),
        sha256: (_k = config === null || config === void 0 ? void 0 : config.sha256) !== null && _k !== void 0 ? _k : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_l = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _l !== void 0 ? _l : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_m = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _m !== void 0 ? _m : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_o = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _o !== void 0 ? _o : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
        utf8Decoder: (_p = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _p !== void 0 ? _p : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_q = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _q !== void 0 ? _q : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),
/* 52 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPackageVersionDependenciesCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListPackageVersionDependenciesCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListPackageVersionDependenciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListPackageVersionDependenciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListPackageVersionDependenciesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListPackageVersionDependenciesCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListPackageVersionDependenciesCommand)(output, context);
    }
}
exports.ListPackageVersionDependenciesCommand = ListPackageVersionDependenciesCommand;


/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneQuery = exports.cloneRequest = void 0;
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? (0, exports.cloneQuery)(query) : undefined,
});
exports.cloneRequest = cloneRequest;
const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});
exports.cloneQuery = cloneQuery;


/***/ }),
/* 58 */,
/* 59 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromString = exports.fromArrayBuffer = void 0;
const is_array_buffer_1 = __webpack_require__(910);
const buffer_1 = __webpack_require__(293);
const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!(0, is_array_buffer_1.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer_1.Buffer.from(input, offset, length);
};
exports.fromArrayBuffer = fromArrayBuffer;
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer_1.Buffer.from(input, encoding) : buffer_1.Buffer.from(input);
};
exports.fromString = fromString;


/***/ }),
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEpochTimestamp = exports.parseRfc7231DateTime = exports.parseRfc3339DateTime = exports.dateToUtcString = void 0;
const parse_utils_1 = __webpack_require__(816);
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
exports.dateToUtcString = dateToUtcString;
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
exports.parseRfc3339DateTime = parseRfc3339DateTime;
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
exports.parseRfc7231DateTime = parseRfc7231DateTime;
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = (0, parse_utils_1.strictParseDouble)(value);
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
exports.parseEpochTimestamp = parseEpochTimestamp;
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = (0, parse_utils_1.strictParseByte)(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return (0, parse_utils_1.strictParseFloat32)("0." + value) * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module) {

"use strict";


module.exports = function(tagname, parent, val) {
  this.tagname = tagname;
  this.parent = parent;
  this.child = {}; //child tags
  this.attrsMap = {}; //attributes map
  this.val = val; //text only
  this.addChild = function(child) {
    if (Array.isArray(this.child[child.tagname])) {
      //already presents
      this.child[child.tagname].push(child);
    } else {
      this.child[child.tagname] = [child];
    }
  };
};


/***/ }),
/* 67 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = exports.iso8601 = void 0;
const iso8601 = (time) => (0, exports.toDate)(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
exports.iso8601 = iso8601;
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};
exports.toDate = toDate;


/***/ }),
/* 68 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(280), exports);
tslib_1.__exportStar(__webpack_require__(498), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(473), exports);


/***/ }),
/* 69 */,
/* 70 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(__webpack_require__(234));

var _stringify = _interopRequireDefault(__webpack_require__(385));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports.default = _default;

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(885), exports);


/***/ }),
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module) {

module.exports = {"name":"@aws-sdk/client-sso","description":"AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native","version":"3.131.0","scripts":{"build":"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"2.0.0","@aws-crypto/sha256-js":"2.0.0","@aws-sdk/config-resolver":"3.130.0","@aws-sdk/fetch-http-handler":"3.131.0","@aws-sdk/hash-node":"3.127.0","@aws-sdk/invalid-dependency":"3.127.0","@aws-sdk/middleware-content-length":"3.127.0","@aws-sdk/middleware-host-header":"3.127.0","@aws-sdk/middleware-logger":"3.127.0","@aws-sdk/middleware-recursion-detection":"3.127.0","@aws-sdk/middleware-retry":"3.127.0","@aws-sdk/middleware-serde":"3.127.0","@aws-sdk/middleware-stack":"3.127.0","@aws-sdk/middleware-user-agent":"3.127.0","@aws-sdk/node-config-provider":"3.127.0","@aws-sdk/node-http-handler":"3.127.0","@aws-sdk/protocol-http":"3.127.0","@aws-sdk/smithy-client":"3.127.0","@aws-sdk/types":"3.127.0","@aws-sdk/url-parser":"3.127.0","@aws-sdk/util-base64-browser":"3.109.0","@aws-sdk/util-base64-node":"3.55.0","@aws-sdk/util-body-length-browser":"3.55.0","@aws-sdk/util-body-length-node":"3.55.0","@aws-sdk/util-defaults-mode-browser":"3.127.0","@aws-sdk/util-defaults-mode-node":"3.130.0","@aws-sdk/util-user-agent-browser":"3.127.0","@aws-sdk/util-user-agent-node":"3.127.0","@aws-sdk/util-utf8-browser":"3.109.0","@aws-sdk/util-utf8-node":"3.109.0","tslib":"^2.3.1"},"devDependencies":{"@aws-sdk/service-client-documentation-generator":"3.58.0","@tsconfig/recommended":"1.0.1","@types/node":"^12.7.5","concurrently":"7.0.0","downlevel-dts":"0.7.0","rimraf":"3.0.2","typedoc":"0.19.2","typescript":"~4.6.2"},"engines":{"node":">=12.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sso"}};

/***/ }),
/* 82 */
/***/ (function(__unusedmodule, exports) {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module) {

module.exports = require("os");

/***/ }),
/* 88 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(337), exports);


/***/ }),
/* 89 */,
/* 90 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPackageVersionReadmeCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class GetPackageVersionReadmeCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "GetPackageVersionReadmeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetPackageVersionReadmeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetPackageVersionReadmeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetPackageVersionReadmeCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetPackageVersionReadmeCommand)(output, context);
    }
}
exports.GetPackageVersionReadmeCommand = GetPackageVersionReadmeCommand;


/***/ }),
/* 91 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCustomEndpointsConfig = void 0;
const util_middleware_1 = __webpack_require__(325);
const resolveCustomEndpointsConfig = (input) => {
    var _a;
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
        endpoint: (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0, util_middleware_1.normalizeProvider)(input.useDualstackEndpoint),
    };
};
exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateExternalConnectionCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class AssociateExternalConnectionCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "AssociateExternalConnectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateExternalConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateExternalConnectionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1AssociateExternalConnectionCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1AssociateExternalConnectionCommand)(output, context);
    }
}
exports.AssociateExternalConnectionCommand = AssociateExternalConnectionCommand;


/***/ }),
/* 95 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(__webpack_require__(327));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports.default = _default;

/***/ }),
/* 96 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserAgent = exports.UA_APP_ID_INI_NAME = exports.UA_APP_ID_ENV_NAME = void 0;
const node_config_provider_1 = __webpack_require__(519);
const os_1 = __webpack_require__(87);
const process_1 = __webpack_require__(316);
const is_crt_available_1 = __webpack_require__(454);
exports.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
exports.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        [`os/${(0, os_1.platform)()}`, (0, os_1.release)()],
        ["lang/js"],
        ["md/nodejs", `${process_1.versions.node}`],
    ];
    const crtAvailable = (0, is_crt_available_1.isCrtAvailable)();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (process_1.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${process_1.env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = (0, node_config_provider_1.loadConfig)({
        environmentVariableSelector: (env) => env[exports.UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[exports.UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};
exports.defaultUserAgent = defaultUserAgent;


/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(747));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),
/* 103 */,
/* 104 */
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(470);
const codeArtifact = __webpack_require__(539);

async function run() {
  const region = core.getInput('region', { required: true });
  const domain = core.getInput('domain', { required: true });
  const owner = core.getInput('owner', { required: true });
  const duration = core.getInput('duration', { required: false });
  const repo = core.getInput('codeartifact-repo', { required: true });

  const client = new codeArtifact.CodeartifactClient({ region: region });
  const authCommand = new codeArtifact.GetAuthorizationTokenCommand({
    domain: domain,
    domainOwner: '12345',
    durationSeconds: duration
  });

  core.debug(`::debug:: AWS CodeArtifact Login(Auth) ${domain}-${owner}`);

  const response = await client.send(authCommand);
  const authToken = response.authorizationToken;
  if (response.authorizationToken === undefined) {
    throw Error(`AWS CodeArtifact Authentication Failed: ${response.$metadata.httpStatusCode} (${response.$metadata.requestId})`);
  }

  core.setOutput('registry', `https://${domain}-${owner}.d.codeartifact.${region}.amazonaws.com`);
  core.setOutput('auth-token', authToken);
  // core.setSecret(authToken);
  core.debug(`::debug:: https://${domain}-${owner}.d.codeartifact.${region}.amazonaws.com`);
  core.debug(`::debug:: ${authToken.length}`);
}


/***/ }),
/* 105 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(993), exports);
tslib_1.__exportStar(__webpack_require__(706), exports);


/***/ }),
/* 106 */,
/* 107 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromTokenFile = void 0;
const property_provider_1 = __webpack_require__(948);
const fs_1 = __webpack_require__(747);
const fromWebToken_1 = __webpack_require__(408);
const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    return resolveTokenFile(init);
};
exports.fromTokenFile = fromTokenFile;
const resolveTokenFile = (init) => {
    var _a, _b, _c;
    const webIdentityTokenFile = (_a = init === null || init === void 0 ? void 0 : init.webIdentityTokenFile) !== null && _a !== void 0 ? _a : process.env[ENV_TOKEN_FILE];
    const roleArn = (_b = init === null || init === void 0 ? void 0 : init.roleArn) !== null && _b !== void 0 ? _b : process.env[ENV_ROLE_ARN];
    const roleSessionName = (_c = init === null || init === void 0 ? void 0 : init.roleSessionName) !== null && _c !== void 0 ? _c : process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.CredentialsProviderError("Web identity configuration not specified");
    }
    return (0, fromWebToken_1.fromWebToken)({
        ...init,
        webIdentityToken: (0, fs_1.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};


/***/ }),
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DisposePackageVersionsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DisposePackageVersionsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DisposePackageVersionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisposePackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DisposePackageVersionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DisposePackageVersionsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DisposePackageVersionsCommand)(output, context);
    }
}
exports.DisposePackageVersionsCommand = DisposePackageVersionsCommand;


/***/ }),
/* 114 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const url_parser_1 = __webpack_require__(187);
const endpoints_1 = __webpack_require__(120);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2018-09-22",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : endpoints_1.defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "codeartifact",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : url_parser_1.parseUrl,
    });
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),
/* 115 */,
/* 116 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateServiceException = exports.ServiceException = void 0;
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
exports.ServiceException = ServiceException;
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};
exports.decorateServiceException = decorateServiceException;


/***/ }),
/* 117 */,
/* 118 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const middleware_stack_1 = __webpack_require__(349);
class Command {
    constructor() {
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
    }
}
exports.Command = Command;


/***/ }),
/* 119 */,
/* 120 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRegionInfoProvider = void 0;
const config_resolver_1 = __webpack_require__(529);
const regionHash = {};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "ap-southeast-3",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-2",
            "us-west-1",
            "us-west-2",
        ],
        regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "codeartifact.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "codeartifact-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "codeartifact-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "codeartifact.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "codeartifact.{region}.amazonaws.com.cn",
                tags: [],
            },
            {
                hostname: "codeartifact-fips.{region}.amazonaws.com.cn",
                tags: ["fips"],
            },
            {
                hostname: "codeartifact-fips.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "codeartifact.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-iso": {
        regions: ["us-iso-east-1", "us-iso-west-1"],
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "codeartifact.{region}.c2s.ic.gov",
                tags: [],
            },
            {
                hostname: "codeartifact-fips.{region}.c2s.ic.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "codeartifact.{region}.sc2s.sgov.gov",
                tags: [],
            },
            {
                hostname: "codeartifact-fips.{region}.sc2s.sgov.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-west-1"],
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "codeartifact.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "codeartifact-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "codeartifact-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "codeartifact.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
};
const defaultRegionInfoProvider = async (region, options) => (0, config_resolver_1.getRegionInfo)(region, {
    ...options,
    signingService: "codeartifact",
    regionHash,
    partitionHash,
});
exports.defaultRegionInfoProvider = defaultRegionInfoProvider;


/***/ }),
/* 121 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = __webpack_require__(422);
const package_json_1 = tslib_1.__importDefault(__webpack_require__(415));
const client_sts_1 = __webpack_require__(840);
const config_resolver_1 = __webpack_require__(529);
const credential_provider_node_1 = __webpack_require__(125);
const hash_node_1 = __webpack_require__(145);
const middleware_retry_1 = __webpack_require__(286);
const node_config_provider_1 = __webpack_require__(519);
const node_http_handler_1 = __webpack_require__(953);
const util_base64_node_1 = __webpack_require__(287);
const util_body_length_node_1 = __webpack_require__(555);
const util_user_agent_node_1 = __webpack_require__(96);
const util_utf8_node_1 = __webpack_require__(841);
const runtimeConfig_shared_1 = __webpack_require__(114);
const smithy_client_1 = __webpack_require__(973);
const util_defaults_mode_node_1 = __webpack_require__(331);
const smithy_client_2 = __webpack_require__(973);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : (0, client_sts_1.decorateDefaultCredentialProvider)(credential_provider_node_1.defaultProvider),
        defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: (_f = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _f !== void 0 ? _f : (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (_g = config === null || config === void 0 ? void 0 : config.region) !== null && _g !== void 0 ? _g : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_h = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _h !== void 0 ? _h : new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (_j = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _j !== void 0 ? _j : (0, node_config_provider_1.loadConfig)({
            ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await defaultConfigProvider()).retryMode || middleware_retry_1.DEFAULT_RETRY_MODE,
        }),
        sha256: (_k = config === null || config === void 0 ? void 0 : config.sha256) !== null && _k !== void 0 ? _k : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_l = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _l !== void 0 ? _l : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_m = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _m !== void 0 ? _m : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_o = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _o !== void 0 ? _o : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
        utf8Decoder: (_p = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _p !== void 0 ? _p : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_q = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _q !== void 0 ? _q : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),
/* 122 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveStsAuthConfig = void 0;
const middleware_signing_1 = __webpack_require__(307);
const resolveStsAuthConfig = (input, { stsClientCtor }) => (0, middleware_signing_1.resolveAwsAuthConfig)({
    ...input,
    stsClientCtor,
});
exports.resolveStsAuthConfig = resolveStsAuthConfig;


/***/ }),
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(635), exports);


/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCallerIdentityCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const middleware_signing_1 = __webpack_require__(307);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class GetCallerIdentityCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetCallerIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetCallerIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetCallerIdentityResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetCallerIdentityCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetCallerIdentityCommand)(output, context);
    }
}
exports.GetCallerIdentityCommand = GetCallerIdentityCommand;


/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
const util_buffer_from_1 = __webpack_require__(59);
const buffer_1 = __webpack_require__(293);
const crypto_1 = __webpack_require__(417);
class Hash {
    constructor(algorithmIdentifier, secret) {
        this.hash = secret ? (0, crypto_1.createHmac)(algorithmIdentifier, castSourceData(secret)) : (0, crypto_1.createHash)(algorithmIdentifier);
    }
    update(toHash, encoding) {
        this.hash.update(castSourceData(toHash, encoding));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
}
exports.Hash = Hash;
function castSourceData(toCast, encoding) {
    if (buffer_1.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return (0, util_buffer_from_1.fromString)(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return (0, util_buffer_from_1.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return (0, util_buffer_from_1.fromArrayBuffer)(toCast);
}


/***/ }),
/* 146 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstanceMetadataEndpoint = exports.httpRequest = void 0;
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(158), exports);
tslib_1.__exportStar(__webpack_require__(846), exports);
tslib_1.__exportStar(__webpack_require__(107), exports);
var httpRequest_1 = __webpack_require__(175);
Object.defineProperty(exports, "httpRequest", { enumerable: true, get: function () { return httpRequest_1.httpRequest; } });
var getInstanceMetadataEndpoint_1 = __webpack_require__(745);
Object.defineProperty(exports, "getInstanceMetadataEndpoint", { enumerable: true, get: function () { return getInstanceMetadataEndpoint_1.getInstanceMetadataEndpoint; } });


/***/ }),
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(917), exports);


/***/ }),
/* 150 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayloadHash = void 0;
const is_array_buffer_1 = __webpack_require__(910);
const util_hex_encoding_1 = __webpack_require__(754);
const constants_1 = __webpack_require__(774);
const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === constants_1.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, is_array_buffer_1.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(body);
        return (0, util_hex_encoding_1.toHex)(await hashCtor.digest());
    }
    return constants_1.UNSIGNED_PAYLOAD;
};
exports.getPayloadHash = getPayloadHash;


/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPackageVersionAssetsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListPackageVersionAssetsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListPackageVersionAssetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListPackageVersionAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListPackageVersionAssetsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListPackageVersionAssetsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListPackageVersionAssetsCommand)(output, context);
    }
}
exports.ListPackageVersionAssetsCommand = ListPackageVersionAssetsCommand;


/***/ }),
/* 158 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromInstanceMetadata = void 0;
const property_provider_1 = __webpack_require__(948);
const httpRequest_1 = __webpack_require__(175);
const ImdsCredentials_1 = __webpack_require__(560);
const RemoteProviderInit_1 = __webpack_require__(846);
const retry_1 = __webpack_require__(588);
const getInstanceMetadataEndpoint_1 = __webpack_require__(745);
const staticStabilityProvider_1 = __webpack_require__(423);
const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
const IMDS_TOKEN_PATH = "/latest/api/token";
const fromInstanceMetadata = (init = {}) => (0, staticStabilityProvider_1.staticStabilityProvider)(getInstanceImdsProvider(init), { logger: init.logger });
exports.fromInstanceMetadata = fromInstanceMetadata;
const getInstanceImdsProvider = (init) => {
    let disableFetchToken = false;
    const { timeout, maxRetries } = (0, RemoteProviderInit_1.providerConfigFromInit)(init);
    const getCredentials = async (maxRetries, options) => {
        const profile = (await (0, retry_1.retry)(async () => {
            let profile;
            try {
                profile = await getProfile(options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return profile;
        }, maxRetries)).trim();
        return (0, retry_1.retry)(async () => {
            let creds;
            try {
                creds = await getCredentialsFromProfile(profile, options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return creds;
        }, maxRetries);
    };
    return async () => {
        const endpoint = await (0, getInstanceMetadataEndpoint_1.getInstanceMetadataEndpoint)();
        if (disableFetchToken) {
            return getCredentials(maxRetries, { ...endpoint, timeout });
        }
        else {
            let token;
            try {
                token = (await getMetadataToken({ ...endpoint, timeout })).toString();
            }
            catch (error) {
                if ((error === null || error === void 0 ? void 0 : error.statusCode) === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error",
                    });
                }
                else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
                    disableFetchToken = true;
                }
                return getCredentials(maxRetries, { ...endpoint, timeout });
            }
            return getCredentials(maxRetries, {
                ...endpoint,
                headers: {
                    "x-aws-ec2-metadata-token": token,
                },
                timeout,
            });
        }
    };
};
const getMetadataToken = async (options) => (0, httpRequest_1.httpRequest)({
    ...options,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600",
    },
});
const getProfile = async (options) => (await (0, httpRequest_1.httpRequest)({ ...options, path: IMDS_PATH })).toString();
const getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await (0, httpRequest_1.httpRequest)({
        ...options,
        path: IMDS_PATH + profile,
    })).toString());
    if (!(0, ImdsCredentials_1.isImdsCredentials)(credsResponse)) {
        throw new property_provider_1.CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return (0, ImdsCredentials_1.fromImdsCredentials)(credsResponse);
};


/***/ }),
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDomainCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DescribeDomainCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DescribeDomainCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeDomainResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DescribeDomainCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DescribeDomainCommand)(output, context);
    }
}
exports.DescribeDomainCommand = DescribeDomainCommand;


/***/ }),
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePackageVersionsStatusCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class UpdatePackageVersionsStatusCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "UpdatePackageVersionsStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdatePackageVersionsStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdatePackageVersionsStatusResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1UpdatePackageVersionsStatusCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1UpdatePackageVersionsStatusCommand)(output, context);
    }
}
exports.UpdatePackageVersionsStatusCommand = UpdatePackageVersionsStatusCommand;


/***/ }),
/* 166 */,
/* 167 */
/***/ (function(module) {

module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"};

/***/ }),
/* 168 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(952), exports);
tslib_1.__exportStar(__webpack_require__(514), exports);
tslib_1.__exportStar(__webpack_require__(736), exports);
tslib_1.__exportStar(__webpack_require__(809), exports);


/***/ }),
/* 169 */,
/* 170 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(839);
const buildOptions = __webpack_require__(839).buildOptions;
const xmlNode = __webpack_require__(66);
const regx =
  '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

//polyfill
if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}

const defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false, //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseNodeValue: true,
  parseAttributeValue: false,
  arrayMode: false,
  trimValues: true, //Trim string values of tag and attributes
  cdataTagName: false,
  cdataPositionChar: '\\c',
  tagValueProcessor: function(a, tagName) {
    return a;
  },
  attrValueProcessor: function(a, attrName) {
    return a;
  },
  stopNodes: []
  //decodeStrict: false,
};

exports.defaultOptions = defaultOptions;

const props = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'ignoreNameSpace',
  'allowBooleanAttributes',
  'parseNodeValue',
  'parseAttributeValue',
  'arrayMode',
  'trimValues',
  'cdataTagName',
  'cdataPositionChar',
  'tagValueProcessor',
  'attrValueProcessor',
  'parseTrueNumberOnly',
  'stopNodes'
];
exports.props = props;

/**
 * Trim -> valueProcessor -> parse value
 * @param {string} tagName
 * @param {string} val
 * @param {object} options
 */
function processTagValue(tagName, val, options) {
  if (val) {
    if (options.trimValues) {
      val = val.trim();
    }
    val = options.tagValueProcessor(val, tagName);
    val = parseValue(val, options.parseNodeValue, options.parseTrueNumberOnly);
  }

  return val;
}

function resolveNameSpace(tagname, options) {
  if (options.ignoreNameSpace) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

function parseValue(val, shouldParse, parseTrueNumberOnly) {
  if (shouldParse && typeof val === 'string') {
    let parsed;
    if (val.trim() === '' || isNaN(val)) {
      parsed = val === 'true' ? true : val === 'false' ? false : val;
    } else {
      if (val.indexOf('0x') !== -1) {
        //support hexa decimal
        parsed = Number.parseInt(val, 16);
      } else if (val.indexOf('.') !== -1) {
        parsed = Number.parseFloat(val);
        val = val.replace(/\.?0+$/, "");
      } else {
        parsed = Number.parseInt(val, 10);
      }
      if (parseTrueNumberOnly) {
        parsed = String(parsed) === val ? parsed : val;
      }
    }
    return parsed;
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');

function buildAttributesMap(attrStr, options) {
  if (!options.ignoreAttributes && typeof attrStr === 'string') {
    attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = resolveNameSpace(matches[i][1], options);
      if (attrName.length) {
        if (matches[i][4] !== undefined) {
          if (options.trimValues) {
            matches[i][4] = matches[i][4].trim();
          }
          matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
          attrs[options.attributeNamePrefix + attrName] = parseValue(
            matches[i][4],
            options.parseAttributeValue,
            options.parseTrueNumberOnly
          );
        } else if (options.allowBooleanAttributes) {
          attrs[options.attributeNamePrefix + attrName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (options.attrNodeName) {
      const attrCollection = {};
      attrCollection[options.attrNodeName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}

const getTraversalObj = function(xmlData, options) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  options = buildOptions(options, defaultOptions, props);
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";

//function match(xmlData){
  for(let i=0; i< xmlData.length; i++){
    const ch = xmlData[i];
    if(ch === '<'){
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(options.ignoreNameSpace){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        /* if (currentNode.parent) {
          currentNode.parent.val = util.getValue(currentNode.parent.val) + '' + processTagValue2(tagName, textData , options);
        } */
        if(currentNode){
          if(currentNode.val){
            currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(tagName, textData , options);
          }else{
            currentNode.val = processTagValue(tagName, textData , options);
          }
        }

        if (options.stopNodes.length && options.stopNodes.includes(currentNode.tagname)) {
          currentNode.child = []
          if (currentNode.attrsMap == undefined) { currentNode.attrsMap = {}}
          currentNode.val = xmlData.substr(currentNode.startIndex + 1, i - currentNode.startIndex - 1)
        }
        currentNode = currentNode.parent;
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {
        i = findClosingIndex(xmlData, "?>", i, "Pi Tag is not closed.")
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        i = findClosingIndex(xmlData, "-->", i, "Comment is not closed.")
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const closeIndex = findClosingIndex(xmlData, ">", i, "DOCTYPE is not closed.")
        const tagExp = xmlData.substring(i, closeIndex);
        if(tagExp.indexOf("[") >= 0){
          i = xmlData.indexOf("]>", i) + 1;
        }else{
          i = closeIndex;
        }
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2
        const tagExp = xmlData.substring(i + 9,closeIndex);

        //considerations
        //1. CDATA will always have parent node
        //2. A tag with CDATA is not a leaf node so it's value would be string type.
        if(textData){
          currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(currentNode.tagname, textData , options);
          textData = "";
        }

        if (options.cdataTagName) {
          //add cdata node
          const childNode = new xmlNode(options.cdataTagName, currentNode, tagExp);
          currentNode.addChild(childNode);
          //for backtracking
          currentNode.val = util.getValue(currentNode.val) + options.cdataPositionChar;
          //add rest value to parent node
          if (tagExp) {
            childNode.val = tagExp;
          }
        } else {
          currentNode.val = (currentNode.val || '') + (tagExp || '');
        }

        i = closeIndex + 2;
      }else {//Opening tag
        const result = closingIndexForOpeningTag(xmlData, i+1)
        let tagExp = result.data;
        const closeIndex = result.index;
        const separatorIndex = tagExp.indexOf(" ");
        let tagName = tagExp;
        let shouldBuildAttributesMap = true;
        if(separatorIndex !== -1){
          tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
          tagExp = tagExp.substr(separatorIndex + 1);
        }

        if(options.ignoreNameSpace){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
            shouldBuildAttributesMap = tagName !== result.data.substr(colonIndex + 1);
          }
        }

        //save text to parent node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            currentNode.val = util.getValue(currentNode.val) + '' + processTagValue( currentNode.tagname, textData, options);
          }
        }

        if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){//selfClosing tag

          if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
            tagName = tagName.substr(0, tagName.length - 1);
            tagExp = tagName;
          }else{
            tagExp = tagExp.substr(0, tagExp.length - 1);
          }

          const childNode = new xmlNode(tagName, currentNode, '');
          if(tagName !== tagExp){
            childNode.attrsMap = buildAttributesMap(tagExp, options);
          }
          currentNode.addChild(childNode);
        }else{//opening tag

          const childNode = new xmlNode( tagName, currentNode );
          if (options.stopNodes.length && options.stopNodes.includes(childNode.tagname)) {
            childNode.startIndex=closeIndex;
          }
          if(tagName !== tagExp && shouldBuildAttributesMap){
            childNode.attrsMap = buildAttributesMap(tagExp, options);
          }
          currentNode.addChild(childNode);
          currentNode = childNode;
        }
        textData = "";
        i = closeIndex;
      }
    }else{
      textData += xmlData[i];
    }
  }
  return xmlObj;
}

function closingIndexForOpeningTag(data, i){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < data.length; index++) {
    let ch = data[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === '>') {
        return {
          data: tagExp,
          index: index
        }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else{
    return closingIndex + str.length - 1;
  }
}

exports.getTraversalObj = getTraversalObj;


/***/ }),
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequest = void 0;
const property_provider_1 = __webpack_require__(948);
const buffer_1 = __webpack_require__(293);
const http_1 = __webpack_require__(605);
function httpRequest(options) {
    return new Promise((resolve, reject) => {
        var _a;
        const req = (0, http_1.request)({
            method: "GET",
            ...options,
            hostname: (_a = options.hostname) === null || _a === void 0 ? void 0 : _a.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
            reject(Object.assign(new property_provider_1.ProviderError("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", () => {
            reject(new property_provider_1.ProviderError("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new property_provider_1.ProviderError("Error response received from instance metadata service"), { statusCode }));
                req.destroy();
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(buffer_1.Buffer.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}
exports.httpRequest = httpRequest;


/***/ }),
/* 176 */,
/* 177 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtendedInstanceMetadataCredentials = void 0;
const STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
const STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
const STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
const getExtendedInstanceMetadataCredentials = (credentials, logger) => {
    var _a;
    const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
        Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
    const newExpiration = new Date(Date.now() + refreshInterval * 1000);
    logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these " +
        "credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " +
        STATIC_STABILITY_DOC_URL);
    const originalExpiration = (_a = credentials.originalExpiration) !== null && _a !== void 0 ? _a : credentials.expiration;
    return {
        ...credentials,
        ...(originalExpiration ? { originalExpiration } : {}),
        expiration: newExpiration,
    };
};
exports.getExtendedInstanceMetadataCredentials = getExtendedInstanceMetadataCredentials;


/***/ }),
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrl = void 0;
const querystring_parser_1 = __webpack_require__(391);
const parseUrl = (url) => {
    const { hostname, pathname, port, protocol, search } = new URL(url);
    let query;
    if (search) {
        query = (0, querystring_parser_1.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};
exports.parseUrl = parseUrl;


/***/ }),
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getResolvedPartition = void 0;
const getResolvedPartition = (region, { partitionHash }) => { var _a; return (_a = Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region))) !== null && _a !== void 0 ? _a : "aws"; };
exports.getResolvedPartition = getResolvedPartition;


/***/ }),
/* 193 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRequest = void 0;
const cloneRequest_1 = __webpack_require__(57);
const constants_1 = __webpack_require__(774);
const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const headerName of Object.keys(request.headers)) {
        if (constants_1.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};
exports.prepareRequest = prepareRequest;


/***/ }),
/* 194 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateDefaultCredentialProvider = exports.getDefaultRoleAssumerWithWebIdentity = exports.getDefaultRoleAssumer = void 0;
const defaultStsRoleAssumers_1 = __webpack_require__(551);
const STSClient_1 = __webpack_require__(570);
const getDefaultRoleAssumer = (stsOptions = {}) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumer)(stsOptions, STSClient_1.STSClient);
exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
const getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}) => (0, defaultStsRoleAssumers_1.getDefaultRoleAssumerWithWebIdentity)(stsOptions, STSClient_1.STSClient);
exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: (0, exports.getDefaultRoleAssumer)(input),
    roleAssumerWithWebIdentity: (0, exports.getDefaultRoleAssumerWithWebIdentity)(input),
    ...input,
});
exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;


/***/ }),
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";

//parse Empty Node as self closing node
const buildOptions = __webpack_require__(839).buildOptions;

const defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataTagName: false,
  cdataPositionChar: '\\c',
  format: false,
  indentBy: '  ',
  supressEmptyNode: false,
  tagValueProcessor: function(a) {
    return a;
  },
  attrValueProcessor: function(a) {
    return a;
  },
};

const props = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'cdataTagName',
  'cdataPositionChar',
  'format',
  'indentBy',
  'supressEmptyNode',
  'tagValueProcessor',
  'attrValueProcessor',
];

function Parser(options) {
  this.options = buildOptions(options, defaultOptions, props);
  if (this.options.ignoreAttributes || this.options.attrNodeName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }
  if (this.options.cdataTagName) {
    this.isCDATA = isCDATA;
  } else {
    this.isCDATA = function(/*a*/) {
      return false;
    };
  }
  this.replaceCDATAstr = replaceCDATAstr;
  this.replaceCDATAarr = replaceCDATAarr;

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }

  if (this.options.supressEmptyNode) {
    this.buildTextNode = buildEmptyTextNode;
    this.buildObjNode = buildEmptyObjNode;
  } else {
    this.buildTextNode = buildTextValNode;
    this.buildObjNode = buildObjectNode;
  }

  this.buildTextValNode = buildTextValNode;
  this.buildObjectNode = buildObjectNode;
}

Parser.prototype.parse = function(jObj) {
  return this.j2x(jObj, 0).val;
};

Parser.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  const keys = Object.keys(jObj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node
    } else if (jObj[key] === null) {
      val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += ' ' + attr + '="' + this.options.attrValueProcessor('' + jObj[key]) + '"';
      } else if (this.isCDATA(key)) {
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAstr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAstr('', jObj[key]);
        }
      } else {
        //tag value
        if (key === this.options.textNodeName) {
          if (jObj[this.options.cdataTagName]) {
            //value will added while processing cdata
          } else {
            val += this.options.tagValueProcessor('' + jObj[key]);
          }
        } else {
          val += this.buildTextNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      if (this.isCDATA(key)) {
        val += this.indentate(level);
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAarr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAarr('', jObj[key]);
        }
      } else {
        //nested nodes
        const arrLen = jObj[key].length;
        for (let j = 0; j < arrLen; j++) {
          const item = jObj[key][j];
          if (typeof item === 'undefined') {
            // supress undefined node
          } else if (item === null) {
            val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          } else if (typeof item === 'object') {
            const result = this.j2x(item, level + 1);
            val += this.buildObjNode(result.val, key, result.attrStr, level);
          } else {
            val += this.buildTextNode(item, key, '', level);
          }
        }
      }
    } else {
      //nested node
      if (this.options.attrNodeName && key === this.options.attrNodeName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += ' ' + Ks[j] + '="' + this.options.attrValueProcessor('' + jObj[key][Ks[j]]) + '"';
        }
      } else {
        const result = this.j2x(jObj[key], level + 1);
        val += this.buildObjNode(result.val, key, result.attrStr, level);
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

function replaceCDATAstr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata + ']]' + this.tagEndChar;
  } else {
    return str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata + ']]' + this.tagEndChar);
  }
}

function replaceCDATAarr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata.join(']]><![CDATA[') + ']]' + this.tagEndChar;
  } else {
    for (let v in cdata) {
      str = str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata[v] + ']]>');
    }
    return str + this.newLine;
  }
}

function buildObjectNode(val, key, attrStr, level) {
  if (attrStr && !val.includes('<')) {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      '>' +
      val +
      //+ this.newLine
      // + this.indentate(level)
      '</' +
      key +
      this.tagEndChar
    );
  } else {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      this.tagEndChar +
      val +
      //+ this.newLine
      this.indentate(level) +
      '</' +
      key +
      this.tagEndChar
    );
  }
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
    //+ this.newLine
  }
}

function buildTextValNode(val, key, attrStr, level) {
  return (
    this.indentate(level) +
    '<' +
    key +
    attrStr +
    '>' +
    this.options.tagValueProcessor(val) +
    '</' +
    key +
    this.tagEndChar
  );
}

function buildEmptyTextNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildTextValNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
  }
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

function isCDATA(name) {
  return name === this.options.cdataTagName;
}

//formatting
//indentation
//\n after each closing or self closing tag

module.exports = Parser;


/***/ }),
/* 201 */,
/* 202 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TagResourceCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class TagResourceCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "TagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.TagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.TagResourceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1TagResourceCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1TagResourceCommand)(output, context);
    }
}
exports.TagResourceCommand = TagResourceCommand;


/***/ }),
/* 203 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveWebIdentityCredentials = exports.isWebIdentityProfile = void 0;
const credential_provider_web_identity_1 = __webpack_require__(590);
const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
exports.isWebIdentityProfile = isWebIdentityProfile;
const resolveWebIdentityCredentials = async (profile, options) => (0, credential_provider_web_identity_1.fromTokenFile)({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
})();
exports.resolveWebIdentityCredentials = resolveWebIdentityCredentials;


/***/ }),
/* 204 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setConnectionTimeout = void 0;
const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    request.on("socket", (socket) => {
        if (socket.connecting) {
            const timeoutId = setTimeout(() => {
                request.destroy();
                reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
                    name: "TimeoutError",
                }));
            }, timeoutInMs);
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
    });
};
exports.setConnectionTimeout = setConnectionTimeout;


/***/ }),
/* 205 */,
/* 206 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TRANSIENT_ERROR_STATUS_CODES = exports.TRANSIENT_ERROR_CODES = exports.THROTTLING_ERROR_CODES = exports.CLOCK_SKEW_ERROR_CODES = void 0;
exports.CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
exports.THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
exports.TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
exports.TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];


/***/ }),
/* 207 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(839);
const buildOptions = __webpack_require__(839).buildOptions;
const x2j = __webpack_require__(170);

//TODO: do it later
const convertToJsonString = function(node, options) {
  options = buildOptions(options, x2j.defaultOptions, x2j.props);

  options.indentBy = options.indentBy || '';
  return _cToJsonStr(node, options, 0);
};

const _cToJsonStr = function(node, options, level) {
  let jObj = '{';

  //traver through all the children
  const keys = Object.keys(node.child);

  for (let index = 0; index < keys.length; index++) {
    var tagname = keys[index];
    if (node.child[tagname] && node.child[tagname].length > 1) {
      jObj += '"' + tagname + '" : [ ';
      for (var tag in node.child[tagname]) {
        jObj += _cToJsonStr(node.child[tagname][tag], options) + ' , ';
      }
      jObj = jObj.substr(0, jObj.length - 1) + ' ] '; //remove extra comma in last
    } else {
      jObj += '"' + tagname + '" : ' + _cToJsonStr(node.child[tagname][0], options) + ' ,';
    }
  }
  util.merge(jObj, node.attrsMap);
  //add attrsMap as new children
  if (util.isEmptyObject(jObj)) {
    return util.isExist(node.val) ? node.val : '';
  } else {
    if (util.isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        jObj += '"' + options.textNodeName + '" : ' + stringval(node.val);
      }
    }
  }
  //add value
  if (jObj[jObj.length - 1] === ',') {
    jObj = jObj.substr(0, jObj.length - 2);
  }
  return jObj + '}';
};

function stringval(v) {
  if (v === true || v === false || !isNaN(v)) {
    return v;
  } else {
    return '"' + v + '"';
  }
}

function indentate(options, level) {
  return options.indentBy.repeat(level);
}

exports.convertToJsonString = convertToJsonString;


/***/ }),
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */
/***/ (function(module) {

module.exports = require("https");

/***/ }),
/* 212 */,
/* 213 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssumeRoleWithSAMLCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class AssumeRoleWithSAMLCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithSAMLCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssumeRoleWithSAMLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssumeRoleWithSAMLResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryAssumeRoleWithSAMLCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryAssumeRoleWithSAMLCommand)(output, context);
    }
}
exports.AssumeRoleWithSAMLCommand = AssumeRoleWithSAMLCommand;


/***/ }),
/* 214 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}
exports.HttpResponse = HttpResponse;


/***/ }),
/* 215 */,
/* 216 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSharedConfigFiles = void 0;
const getConfigFilepath_1 = __webpack_require__(667);
const getCredentialsFilepath_1 = __webpack_require__(833);
const getProfileData_1 = __webpack_require__(601);
const parseIni_1 = __webpack_require__(750);
const slurpFile_1 = __webpack_require__(656);
const swallowError = () => ({});
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = (0, getCredentialsFilepath_1.getCredentialsFilepath)(), configFilepath = (0, getConfigFilepath_1.getConfigFilepath)() } = init;
    const parsedFiles = await Promise.all([
        (0, slurpFile_1.slurpFile)(configFilepath).then(parseIni_1.parseIni).then(getProfileData_1.getProfileData).catch(swallowError),
        (0, slurpFile_1.slurpFile)(filepath).then(parseIni_1.parseIni).catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};
exports.loadSharedConfigFiles = loadSharedConfigFiles;


/***/ }),
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getResolvedSigningRegion = void 0;
const getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
    if (signingRegion) {
        return signingRegion;
    }
    else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
            return regionRegexmatchArray[0].slice(1, -1);
        }
    }
};
exports.getResolvedSigningRegion = getResolvedSigningRegion;


/***/ }),
/* 220 */,
/* 221 */,
/* 222 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSessionTokenCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const middleware_signing_1 = __webpack_require__(307);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class GetSessionTokenCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetSessionTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetSessionTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetSessionTokenResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetSessionTokenCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetSessionTokenCommand)(output, context);
    }
}
exports.GetSessionTokenCommand = GetSessionTokenCommand;


/***/ }),
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveProfileData = void 0;
const property_provider_1 = __webpack_require__(948);
const resolveAssumeRoleCredentials_1 = __webpack_require__(393);
const resolveSsoCredentials_1 = __webpack_require__(369);
const resolveStaticCredentials_1 = __webpack_require__(693);
const resolveWebIdentityCredentials_1 = __webpack_require__(203);
const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && (0, resolveStaticCredentials_1.isStaticCredsProfile)(data)) {
        return (0, resolveStaticCredentials_1.resolveStaticCredentials)(data);
    }
    if ((0, resolveAssumeRoleCredentials_1.isAssumeRoleProfile)(data)) {
        return (0, resolveAssumeRoleCredentials_1.resolveAssumeRoleCredentials)(profileName, profiles, options, visitedProfiles);
    }
    if ((0, resolveStaticCredentials_1.isStaticCredsProfile)(data)) {
        return (0, resolveStaticCredentials_1.resolveStaticCredentials)(data);
    }
    if ((0, resolveWebIdentityCredentials_1.isWebIdentityProfile)(data)) {
        return (0, resolveWebIdentityCredentials_1.resolveWebIdentityCredentials)(data, options);
    }
    if ((0, resolveSsoCredentials_1.isSsoProfile)(data)) {
        return (0, resolveSsoCredentials_1.resolveSsoCredentials)(data);
    }
    throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};
exports.resolveProfileData = resolveProfileData;


/***/ }),
/* 231 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedSystemClockOffset = void 0;
const isClockSkewed_1 = __webpack_require__(881);
const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if ((0, isClockSkewed_1.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};
exports.getUpdatedSystemClockOffset = getUpdatedSystemClockOffset;


/***/ }),
/* 232 */,
/* 233 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setSocketTimeout = void 0;
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};
exports.setSocketTimeout = setSocketTimeout;


/***/ }),
/* 234 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;

var _crypto = _interopRequireDefault(__webpack_require__(417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAccountsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(743);
const Aws_restJson1_1 = __webpack_require__(340);
class ListAccountsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "ListAccountsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListAccountsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListAccountsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListAccountsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListAccountsCommand)(output, context);
    }
}
exports.ListAccountsCommand = ListAccountsCommand;


/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 252 */,
/* 253 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(__webpack_require__(353));
var legacy_json_1 = __importDefault(__webpack_require__(167));
var xml_json_1 = __importDefault(__webpack_require__(370));
var decode_codepoint_1 = __importDefault(__webpack_require__(737));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}


/***/ }),
/* 254 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHostnameFromVariants = void 0;
const getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => {
    var _a;
    return (_a = variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))) === null || _a === void 0 ? void 0 : _a.hostname;
};
exports.getHostnameFromVariants = getHostnameFromVariants;


/***/ }),
/* 255 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUri = void 0;
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
exports.escapeUri = escapeUri;
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSSOCredentials = void 0;
const client_sso_1 = __webpack_require__(788);
const property_provider_1 = __webpack_require__(948);
const shared_ini_file_loader_1 = __webpack_require__(388);
const EXPIRE_WINDOW_MS = 15 * 60 * 1000;
const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    try {
        token = await (0, shared_ini_file_loader_1.getSSOTokenFromFile)(ssoStartUrl);
    }
    catch (e) {
        throw new property_provider_1.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS) {
        throw new property_provider_1.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const sso = ssoClient || new client_sso_1.SSOClient({ region: ssoRegion });
    let ssoResp;
    try {
        ssoResp = await sso.send(new client_sso_1.GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw property_provider_1.CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new property_provider_1.CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
};
exports.resolveSSOCredentials = resolveSSOCredentials;


/***/ }),
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(886), exports);


/***/ }),
/* 264 */,
/* 265 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanonicalHeaders = void 0;
const constants_1 = __webpack_require__(774);
const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in constants_1.ALWAYS_UNSIGNABLE_HEADERS ||
            (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) ||
            constants_1.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            constants_1.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};
exports.getCanonicalHeaders = getCanonicalHeaders;


/***/ }),
/* 266 */,
/* 267 */,
/* 268 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = void 0;
const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
exports.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};


/***/ }),
/* 269 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRepositoriesCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListRepositoriesCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListRepositoriesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListRepositoriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListRepositoriesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListRepositoriesCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListRepositoriesCommand)(output, context);
    }
}
exports.ListRepositoriesCommand = ListRepositoriesCommand;


/***/ }),
/* 270 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfigsForDefaultMode = void 0;
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};
exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;


/***/ }),
/* 271 */,
/* 272 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateExternalConnectionCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DisassociateExternalConnectionCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DisassociateExternalConnectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisassociateExternalConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DisassociateExternalConnectionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DisassociateExternalConnectionCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DisassociateExternalConnectionCommand)(output, context);
    }
}
exports.DisassociateExternalConnectionCommand = DisassociateExternalConnectionCommand;


/***/ }),
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDomainCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DeleteDomainCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DeleteDomainCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteDomainResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DeleteDomainCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DeleteDomainCommand)(output, context);
    }
}
exports.DeleteDomainCommand = DeleteDomainCommand;


/***/ }),
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = exports.DEFAULT_USE_DUALSTACK_ENDPOINT = exports.CONFIG_USE_DUALSTACK_ENDPOINT = exports.ENV_USE_DUALSTACK_ENDPOINT = void 0;
const util_config_provider_1 = __webpack_require__(515);
exports.ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
exports.CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
exports.DEFAULT_USE_DUALSTACK_ENDPOINT = false;
exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0, util_config_provider_1.booleanSelector)(env, exports.ENV_USE_DUALSTACK_ENDPOINT, util_config_provider_1.SelectorType.ENV),
    configFileSelector: (profile) => (0, util_config_provider_1.booleanSelector)(profile, exports.CONFIG_USE_DUALSTACK_ENDPOINT, util_config_provider_1.SelectorType.CONFIG),
    default: false,
};


/***/ }),
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(358), exports);
tslib_1.__exportStar(__webpack_require__(883), exports);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(701), exports);
tslib_1.__exportStar(__webpack_require__(695), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(691), exports);
tslib_1.__exportStar(__webpack_require__(932), exports);
tslib_1.__exportStar(__webpack_require__(894), exports);
tslib_1.__exportStar(__webpack_require__(251), exports);


/***/ }),
/* 287 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toBase64 = exports.fromBase64 = void 0;
const util_buffer_from_1 = __webpack_require__(59);
const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
function fromBase64(input) {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}
exports.fromBase64 = fromBase64;
function toBase64(input) {
    return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
}
exports.toBase64 = toBase64;


/***/ }),
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module) {

module.exports = require("buffer");

/***/ }),
/* 294 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointFromRegion = void 0;
const getEndpointFromRegion = async (input) => {
    var _a;
    const { tls = true } = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
    }
    const useDualstackEndpoint = await input.useDualstackEndpoint();
    const useFipsEndpoint = await input.useFipsEndpoint();
    const { hostname } = (_a = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint }))) !== null && _a !== void 0 ? _a : {};
    if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
};
exports.getEndpointFromRegion = getEndpointFromRegion;


/***/ }),
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(__webpack_require__(370));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(__webpack_require__(353));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}


/***/ }),
/* 307 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(332), exports);
tslib_1.__exportStar(__webpack_require__(483), exports);


/***/ }),
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */
/***/ (function(module) {

module.exports = require("process");

/***/ }),
/* 317 */,
/* 318 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(385));

var _parse = _interopRequireDefault(__webpack_require__(734));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),
/* 319 */,
/* 320 */,
/* 321 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PutRepositoryPermissionsPolicyCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class PutRepositoryPermissionsPolicyCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "PutRepositoryPermissionsPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutRepositoryPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutRepositoryPermissionsPolicyResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1PutRepositoryPermissionsPolicyCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand)(output, context);
    }
}
exports.PutRepositoryPermissionsPolicyCommand = PutRepositoryPermissionsPolicyCommand;


/***/ }),
/* 322 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT_CONFIG_OPTIONS = exports.CONFIG_ENDPOINT_NAME = exports.ENV_ENDPOINT_NAME = void 0;
exports.ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
exports.CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
exports.ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.ENV_ENDPOINT_NAME],
    configFileSelector: (profile) => profile[exports.CONFIG_ENDPOINT_NAME],
    default: undefined,
};


/***/ }),
/* 323 */,
/* 324 */,
/* 325 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 326 */,
/* 327 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = _interopRequireDefault(__webpack_require__(383));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;

/***/ }),
/* 328 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "v1", {
  enumerable: true,
  get: function () {
    return _v.default;
  }
});
Object.defineProperty(exports, "v3", {
  enumerable: true,
  get: function () {
    return _v2.default;
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function () {
    return _v3.default;
  }
});
Object.defineProperty(exports, "v5", {
  enumerable: true,
  get: function () {
    return _v4.default;
  }
});
Object.defineProperty(exports, "NIL", {
  enumerable: true,
  get: function () {
    return _nil.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.default;
  }
});

var _v = _interopRequireDefault(__webpack_require__(70));

var _v2 = _interopRequireDefault(__webpack_require__(618));

var _v3 = _interopRequireDefault(__webpack_require__(728));

var _v4 = _interopRequireDefault(__webpack_require__(939));

var _nil = _interopRequireDefault(__webpack_require__(572));

var _version = _interopRequireDefault(__webpack_require__(95));

var _validate = _interopRequireDefault(__webpack_require__(327));

var _stringify = _interopRequireDefault(__webpack_require__(385));

var _parse = _interopRequireDefault(__webpack_require__(734));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 329 */,
/* 330 */,
/* 331 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(720), exports);


/***/ }),
/* 332 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSigV4AuthConfig = exports.resolveAwsAuthConfig = void 0;
const property_provider_1 = __webpack_require__(948);
const signature_v4_1 = __webpack_require__(461);
const CREDENTIAL_EXPIRE_WINDOW = 300000;
const resolveAwsAuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else {
        signer = () => normalizeProvider(input.region)()
            .then(async (region) => [
            (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            input.signingRegion = input.signingRegion || signingRegion || region;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const signerConstructor = input.signerConstructor || signature_v4_1.SignatureV4;
            return new signerConstructor(params);
        });
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
exports.resolveAwsAuthConfig = resolveAwsAuthConfig;
const resolveSigV4AuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else {
        signer = normalizeProvider(new signature_v4_1.SignatureV4({
            credentials: normalizedCreds,
            region: input.region,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
        }));
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
exports.resolveSigV4AuthConfig = resolveSigV4AuthConfig;
const normalizeProvider = (input) => {
    if (typeof input === "object") {
        const promisified = Promise.resolve(input);
        return () => promisified;
    }
    return input;
};
const normalizeCredentialProvider = (credentials) => {
    if (typeof credentials === "function") {
        return (0, property_provider_1.memoize)(credentials, (credentials) => credentials.expiration !== undefined &&
            credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials) => credentials.expiration !== undefined);
    }
    return normalizeProvider(credentials);
};


/***/ }),
/* 333 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueFromTextNode = void 0;
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = (0, exports.getValueFromTextNode)(obj[key]);
        }
    }
    return obj;
};
exports.getValueFromTextNode = getValueFromTextNode;


/***/ }),
/* 334 */,
/* 335 */
/***/ (function(module, __unusedexports, __webpack_require__) {

module.exports = __webpack_require__(850);


/***/ }),
/* 336 */,
/* 337 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromIni = void 0;
const shared_ini_file_loader_1 = __webpack_require__(388);
const resolveProfileData_1 = __webpack_require__(230);
const fromIni = (init = {}) => async () => {
    const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
    return (0, resolveProfileData_1.resolveProfileData)((0, shared_ini_file_loader_1.getProfileName)(init), profiles, init);
};
exports.fromIni = fromIni;


/***/ }),
/* 338 */,
/* 339 */,
/* 340 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1LogoutCommand = exports.deserializeAws_restJson1ListAccountsCommand = exports.deserializeAws_restJson1ListAccountRolesCommand = exports.deserializeAws_restJson1GetRoleCredentialsCommand = exports.serializeAws_restJson1LogoutCommand = exports.serializeAws_restJson1ListAccountsCommand = exports.serializeAws_restJson1ListAccountRolesCommand = exports.serializeAws_restJson1GetRoleCredentialsCommand = void 0;
const protocol_http_1 = __webpack_require__(504);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(743);
const SSOServiceException_1 = __webpack_require__(421);
const serializeAws_restJson1GetRoleCredentialsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken }),
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/federation/credentials";
    const query = {
        ...(input.roleName !== undefined && { role_name: input.roleName }),
        ...(input.accountId !== undefined && { account_id: input.accountId }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetRoleCredentialsCommand = serializeAws_restJson1GetRoleCredentialsCommand;
const serializeAws_restJson1ListAccountRolesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken }),
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/roles";
    const query = {
        ...(input.nextToken !== undefined && { next_token: input.nextToken }),
        ...(input.maxResults !== undefined && { max_result: input.maxResults.toString() }),
        ...(input.accountId !== undefined && { account_id: input.accountId }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAccountRolesCommand = serializeAws_restJson1ListAccountRolesCommand;
const serializeAws_restJson1ListAccountsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken }),
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/accounts";
    const query = {
        ...(input.nextToken !== undefined && { next_token: input.nextToken }),
        ...(input.maxResults !== undefined && { max_result: input.maxResults.toString() }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAccountsCommand = serializeAws_restJson1ListAccountsCommand;
const serializeAws_restJson1LogoutCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        ...(isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken }),
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/logout";
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1LogoutCommand = serializeAws_restJson1LogoutCommand;
const deserializeAws_restJson1GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRoleCredentialsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        roleCredentials: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.roleCredentials !== undefined && data.roleCredentials !== null) {
        contents.roleCredentials = deserializeAws_restJson1RoleCredentials(data.roleCredentials, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRoleCredentialsCommand = deserializeAws_restJson1GetRoleCredentialsCommand;
const deserializeAws_restJson1GetRoleCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new SSOServiceException_1.SSOServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccountRolesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        roleList: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.roleList !== undefined && data.roleList !== null) {
        contents.roleList = deserializeAws_restJson1RoleListType(data.roleList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAccountRolesCommand = deserializeAws_restJson1ListAccountRolesCommand;
const deserializeAws_restJson1ListAccountRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new SSOServiceException_1.SSOServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccountsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        accountList: undefined,
        nextToken: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.accountList !== undefined && data.accountList !== null) {
        contents.accountList = deserializeAws_restJson1AccountListType(data.accountList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAccountsCommand = deserializeAws_restJson1ListAccountsCommand;
const deserializeAws_restJson1ListAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new SSOServiceException_1.SSOServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1LogoutCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1LogoutCommand = deserializeAws_restJson1LogoutCommand;
const deserializeAws_restJson1LogoutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new SSOServiceException_1.SSOServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1AccountInfo = (output, context) => {
    return {
        accountId: (0, smithy_client_1.expectString)(output.accountId),
        accountName: (0, smithy_client_1.expectString)(output.accountName),
        emailAddress: (0, smithy_client_1.expectString)(output.emailAddress),
    };
};
const deserializeAws_restJson1AccountListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AccountInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1RoleCredentials = (output, context) => {
    return {
        accessKeyId: (0, smithy_client_1.expectString)(output.accessKeyId),
        expiration: (0, smithy_client_1.expectLong)(output.expiration),
        secretAccessKey: (0, smithy_client_1.expectString)(output.secretAccessKey),
        sessionToken: (0, smithy_client_1.expectString)(output.sessionToken),
    };
};
const deserializeAws_restJson1RoleInfo = (output, context) => {
    return {
        accountId: (0, smithy_client_1.expectString)(output.accountId),
        roleName: (0, smithy_client_1.expectString)(output.roleName),
    };
};
const deserializeAws_restJson1RoleListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoleInfo(entry, context);
    });
    return retVal;
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),
/* 341 */,
/* 342 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDomainPermissionsPolicyCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DeleteDomainPermissionsPolicyCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DeleteDomainPermissionsPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteDomainPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteDomainPermissionsPolicyResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DeleteDomainPermissionsPolicyCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand)(output, context);
    }
}
exports.DeleteDomainPermissionsPolicyCommand = DeleteDomainPermissionsPolicyCommand;


/***/ }),
/* 343 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
exports.HttpRequest = HttpRequest;
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}


/***/ }),
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(407), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(705), exports);


/***/ }),
/* 348 */,
/* 349 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(354), exports);


/***/ }),
/* 350 */,
/* 351 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};
exports.memoize = memoize;


/***/ }),
/* 352 */,
/* 353 */
/***/ (function(module) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"};

/***/ }),
/* 354 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.constructStack = void 0;
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.name && entry.name === toRemove) {
                isRemoved = true;
                entriesNameSet.delete(toRemove);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                if (entry.name)
                    entriesNameSet.delete(entry.name);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = () => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    throw new Error(`${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expendedMiddlewareList) => {
            wholeList.push(...expendedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain.map((entry) => entry.middleware);
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === name);
                    const toOverride = absoluteEntries[toOverrideIndex];
                    if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
                        throw new Error(`"${name}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be ` +
                            `overridden by same-name middleware with ${entry.priority} priority in ${entry.step} step.`);
                    }
                    absoluteEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override } = options;
            const entry = {
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === name);
                    const toOverride = relativeEntries[toOverrideIndex];
                    if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                        throw new Error(`"${name}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                            `by same-name middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                    }
                    relativeEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo((0, exports.constructStack)()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name } = entry;
                if (tags && tags.includes(toRemove)) {
                    if (name)
                        entriesNameSet.delete(name);
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo((0, exports.constructStack)());
            cloned.use(from);
            return cloned;
        },
        applyToStack: cloneTo,
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList().reverse()) {
                handler = middleware(handler, context);
            }
            return handler;
        },
    };
    return stack;
};
exports.constructStack = constructStack;
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};


/***/ }),
/* 355 */,
/* 356 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 357 */
/***/ (function(module) {

module.exports = require("assert");

/***/ }),
/* 358 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptiveRetryStrategy = void 0;
const config_1 = __webpack_require__(701);
const DefaultRateLimiter_1 = __webpack_require__(883);
const StandardRetryStrategy_1 = __webpack_require__(9);
class AdaptiveRetryStrategy extends StandardRetryStrategy_1.StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options !== null && options !== void 0 ? options : {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter !== null && rateLimiter !== void 0 ? rateLimiter : new DefaultRateLimiter_1.DefaultRateLimiter();
        this.mode = config_1.RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}
exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;


/***/ }),
/* 359 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = void 0;
const ProviderError_1 = __webpack_require__(396);
function chain(...providers) {
    return () => {
        let promise = Promise.reject(new ProviderError_1.ProviderError("No providers in chain"));
        for (const provider of providers) {
            promise = promise.catch((err) => {
                if (err === null || err === void 0 ? void 0 : err.tryNextLink) {
                    return provider();
                }
                throw err;
            });
        }
        return promise;
    };
}
exports.chain = chain;


/***/ }),
/* 360 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STSServiceException = void 0;
const smithy_client_1 = __webpack_require__(973);
class STSServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}
exports.STSServiceException = STSServiceException;


/***/ }),
/* 361 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT_MODE_CONFIG_OPTIONS = exports.CONFIG_ENDPOINT_MODE_NAME = exports.ENV_ENDPOINT_MODE_NAME = void 0;
const EndpointMode_1 = __webpack_require__(670);
exports.ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
exports.CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
exports.ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile) => profile[exports.CONFIG_ENDPOINT_MODE_NAME],
    default: EndpointMode_1.EndpointMode.IPv4,
};


/***/ }),
/* 362 */,
/* 363 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(879), exports);
tslib_1.__exportStar(__webpack_require__(766), exports);
tslib_1.__exportStar(__webpack_require__(245), exports);
tslib_1.__exportStar(__webpack_require__(556), exports);


/***/ }),
/* 364 */,
/* 365 */,
/* 366 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRealRegion = void 0;
const isFipsRegion_1 = __webpack_require__(960);
const getRealRegion = (region) => (0, isFipsRegion_1.isFipsRegion)(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;
exports.getRealRegion = getRealRegion;


/***/ }),
/* 367 */,
/* 368 */,
/* 369 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSsoCredentials = exports.isSsoProfile = void 0;
const credential_provider_sso_1 = __webpack_require__(168);
var credential_provider_sso_2 = __webpack_require__(168);
Object.defineProperty(exports, "isSsoProfile", { enumerable: true, get: function () { return credential_provider_sso_2.isSsoProfile; } });
const resolveSsoCredentials = (data) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = (0, credential_provider_sso_1.validateSsoProfile)(data);
    return (0, credential_provider_sso_1.fromSSO)({
        ssoStartUrl: sso_start_url,
        ssoAccountId: sso_account_id,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
    })();
};
exports.resolveSsoCredentials = resolveSsoCredentials;


/***/ }),
/* 370 */
/***/ (function(module) {

module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""};

/***/ }),
/* 371 */,
/* 372 */,
/* 373 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_HEADER = exports.INVOCATION_ID_HEADER = exports.NO_RETRY_INCREMENT = exports.TIMEOUT_RETRY_COST = exports.RETRY_COST = exports.INITIAL_RETRY_TOKENS = exports.THROTTLING_RETRY_DELAY_BASE = exports.MAXIMUM_RETRY_DELAY = exports.DEFAULT_RETRY_DELAY_BASE = void 0;
exports.DEFAULT_RETRY_DELAY_BASE = 100;
exports.MAXIMUM_RETRY_DELAY = 20 * 1000;
exports.THROTTLING_RETRY_DELAY_BASE = 500;
exports.INITIAL_RETRY_TOKENS = 500;
exports.RETRY_COST = 5;
exports.TIMEOUT_RETRY_COST = 10;
exports.NO_RETRY_INCREMENT = 1;
exports.INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
exports.REQUEST_HEADER = "amz-sdk-request";


/***/ }),
/* 374 */,
/* 375 */,
/* 376 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRegionConfig = void 0;
const getRealRegion_1 = __webpack_require__(366);
const isFipsRegion_1 = __webpack_require__(960);
const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return (0, getRealRegion_1.getRealRegion)(region);
            }
            const providedRegion = await region();
            return (0, getRealRegion_1.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if ((0, isFipsRegion_1.isFipsRegion)(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint === "boolean" ? Promise.resolve(useFipsEndpoint) : useFipsEndpoint();
        },
    };
};
exports.resolveRegionConfig = resolveRegionConfig;


/***/ }),
/* 377 */,
/* 378 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssumeRoleCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const middleware_signing_1 = __webpack_require__(307);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class AssumeRoleCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssumeRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssumeRoleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryAssumeRoleCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryAssumeRoleCommand)(output, context);
    }
}
exports.AssumeRoleCommand = AssumeRoleCommand;


/***/ }),
/* 379 */,
/* 380 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPackageOriginConfigurationCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class PutPackageOriginConfigurationCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "PutPackageOriginConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutPackageOriginConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutPackageOriginConfigurationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1PutPackageOriginConfigurationCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1PutPackageOriginConfigurationCommand)(output, context);
    }
}
exports.PutPackageOriginConfigurationCommand = PutPackageOriginConfigurationCommand;


/***/ }),
/* 381 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanonicalQuery = void 0;
const util_uri_escape_1 = __webpack_require__(392);
const constants_1 = __webpack_require__(774);
const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === constants_1.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce((encoded, value) => encoded.concat([`${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`]), [])
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};
exports.getCanonicalQuery = getCanonicalQuery;


/***/ }),
/* 382 */,
/* 383 */
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;

/***/ }),
/* 384 */,
/* 385 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(__webpack_require__(327));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;

/***/ }),
/* 386 */,
/* 387 */,
/* 388 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(790), exports);
tslib_1.__exportStar(__webpack_require__(671), exports);
tslib_1.__exportStar(__webpack_require__(466), exports);
tslib_1.__exportStar(__webpack_require__(520), exports);
tslib_1.__exportStar(__webpack_require__(216), exports);
tslib_1.__exportStar(__webpack_require__(528), exports);
tslib_1.__exportStar(__webpack_require__(591), exports);


/***/ }),
/* 389 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSharedConfigFiles = void 0;
const property_provider_1 = __webpack_require__(948);
const shared_ini_file_loader_1 = __webpack_require__(388);
const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = (0, shared_ini_file_loader_1.getProfileName)(init);
    const { configFile, credentialsFile } = await (0, shared_ini_file_loader_1.loadSharedConfigFiles)(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const configValue = configSelector(mergedProfile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new property_provider_1.CredentialsProviderError(e.message ||
            `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
};
exports.fromSharedConfigFiles = fromSharedConfigFiles;


/***/ }),
/* 390 */,
/* 391 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQueryString = void 0;
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}
exports.parseQueryString = parseQueryString;


/***/ }),
/* 392 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(255), exports);
tslib_1.__exportStar(__webpack_require__(506), exports);


/***/ }),
/* 393 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAssumeRoleCredentials = exports.isAssumeRoleProfile = void 0;
const property_provider_1 = __webpack_require__(948);
const shared_ini_file_loader_1 = __webpack_require__(388);
const resolveCredentialSource_1 = __webpack_require__(607);
const resolveProfileData_1 = __webpack_require__(230);
const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
exports.isAssumeRoleProfile = isAssumeRoleProfile;
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new property_provider_1.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${(0, shared_ini_file_loader_1.getProfileName)(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? (0, resolveProfileData_1.resolveProfileData)(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : (0, resolveCredentialSource_1.resolveCredentialSource)(data.credential_source, profileName)();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};
exports.resolveAssumeRoleCredentials = resolveAssumeRoleCredentials;


/***/ }),
/* 394 */,
/* 395 */,
/* 396 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderError = void 0;
class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}
exports.ProviderError = ProviderError;


/***/ }),
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializerMiddleware = void 0;
const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        throw error;
    }
};
exports.deserializerMiddleware = deserializerMiddleware;


/***/ }),
/* 408 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromWebToken = void 0;
const property_provider_1 = __webpack_require__(948);
const fromWebToken = (init) => () => {
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity, } = init;
    if (!roleAssumerWithWebIdentity) {
        throw new property_provider_1.CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity,` +
            ` but no role assumption callback was provided.`, false);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName !== null && roleSessionName !== void 0 ? roleSessionName : `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};
exports.fromWebToken = fromWebToken;


/***/ }),
/* 409 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromStatic = void 0;
const fromStatic = (staticValue) => () => Promise.resolve(staticValue);
exports.fromStatic = fromStatic;


/***/ }),
/* 410 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCredentialCache = exports.getSigningKey = exports.createScope = void 0;
const util_hex_encoding_1 = __webpack_require__(754);
const constants_1 = __webpack_require__(774);
const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${constants_1.KEY_TYPE_IDENTIFIER}`;
exports.createScope = createScope;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0, util_hex_encoding_1.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > constants_1.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, constants_1.KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
exports.getSigningKey = getSigningKey;
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
exports.clearCredentialCache = clearCredentialCache;
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
};


/***/ }),
/* 411 */,
/* 412 */,
/* 413 */
/***/ (function(module) {

module.exports = require("stream");

/***/ }),
/* 414 */,
/* 415 */
/***/ (function(module) {

module.exports = {"name":"@aws-sdk/client-codeartifact","description":"AWS SDK for JavaScript Codeartifact Client for Node.js, Browser and React Native","version":"3.131.0","scripts":{"build":"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"2.0.0","@aws-crypto/sha256-js":"2.0.0","@aws-sdk/client-sts":"3.131.0","@aws-sdk/config-resolver":"3.130.0","@aws-sdk/credential-provider-node":"3.131.0","@aws-sdk/fetch-http-handler":"3.131.0","@aws-sdk/hash-node":"3.127.0","@aws-sdk/invalid-dependency":"3.127.0","@aws-sdk/middleware-content-length":"3.127.0","@aws-sdk/middleware-host-header":"3.127.0","@aws-sdk/middleware-logger":"3.127.0","@aws-sdk/middleware-recursion-detection":"3.127.0","@aws-sdk/middleware-retry":"3.127.0","@aws-sdk/middleware-serde":"3.127.0","@aws-sdk/middleware-signing":"3.130.0","@aws-sdk/middleware-stack":"3.127.0","@aws-sdk/middleware-user-agent":"3.127.0","@aws-sdk/node-config-provider":"3.127.0","@aws-sdk/node-http-handler":"3.127.0","@aws-sdk/protocol-http":"3.127.0","@aws-sdk/smithy-client":"3.127.0","@aws-sdk/types":"3.127.0","@aws-sdk/url-parser":"3.127.0","@aws-sdk/util-base64-browser":"3.109.0","@aws-sdk/util-base64-node":"3.55.0","@aws-sdk/util-body-length-browser":"3.55.0","@aws-sdk/util-body-length-node":"3.55.0","@aws-sdk/util-defaults-mode-browser":"3.127.0","@aws-sdk/util-defaults-mode-node":"3.130.0","@aws-sdk/util-user-agent-browser":"3.127.0","@aws-sdk/util-user-agent-node":"3.127.0","@aws-sdk/util-utf8-browser":"3.109.0","@aws-sdk/util-utf8-node":"3.109.0","tslib":"^2.3.1"},"devDependencies":{"@aws-sdk/service-client-documentation-generator":"3.58.0","@tsconfig/recommended":"1.0.1","@types/node":"^12.7.5","concurrently":"7.0.0","downlevel-dts":"0.7.0","rimraf":"3.0.2","typedoc":"0.19.2","typescript":"~4.6.2"},"engines":{"node":">=12.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-codeartifact","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-codeartifact"}};

/***/ }),
/* 416 */,
/* 417 */
/***/ (function(module) {

module.exports = require("crypto");

/***/ }),
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOServiceException = void 0;
const smithy_client_1 = __webpack_require__(973);
class SSOServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}
exports.SSOServiceException = SSOServiceException;


/***/ }),
/* 422 */
/***/ (function(module) {

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});


/***/ }),
/* 423 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.staticStabilityProvider = void 0;
const getExtendedInstanceMetadataCredentials_1 = __webpack_require__(180);
const staticStabilityProvider = (provider, options = {}) => {
    const logger = (options === null || options === void 0 ? void 0 : options.logger) || console;
    let pastCredentials;
    return async () => {
        let credentials;
        try {
            credentials = await provider();
            if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
                credentials = (0, getExtendedInstanceMetadataCredentials_1.getExtendedInstanceMetadataCredentials)(credentials, logger);
            }
        }
        catch (e) {
            if (pastCredentials) {
                logger.warn("Credential renew failed: ", e);
                credentials = (0, getExtendedInstanceMetadataCredentials_1.getExtendedInstanceMetadataCredentials)(pastCredentials, logger);
            }
            else {
                throw e;
            }
        }
        pastCredentials = credentials;
        return credentials;
    };
};
exports.staticStabilityProvider = staticStabilityProvider;


/***/ }),
/* 424 */,
/* 425 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__webpack_require__(605));
const https = __importStar(__webpack_require__(211));
const pm = __importStar(__webpack_require__(177));
const tunnel = __importStar(__webpack_require__(335));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),
/* 426 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.writeRequestBody = void 0;
const stream_1 = __webpack_require__(413);
function writeRequestBody(httpRequest, request) {
    const expect = request.headers["Expect"] || request.headers["expect"];
    if (expect === "100-continue") {
        httpRequest.on("continue", () => {
            writeBody(httpRequest, request.body);
        });
    }
    else {
        writeBody(httpRequest, request.body);
    }
}
exports.writeRequestBody = writeRequestBody;
function writeBody(httpRequest, body) {
    if (body instanceof stream_1.Readable) {
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}


/***/ }),
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccessKeyInfoCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const middleware_signing_1 = __webpack_require__(307);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class GetAccessKeyInfoCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetAccessKeyInfoCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAccessKeyInfoRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAccessKeyInfoResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetAccessKeyInfoCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetAccessKeyInfoCommand)(output, context);
    }
}
exports.GetAccessKeyInfoCommand = GetAccessKeyInfoCommand;


/***/ }),
/* 440 */,
/* 441 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRepositoryEndpointCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class GetRepositoryEndpointCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "GetRepositoryEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRepositoryEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRepositoryEndpointResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetRepositoryEndpointCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetRepositoryEndpointCommand)(output, context);
    }
}
exports.GetRepositoryEndpointCommand = GetRepositoryEndpointCommand;


/***/ }),
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(__webpack_require__(417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports.default = _default;

/***/ }),
/* 448 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromStatic = void 0;
const property_provider_1 = __webpack_require__(948);
const isFunction = (func) => typeof func === "function";
const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : (0, property_provider_1.fromStatic)(defaultValue);
exports.fromStatic = fromStatic;


/***/ }),
/* 449 */,
/* 450 */,
/* 451 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDomainPermissionsPolicyCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class PutDomainPermissionsPolicyCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "PutDomainPermissionsPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutDomainPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutDomainPermissionsPolicyResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1PutDomainPermissionsPolicyCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1PutDomainPermissionsPolicyCommand)(output, context);
    }
}
exports.PutDomainPermissionsPolicyCommand = PutDomainPermissionsPolicyCommand;


/***/ }),
/* 452 */,
/* 453 */,
/* 454 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isCrtAvailable = void 0;
const isCrtAvailable = () => {
    try {
        if ( true && __webpack_require__(757)) {
            return ["md/crt-avail"];
        }
        return null;
    }
    catch (e) {
        return null;
    }
};
exports.isCrtAvailable = isCrtAvailable;


/***/ }),
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransformedHeaders = void 0;
const getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};
exports.getTransformedHeaders = getTransformedHeaders;


/***/ }),
/* 459 */,
/* 460 */,
/* 461 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRequest = exports.moveHeadersToQuery = exports.getPayloadHash = exports.getCanonicalQuery = exports.getCanonicalHeaders = void 0;
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(464), exports);
var getCanonicalHeaders_1 = __webpack_require__(265);
Object.defineProperty(exports, "getCanonicalHeaders", { enumerable: true, get: function () { return getCanonicalHeaders_1.getCanonicalHeaders; } });
var getCanonicalQuery_1 = __webpack_require__(381);
Object.defineProperty(exports, "getCanonicalQuery", { enumerable: true, get: function () { return getCanonicalQuery_1.getCanonicalQuery; } });
var getPayloadHash_1 = __webpack_require__(150);
Object.defineProperty(exports, "getPayloadHash", { enumerable: true, get: function () { return getPayloadHash_1.getPayloadHash; } });
var moveHeadersToQuery_1 = __webpack_require__(624);
Object.defineProperty(exports, "moveHeadersToQuery", { enumerable: true, get: function () { return moveHeadersToQuery_1.moveHeadersToQuery; } });
var prepareRequest_1 = __webpack_require__(193);
Object.defineProperty(exports, "prepareRequest", { enumerable: true, get: function () { return prepareRequest_1.prepareRequest; } });
tslib_1.__exportStar(__webpack_require__(410), exports);


/***/ }),
/* 462 */,
/* 463 */,
/* 464 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureV4 = void 0;
const util_hex_encoding_1 = __webpack_require__(754);
const util_middleware_1 = __webpack_require__(325);
const constants_1 = __webpack_require__(774);
const credentialDerivation_1 = __webpack_require__(410);
const getCanonicalHeaders_1 = __webpack_require__(265);
const getCanonicalQuery_1 = __webpack_require__(381);
const getPayloadHash_1 = __webpack_require__(150);
const headerUtil_1 = __webpack_require__(987);
const moveHeadersToQuery_1 = __webpack_require__(624);
const prepareRequest_1 = __webpack_require__(193);
const utilDate_1 = __webpack_require__(67);
class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, util_middleware_1.normalizeProvider)(region);
        this.credentialProvider = (0, util_middleware_1.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > constants_1.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const request = (0, moveHeadersToQuery_1.moveHeadersToQuery)((0, prepareRequest_1.prepareRequest)(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[constants_1.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[constants_1.ALGORITHM_QUERY_PARAM] = constants_1.ALGORITHM_IDENTIFIER;
        request.query[constants_1.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[constants_1.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[constants_1.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[constants_1.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[constants_1.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0, getPayloadHash_1.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const hashedPayload = await (0, getPayloadHash_1.getPayloadHash)({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, util_hex_encoding_1.toHex)(await hash.digest());
        const stringToSign = [
            constants_1.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(stringToSign);
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : (await this.regionProvider());
        const request = (0, prepareRequest_1.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        request.headers[constants_1.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[constants_1.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0, getPayloadHash_1.getPayloadHash)(request, this.sha256);
        if (!(0, headerUtil_1.hasHeader)(constants_1.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[constants_1.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[constants_1.AUTH_HEADER] =
            `${constants_1.ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0, getCanonicalQuery_1.getCanonicalQuery)(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(canonicalRequest);
        const hashedRequest = await hash.digest();
        return `${constants_1.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0, util_hex_encoding_1.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if ((pathSegment === null || pathSegment === void 0 ? void 0 : pathSegment.length) === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${(path === null || path === void 0 ? void 0 : path.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path === null || path === void 0 ? void 0 : path.endsWith("/")) ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(stringToSign);
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0, credentialDerivation_1.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
}
exports.SignatureV4 = SignatureV4;
const formatDate = (now) => {
    const longDate = (0, utilDate_1.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");


/***/ }),
/* 465 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 466 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSSOTokenFilepath = void 0;
const crypto_1 = __webpack_require__(417);
const path_1 = __webpack_require__(622);
const getHomeDir_1 = __webpack_require__(790);
const getSSOTokenFilepath = (ssoStartUrl) => {
    const hasher = (0, crypto_1.createHash)("sha1");
    const cacheName = hasher.update(ssoStartUrl).digest("hex");
    return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
};
exports.getSSOTokenFilepath = getSSOTokenFilepath;


/***/ }),
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __webpack_require__(431);
const file_command_1 = __webpack_require__(102);
const utils_1 = __webpack_require__(82);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
const oidc_utils_1 = __webpack_require__(742);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __webpack_require__(665);
Object.defineProperty(exports, "summary", { enumerable: true, get: function () { return summary_1.summary; } });
/**
 * @deprecated use core.summary
 */
var summary_2 = __webpack_require__(665);
Object.defineProperty(exports, "markdownSummary", { enumerable: true, get: function () { return summary_2.markdownSummary; } });
/**
 * Path exports
 */
var path_utils_1 = __webpack_require__(573);
Object.defineProperty(exports, "toPosixPath", { enumerable: true, get: function () { return path_utils_1.toPosixPath; } });
Object.defineProperty(exports, "toWin32Path", { enumerable: true, get: function () { return path_utils_1.toWin32Path; } });
Object.defineProperty(exports, "toPlatformPath", { enumerable: true, get: function () { return path_utils_1.toPlatformPath; } });
//# sourceMappingURL=core.js.map

/***/ }),
/* 471 */,
/* 472 */,
/* 473 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEndpointsConfig = void 0;
const util_middleware_1 = __webpack_require__(325);
const getEndpointFromRegion_1 = __webpack_require__(294);
const resolveEndpointsConfig = (input) => {
    var _a;
    const useDualstackEndpoint = (0, util_middleware_1.normalizeProvider)(input.useDualstackEndpoint);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true,
        endpoint: endpoint
            ? (0, util_middleware_1.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => (0, getEndpointFromRegion_1.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: endpoint ? true : false,
        useDualstackEndpoint,
    };
};
exports.resolveEndpointsConfig = resolveEndpointsConfig;


/***/ }),
/* 474 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyPackageVersionsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class CopyPackageVersionsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "CopyPackageVersionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CopyPackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CopyPackageVersionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1CopyPackageVersionsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1CopyPackageVersionsCommand)(output, context);
    }
}
exports.CopyPackageVersionsCommand = CopyPackageVersionsCommand;


/***/ }),
/* 475 */,
/* 476 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeartifactServiceException = void 0;
const smithy_client_1 = __webpack_require__(973);
class CodeartifactServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, CodeartifactServiceException.prototype);
    }
}
exports.CodeartifactServiceException = CodeartifactServiceException;


/***/ }),
/* 477 */,
/* 478 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRepositoryPermissionsPolicyCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class GetRepositoryPermissionsPolicyCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "GetRepositoryPermissionsPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRepositoryPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRepositoryPermissionsPolicyResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetRepositoryPermissionsPolicyCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand)(output, context);
    }
}
exports.GetRepositoryPermissionsPolicyCommand = GetRepositoryPermissionsPolicyCommand;


/***/ }),
/* 479 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRepositoryCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class UpdateRepositoryCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "UpdateRepositoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateRepositoryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1UpdateRepositoryCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1UpdateRepositoryCommand)(output, context);
    }
}
exports.UpdateRepositoryCommand = UpdateRepositoryCommand;


/***/ }),
/* 480 */,
/* 481 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecursionDetectionPlugin = exports.addRecursionDetectionMiddlewareOptions = exports.recursionDetectionMiddleware = void 0;
const protocol_http_1 = __webpack_require__(504);
const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
exports.recursionDetectionMiddleware = recursionDetectionMiddleware;
exports.addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.recursionDetectionMiddleware)(options), exports.addRecursionDetectionMiddlewareOptions);
    },
});
exports.getRecursionDetectionPlugin = getRecursionDetectionPlugin;


/***/ }),
/* 482 */,
/* 483 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigV4AuthPlugin = exports.getAwsAuthPlugin = exports.awsAuthMiddlewareOptions = exports.awsAuthMiddleware = void 0;
const protocol_http_1 = __webpack_require__(504);
const getSkewCorrectedDate_1 = __webpack_require__(564);
const getUpdatedSystemClockOffset_1 = __webpack_require__(231);
const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!protocol_http_1.HttpRequest.isInstance(args.request))
        return next(args);
    const signer = await options.signer();
    const output = await next({
        ...args,
        request: await signer.sign(args.request, {
            signingDate: (0, getSkewCorrectedDate_1.getSkewCorrectedDate)(options.systemClockOffset),
            signingRegion: context["signing_region"],
            signingService: context["signing_service"],
        }),
    }).catch((error) => {
        var _a;
        const serverTime = (_a = error.ServerTime) !== null && _a !== void 0 ? _a : getDateHeader(error.$response);
        if (serverTime) {
            options.systemClockOffset = (0, getUpdatedSystemClockOffset_1.getUpdatedSystemClockOffset)(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader(output.response);
    if (dateHeader) {
        options.systemClockOffset = (0, getUpdatedSystemClockOffset_1.getUpdatedSystemClockOffset)(dateHeader, options.systemClockOffset);
    }
    return output;
};
exports.awsAuthMiddleware = awsAuthMiddleware;
const getDateHeader = (response) => { var _a, _b, _c; return protocol_http_1.HttpResponse.isInstance(response) ? (_b = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.date) !== null && _b !== void 0 ? _b : (_c = response.headers) === null || _c === void 0 ? void 0 : _c.Date : undefined; };
exports.awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, exports.awsAuthMiddleware)(options), exports.awsAuthMiddlewareOptions);
    },
});
exports.getAwsAuthPlugin = getAwsAuthPlugin;
exports.getSigV4AuthPlugin = exports.getAwsAuthPlugin;


/***/ }),
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePackageVersionsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DeletePackageVersionsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DeletePackageVersionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeletePackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeletePackageVersionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DeletePackageVersionsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DeletePackageVersionsCommand)(output, context);
    }
}
exports.DeletePackageVersionsCommand = DeletePackageVersionsCommand;


/***/ }),
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeAuthorizationMessageCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const middleware_signing_1 = __webpack_require__(307);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class DecodeAuthorizationMessageCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "DecodeAuthorizationMessageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DecodeAuthorizationMessageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DecodeAuthorizationMessageResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryDecodeAuthorizationMessageCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryDecodeAuthorizationMessageCommand)(output, context);
    }
}
exports.DecodeAuthorizationMessageCommand = DecodeAuthorizationMessageCommand;


/***/ }),
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = exports.DEFAULT_USE_FIPS_ENDPOINT = exports.CONFIG_USE_FIPS_ENDPOINT = exports.ENV_USE_FIPS_ENDPOINT = void 0;
const util_config_provider_1 = __webpack_require__(515);
exports.ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
exports.CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
exports.DEFAULT_USE_FIPS_ENDPOINT = false;
exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0, util_config_provider_1.booleanSelector)(env, exports.ENV_USE_FIPS_ENDPOINT, util_config_provider_1.SelectorType.ENV),
    configFileSelector: (profile) => (0, util_config_provider_1.booleanSelector)(profile, exports.CONFIG_USE_FIPS_ENDPOINT, util_config_provider_1.SelectorType.CONFIG),
    default: false,
};


/***/ }),
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(544), exports);
tslib_1.__exportStar(__webpack_require__(343), exports);
tslib_1.__exportStar(__webpack_require__(214), exports);
tslib_1.__exportStar(__webpack_require__(663), exports);


/***/ }),
/* 505 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPackages = void 0;
const Codeartifact_1 = __webpack_require__(715);
const CodeartifactClient_1 = __webpack_require__(831);
const ListPackagesCommand_1 = __webpack_require__(549);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListPackagesCommand_1.ListPackagesCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listPackages(input, ...args);
};
async function* paginateListPackages(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Codeartifact_1.Codeartifact) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeartifactClient_1.CodeartifactClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListPackages = paginateListPackages;


/***/ }),
/* 506 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUriPath = void 0;
const escape_uri_1 = __webpack_require__(255);
const escapeUriPath = (uri) => uri.split("/").map(escape_uri_1.escapeUri).join("/");
exports.escapeUriPath = escapeUriPath;


/***/ }),
/* 507 */,
/* 508 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSsoProfile = void 0;
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");
exports.isSsoProfile = isSsoProfile;


/***/ }),
/* 515 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(589), exports);


/***/ }),
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(893), exports);


/***/ }),
/* 520 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSSOTokenFromFile = void 0;
const fs_1 = __webpack_require__(747);
const getSSOTokenFilepath_1 = __webpack_require__(466);
const { readFile } = fs_1.promises;
const getSSOTokenFromFile = async (ssoStartUrl) => {
    const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(ssoStartUrl);
    const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};
exports.getSSOTokenFromFile = getSSOTokenFromFile;


/***/ }),
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseKnownFiles = void 0;
const loadSharedConfigFiles_1 = __webpack_require__(216);
const parseKnownFiles = async (init) => {
    const parsedFiles = await (0, loadSharedConfigFiles_1.loadSharedConfigFiles)(init);
    return {
        ...parsedFiles.configFile,
        ...parsedFiles.credentialsFile,
    };
};
exports.parseKnownFiles = parseKnownFiles;


/***/ }),
/* 529 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(575), exports);
tslib_1.__exportStar(__webpack_require__(543), exports);


/***/ }),
/* 530 */,
/* 531 */,
/* 532 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidatedProcessCredentials = void 0;
const getValidatedProcessCredentials = (profileName, data) => {
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...(data.SessionToken && { sessionToken: data.SessionToken }),
        ...(data.Expiration && { expiration: new Date(data.Expiration) }),
    };
};
exports.getValidatedProcessCredentials = getValidatedProcessCredentials;


/***/ }),
/* 533 */,
/* 534 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAccounts = void 0;
const ListAccountsCommand_1 = __webpack_require__(245);
const SSO_1 = __webpack_require__(688);
const SSOClient_1 = __webpack_require__(17);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListAccountsCommand_1.ListAccountsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listAccounts(input, ...args);
};
async function* paginateListAccounts(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSO_1.SSO) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSOClient_1.SSOClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSO | SSOClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListAccounts = paginateListAccounts;


/***/ }),
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeartifactServiceException = void 0;
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(715), exports);
tslib_1.__exportStar(__webpack_require__(831), exports);
tslib_1.__exportStar(__webpack_require__(574), exports);
tslib_1.__exportStar(__webpack_require__(815), exports);
tslib_1.__exportStar(__webpack_require__(853), exports);
var CodeartifactServiceException_1 = __webpack_require__(476);
Object.defineProperty(exports, "CodeartifactServiceException", { enumerable: true, get: function () { return CodeartifactServiceException_1.CodeartifactServiceException; } });


/***/ }),
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(889), exports);
tslib_1.__exportStar(__webpack_require__(828), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 544 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDomainPermissionsPolicyCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class GetDomainPermissionsPolicyCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "GetDomainPermissionsPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetDomainPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetDomainPermissionsPolicyResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetDomainPermissionsPolicyCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetDomainPermissionsPolicyCommand)(output, context);
    }
}
exports.GetDomainPermissionsPolicyCommand = GetDomainPermissionsPolicyCommand;


/***/ }),
/* 549 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPackagesCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListPackagesCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListPackagesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListPackagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListPackagesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListPackagesCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListPackagesCommand)(output, context);
    }
}
exports.ListPackagesCommand = ListPackagesCommand;


/***/ }),
/* 550 */,
/* 551 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateDefaultCredentialProvider = exports.getDefaultRoleAssumerWithWebIdentity = exports.getDefaultRoleAssumer = void 0;
const AssumeRoleCommand_1 = __webpack_require__(378);
const AssumeRoleWithWebIdentityCommand_1 = __webpack_require__(650);
const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
const decorateDefaultRegion = (region) => {
    if (typeof region !== "function") {
        return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
    }
    return async () => {
        try {
            return await region();
        }
        catch (e) {
            return ASSUME_ROLE_DEFAULT_REGION;
        }
    };
};
const getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                credentialDefaultProvider: () => async () => closureSourceCreds,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand_1.AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
const getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
    let stsClient;
    return async (params) => {
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: (0, exports.getDefaultRoleAssumer)(input, input.stsClientCtor),
    roleAssumerWithWebIdentity: (0, exports.getDefaultRoleAssumerWithWebIdentity)(input, input.stsClientCtor),
    ...input,
});
exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;


/***/ }),
/* 552 */,
/* 553 */,
/* 554 */
/***/ (function(__unusedmodule, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),
/* 555 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(965), exports);


/***/ }),
/* 556 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(743);
const Aws_restJson1_1 = __webpack_require__(340);
class LogoutCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "LogoutCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.LogoutRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1LogoutCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1LogoutCommand)(output, context);
    }
}
exports.LogoutCommand = LogoutCommand;


/***/ }),
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromImdsCredentials = exports.isImdsCredentials = void 0;
const isImdsCredentials = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string";
exports.isImdsCredentials = isImdsCredentials;
const fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
});
exports.fromImdsCredentials = fromImdsCredentials;


/***/ }),
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkewCorrectedDate = void 0;
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
exports.getSkewCorrectedDate = getSkewCorrectedDate;


/***/ }),
/* 565 */
/***/ (function(module) {

module.exports = require("http2");

/***/ }),
/* 566 */,
/* 567 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRegionInfoProvider = void 0;
const config_resolver_1 = __webpack_require__(529);
const regionHash = {
    "aws-global": {
        variants: [
            {
                hostname: "sts.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-east-1",
    },
    "us-east-1": {
        variants: [
            {
                hostname: "sts-fips.us-east-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-east-2": {
        variants: [
            {
                hostname: "sts-fips.us-east-2.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-gov-east-1": {
        variants: [
            {
                hostname: "sts.us-gov-east-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-gov-west-1": {
        variants: [
            {
                hostname: "sts.us-gov-west-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-west-1": {
        variants: [
            {
                hostname: "sts-fips.us-west-1.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
    "us-west-2": {
        variants: [
            {
                hostname: "sts-fips.us-west-2.amazonaws.com",
                tags: ["fips"],
            },
        ],
    },
};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "ap-southeast-3",
            "aws-global",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-1-fips",
            "us-east-2",
            "us-east-2-fips",
            "us-west-1",
            "us-west-1-fips",
            "us-west-2",
            "us-west-2-fips",
        ],
        regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "sts-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "sts.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.amazonaws.com.cn",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.amazonaws.com.cn",
                tags: ["fips"],
            },
            {
                hostname: "sts-fips.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "sts.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-iso": {
        regions: ["us-iso-east-1", "us-iso-west-1"],
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.c2s.ic.gov",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.c2s.ic.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.sc2s.sgov.gov",
                tags: [],
            },
            {
                hostname: "sts-fips.{region}.sc2s.sgov.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "sts.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "sts.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "sts-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "sts.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
};
const defaultRegionInfoProvider = async (region, options) => (0, config_resolver_1.getRegionInfo)(region, {
    ...options,
    signingService: "sts",
    regionHash,
    partitionHash,
});
exports.defaultRegionInfoProvider = defaultRegionInfoProvider;


/***/ }),
/* 568 */,
/* 569 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPackageVersionsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListPackageVersionsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListPackageVersionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListPackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListPackageVersionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListPackageVersionsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListPackageVersionsCommand)(output, context);
    }
}
exports.ListPackageVersionsCommand = ListPackageVersionsCommand;


/***/ }),
/* 570 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STSClient = void 0;
const config_resolver_1 = __webpack_require__(529);
const middleware_content_length_1 = __webpack_require__(988);
const middleware_host_header_1 = __webpack_require__(795);
const middleware_logger_1 = __webpack_require__(263);
const middleware_recursion_detection_1 = __webpack_require__(481);
const middleware_retry_1 = __webpack_require__(286);
const middleware_sdk_sts_1 = __webpack_require__(122);
const middleware_user_agent_1 = __webpack_require__(105);
const smithy_client_1 = __webpack_require__(973);
const runtimeConfig_1 = __webpack_require__(51);
class STSClient extends smithy_client_1.Client {
    constructor(configuration) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration);
        const _config_1 = (0, config_resolver_1.resolveRegionConfig)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveEndpointsConfig)(_config_1);
        const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_3);
        const _config_5 = (0, middleware_sdk_sts_1.resolveStsAuthConfig)(_config_4, { stsClientCtor: STSClient });
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.STSClient = STSClient;


/***/ }),
/* 571 */,
/* 572 */
/***/ (function(__unusedmodule, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;

/***/ }),
/* 573 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__webpack_require__(622));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),
/* 574 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(94), exports);
tslib_1.__exportStar(__webpack_require__(474), exports);
tslib_1.__exportStar(__webpack_require__(658), exports);
tslib_1.__exportStar(__webpack_require__(826), exports);
tslib_1.__exportStar(__webpack_require__(276), exports);
tslib_1.__exportStar(__webpack_require__(342), exports);
tslib_1.__exportStar(__webpack_require__(487), exports);
tslib_1.__exportStar(__webpack_require__(836), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(161), exports);
tslib_1.__exportStar(__webpack_require__(708), exports);
tslib_1.__exportStar(__webpack_require__(921), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(272), exports);
tslib_1.__exportStar(__webpack_require__(113), exports);
tslib_1.__exportStar(__webpack_require__(978), exports);
tslib_1.__exportStar(__webpack_require__(548), exports);
tslib_1.__exportStar(__webpack_require__(595), exports);
tslib_1.__exportStar(__webpack_require__(90), exports);
tslib_1.__exportStar(__webpack_require__(441), exports);
tslib_1.__exportStar(__webpack_require__(478), exports);
tslib_1.__exportStar(__webpack_require__(724), exports);
tslib_1.__exportStar(__webpack_require__(157), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(569), exports);
tslib_1.__exportStar(__webpack_require__(549), exports);
tslib_1.__exportStar(__webpack_require__(269), exports);
tslib_1.__exportStar(__webpack_require__(723), exports);
tslib_1.__exportStar(__webpack_require__(890), exports);
tslib_1.__exportStar(__webpack_require__(451), exports);
tslib_1.__exportStar(__webpack_require__(380), exports);
tslib_1.__exportStar(__webpack_require__(321), exports);
tslib_1.__exportStar(__webpack_require__(202), exports);
tslib_1.__exportStar(__webpack_require__(619), exports);
tslib_1.__exportStar(__webpack_require__(165), exports);
tslib_1.__exportStar(__webpack_require__(479), exports);


/***/ }),
/* 575 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(657), exports);
tslib_1.__exportStar(__webpack_require__(376), exports);


/***/ }),
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getResolvedHostname = void 0;
const getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname
    ? regionHostname
    : partitionHostname
        ? partitionHostname.replace("{region}", resolvedRegion)
        : undefined;
exports.getResolvedHostname = getResolvedHostname;


/***/ }),
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = void 0;
const retry = (toRetry, maxRetries) => {
    let promise = toRetry();
    for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};
exports.retry = retry;


/***/ }),
/* 589 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanSelector = exports.SelectorType = void 0;
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType = exports.SelectorType || (exports.SelectorType = {}));
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};
exports.booleanSelector = booleanSelector;


/***/ }),
/* 590 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(110), exports);
tslib_1.__exportStar(__webpack_require__(408), exports);


/***/ }),
/* 591 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPackageVersionAssetCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class GetPackageVersionAssetCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "GetPackageVersionAssetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetPackageVersionAssetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetPackageVersionAssetResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetPackageVersionAssetCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetPackageVersionAssetCommand)(output, context);
    }
}
exports.GetPackageVersionAssetCommand = GetPackageVersionAssetCommand;


/***/ }),
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileData = void 0;
const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
const getProfileData = (data) => Object.entries(data)
    .filter(([key]) => profileKeyRegex.test(key))
    .reduce((acc, [key, value]) => ({ ...acc, [profileKeyRegex.exec(key)[2]]: value }), {
    ...(data.default && { default: data.default }),
});
exports.getProfileData = getProfileData;


/***/ }),
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */
/***/ (function(module) {

module.exports = require("http");

/***/ }),
/* 606 */,
/* 607 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCredentialSource = void 0;
const credential_provider_env_1 = __webpack_require__(149);
const credential_provider_imds_1 = __webpack_require__(146);
const property_provider_1 = __webpack_require__(948);
const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: credential_provider_imds_1.fromContainerMetadata,
        Ec2InstanceMetadata: credential_provider_imds_1.fromInstanceMetadata,
        Environment: credential_provider_env_1.fromEnv,
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
    }
    else {
        throw new property_provider_1.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};
exports.resolveCredentialSource = resolveCredentialSource;


/***/ }),
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */
/***/ (function(module) {

module.exports = require("events");

/***/ }),
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(__webpack_require__(318));

var _md = _interopRequireDefault(__webpack_require__(703));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports.default = _default;

/***/ }),
/* 619 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class UntagResourceCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "UntagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UntagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UntagResourceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1UntagResourceCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1UntagResourceCommand)(output, context);
    }
}
exports.UntagResourceCommand = UntagResourceCommand;


/***/ }),
/* 620 */,
/* 621 */,
/* 622 */
/***/ (function(module) {

module.exports = require("path");

/***/ }),
/* 623 */,
/* 624 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.moveHeadersToQuery = void 0;
const cloneRequest_1 = __webpack_require__(57);
const moveHeadersToQuery = (request, options = {}) => {
    var _a;
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) === null || _a === void 0 ? void 0 : _a.has(lname))) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};
exports.moveHeadersToQuery = moveHeadersToQuery;


/***/ }),
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFederationTokenCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const middleware_signing_1 = __webpack_require__(307);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class GetFederationTokenCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "GetFederationTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetFederationTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetFederationTokenResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryGetFederationTokenCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryGetFederationTokenCommand)(output, context);
    }
}
exports.GetFederationTokenCommand = GetFederationTokenCommand;


/***/ }),
/* 630 */,
/* 631 */
/***/ (function(module) {

module.exports = require("net");

/***/ }),
/* 632 */,
/* 633 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.emitWarningIfUnsupportedVersion = void 0;
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
        process.emitWarning(`The AWS SDK for JavaScript (v3) will\n` +
            `no longer support Node.js ${version} on November 1, 2022.\n\n` +
            `To continue receiving updates to AWS services, bug fixes, and security\n` +
            `updates please upgrade to Node.js 14.x or later.\n\n` +
            `For details, please refer our blog post: https://a.co/48dbdYz`, `NodeDeprecationWarning`);
    }
};
exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;


/***/ }),
/* 634 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const middleware_stack_1 = __webpack_require__(349);
class Client {
    constructor(config) {
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}
exports.Client = Client;


/***/ }),
/* 635 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProvider = void 0;
const credential_provider_env_1 = __webpack_require__(149);
const credential_provider_ini_1 = __webpack_require__(88);
const credential_provider_process_1 = __webpack_require__(78);
const credential_provider_sso_1 = __webpack_require__(168);
const credential_provider_web_identity_1 = __webpack_require__(590);
const property_provider_1 = __webpack_require__(948);
const shared_ini_file_loader_1 = __webpack_require__(388);
const remoteProvider_1 = __webpack_require__(898);
const defaultProvider = (init = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)(...(init.profile || process.env[shared_ini_file_loader_1.ENV_PROFILE] ? [] : [(0, credential_provider_env_1.fromEnv)()]), (0, credential_provider_sso_1.fromSSO)(init), (0, credential_provider_ini_1.fromIni)(init), (0, credential_provider_process_1.fromProcess)(init), (0, credential_provider_web_identity_1.fromTokenFile)(init), (0, remoteProvider_1.remoteProvider)(init), async () => {
    throw new property_provider_1.CredentialsProviderError("Could not load credentials from any providers", false);
}), (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000, (credentials) => credentials.expiration !== undefined);
exports.defaultProvider = defaultProvider;


/***/ }),
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPackageVersionAssets = void 0;
const Codeartifact_1 = __webpack_require__(715);
const CodeartifactClient_1 = __webpack_require__(831);
const ListPackageVersionAssetsCommand_1 = __webpack_require__(157);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListPackageVersionAssetsCommand_1.ListPackageVersionAssetsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listPackageVersionAssets(input, ...args);
};
async function* paginateListPackageVersionAssets(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Codeartifact_1.Codeartifact) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeartifactClient_1.CodeartifactClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListPackageVersionAssets = paginateListPackageVersionAssets;


/***/ }),
/* 649 */,
/* 650 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AssumeRoleWithWebIdentityCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(37);
const Aws_query_1 = __webpack_require__(963);
class AssumeRoleWithWebIdentityCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithWebIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssumeRoleWithWebIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssumeRoleWithWebIdentityResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.serializeAws_queryAssumeRoleWithWebIdentityCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.deserializeAws_queryAssumeRoleWithWebIdentityCommand)(output, context);
    }
}
exports.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;


/***/ }),
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.slurpFile = void 0;
const fs_1 = __webpack_require__(747);
const { readFile } = fs_1.promises;
const filePromisesHash = {};
const slurpFile = (path) => {
    if (!filePromisesHash[path]) {
        filePromisesHash[path] = readFile(path, "utf8");
    }
    return filePromisesHash[path];
};
exports.slurpFile = slurpFile;


/***/ }),
/* 657 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_REGION_CONFIG_FILE_OPTIONS = exports.NODE_REGION_CONFIG_OPTIONS = exports.REGION_INI_NAME = exports.REGION_ENV_NAME = void 0;
exports.REGION_ENV_NAME = "AWS_REGION";
exports.REGION_INI_NAME = "region";
exports.NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.REGION_ENV_NAME],
    configFileSelector: (profile) => profile[exports.REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
exports.NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};


/***/ }),
/* 658 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDomainCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class CreateDomainCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "CreateDomainCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDomainResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1CreateDomainCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1CreateDomainCommand)(output, context);
    }
}
exports.CreateDomainCommand = CreateDomainCommand;


/***/ }),
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHostname = void 0;
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}
exports.isValidHostname = isValidHostname;


/***/ }),
/* 664 */,
/* 665 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __webpack_require__(87);
const fs_1 = __webpack_require__(747);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),
/* 666 */,
/* 667 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigFilepath = exports.ENV_CONFIG_PATH = void 0;
const path_1 = __webpack_require__(622);
const getHomeDir_1 = __webpack_require__(790);
exports.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[exports.ENV_CONFIG_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "config");
exports.getConfigFilepath = getConfigFilepath;


/***/ }),
/* 668 */,
/* 669 */
/***/ (function(module) {

module.exports = require("util");

/***/ }),
/* 670 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointMode = void 0;
var EndpointMode;
(function (EndpointMode) {
    EndpointMode["IPv4"] = "IPv4";
    EndpointMode["IPv6"] = "IPv6";
})(EndpointMode = exports.EndpointMode || (exports.EndpointMode = {}));


/***/ }),
/* 671 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileName = exports.DEFAULT_PROFILE = exports.ENV_PROFILE = void 0;
exports.ENV_PROFILE = "AWS_PROFILE";
exports.DEFAULT_PROFILE = "default";
const getProfileName = (init) => init.profile || process.env[exports.ENV_PROFILE] || exports.DEFAULT_PROFILE;
exports.getProfileName = getProfileName;


/***/ }),
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPackageVersions = void 0;
const Codeartifact_1 = __webpack_require__(715);
const CodeartifactClient_1 = __webpack_require__(831);
const ListPackageVersionsCommand_1 = __webpack_require__(569);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListPackageVersionsCommand_1.ListPackageVersionsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listPackageVersions(input, ...args);
};
async function* paginateListPackageVersions(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Codeartifact_1.Codeartifact) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeartifactClient_1.CodeartifactClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListPackageVersions = paginateListPackageVersions;


/***/ }),
/* 679 */,
/* 680 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRepositoriesInDomain = void 0;
const Codeartifact_1 = __webpack_require__(715);
const CodeartifactClient_1 = __webpack_require__(831);
const ListRepositoriesInDomainCommand_1 = __webpack_require__(723);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListRepositoriesInDomainCommand_1.ListRepositoriesInDomainCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listRepositoriesInDomain(input, ...args);
};
async function* paginateListRepositoriesInDomain(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Codeartifact_1.Codeartifact) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeartifactClient_1.CodeartifactClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListRepositoriesInDomain = paginateListRepositoriesInDomain;


/***/ }),
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SSO = void 0;
const GetRoleCredentialsCommand_1 = __webpack_require__(879);
const ListAccountRolesCommand_1 = __webpack_require__(766);
const ListAccountsCommand_1 = __webpack_require__(245);
const LogoutCommand_1 = __webpack_require__(556);
const SSOClient_1 = __webpack_require__(17);
class SSO extends SSOClient_1.SSOClient {
    getRoleCredentials(args, optionsOrCb, cb) {
        const command = new GetRoleCredentialsCommand_1.GetRoleCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAccountRoles(args, optionsOrCb, cb) {
        const command = new ListAccountRolesCommand_1.ListAccountRolesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAccounts(args, optionsOrCb, cb) {
        const command = new ListAccountsCommand_1.ListAccountsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    logout(args, optionsOrCb, cb) {
        const command = new LogoutCommand_1.LogoutCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.SSO = SSO;


/***/ }),
/* 689 */,
/* 690 */,
/* 691 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getOmitRetryHeadersPlugin = exports.omitRetryHeadersMiddlewareOptions = exports.omitRetryHeadersMiddleware = void 0;
const protocol_http_1 = __webpack_require__(504);
const constants_1 = __webpack_require__(373);
const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (protocol_http_1.HttpRequest.isInstance(request)) {
        delete request.headers[constants_1.INVOCATION_ID_HEADER];
        delete request.headers[constants_1.REQUEST_HEADER];
    }
    return next(args);
};
exports.omitRetryHeadersMiddleware = omitRetryHeadersMiddleware;
exports.omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0, exports.omitRetryHeadersMiddleware)(), exports.omitRetryHeadersMiddlewareOptions);
    },
});
exports.getOmitRetryHeadersPlugin = getOmitRetryHeadersPlugin;


/***/ }),
/* 692 */,
/* 693 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveStaticCredentials = exports.isStaticCredsProfile = void 0;
const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
exports.isStaticCredsProfile = isStaticCredsProfile;
const resolveStaticCredentials = (profile) => Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
});
exports.resolveStaticCredentials = resolveStaticCredentials;


/***/ }),
/* 694 */,
/* 695 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_RETRY_MODE_CONFIG_OPTIONS = exports.CONFIG_RETRY_MODE = exports.ENV_RETRY_MODE = exports.resolveRetryConfig = exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = exports.CONFIG_MAX_ATTEMPTS = exports.ENV_MAX_ATTEMPTS = void 0;
const util_middleware_1 = __webpack_require__(325);
const AdaptiveRetryStrategy_1 = __webpack_require__(358);
const config_1 = __webpack_require__(701);
const StandardRetryStrategy_1 = __webpack_require__(9);
exports.ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
exports.CONFIG_MAX_ATTEMPTS = "max_attempts";
exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[exports.ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${exports.ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[exports.CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${exports.CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: config_1.DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    var _a;
    const maxAttempts = (0, util_middleware_1.normalizeProvider)((_a = input.maxAttempts) !== null && _a !== void 0 ? _a : config_1.DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (input.retryStrategy) {
                return input.retryStrategy;
            }
            const retryMode = await (0, util_middleware_1.normalizeProvider)(input.retryMode)();
            if (retryMode === config_1.RETRY_MODES.ADAPTIVE) {
                return new AdaptiveRetryStrategy_1.AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy_1.StandardRetryStrategy(maxAttempts);
        },
    };
};
exports.resolveRetryConfig = resolveRetryConfig;
exports.ENV_RETRY_MODE = "AWS_RETRY_MODE";
exports.CONFIG_RETRY_MODE = "retry_mode";
exports.NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[exports.ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[exports.CONFIG_RETRY_MODE],
    default: config_1.DEFAULT_RETRY_MODE,
};


/***/ }),
/* 696 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageOriginConfiguration = exports.PackageOriginRestrictions = exports.DescribePackageRequest = exports.DescribeDomainResult = exports.DescribeDomainRequest = exports.DeleteRepositoryPermissionsPolicyResult = exports.DeleteRepositoryPermissionsPolicyRequest = exports.DeleteRepositoryResult = exports.DeleteRepositoryRequest = exports.DeletePackageVersionsResult = exports.DeletePackageVersionsRequest = exports.DeleteDomainPermissionsPolicyResult = exports.ResourcePolicy = exports.DeleteDomainPermissionsPolicyRequest = exports.DeleteDomainResult = exports.DeleteDomainRequest = exports.CreateRepositoryResult = exports.CreateRepositoryRequest = exports.UpstreamRepository = exports.CreateDomainResult = exports.DomainDescription = exports.DomainStatus = exports.CreateDomainRequest = exports.Tag = exports.CopyPackageVersionsResult = exports.SuccessfulPackageVersionInfo = exports.PackageVersionStatus = exports.PackageVersionError = exports.PackageVersionErrorCode = exports.CopyPackageVersionsRequest = exports.ValidationException = exports.ValidationExceptionReason = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.ResourceType = exports.AssociateExternalConnectionResult = exports.RepositoryDescription = exports.UpstreamRepositoryInfo = exports.RepositoryExternalConnectionInfo = exports.ExternalConnectionStatus = exports.PackageFormat = exports.AssociateExternalConnectionRequest = exports.AssetSummary = exports.HashAlgorithm = exports.AllowUpstream = exports.AllowPublish = exports.AccessDeniedException = void 0;
exports.PutDomainPermissionsPolicyRequest = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.ListRepositoriesInDomainResult = exports.ListRepositoriesInDomainRequest = exports.ListRepositoriesResult = exports.RepositorySummary = exports.ListRepositoriesRequest = exports.ListPackageVersionsResult = exports.PackageVersionSummary = exports.ListPackageVersionsRequest = exports.PackageVersionSortType = exports.ListPackageVersionDependenciesResult = exports.PackageDependency = exports.ListPackageVersionDependenciesRequest = exports.ListPackageVersionAssetsResult = exports.ListPackageVersionAssetsRequest = exports.ListPackagesResult = exports.PackageSummary = exports.ListPackagesRequest = exports.ListDomainsResult = exports.DomainSummary = exports.ListDomainsRequest = exports.GetRepositoryPermissionsPolicyResult = exports.GetRepositoryPermissionsPolicyRequest = exports.GetRepositoryEndpointResult = exports.GetRepositoryEndpointRequest = exports.GetPackageVersionReadmeResult = exports.GetPackageVersionReadmeRequest = exports.GetPackageVersionAssetResult = exports.GetPackageVersionAssetRequest = exports.GetDomainPermissionsPolicyResult = exports.GetDomainPermissionsPolicyRequest = exports.GetAuthorizationTokenResult = exports.GetAuthorizationTokenRequest = exports.DisposePackageVersionsResult = exports.DisposePackageVersionsRequest = exports.DisassociateExternalConnectionResult = exports.DisassociateExternalConnectionRequest = exports.DescribeRepositoryResult = exports.DescribeRepositoryRequest = exports.DescribePackageVersionResult = exports.PackageVersionDescription = exports.PackageVersionOrigin = exports.PackageVersionOriginType = exports.DomainEntryPoint = exports.LicenseInfo = exports.DescribePackageVersionRequest = exports.DescribePackageResult = exports.PackageDescription = void 0;
exports.UpdateRepositoryResult = exports.UpdateRepositoryRequest = exports.UpdatePackageVersionsStatusResult = exports.UpdatePackageVersionsStatusRequest = exports.UntagResourceResult = exports.UntagResourceRequest = exports.TagResourceResult = exports.TagResourceRequest = exports.PutRepositoryPermissionsPolicyResult = exports.PutRepositoryPermissionsPolicyRequest = exports.PutPackageOriginConfigurationResult = exports.PutPackageOriginConfigurationRequest = exports.PutDomainPermissionsPolicyResult = void 0;
const CodeartifactServiceException_1 = __webpack_require__(476);
class AccessDeniedException extends CodeartifactServiceException_1.CodeartifactServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
exports.AccessDeniedException = AccessDeniedException;
var AllowPublish;
(function (AllowPublish) {
    AllowPublish["ALLOW"] = "ALLOW";
    AllowPublish["BLOCK"] = "BLOCK";
})(AllowPublish = exports.AllowPublish || (exports.AllowPublish = {}));
var AllowUpstream;
(function (AllowUpstream) {
    AllowUpstream["ALLOW"] = "ALLOW";
    AllowUpstream["BLOCK"] = "BLOCK";
})(AllowUpstream = exports.AllowUpstream || (exports.AllowUpstream = {}));
var HashAlgorithm;
(function (HashAlgorithm) {
    HashAlgorithm["MD5"] = "MD5";
    HashAlgorithm["SHA1"] = "SHA-1";
    HashAlgorithm["SHA256"] = "SHA-256";
    HashAlgorithm["SHA512"] = "SHA-512";
})(HashAlgorithm = exports.HashAlgorithm || (exports.HashAlgorithm = {}));
var AssetSummary;
(function (AssetSummary) {
    AssetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetSummary = exports.AssetSummary || (exports.AssetSummary = {}));
var AssociateExternalConnectionRequest;
(function (AssociateExternalConnectionRequest) {
    AssociateExternalConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateExternalConnectionRequest = exports.AssociateExternalConnectionRequest || (exports.AssociateExternalConnectionRequest = {}));
var PackageFormat;
(function (PackageFormat) {
    PackageFormat["MAVEN"] = "maven";
    PackageFormat["NPM"] = "npm";
    PackageFormat["NUGET"] = "nuget";
    PackageFormat["PYPI"] = "pypi";
})(PackageFormat = exports.PackageFormat || (exports.PackageFormat = {}));
var ExternalConnectionStatus;
(function (ExternalConnectionStatus) {
    ExternalConnectionStatus["AVAILABLE"] = "Available";
})(ExternalConnectionStatus = exports.ExternalConnectionStatus || (exports.ExternalConnectionStatus = {}));
var RepositoryExternalConnectionInfo;
(function (RepositoryExternalConnectionInfo) {
    RepositoryExternalConnectionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryExternalConnectionInfo = exports.RepositoryExternalConnectionInfo || (exports.RepositoryExternalConnectionInfo = {}));
var UpstreamRepositoryInfo;
(function (UpstreamRepositoryInfo) {
    UpstreamRepositoryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpstreamRepositoryInfo = exports.UpstreamRepositoryInfo || (exports.UpstreamRepositoryInfo = {}));
var RepositoryDescription;
(function (RepositoryDescription) {
    RepositoryDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryDescription = exports.RepositoryDescription || (exports.RepositoryDescription = {}));
var AssociateExternalConnectionResult;
(function (AssociateExternalConnectionResult) {
    AssociateExternalConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateExternalConnectionResult = exports.AssociateExternalConnectionResult || (exports.AssociateExternalConnectionResult = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["ASSET"] = "asset";
    ResourceType["DOMAIN"] = "domain";
    ResourceType["PACKAGE"] = "package";
    ResourceType["PACKAGE_VERSION"] = "package-version";
    ResourceType["REPOSITORY"] = "repository";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
class ConflictException extends CodeartifactServiceException_1.CodeartifactServiceException {
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConflictException.prototype);
        this.resourceId = opts.resourceId;
        this.resourceType = opts.resourceType;
    }
}
exports.ConflictException = ConflictException;
class InternalServerException extends CodeartifactServiceException_1.CodeartifactServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
exports.InternalServerException = InternalServerException;
class ResourceNotFoundException extends CodeartifactServiceException_1.CodeartifactServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.resourceId = opts.resourceId;
        this.resourceType = opts.resourceType;
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ServiceQuotaExceededException extends CodeartifactServiceException_1.CodeartifactServiceException {
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ServiceQuotaExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
        this.resourceId = opts.resourceId;
        this.resourceType = opts.resourceType;
    }
}
exports.ServiceQuotaExceededException = ServiceQuotaExceededException;
class ThrottlingException extends CodeartifactServiceException_1.CodeartifactServiceException {
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        this.name = "ThrottlingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ThrottlingException.prototype);
        this.retryAfterSeconds = opts.retryAfterSeconds;
    }
}
exports.ThrottlingException = ThrottlingException;
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
    ValidationExceptionReason["ENCRYPTION_KEY_ERROR"] = "ENCRYPTION_KEY_ERROR";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
    ValidationExceptionReason["OTHER"] = "OTHER";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
class ValidationException extends CodeartifactServiceException_1.CodeartifactServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.reason = opts.reason;
    }
}
exports.ValidationException = ValidationException;
var CopyPackageVersionsRequest;
(function (CopyPackageVersionsRequest) {
    CopyPackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyPackageVersionsRequest = exports.CopyPackageVersionsRequest || (exports.CopyPackageVersionsRequest = {}));
var PackageVersionErrorCode;
(function (PackageVersionErrorCode) {
    PackageVersionErrorCode["ALREADY_EXISTS"] = "ALREADY_EXISTS";
    PackageVersionErrorCode["MISMATCHED_REVISION"] = "MISMATCHED_REVISION";
    PackageVersionErrorCode["MISMATCHED_STATUS"] = "MISMATCHED_STATUS";
    PackageVersionErrorCode["NOT_ALLOWED"] = "NOT_ALLOWED";
    PackageVersionErrorCode["NOT_FOUND"] = "NOT_FOUND";
    PackageVersionErrorCode["SKIPPED"] = "SKIPPED";
})(PackageVersionErrorCode = exports.PackageVersionErrorCode || (exports.PackageVersionErrorCode = {}));
var PackageVersionError;
(function (PackageVersionError) {
    PackageVersionError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionError = exports.PackageVersionError || (exports.PackageVersionError = {}));
var PackageVersionStatus;
(function (PackageVersionStatus) {
    PackageVersionStatus["ARCHIVED"] = "Archived";
    PackageVersionStatus["DELETED"] = "Deleted";
    PackageVersionStatus["DISPOSED"] = "Disposed";
    PackageVersionStatus["PUBLISHED"] = "Published";
    PackageVersionStatus["UNFINISHED"] = "Unfinished";
    PackageVersionStatus["UNLISTED"] = "Unlisted";
})(PackageVersionStatus = exports.PackageVersionStatus || (exports.PackageVersionStatus = {}));
var SuccessfulPackageVersionInfo;
(function (SuccessfulPackageVersionInfo) {
    SuccessfulPackageVersionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuccessfulPackageVersionInfo = exports.SuccessfulPackageVersionInfo || (exports.SuccessfulPackageVersionInfo = {}));
var CopyPackageVersionsResult;
(function (CopyPackageVersionsResult) {
    CopyPackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyPackageVersionsResult = exports.CopyPackageVersionsResult || (exports.CopyPackageVersionsResult = {}));
var Tag;
(function (Tag) {
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    CreateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["ACTIVE"] = "Active";
    DomainStatus["DELETED"] = "Deleted";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var DomainDescription;
(function (DomainDescription) {
    DomainDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDescription = exports.DomainDescription || (exports.DomainDescription = {}));
var CreateDomainResult;
(function (CreateDomainResult) {
    CreateDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainResult = exports.CreateDomainResult || (exports.CreateDomainResult = {}));
var UpstreamRepository;
(function (UpstreamRepository) {
    UpstreamRepository.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpstreamRepository = exports.UpstreamRepository || (exports.UpstreamRepository = {}));
var CreateRepositoryRequest;
(function (CreateRepositoryRequest) {
    CreateRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryRequest = exports.CreateRepositoryRequest || (exports.CreateRepositoryRequest = {}));
var CreateRepositoryResult;
(function (CreateRepositoryResult) {
    CreateRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryResult = exports.CreateRepositoryResult || (exports.CreateRepositoryResult = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    DeleteDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteDomainResult;
(function (DeleteDomainResult) {
    DeleteDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainResult = exports.DeleteDomainResult || (exports.DeleteDomainResult = {}));
var DeleteDomainPermissionsPolicyRequest;
(function (DeleteDomainPermissionsPolicyRequest) {
    DeleteDomainPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainPermissionsPolicyRequest = exports.DeleteDomainPermissionsPolicyRequest || (exports.DeleteDomainPermissionsPolicyRequest = {}));
var ResourcePolicy;
(function (ResourcePolicy) {
    ResourcePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePolicy = exports.ResourcePolicy || (exports.ResourcePolicy = {}));
var DeleteDomainPermissionsPolicyResult;
(function (DeleteDomainPermissionsPolicyResult) {
    DeleteDomainPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainPermissionsPolicyResult = exports.DeleteDomainPermissionsPolicyResult || (exports.DeleteDomainPermissionsPolicyResult = {}));
var DeletePackageVersionsRequest;
(function (DeletePackageVersionsRequest) {
    DeletePackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackageVersionsRequest = exports.DeletePackageVersionsRequest || (exports.DeletePackageVersionsRequest = {}));
var DeletePackageVersionsResult;
(function (DeletePackageVersionsResult) {
    DeletePackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackageVersionsResult = exports.DeletePackageVersionsResult || (exports.DeletePackageVersionsResult = {}));
var DeleteRepositoryRequest;
(function (DeleteRepositoryRequest) {
    DeleteRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryRequest = exports.DeleteRepositoryRequest || (exports.DeleteRepositoryRequest = {}));
var DeleteRepositoryResult;
(function (DeleteRepositoryResult) {
    DeleteRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryResult = exports.DeleteRepositoryResult || (exports.DeleteRepositoryResult = {}));
var DeleteRepositoryPermissionsPolicyRequest;
(function (DeleteRepositoryPermissionsPolicyRequest) {
    DeleteRepositoryPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryPermissionsPolicyRequest = exports.DeleteRepositoryPermissionsPolicyRequest || (exports.DeleteRepositoryPermissionsPolicyRequest = {}));
var DeleteRepositoryPermissionsPolicyResult;
(function (DeleteRepositoryPermissionsPolicyResult) {
    DeleteRepositoryPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryPermissionsPolicyResult = exports.DeleteRepositoryPermissionsPolicyResult || (exports.DeleteRepositoryPermissionsPolicyResult = {}));
var DescribeDomainRequest;
(function (DescribeDomainRequest) {
    DescribeDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainRequest = exports.DescribeDomainRequest || (exports.DescribeDomainRequest = {}));
var DescribeDomainResult;
(function (DescribeDomainResult) {
    DescribeDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainResult = exports.DescribeDomainResult || (exports.DescribeDomainResult = {}));
var DescribePackageRequest;
(function (DescribePackageRequest) {
    DescribePackageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackageRequest = exports.DescribePackageRequest || (exports.DescribePackageRequest = {}));
var PackageOriginRestrictions;
(function (PackageOriginRestrictions) {
    PackageOriginRestrictions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageOriginRestrictions = exports.PackageOriginRestrictions || (exports.PackageOriginRestrictions = {}));
var PackageOriginConfiguration;
(function (PackageOriginConfiguration) {
    PackageOriginConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageOriginConfiguration = exports.PackageOriginConfiguration || (exports.PackageOriginConfiguration = {}));
var PackageDescription;
(function (PackageDescription) {
    PackageDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageDescription = exports.PackageDescription || (exports.PackageDescription = {}));
var DescribePackageResult;
(function (DescribePackageResult) {
    DescribePackageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackageResult = exports.DescribePackageResult || (exports.DescribePackageResult = {}));
var DescribePackageVersionRequest;
(function (DescribePackageVersionRequest) {
    DescribePackageVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackageVersionRequest = exports.DescribePackageVersionRequest || (exports.DescribePackageVersionRequest = {}));
var LicenseInfo;
(function (LicenseInfo) {
    LicenseInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseInfo = exports.LicenseInfo || (exports.LicenseInfo = {}));
var DomainEntryPoint;
(function (DomainEntryPoint) {
    DomainEntryPoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainEntryPoint = exports.DomainEntryPoint || (exports.DomainEntryPoint = {}));
var PackageVersionOriginType;
(function (PackageVersionOriginType) {
    PackageVersionOriginType["EXTERNAL"] = "EXTERNAL";
    PackageVersionOriginType["INTERNAL"] = "INTERNAL";
    PackageVersionOriginType["UNKNOWN"] = "UNKNOWN";
})(PackageVersionOriginType = exports.PackageVersionOriginType || (exports.PackageVersionOriginType = {}));
var PackageVersionOrigin;
(function (PackageVersionOrigin) {
    PackageVersionOrigin.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionOrigin = exports.PackageVersionOrigin || (exports.PackageVersionOrigin = {}));
var PackageVersionDescription;
(function (PackageVersionDescription) {
    PackageVersionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionDescription = exports.PackageVersionDescription || (exports.PackageVersionDescription = {}));
var DescribePackageVersionResult;
(function (DescribePackageVersionResult) {
    DescribePackageVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackageVersionResult = exports.DescribePackageVersionResult || (exports.DescribePackageVersionResult = {}));
var DescribeRepositoryRequest;
(function (DescribeRepositoryRequest) {
    DescribeRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoryRequest = exports.DescribeRepositoryRequest || (exports.DescribeRepositoryRequest = {}));
var DescribeRepositoryResult;
(function (DescribeRepositoryResult) {
    DescribeRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoryResult = exports.DescribeRepositoryResult || (exports.DescribeRepositoryResult = {}));
var DisassociateExternalConnectionRequest;
(function (DisassociateExternalConnectionRequest) {
    DisassociateExternalConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateExternalConnectionRequest = exports.DisassociateExternalConnectionRequest || (exports.DisassociateExternalConnectionRequest = {}));
var DisassociateExternalConnectionResult;
(function (DisassociateExternalConnectionResult) {
    DisassociateExternalConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateExternalConnectionResult = exports.DisassociateExternalConnectionResult || (exports.DisassociateExternalConnectionResult = {}));
var DisposePackageVersionsRequest;
(function (DisposePackageVersionsRequest) {
    DisposePackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisposePackageVersionsRequest = exports.DisposePackageVersionsRequest || (exports.DisposePackageVersionsRequest = {}));
var DisposePackageVersionsResult;
(function (DisposePackageVersionsResult) {
    DisposePackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisposePackageVersionsResult = exports.DisposePackageVersionsResult || (exports.DisposePackageVersionsResult = {}));
var GetAuthorizationTokenRequest;
(function (GetAuthorizationTokenRequest) {
    GetAuthorizationTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAuthorizationTokenRequest = exports.GetAuthorizationTokenRequest || (exports.GetAuthorizationTokenRequest = {}));
var GetAuthorizationTokenResult;
(function (GetAuthorizationTokenResult) {
    GetAuthorizationTokenResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAuthorizationTokenResult = exports.GetAuthorizationTokenResult || (exports.GetAuthorizationTokenResult = {}));
var GetDomainPermissionsPolicyRequest;
(function (GetDomainPermissionsPolicyRequest) {
    GetDomainPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainPermissionsPolicyRequest = exports.GetDomainPermissionsPolicyRequest || (exports.GetDomainPermissionsPolicyRequest = {}));
var GetDomainPermissionsPolicyResult;
(function (GetDomainPermissionsPolicyResult) {
    GetDomainPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainPermissionsPolicyResult = exports.GetDomainPermissionsPolicyResult || (exports.GetDomainPermissionsPolicyResult = {}));
var GetPackageVersionAssetRequest;
(function (GetPackageVersionAssetRequest) {
    GetPackageVersionAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionAssetRequest = exports.GetPackageVersionAssetRequest || (exports.GetPackageVersionAssetRequest = {}));
var GetPackageVersionAssetResult;
(function (GetPackageVersionAssetResult) {
    GetPackageVersionAssetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionAssetResult = exports.GetPackageVersionAssetResult || (exports.GetPackageVersionAssetResult = {}));
var GetPackageVersionReadmeRequest;
(function (GetPackageVersionReadmeRequest) {
    GetPackageVersionReadmeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionReadmeRequest = exports.GetPackageVersionReadmeRequest || (exports.GetPackageVersionReadmeRequest = {}));
var GetPackageVersionReadmeResult;
(function (GetPackageVersionReadmeResult) {
    GetPackageVersionReadmeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionReadmeResult = exports.GetPackageVersionReadmeResult || (exports.GetPackageVersionReadmeResult = {}));
var GetRepositoryEndpointRequest;
(function (GetRepositoryEndpointRequest) {
    GetRepositoryEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryEndpointRequest = exports.GetRepositoryEndpointRequest || (exports.GetRepositoryEndpointRequest = {}));
var GetRepositoryEndpointResult;
(function (GetRepositoryEndpointResult) {
    GetRepositoryEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryEndpointResult = exports.GetRepositoryEndpointResult || (exports.GetRepositoryEndpointResult = {}));
var GetRepositoryPermissionsPolicyRequest;
(function (GetRepositoryPermissionsPolicyRequest) {
    GetRepositoryPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryPermissionsPolicyRequest = exports.GetRepositoryPermissionsPolicyRequest || (exports.GetRepositoryPermissionsPolicyRequest = {}));
var GetRepositoryPermissionsPolicyResult;
(function (GetRepositoryPermissionsPolicyResult) {
    GetRepositoryPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryPermissionsPolicyResult = exports.GetRepositoryPermissionsPolicyResult || (exports.GetRepositoryPermissionsPolicyResult = {}));
var ListDomainsRequest;
(function (ListDomainsRequest) {
    ListDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsRequest = exports.ListDomainsRequest || (exports.ListDomainsRequest = {}));
var DomainSummary;
(function (DomainSummary) {
    DomainSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainSummary = exports.DomainSummary || (exports.DomainSummary = {}));
var ListDomainsResult;
(function (ListDomainsResult) {
    ListDomainsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsResult = exports.ListDomainsResult || (exports.ListDomainsResult = {}));
var ListPackagesRequest;
(function (ListPackagesRequest) {
    ListPackagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagesRequest = exports.ListPackagesRequest || (exports.ListPackagesRequest = {}));
var PackageSummary;
(function (PackageSummary) {
    PackageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageSummary = exports.PackageSummary || (exports.PackageSummary = {}));
var ListPackagesResult;
(function (ListPackagesResult) {
    ListPackagesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagesResult = exports.ListPackagesResult || (exports.ListPackagesResult = {}));
var ListPackageVersionAssetsRequest;
(function (ListPackageVersionAssetsRequest) {
    ListPackageVersionAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionAssetsRequest = exports.ListPackageVersionAssetsRequest || (exports.ListPackageVersionAssetsRequest = {}));
var ListPackageVersionAssetsResult;
(function (ListPackageVersionAssetsResult) {
    ListPackageVersionAssetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionAssetsResult = exports.ListPackageVersionAssetsResult || (exports.ListPackageVersionAssetsResult = {}));
var ListPackageVersionDependenciesRequest;
(function (ListPackageVersionDependenciesRequest) {
    ListPackageVersionDependenciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionDependenciesRequest = exports.ListPackageVersionDependenciesRequest || (exports.ListPackageVersionDependenciesRequest = {}));
var PackageDependency;
(function (PackageDependency) {
    PackageDependency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageDependency = exports.PackageDependency || (exports.PackageDependency = {}));
var ListPackageVersionDependenciesResult;
(function (ListPackageVersionDependenciesResult) {
    ListPackageVersionDependenciesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionDependenciesResult = exports.ListPackageVersionDependenciesResult || (exports.ListPackageVersionDependenciesResult = {}));
var PackageVersionSortType;
(function (PackageVersionSortType) {
    PackageVersionSortType["PUBLISHED_TIME"] = "PUBLISHED_TIME";
})(PackageVersionSortType = exports.PackageVersionSortType || (exports.PackageVersionSortType = {}));
var ListPackageVersionsRequest;
(function (ListPackageVersionsRequest) {
    ListPackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionsRequest = exports.ListPackageVersionsRequest || (exports.ListPackageVersionsRequest = {}));
var PackageVersionSummary;
(function (PackageVersionSummary) {
    PackageVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionSummary = exports.PackageVersionSummary || (exports.PackageVersionSummary = {}));
var ListPackageVersionsResult;
(function (ListPackageVersionsResult) {
    ListPackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionsResult = exports.ListPackageVersionsResult || (exports.ListPackageVersionsResult = {}));
var ListRepositoriesRequest;
(function (ListRepositoriesRequest) {
    ListRepositoriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesRequest = exports.ListRepositoriesRequest || (exports.ListRepositoriesRequest = {}));
var RepositorySummary;
(function (RepositorySummary) {
    RepositorySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositorySummary = exports.RepositorySummary || (exports.RepositorySummary = {}));
var ListRepositoriesResult;
(function (ListRepositoriesResult) {
    ListRepositoriesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesResult = exports.ListRepositoriesResult || (exports.ListRepositoriesResult = {}));
var ListRepositoriesInDomainRequest;
(function (ListRepositoriesInDomainRequest) {
    ListRepositoriesInDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesInDomainRequest = exports.ListRepositoriesInDomainRequest || (exports.ListRepositoriesInDomainRequest = {}));
var ListRepositoriesInDomainResult;
(function (ListRepositoriesInDomainResult) {
    ListRepositoriesInDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesInDomainResult = exports.ListRepositoriesInDomainResult || (exports.ListRepositoriesInDomainResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var PutDomainPermissionsPolicyRequest;
(function (PutDomainPermissionsPolicyRequest) {
    PutDomainPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDomainPermissionsPolicyRequest = exports.PutDomainPermissionsPolicyRequest || (exports.PutDomainPermissionsPolicyRequest = {}));
var PutDomainPermissionsPolicyResult;
(function (PutDomainPermissionsPolicyResult) {
    PutDomainPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDomainPermissionsPolicyResult = exports.PutDomainPermissionsPolicyResult || (exports.PutDomainPermissionsPolicyResult = {}));
var PutPackageOriginConfigurationRequest;
(function (PutPackageOriginConfigurationRequest) {
    PutPackageOriginConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPackageOriginConfigurationRequest = exports.PutPackageOriginConfigurationRequest || (exports.PutPackageOriginConfigurationRequest = {}));
var PutPackageOriginConfigurationResult;
(function (PutPackageOriginConfigurationResult) {
    PutPackageOriginConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPackageOriginConfigurationResult = exports.PutPackageOriginConfigurationResult || (exports.PutPackageOriginConfigurationResult = {}));
var PutRepositoryPermissionsPolicyRequest;
(function (PutRepositoryPermissionsPolicyRequest) {
    PutRepositoryPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryPermissionsPolicyRequest = exports.PutRepositoryPermissionsPolicyRequest || (exports.PutRepositoryPermissionsPolicyRequest = {}));
var PutRepositoryPermissionsPolicyResult;
(function (PutRepositoryPermissionsPolicyResult) {
    PutRepositoryPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryPermissionsPolicyResult = exports.PutRepositoryPermissionsPolicyResult || (exports.PutRepositoryPermissionsPolicyResult = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResult;
(function (TagResourceResult) {
    TagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    UntagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
var UpdatePackageVersionsStatusRequest;
(function (UpdatePackageVersionsStatusRequest) {
    UpdatePackageVersionsStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackageVersionsStatusRequest = exports.UpdatePackageVersionsStatusRequest || (exports.UpdatePackageVersionsStatusRequest = {}));
var UpdatePackageVersionsStatusResult;
(function (UpdatePackageVersionsStatusResult) {
    UpdatePackageVersionsStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackageVersionsStatusResult = exports.UpdatePackageVersionsStatusResult || (exports.UpdatePackageVersionsStatusResult = {}));
var UpdateRepositoryRequest;
(function (UpdateRepositoryRequest) {
    UpdateRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRepositoryRequest = exports.UpdateRepositoryRequest || (exports.UpdateRepositoryRequest = {}));
var UpdateRepositoryResult;
(function (UpdateRepositoryResult) {
    UpdateRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRepositoryResult = exports.UpdateRepositoryResult || (exports.UpdateRepositoryResult = {}));


/***/ }),
/* 697 */,
/* 698 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEnv = void 0;
const property_provider_1 = __webpack_require__(948);
const fromEnv = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new property_provider_1.CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};
exports.fromEnv = fromEnv;


/***/ }),
/* 699 */,
/* 700 */,
/* 701 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_RETRY_MODE = exports.DEFAULT_MAX_ATTEMPTS = exports.RETRY_MODES = void 0;
var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES = exports.RETRY_MODES || (exports.RETRY_MODES = {}));
exports.DEFAULT_MAX_ATTEMPTS = 3;
exports.DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;


/***/ }),
/* 702 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NODEJS_TIMEOUT_ERROR_CODES = void 0;
exports.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];


/***/ }),
/* 703 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(__webpack_require__(417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports.default = _default;

/***/ }),
/* 704 */,
/* 705 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serializerMiddleware = void 0;
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const request = await serializer(args.input, options);
    return next({
        ...args,
        request,
    });
};
exports.serializerMiddleware = serializerMiddleware;


/***/ }),
/* 706 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAgentPlugin = exports.getUserAgentMiddlewareOptions = exports.userAgentMiddleware = void 0;
const protocol_http_1 = __webpack_require__(504);
const constants_1 = __webpack_require__(813);
const userAgentMiddleware = (options) => (next, context) => async (args) => {
    var _a, _b;
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
    const sdkUserAgentValue = [...defaultUserAgent, ...userAgent, ...customUserAgent].join(constants_1.SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(constants_1.SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[constants_1.X_AMZ_USER_AGENT] = headers[constants_1.X_AMZ_USER_AGENT]
                ? `${headers[constants_1.USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[constants_1.USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[constants_1.X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
exports.userAgentMiddleware = userAgentMiddleware;
const escapeUserAgent = ([name, version]) => {
    const prefixSeparatorIndex = name.indexOf("/");
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .map((item) => item === null || item === void 0 ? void 0 : item.replace(constants_1.UA_ESCAPE_REGEX, "_"))
        .join("/");
};
exports.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.userAgentMiddleware)(config), exports.getUserAgentMiddlewareOptions);
    },
});
exports.getUserAgentPlugin = getUserAgentPlugin;


/***/ }),
/* 707 */,
/* 708 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribePackageCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DescribePackageCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DescribePackageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribePackageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribePackageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DescribePackageCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DescribePackageCommand)(output, context);
    }
}
exports.DescribePackageCommand = DescribePackageCommand;


/***/ }),
/* 709 */,
/* 710 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayIfSingleItem = void 0;
const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
exports.getArrayIfSingleItem = getArrayIfSingleItem;


/***/ }),
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Codeartifact = void 0;
const CodeartifactClient_1 = __webpack_require__(831);
const AssociateExternalConnectionCommand_1 = __webpack_require__(94);
const CopyPackageVersionsCommand_1 = __webpack_require__(474);
const CreateDomainCommand_1 = __webpack_require__(658);
const CreateRepositoryCommand_1 = __webpack_require__(826);
const DeleteDomainCommand_1 = __webpack_require__(276);
const DeleteDomainPermissionsPolicyCommand_1 = __webpack_require__(342);
const DeletePackageVersionsCommand_1 = __webpack_require__(487);
const DeleteRepositoryCommand_1 = __webpack_require__(836);
const DeleteRepositoryPermissionsPolicyCommand_1 = __webpack_require__(13);
const DescribeDomainCommand_1 = __webpack_require__(161);
const DescribePackageCommand_1 = __webpack_require__(708);
const DescribePackageVersionCommand_1 = __webpack_require__(921);
const DescribeRepositoryCommand_1 = __webpack_require__(48);
const DisassociateExternalConnectionCommand_1 = __webpack_require__(272);
const DisposePackageVersionsCommand_1 = __webpack_require__(113);
const GetAuthorizationTokenCommand_1 = __webpack_require__(978);
const GetDomainPermissionsPolicyCommand_1 = __webpack_require__(548);
const GetPackageVersionAssetCommand_1 = __webpack_require__(595);
const GetPackageVersionReadmeCommand_1 = __webpack_require__(90);
const GetRepositoryEndpointCommand_1 = __webpack_require__(441);
const GetRepositoryPermissionsPolicyCommand_1 = __webpack_require__(478);
const ListDomainsCommand_1 = __webpack_require__(724);
const ListPackagesCommand_1 = __webpack_require__(549);
const ListPackageVersionAssetsCommand_1 = __webpack_require__(157);
const ListPackageVersionDependenciesCommand_1 = __webpack_require__(52);
const ListPackageVersionsCommand_1 = __webpack_require__(569);
const ListRepositoriesCommand_1 = __webpack_require__(269);
const ListRepositoriesInDomainCommand_1 = __webpack_require__(723);
const ListTagsForResourceCommand_1 = __webpack_require__(890);
const PutDomainPermissionsPolicyCommand_1 = __webpack_require__(451);
const PutPackageOriginConfigurationCommand_1 = __webpack_require__(380);
const PutRepositoryPermissionsPolicyCommand_1 = __webpack_require__(321);
const TagResourceCommand_1 = __webpack_require__(202);
const UntagResourceCommand_1 = __webpack_require__(619);
const UpdatePackageVersionsStatusCommand_1 = __webpack_require__(165);
const UpdateRepositoryCommand_1 = __webpack_require__(479);
class Codeartifact extends CodeartifactClient_1.CodeartifactClient {
    associateExternalConnection(args, optionsOrCb, cb) {
        const command = new AssociateExternalConnectionCommand_1.AssociateExternalConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyPackageVersions(args, optionsOrCb, cb) {
        const command = new CopyPackageVersionsCommand_1.CopyPackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDomain(args, optionsOrCb, cb) {
        const command = new CreateDomainCommand_1.CreateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRepository(args, optionsOrCb, cb) {
        const command = new CreateRepositoryCommand_1.CreateRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDomain(args, optionsOrCb, cb) {
        const command = new DeleteDomainCommand_1.DeleteDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDomainPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new DeleteDomainPermissionsPolicyCommand_1.DeleteDomainPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePackageVersions(args, optionsOrCb, cb) {
        const command = new DeletePackageVersionsCommand_1.DeletePackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRepository(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryCommand_1.DeleteRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRepositoryPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryPermissionsPolicyCommand_1.DeleteRepositoryPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDomain(args, optionsOrCb, cb) {
        const command = new DescribeDomainCommand_1.DescribeDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePackage(args, optionsOrCb, cb) {
        const command = new DescribePackageCommand_1.DescribePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePackageVersion(args, optionsOrCb, cb) {
        const command = new DescribePackageVersionCommand_1.DescribePackageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRepository(args, optionsOrCb, cb) {
        const command = new DescribeRepositoryCommand_1.DescribeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateExternalConnection(args, optionsOrCb, cb) {
        const command = new DisassociateExternalConnectionCommand_1.DisassociateExternalConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disposePackageVersions(args, optionsOrCb, cb) {
        const command = new DisposePackageVersionsCommand_1.DisposePackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAuthorizationToken(args, optionsOrCb, cb) {
        const command = new GetAuthorizationTokenCommand_1.GetAuthorizationTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDomainPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new GetDomainPermissionsPolicyCommand_1.GetDomainPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPackageVersionAsset(args, optionsOrCb, cb) {
        const command = new GetPackageVersionAssetCommand_1.GetPackageVersionAssetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPackageVersionReadme(args, optionsOrCb, cb) {
        const command = new GetPackageVersionReadmeCommand_1.GetPackageVersionReadmeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRepositoryEndpoint(args, optionsOrCb, cb) {
        const command = new GetRepositoryEndpointCommand_1.GetRepositoryEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRepositoryPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new GetRepositoryPermissionsPolicyCommand_1.GetRepositoryPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDomains(args, optionsOrCb, cb) {
        const command = new ListDomainsCommand_1.ListDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackages(args, optionsOrCb, cb) {
        const command = new ListPackagesCommand_1.ListPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackageVersionAssets(args, optionsOrCb, cb) {
        const command = new ListPackageVersionAssetsCommand_1.ListPackageVersionAssetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackageVersionDependencies(args, optionsOrCb, cb) {
        const command = new ListPackageVersionDependenciesCommand_1.ListPackageVersionDependenciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackageVersions(args, optionsOrCb, cb) {
        const command = new ListPackageVersionsCommand_1.ListPackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRepositories(args, optionsOrCb, cb) {
        const command = new ListRepositoriesCommand_1.ListRepositoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRepositoriesInDomain(args, optionsOrCb, cb) {
        const command = new ListRepositoriesInDomainCommand_1.ListRepositoriesInDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDomainPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new PutDomainPermissionsPolicyCommand_1.PutDomainPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putPackageOriginConfiguration(args, optionsOrCb, cb) {
        const command = new PutPackageOriginConfigurationCommand_1.PutPackageOriginConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putRepositoryPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new PutRepositoryPermissionsPolicyCommand_1.PutRepositoryPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePackageVersionsStatus(args, optionsOrCb, cb) {
        const command = new UpdatePackageVersionsStatusCommand_1.UpdatePackageVersionsStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRepository(args, optionsOrCb, cb) {
        const command = new UpdateRepositoryCommand_1.UpdateRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Codeartifact = Codeartifact;


/***/ }),
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDefaultsModeConfig = void 0;
const config_resolver_1 = __webpack_require__(529);
const credential_provider_imds_1 = __webpack_require__(146);
const node_config_provider_1 = __webpack_require__(519);
const property_provider_1 = __webpack_require__(948);
const constants_1 = __webpack_require__(848);
const defaultsModeConfig_1 = __webpack_require__(268);
const resolveDefaultsModeConfig = ({ region = (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS), defaultsMode = (0, node_config_provider_1.loadConfig)(defaultsModeConfig_1.NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => (0, property_provider_1.memoize)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode === null || mode === void 0 ? void 0 : mode.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode === null || mode === void 0 ? void 0 : mode.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${constants_1.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
exports.resolveDefaultsModeConfig = resolveDefaultsModeConfig;
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    var _a;
    if (process.env[constants_1.AWS_EXECUTION_ENV] && (process.env[constants_1.AWS_REGION_ENV] || process.env[constants_1.AWS_DEFAULT_REGION_ENV])) {
        return (_a = process.env[constants_1.AWS_REGION_ENV]) !== null && _a !== void 0 ? _a : process.env[constants_1.AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[constants_1.ENV_IMDS_DISABLED]) {
        try {
            const endpoint = await (0, credential_provider_imds_1.getInstanceMetadataEndpoint)();
            return (await (0, credential_provider_imds_1.httpRequest)({ ...endpoint, path: constants_1.IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};


/***/ }),
/* 721 */,
/* 722 */,
/* 723 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRepositoriesInDomainCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListRepositoriesInDomainCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListRepositoriesInDomainCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListRepositoriesInDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListRepositoriesInDomainResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListRepositoriesInDomainCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListRepositoriesInDomainCommand)(output, context);
    }
}
exports.ListRepositoriesInDomainCommand = ListRepositoriesInDomainCommand;


/***/ }),
/* 724 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDomainsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListDomainsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListDomainsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDomainsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListDomainsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListDomainsCommand)(output, context);
    }
}
exports.ListDomainsCommand = ListDomainsCommand;


/***/ }),
/* 725 */,
/* 726 */,
/* 727 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(839);

const convertToJson = function(node, options, parentTagName) {
  const jObj = {};

  // when no child node or attr is present
  if ((!node.child || util.isEmptyObject(node.child)) && (!node.attrsMap || util.isEmptyObject(node.attrsMap))) {
    return util.isExist(node.val) ? node.val : '';
  }

  // otherwise create a textnode if node has some text
  if (util.isExist(node.val) && !(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
    const asArray = util.isTagNameInArrayMode(node.tagname, options.arrayMode, parentTagName)
    jObj[options.textNodeName] = asArray ? [node.val] : node.val;
  }

  util.merge(jObj, node.attrsMap, options.arrayMode);

  const keys = Object.keys(node.child);
  for (let index = 0; index < keys.length; index++) {
    const tagName = keys[index];
    if (node.child[tagName] && node.child[tagName].length > 1) {
      jObj[tagName] = [];
      for (let tag in node.child[tagName]) {
        if (node.child[tagName].hasOwnProperty(tag)) {
          jObj[tagName].push(convertToJson(node.child[tagName][tag], options, tagName));
        }
      }
    } else {
      const result = convertToJson(node.child[tagName][0], options, tagName);
      const asArray = (options.arrayMode === true && typeof result === 'object') || util.isTagNameInArrayMode(tagName, options.arrayMode, parentTagName);
      jObj[tagName] = asArray ? [result] : result;
    }
  }

  //add value
  return jObj;
};

exports.convertToJson = convertToJson;


/***/ }),
/* 728 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(__webpack_require__(234));

var _stringify = _interopRequireDefault(__webpack_require__(385));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports.default = _default;

/***/ }),
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(__webpack_require__(327));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports.default = _default;

/***/ }),
/* 735 */,
/* 736 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 737 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(__webpack_require__(976));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;


/***/ }),
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OidcClient = void 0;
const http_client_1 = __webpack_require__(425);
const auth_1 = __webpack_require__(554);
const core_1 = __webpack_require__(470);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),
/* 743 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutRequest = exports.ListAccountsResponse = exports.ListAccountsRequest = exports.ListAccountRolesResponse = exports.RoleInfo = exports.ListAccountRolesRequest = exports.UnauthorizedException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.InvalidRequestException = exports.GetRoleCredentialsResponse = exports.RoleCredentials = exports.GetRoleCredentialsRequest = exports.AccountInfo = void 0;
const smithy_client_1 = __webpack_require__(973);
const SSOServiceException_1 = __webpack_require__(421);
var AccountInfo;
(function (AccountInfo) {
    AccountInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountInfo = exports.AccountInfo || (exports.AccountInfo = {}));
var GetRoleCredentialsRequest;
(function (GetRoleCredentialsRequest) {
    GetRoleCredentialsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetRoleCredentialsRequest = exports.GetRoleCredentialsRequest || (exports.GetRoleCredentialsRequest = {}));
var RoleCredentials;
(function (RoleCredentials) {
    RoleCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.secretAccessKey && { secretAccessKey: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.sessionToken && { sessionToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(RoleCredentials = exports.RoleCredentials || (exports.RoleCredentials = {}));
var GetRoleCredentialsResponse;
(function (GetRoleCredentialsResponse) {
    GetRoleCredentialsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.roleCredentials && { roleCredentials: RoleCredentials.filterSensitiveLog(obj.roleCredentials) }),
    });
})(GetRoleCredentialsResponse = exports.GetRoleCredentialsResponse || (exports.GetRoleCredentialsResponse = {}));
class InvalidRequestException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
exports.InvalidRequestException = InvalidRequestException;
class ResourceNotFoundException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class TooManyRequestsException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
exports.TooManyRequestsException = TooManyRequestsException;
class UnauthorizedException extends SSOServiceException_1.SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
exports.UnauthorizedException = UnauthorizedException;
var ListAccountRolesRequest;
(function (ListAccountRolesRequest) {
    ListAccountRolesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(ListAccountRolesRequest = exports.ListAccountRolesRequest || (exports.ListAccountRolesRequest = {}));
var RoleInfo;
(function (RoleInfo) {
    RoleInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoleInfo = exports.RoleInfo || (exports.RoleInfo = {}));
var ListAccountRolesResponse;
(function (ListAccountRolesResponse) {
    ListAccountRolesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountRolesResponse = exports.ListAccountRolesResponse || (exports.ListAccountRolesResponse = {}));
var ListAccountsRequest;
(function (ListAccountsRequest) {
    ListAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(ListAccountsRequest = exports.ListAccountsRequest || (exports.ListAccountsRequest = {}));
var ListAccountsResponse;
(function (ListAccountsResponse) {
    ListAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountsResponse = exports.ListAccountsResponse || (exports.ListAccountsResponse = {}));
var LogoutRequest;
(function (LogoutRequest) {
    LogoutRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.accessToken && { accessToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(LogoutRequest = exports.LogoutRequest || (exports.LogoutRequest = {}));


/***/ }),
/* 744 */,
/* 745 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstanceMetadataEndpoint = void 0;
const node_config_provider_1 = __webpack_require__(519);
const url_parser_1 = __webpack_require__(187);
const Endpoint_1 = __webpack_require__(802);
const EndpointConfigOptions_1 = __webpack_require__(322);
const EndpointMode_1 = __webpack_require__(670);
const EndpointModeConfigOptions_1 = __webpack_require__(361);
const getInstanceMetadataEndpoint = async () => (0, url_parser_1.parseUrl)((await getFromEndpointConfig()) || (await getFromEndpointModeConfig()));
exports.getInstanceMetadataEndpoint = getInstanceMetadataEndpoint;
const getFromEndpointConfig = async () => (0, node_config_provider_1.loadConfig)(EndpointConfigOptions_1.ENDPOINT_CONFIG_OPTIONS)();
const getFromEndpointModeConfig = async () => {
    const endpointMode = await (0, node_config_provider_1.loadConfig)(EndpointModeConfigOptions_1.ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
        case EndpointMode_1.EndpointMode.IPv4:
            return Endpoint_1.Endpoint.IPv4;
        case EndpointMode_1.EndpointMode.IPv6:
            return Endpoint_1.Endpoint.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode_1.EndpointMode)}`);
    }
};


/***/ }),
/* 746 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRepositories = void 0;
const Codeartifact_1 = __webpack_require__(715);
const CodeartifactClient_1 = __webpack_require__(831);
const ListRepositoriesCommand_1 = __webpack_require__(269);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListRepositoriesCommand_1.ListRepositoriesCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listRepositories(input, ...args);
};
async function* paginateListRepositories(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Codeartifact_1.Codeartifact) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeartifactClient_1.CodeartifactClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Codeartifact | CodeartifactClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListRepositories = paginateListRepositories;


/***/ }),
/* 747 */
/***/ (function(module) {

module.exports = require("fs");

/***/ }),
/* 748 */,
/* 749 */,
/* 750 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIni = void 0;
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    for (let line of iniData.split(/\r?\n/)) {
        line = line.split(/(^|\s)[;#]/)[0].trim();
        const isSection = line[0] === "[" && line[line.length - 1] === "]";
        if (isSection) {
            currentSection = line.substring(1, line.length - 1);
            if (profileNameBlockList.includes(currentSection)) {
                throw new Error(`Found invalid profile name "${currentSection}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = line.indexOf("=");
            const start = 0;
            const end = line.length - 1;
            const isAssignment = indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
            if (isAssignment) {
                const [name, value] = [
                    line.substring(0, indexOfEqualsSign).trim(),
                    line.substring(indexOfEqualsSign + 1).trim(),
                ];
                map[currentSection] = map[currentSection] || {};
                map[currentSection][name] = value;
            }
        }
    }
    return map;
};
exports.parseIni = parseIni;


/***/ }),
/* 751 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRegionInfoProvider = void 0;
const config_resolver_1 = __webpack_require__(529);
const regionHash = {
    "ap-east-1": {
        variants: [
            {
                hostname: "portal.sso.ap-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-east-1",
    },
    "ap-northeast-1": {
        variants: [
            {
                hostname: "portal.sso.ap-northeast-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-northeast-1",
    },
    "ap-northeast-2": {
        variants: [
            {
                hostname: "portal.sso.ap-northeast-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-northeast-2",
    },
    "ap-northeast-3": {
        variants: [
            {
                hostname: "portal.sso.ap-northeast-3.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-northeast-3",
    },
    "ap-south-1": {
        variants: [
            {
                hostname: "portal.sso.ap-south-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-south-1",
    },
    "ap-southeast-1": {
        variants: [
            {
                hostname: "portal.sso.ap-southeast-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-southeast-1",
    },
    "ap-southeast-2": {
        variants: [
            {
                hostname: "portal.sso.ap-southeast-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ap-southeast-2",
    },
    "ca-central-1": {
        variants: [
            {
                hostname: "portal.sso.ca-central-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "ca-central-1",
    },
    "eu-central-1": {
        variants: [
            {
                hostname: "portal.sso.eu-central-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-central-1",
    },
    "eu-north-1": {
        variants: [
            {
                hostname: "portal.sso.eu-north-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-north-1",
    },
    "eu-south-1": {
        variants: [
            {
                hostname: "portal.sso.eu-south-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-south-1",
    },
    "eu-west-1": {
        variants: [
            {
                hostname: "portal.sso.eu-west-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-west-1",
    },
    "eu-west-2": {
        variants: [
            {
                hostname: "portal.sso.eu-west-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-west-2",
    },
    "eu-west-3": {
        variants: [
            {
                hostname: "portal.sso.eu-west-3.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "eu-west-3",
    },
    "me-south-1": {
        variants: [
            {
                hostname: "portal.sso.me-south-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "me-south-1",
    },
    "sa-east-1": {
        variants: [
            {
                hostname: "portal.sso.sa-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "sa-east-1",
    },
    "us-east-1": {
        variants: [
            {
                hostname: "portal.sso.us-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-east-1",
    },
    "us-east-2": {
        variants: [
            {
                hostname: "portal.sso.us-east-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-east-2",
    },
    "us-gov-east-1": {
        variants: [
            {
                hostname: "portal.sso.us-gov-east-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-gov-east-1",
    },
    "us-gov-west-1": {
        variants: [
            {
                hostname: "portal.sso.us-gov-west-1.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-gov-west-1",
    },
    "us-west-2": {
        variants: [
            {
                hostname: "portal.sso.us-west-2.amazonaws.com",
                tags: [],
            },
        ],
        signingRegion: "us-west-2",
    },
};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "ap-southeast-3",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-2",
            "us-west-1",
            "us-west-2",
        ],
        regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "portal.sso-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "portal.sso.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.amazonaws.com.cn",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.amazonaws.com.cn",
                tags: ["fips"],
            },
            {
                hostname: "portal.sso-fips.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "portal.sso.{region}.api.amazonwebservices.com.cn",
                tags: ["dualstack"],
            },
        ],
    },
    "aws-iso": {
        regions: ["us-iso-east-1", "us-iso-west-1"],
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.c2s.ic.gov",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.c2s.ic.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.sc2s.sgov.gov",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.sc2s.sgov.gov",
                tags: ["fips"],
            },
        ],
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-west-1"],
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        variants: [
            {
                hostname: "portal.sso.{region}.amazonaws.com",
                tags: [],
            },
            {
                hostname: "portal.sso-fips.{region}.amazonaws.com",
                tags: ["fips"],
            },
            {
                hostname: "portal.sso-fips.{region}.api.aws",
                tags: ["dualstack", "fips"],
            },
            {
                hostname: "portal.sso.{region}.api.aws",
                tags: ["dualstack"],
            },
        ],
    },
};
const defaultRegionInfoProvider = async (region, options) => (0, config_resolver_1.getRegionInfo)(region, {
    ...options,
    signingService: "awsssoportal",
    regionHash,
    partitionHash,
});
exports.defaultRegionInfoProvider = defaultRegionInfoProvider;


/***/ }),
/* 752 */,
/* 753 */,
/* 754 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = exports.fromHex = void 0;
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
exports.fromHex = fromHex;
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}
exports.toHex = toHex;


/***/ }),
/* 755 */,
/* 756 */,
/* 757 */
/***/ (function(module) {

module.exports = eval("require")("aws-crt");


/***/ }),
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyJsonString = exports.StringWrapper = void 0;
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
exports.StringWrapper = StringWrapper;
exports.StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: exports.StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(exports.StringWrapper, String);
class LazyJsonString extends exports.StringWrapper {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}
exports.LazyJsonString = LazyJsonString;


/***/ }),
/* 766 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAccountRolesCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(743);
const Aws_restJson1_1 = __webpack_require__(340);
class ListAccountRolesCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "ListAccountRolesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListAccountRolesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListAccountRolesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListAccountRolesCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListAccountRolesCommand)(output, context);
    }
}
exports.ListAccountRolesCommand = ListAccountRolesCommand;


/***/ }),
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_PRESIGNED_TTL = exports.KEY_TYPE_IDENTIFIER = exports.MAX_CACHE_SIZE = exports.UNSIGNED_PAYLOAD = exports.EVENT_ALGORITHM_IDENTIFIER = exports.ALGORITHM_IDENTIFIER_V4A = exports.ALGORITHM_IDENTIFIER = exports.UNSIGNABLE_PATTERNS = exports.SEC_HEADER_PATTERN = exports.PROXY_HEADER_PATTERN = exports.ALWAYS_UNSIGNABLE_HEADERS = exports.HOST_HEADER = exports.TOKEN_HEADER = exports.SHA256_HEADER = exports.SIGNATURE_HEADER = exports.GENERATED_HEADERS = exports.DATE_HEADER = exports.AMZ_DATE_HEADER = exports.AUTH_HEADER = exports.REGION_SET_PARAM = exports.TOKEN_QUERY_PARAM = exports.SIGNATURE_QUERY_PARAM = exports.EXPIRES_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = void 0;
exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
exports.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
exports.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
exports.REGION_SET_PARAM = "X-Amz-Region-Set";
exports.AUTH_HEADER = "authorization";
exports.AMZ_DATE_HEADER = exports.AMZ_DATE_QUERY_PARAM.toLowerCase();
exports.DATE_HEADER = "date";
exports.GENERATED_HEADERS = [exports.AUTH_HEADER, exports.AMZ_DATE_HEADER, exports.DATE_HEADER];
exports.SIGNATURE_HEADER = exports.SIGNATURE_QUERY_PARAM.toLowerCase();
exports.SHA256_HEADER = "x-amz-content-sha256";
exports.TOKEN_HEADER = exports.TOKEN_QUERY_PARAM.toLowerCase();
exports.HOST_HEADER = "host";
exports.ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
exports.PROXY_HEADER_PATTERN = /^proxy-/;
exports.SEC_HEADER_PATTERN = /^sec-/;
exports.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
exports.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
exports.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
exports.MAX_CACHE_SIZE = 50;
exports.KEY_TYPE_IDENTIFIER = "aws4_request";
exports.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DisassociateExternalConnectionCommand = exports.deserializeAws_restJson1DescribeRepositoryCommand = exports.deserializeAws_restJson1DescribePackageVersionCommand = exports.deserializeAws_restJson1DescribePackageCommand = exports.deserializeAws_restJson1DescribeDomainCommand = exports.deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = exports.deserializeAws_restJson1DeleteRepositoryCommand = exports.deserializeAws_restJson1DeletePackageVersionsCommand = exports.deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand = exports.deserializeAws_restJson1DeleteDomainCommand = exports.deserializeAws_restJson1CreateRepositoryCommand = exports.deserializeAws_restJson1CreateDomainCommand = exports.deserializeAws_restJson1CopyPackageVersionsCommand = exports.deserializeAws_restJson1AssociateExternalConnectionCommand = exports.serializeAws_restJson1UpdateRepositoryCommand = exports.serializeAws_restJson1UpdatePackageVersionsStatusCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PutRepositoryPermissionsPolicyCommand = exports.serializeAws_restJson1PutPackageOriginConfigurationCommand = exports.serializeAws_restJson1PutDomainPermissionsPolicyCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListRepositoriesInDomainCommand = exports.serializeAws_restJson1ListRepositoriesCommand = exports.serializeAws_restJson1ListPackageVersionsCommand = exports.serializeAws_restJson1ListPackageVersionDependenciesCommand = exports.serializeAws_restJson1ListPackageVersionAssetsCommand = exports.serializeAws_restJson1ListPackagesCommand = exports.serializeAws_restJson1ListDomainsCommand = exports.serializeAws_restJson1GetRepositoryPermissionsPolicyCommand = exports.serializeAws_restJson1GetRepositoryEndpointCommand = exports.serializeAws_restJson1GetPackageVersionReadmeCommand = exports.serializeAws_restJson1GetPackageVersionAssetCommand = exports.serializeAws_restJson1GetDomainPermissionsPolicyCommand = exports.serializeAws_restJson1GetAuthorizationTokenCommand = exports.serializeAws_restJson1DisposePackageVersionsCommand = exports.serializeAws_restJson1DisassociateExternalConnectionCommand = exports.serializeAws_restJson1DescribeRepositoryCommand = exports.serializeAws_restJson1DescribePackageVersionCommand = exports.serializeAws_restJson1DescribePackageCommand = exports.serializeAws_restJson1DescribeDomainCommand = exports.serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = exports.serializeAws_restJson1DeleteRepositoryCommand = exports.serializeAws_restJson1DeletePackageVersionsCommand = exports.serializeAws_restJson1DeleteDomainPermissionsPolicyCommand = exports.serializeAws_restJson1DeleteDomainCommand = exports.serializeAws_restJson1CreateRepositoryCommand = exports.serializeAws_restJson1CreateDomainCommand = exports.serializeAws_restJson1CopyPackageVersionsCommand = exports.serializeAws_restJson1AssociateExternalConnectionCommand = void 0;
exports.deserializeAws_restJson1UpdateRepositoryCommand = exports.deserializeAws_restJson1UpdatePackageVersionsStatusCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand = exports.deserializeAws_restJson1PutPackageOriginConfigurationCommand = exports.deserializeAws_restJson1PutDomainPermissionsPolicyCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListRepositoriesInDomainCommand = exports.deserializeAws_restJson1ListRepositoriesCommand = exports.deserializeAws_restJson1ListPackageVersionsCommand = exports.deserializeAws_restJson1ListPackageVersionDependenciesCommand = exports.deserializeAws_restJson1ListPackageVersionAssetsCommand = exports.deserializeAws_restJson1ListPackagesCommand = exports.deserializeAws_restJson1ListDomainsCommand = exports.deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand = exports.deserializeAws_restJson1GetRepositoryEndpointCommand = exports.deserializeAws_restJson1GetPackageVersionReadmeCommand = exports.deserializeAws_restJson1GetPackageVersionAssetCommand = exports.deserializeAws_restJson1GetDomainPermissionsPolicyCommand = exports.deserializeAws_restJson1GetAuthorizationTokenCommand = exports.deserializeAws_restJson1DisposePackageVersionsCommand = void 0;
const protocol_http_1 = __webpack_require__(504);
const smithy_client_1 = __webpack_require__(973);
const CodeartifactServiceException_1 = __webpack_require__(476);
const models_0_1 = __webpack_require__(696);
const serializeAws_restJson1AssociateExternalConnectionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/external-connection";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.externalConnection !== undefined && { "external-connection": input.externalConnection }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1AssociateExternalConnectionCommand = serializeAws_restJson1AssociateExternalConnectionCommand;
const serializeAws_restJson1CopyPackageVersionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/copy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.sourceRepository !== undefined && { "source-repository": input.sourceRepository }),
        ...(input.destinationRepository !== undefined && { "destination-repository": input.destinationRepository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.allowOverwrite != null && { allowOverwrite: input.allowOverwrite }),
        ...(input.includeFromUpstream != null && { includeFromUpstream: input.includeFromUpstream }),
        ...(input.versionRevisions != null && {
            versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
        }),
        ...(input.versions != null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1CopyPackageVersionsCommand = serializeAws_restJson1CopyPackageVersionsCommand;
const serializeAws_restJson1CreateDomainCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
    };
    let body;
    body = JSON.stringify({
        ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
        ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1CreateDomainCommand = serializeAws_restJson1CreateDomainCommand;
const serializeAws_restJson1CreateRepositoryCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    body = JSON.stringify({
        ...(input.description != null && { description: input.description }),
        ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
        ...(input.upstreams != null && {
            upstreams: serializeAws_restJson1UpstreamRepositoryList(input.upstreams, context),
        }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1CreateRepositoryCommand = serializeAws_restJson1CreateRepositoryCommand;
const serializeAws_restJson1DeleteDomainCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteDomainCommand = serializeAws_restJson1DeleteDomainCommand;
const serializeAws_restJson1DeleteDomainPermissionsPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.policyRevision !== undefined && { "policy-revision": input.policyRevision }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteDomainPermissionsPolicyCommand = serializeAws_restJson1DeleteDomainPermissionsPolicyCommand;
const serializeAws_restJson1DeletePackageVersionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/delete";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.expectedStatus != null && { expectedStatus: input.expectedStatus }),
        ...(input.versions != null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeletePackageVersionsCommand = serializeAws_restJson1DeletePackageVersionsCommand;
const serializeAws_restJson1DeleteRepositoryCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteRepositoryCommand = serializeAws_restJson1DeleteRepositoryCommand;
const serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/permissions/policies";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.policyRevision !== undefined && { "policy-revision": input.policyRevision }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand;
const serializeAws_restJson1DescribeDomainCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeDomainCommand = serializeAws_restJson1DescribeDomainCommand;
const serializeAws_restJson1DescribePackageCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribePackageCommand = serializeAws_restJson1DescribePackageCommand;
const serializeAws_restJson1DescribePackageVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribePackageVersionCommand = serializeAws_restJson1DescribePackageVersionCommand;
const serializeAws_restJson1DescribeRepositoryCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeRepositoryCommand = serializeAws_restJson1DescribeRepositoryCommand;
const serializeAws_restJson1DisassociateExternalConnectionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/external-connection";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.externalConnection !== undefined && { "external-connection": input.externalConnection }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DisassociateExternalConnectionCommand = serializeAws_restJson1DisassociateExternalConnectionCommand;
const serializeAws_restJson1DisposePackageVersionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/dispose";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.expectedStatus != null && { expectedStatus: input.expectedStatus }),
        ...(input.versionRevisions != null && {
            versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
        }),
        ...(input.versions != null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DisposePackageVersionsCommand = serializeAws_restJson1DisposePackageVersionsCommand;
const serializeAws_restJson1GetAuthorizationTokenCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/authorization-token";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.durationSeconds !== undefined && { duration: input.durationSeconds.toString() }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetAuthorizationTokenCommand = serializeAws_restJson1GetAuthorizationTokenCommand;
const serializeAws_restJson1GetDomainPermissionsPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetDomainPermissionsPolicyCommand = serializeAws_restJson1GetDomainPermissionsPolicyCommand;
const serializeAws_restJson1GetPackageVersionAssetCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/asset";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
        ...(input.asset !== undefined && { asset: input.asset }),
        ...(input.packageVersionRevision !== undefined && { revision: input.packageVersionRevision }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetPackageVersionAssetCommand = serializeAws_restJson1GetPackageVersionAssetCommand;
const serializeAws_restJson1GetPackageVersionReadmeCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/readme";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetPackageVersionReadmeCommand = serializeAws_restJson1GetPackageVersionReadmeCommand;
const serializeAws_restJson1GetRepositoryEndpointCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/endpoint";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetRepositoryEndpointCommand = serializeAws_restJson1GetRepositoryEndpointCommand;
const serializeAws_restJson1GetRepositoryPermissionsPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetRepositoryPermissionsPolicyCommand = serializeAws_restJson1GetRepositoryPermissionsPolicyCommand;
const serializeAws_restJson1ListDomainsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domains";
    let body;
    body = JSON.stringify({
        ...(input.maxResults != null && { maxResults: input.maxResults }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListDomainsCommand = serializeAws_restJson1ListDomainsCommand;
const serializeAws_restJson1ListPackagesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/packages";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.packagePrefix !== undefined && { "package-prefix": input.packagePrefix }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
        ...(input.publish !== undefined && { publish: input.publish }),
        ...(input.upstream !== undefined && { upstream: input.upstream }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListPackagesCommand = serializeAws_restJson1ListPackagesCommand;
const serializeAws_restJson1ListPackageVersionAssetsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/assets";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListPackageVersionAssetsCommand = serializeAws_restJson1ListPackageVersionAssetsCommand;
const serializeAws_restJson1ListPackageVersionDependenciesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/dependencies";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListPackageVersionDependenciesCommand = serializeAws_restJson1ListPackageVersionDependenciesCommand;
const serializeAws_restJson1ListPackageVersionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.status !== undefined && { status: input.status }),
        ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
        ...(input.originType !== undefined && { originType: input.originType }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListPackageVersionsCommand = serializeAws_restJson1ListPackageVersionsCommand;
const serializeAws_restJson1ListRepositoriesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repositories";
    const query = {
        ...(input.repositoryPrefix !== undefined && { "repository-prefix": input.repositoryPrefix }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListRepositoriesCommand = serializeAws_restJson1ListRepositoriesCommand;
const serializeAws_restJson1ListRepositoriesInDomainCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/repositories";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.administratorAccount !== undefined && { "administrator-account": input.administratorAccount }),
        ...(input.repositoryPrefix !== undefined && { "repository-prefix": input.repositoryPrefix }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListRepositoriesInDomainCommand = serializeAws_restJson1ListRepositoriesInDomainCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutDomainPermissionsPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/permissions/policy";
    let body;
    body = JSON.stringify({
        ...(input.domain != null && { domain: input.domain }),
        ...(input.domainOwner != null && { domainOwner: input.domainOwner }),
        ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
        ...(input.policyRevision != null && { policyRevision: input.policyRevision }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutDomainPermissionsPolicyCommand = serializeAws_restJson1PutDomainPermissionsPolicyCommand;
const serializeAws_restJson1PutPackageOriginConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.restrictions != null && {
            restrictions: serializeAws_restJson1PackageOriginRestrictions(input.restrictions, context),
        }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1PutPackageOriginConfigurationCommand = serializeAws_restJson1PutPackageOriginConfigurationCommand;
const serializeAws_restJson1PutRepositoryPermissionsPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    body = JSON.stringify({
        ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
        ...(input.policyRevision != null && { policyRevision: input.policyRevision }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1PutRepositoryPermissionsPolicyCommand = serializeAws_restJson1PutRepositoryPermissionsPolicyCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tag";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/untag";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.tagKeys != null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdatePackageVersionsStatusCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/update_status";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.expectedStatus != null && { expectedStatus: input.expectedStatus }),
        ...(input.targetStatus != null && { targetStatus: input.targetStatus }),
        ...(input.versionRevisions != null && {
            versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
        }),
        ...(input.versions != null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdatePackageVersionsStatusCommand = serializeAws_restJson1UpdatePackageVersionsStatusCommand;
const serializeAws_restJson1UpdateRepositoryCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    body = JSON.stringify({
        ...(input.description != null && { description: input.description }),
        ...(input.upstreams != null && {
            upstreams: serializeAws_restJson1UpstreamRepositoryList(input.upstreams, context),
        }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateRepositoryCommand = serializeAws_restJson1UpdateRepositoryCommand;
const deserializeAws_restJson1AssociateExternalConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateExternalConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateExternalConnectionCommand = deserializeAws_restJson1AssociateExternalConnectionCommand;
const deserializeAws_restJson1AssociateExternalConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1CopyPackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CopyPackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CopyPackageVersionsCommand = deserializeAws_restJson1CopyPackageVersionsCommand;
const deserializeAws_restJson1CopyPackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1CreateDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        domain: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.domain !== undefined && data.domain !== null) {
        contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDomainCommand = deserializeAws_restJson1CreateDomainCommand;
const deserializeAws_restJson1CreateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1CreateRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRepositoryCommand = deserializeAws_restJson1CreateRepositoryCommand;
const deserializeAws_restJson1CreateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DeleteDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        domain: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.domain !== undefined && data.domain !== null) {
        contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDomainCommand = deserializeAws_restJson1DeleteDomainCommand;
const deserializeAws_restJson1DeleteDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDomainPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand = deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand;
const deserializeAws_restJson1DeleteDomainPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DeletePackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePackageVersionsCommand = deserializeAws_restJson1DeletePackageVersionsCommand;
const deserializeAws_restJson1DeletePackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DeleteRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRepositoryCommand = deserializeAws_restJson1DeleteRepositoryCommand;
const deserializeAws_restJson1DeleteRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand;
const deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DescribeDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        domain: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.domain !== undefined && data.domain !== null) {
        contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDomainCommand = deserializeAws_restJson1DescribeDomainCommand;
const deserializeAws_restJson1DescribeDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DescribePackageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePackageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        package: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.package !== undefined && data.package !== null) {
        contents.package = deserializeAws_restJson1PackageDescription(data.package, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePackageCommand = deserializeAws_restJson1DescribePackageCommand;
const deserializeAws_restJson1DescribePackageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DescribePackageVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePackageVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        packageVersion: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.packageVersion !== undefined && data.packageVersion !== null) {
        contents.packageVersion = deserializeAws_restJson1PackageVersionDescription(data.packageVersion, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePackageVersionCommand = deserializeAws_restJson1DescribePackageVersionCommand;
const deserializeAws_restJson1DescribePackageVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DescribeRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRepositoryCommand = deserializeAws_restJson1DescribeRepositoryCommand;
const deserializeAws_restJson1DescribeRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DisassociateExternalConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateExternalConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateExternalConnectionCommand = deserializeAws_restJson1DisassociateExternalConnectionCommand;
const deserializeAws_restJson1DisassociateExternalConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1DisposePackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisposePackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisposePackageVersionsCommand = deserializeAws_restJson1DisposePackageVersionsCommand;
const deserializeAws_restJson1DisposePackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetAuthorizationTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAuthorizationTokenCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        authorizationToken: undefined,
        expiration: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.authorizationToken !== undefined && data.authorizationToken !== null) {
        contents.authorizationToken = (0, smithy_client_1.expectString)(data.authorizationToken);
    }
    if (data.expiration !== undefined && data.expiration !== null) {
        contents.expiration = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(data.expiration)));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAuthorizationTokenCommand = deserializeAws_restJson1GetAuthorizationTokenCommand;
const deserializeAws_restJson1GetAuthorizationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetDomainPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDomainPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainPermissionsPolicyCommand = deserializeAws_restJson1GetDomainPermissionsPolicyCommand;
const deserializeAws_restJson1GetDomainPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetPackageVersionAssetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPackageVersionAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        asset: undefined,
        assetName: undefined,
        packageVersion: undefined,
        packageVersionRevision: undefined,
    };
    if (output.headers["x-assetname"] !== undefined) {
        contents.assetName = output.headers["x-assetname"];
    }
    if (output.headers["x-packageversion"] !== undefined) {
        contents.packageVersion = output.headers["x-packageversion"];
    }
    if (output.headers["x-packageversionrevision"] !== undefined) {
        contents.packageVersionRevision = output.headers["x-packageversionrevision"];
    }
    const data = output.body;
    contents.asset = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPackageVersionAssetCommand = deserializeAws_restJson1GetPackageVersionAssetCommand;
const deserializeAws_restJson1GetPackageVersionAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetPackageVersionReadmeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPackageVersionReadmeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        format: undefined,
        namespace: undefined,
        package: undefined,
        readme: undefined,
        version: undefined,
        versionRevision: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.format !== undefined && data.format !== null) {
        contents.format = (0, smithy_client_1.expectString)(data.format);
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = (0, smithy_client_1.expectString)(data.namespace);
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = (0, smithy_client_1.expectString)(data.package);
    }
    if (data.readme !== undefined && data.readme !== null) {
        contents.readme = (0, smithy_client_1.expectString)(data.readme);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = (0, smithy_client_1.expectString)(data.version);
    }
    if (data.versionRevision !== undefined && data.versionRevision !== null) {
        contents.versionRevision = (0, smithy_client_1.expectString)(data.versionRevision);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPackageVersionReadmeCommand = deserializeAws_restJson1GetPackageVersionReadmeCommand;
const deserializeAws_restJson1GetPackageVersionReadmeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetRepositoryEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRepositoryEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repositoryEndpoint: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.repositoryEndpoint !== undefined && data.repositoryEndpoint !== null) {
        contents.repositoryEndpoint = (0, smithy_client_1.expectString)(data.repositoryEndpoint);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRepositoryEndpointCommand = deserializeAws_restJson1GetRepositoryEndpointCommand;
const deserializeAws_restJson1GetRepositoryEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRepositoryPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand = deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand;
const deserializeAws_restJson1GetRepositoryPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListDomainsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDomainsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        domains: undefined,
        nextToken: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.domains !== undefined && data.domains !== null) {
        contents.domains = deserializeAws_restJson1DomainSummaryList(data.domains, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDomainsCommand = deserializeAws_restJson1ListDomainsCommand;
const deserializeAws_restJson1ListDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListPackagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        packages: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.packages !== undefined && data.packages !== null) {
        contents.packages = deserializeAws_restJson1PackageSummaryList(data.packages, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackagesCommand = deserializeAws_restJson1ListPackagesCommand;
const deserializeAws_restJson1ListPackagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListPackageVersionAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackageVersionAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assets: undefined,
        format: undefined,
        namespace: undefined,
        nextToken: undefined,
        package: undefined,
        version: undefined,
        versionRevision: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.assets !== undefined && data.assets !== null) {
        contents.assets = deserializeAws_restJson1AssetSummaryList(data.assets, context);
    }
    if (data.format !== undefined && data.format !== null) {
        contents.format = (0, smithy_client_1.expectString)(data.format);
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = (0, smithy_client_1.expectString)(data.namespace);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = (0, smithy_client_1.expectString)(data.package);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = (0, smithy_client_1.expectString)(data.version);
    }
    if (data.versionRevision !== undefined && data.versionRevision !== null) {
        contents.versionRevision = (0, smithy_client_1.expectString)(data.versionRevision);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackageVersionAssetsCommand = deserializeAws_restJson1ListPackageVersionAssetsCommand;
const deserializeAws_restJson1ListPackageVersionAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListPackageVersionDependenciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackageVersionDependenciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dependencies: undefined,
        format: undefined,
        namespace: undefined,
        nextToken: undefined,
        package: undefined,
        version: undefined,
        versionRevision: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.dependencies !== undefined && data.dependencies !== null) {
        contents.dependencies = deserializeAws_restJson1PackageDependencyList(data.dependencies, context);
    }
    if (data.format !== undefined && data.format !== null) {
        contents.format = (0, smithy_client_1.expectString)(data.format);
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = (0, smithy_client_1.expectString)(data.namespace);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = (0, smithy_client_1.expectString)(data.package);
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = (0, smithy_client_1.expectString)(data.version);
    }
    if (data.versionRevision !== undefined && data.versionRevision !== null) {
        contents.versionRevision = (0, smithy_client_1.expectString)(data.versionRevision);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackageVersionDependenciesCommand = deserializeAws_restJson1ListPackageVersionDependenciesCommand;
const deserializeAws_restJson1ListPackageVersionDependenciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListPackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        defaultDisplayVersion: undefined,
        format: undefined,
        namespace: undefined,
        nextToken: undefined,
        package: undefined,
        versions: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.defaultDisplayVersion !== undefined && data.defaultDisplayVersion !== null) {
        contents.defaultDisplayVersion = (0, smithy_client_1.expectString)(data.defaultDisplayVersion);
    }
    if (data.format !== undefined && data.format !== null) {
        contents.format = (0, smithy_client_1.expectString)(data.format);
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = (0, smithy_client_1.expectString)(data.namespace);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = (0, smithy_client_1.expectString)(data.package);
    }
    if (data.versions !== undefined && data.versions !== null) {
        contents.versions = deserializeAws_restJson1PackageVersionSummaryList(data.versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackageVersionsCommand = deserializeAws_restJson1ListPackageVersionsCommand;
const deserializeAws_restJson1ListPackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListRepositoriesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRepositoriesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        repositories: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.repositories !== undefined && data.repositories !== null) {
        contents.repositories = deserializeAws_restJson1RepositorySummaryList(data.repositories, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRepositoriesCommand = deserializeAws_restJson1ListRepositoriesCommand;
const deserializeAws_restJson1ListRepositoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListRepositoriesInDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRepositoriesInDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        repositories: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = (0, smithy_client_1.expectString)(data.nextToken);
    }
    if (data.repositories !== undefined && data.repositories !== null) {
        contents.repositories = deserializeAws_restJson1RepositorySummaryList(data.repositories, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRepositoriesInDomainCommand = deserializeAws_restJson1ListRepositoriesInDomainCommand;
const deserializeAws_restJson1ListRepositoriesInDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagList(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1PutDomainPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutDomainPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutDomainPermissionsPolicyCommand = deserializeAws_restJson1PutDomainPermissionsPolicyCommand;
const deserializeAws_restJson1PutDomainPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1PutPackageOriginConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutPackageOriginConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        originConfiguration: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.originConfiguration !== undefined && data.originConfiguration !== null) {
        contents.originConfiguration = deserializeAws_restJson1PackageOriginConfiguration(data.originConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutPackageOriginConfigurationCommand = deserializeAws_restJson1PutPackageOriginConfigurationCommand;
const deserializeAws_restJson1PutPackageOriginConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutRepositoryPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand = deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand;
const deserializeAws_restJson1PutRepositoryPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1UpdatePackageVersionsStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePackageVersionsStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePackageVersionsStatusCommand = deserializeAws_restJson1UpdatePackageVersionsStatusCommand;
const deserializeAws_restJson1UpdatePackageVersionsStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1UpdateRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRepositoryCommand = deserializeAws_restJson1UpdateRepositoryCommand;
const deserializeAws_restJson1UpdateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new CodeartifactServiceException_1.CodeartifactServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = (0, smithy_client_1.expectString)(data.resourceId);
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = (0, smithy_client_1.expectString)(data.resourceType);
    }
    const exception = new models_0_1.ConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = (0, smithy_client_1.expectString)(data.resourceId);
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = (0, smithy_client_1.expectString)(data.resourceType);
    }
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = (0, smithy_client_1.expectString)(data.resourceId);
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = (0, smithy_client_1.expectString)(data.resourceType);
    }
    const exception = new models_0_1.ServiceQuotaExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = (0, smithy_client_1.strictParseInt32)(parsedOutput.headers["retry-after"]);
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    const exception = new models_0_1.ThrottlingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.reason !== undefined && data.reason !== null) {
        contents.reason = (0, smithy_client_1.expectString)(data.reason);
    }
    const exception = new models_0_1.ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const serializeAws_restJson1PackageOriginRestrictions = (input, context) => {
    return {
        ...(input.publish != null && { publish: input.publish }),
        ...(input.upstream != null && { upstream: input.upstream }),
    };
};
const serializeAws_restJson1PackageVersionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1PackageVersionRevisionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.key != null && { key: input.key }),
        ...(input.value != null && { value: input.value }),
    };
};
const serializeAws_restJson1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1UpstreamRepository = (input, context) => {
    return {
        ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_restJson1UpstreamRepositoryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UpstreamRepository(entry, context);
    });
};
const deserializeAws_restJson1AssetHashes = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: (0, smithy_client_1.expectString)(value),
        };
    }, {});
};
const deserializeAws_restJson1AssetSummary = (output, context) => {
    return {
        hashes: output.hashes != null ? deserializeAws_restJson1AssetHashes(output.hashes, context) : undefined,
        name: (0, smithy_client_1.expectString)(output.name),
        size: (0, smithy_client_1.expectLong)(output.size),
    };
};
const deserializeAws_restJson1AssetSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1DomainDescription = (output, context) => {
    return {
        arn: (0, smithy_client_1.expectString)(output.arn),
        assetSizeBytes: (0, smithy_client_1.expectLong)(output.assetSizeBytes),
        createdTime: output.createdTime != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.createdTime)))
            : undefined,
        encryptionKey: (0, smithy_client_1.expectString)(output.encryptionKey),
        name: (0, smithy_client_1.expectString)(output.name),
        owner: (0, smithy_client_1.expectString)(output.owner),
        repositoryCount: (0, smithy_client_1.expectInt32)(output.repositoryCount),
        s3BucketArn: (0, smithy_client_1.expectString)(output.s3BucketArn),
        status: (0, smithy_client_1.expectString)(output.status),
    };
};
const deserializeAws_restJson1DomainEntryPoint = (output, context) => {
    return {
        externalConnectionName: (0, smithy_client_1.expectString)(output.externalConnectionName),
        repositoryName: (0, smithy_client_1.expectString)(output.repositoryName),
    };
};
const deserializeAws_restJson1DomainSummary = (output, context) => {
    return {
        arn: (0, smithy_client_1.expectString)(output.arn),
        createdTime: output.createdTime != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.createdTime)))
            : undefined,
        encryptionKey: (0, smithy_client_1.expectString)(output.encryptionKey),
        name: (0, smithy_client_1.expectString)(output.name),
        owner: (0, smithy_client_1.expectString)(output.owner),
        status: (0, smithy_client_1.expectString)(output.status),
    };
};
const deserializeAws_restJson1DomainSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1LicenseInfo = (output, context) => {
    return {
        name: (0, smithy_client_1.expectString)(output.name),
        url: (0, smithy_client_1.expectString)(output.url),
    };
};
const deserializeAws_restJson1LicenseInfoList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LicenseInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PackageDependency = (output, context) => {
    return {
        dependencyType: (0, smithy_client_1.expectString)(output.dependencyType),
        namespace: (0, smithy_client_1.expectString)(output.namespace),
        package: (0, smithy_client_1.expectString)(output.package),
        versionRequirement: (0, smithy_client_1.expectString)(output.versionRequirement),
    };
};
const deserializeAws_restJson1PackageDependencyList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageDependency(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PackageDescription = (output, context) => {
    return {
        format: (0, smithy_client_1.expectString)(output.format),
        name: (0, smithy_client_1.expectString)(output.name),
        namespace: (0, smithy_client_1.expectString)(output.namespace),
        originConfiguration: output.originConfiguration != null
            ? deserializeAws_restJson1PackageOriginConfiguration(output.originConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1PackageOriginConfiguration = (output, context) => {
    return {
        restrictions: output.restrictions != null
            ? deserializeAws_restJson1PackageOriginRestrictions(output.restrictions, context)
            : undefined,
    };
};
const deserializeAws_restJson1PackageOriginRestrictions = (output, context) => {
    return {
        publish: (0, smithy_client_1.expectString)(output.publish),
        upstream: (0, smithy_client_1.expectString)(output.upstream),
    };
};
const deserializeAws_restJson1PackageSummary = (output, context) => {
    return {
        format: (0, smithy_client_1.expectString)(output.format),
        namespace: (0, smithy_client_1.expectString)(output.namespace),
        originConfiguration: output.originConfiguration != null
            ? deserializeAws_restJson1PackageOriginConfiguration(output.originConfiguration, context)
            : undefined,
        package: (0, smithy_client_1.expectString)(output.package),
    };
};
const deserializeAws_restJson1PackageSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PackageVersionDescription = (output, context) => {
    return {
        displayName: (0, smithy_client_1.expectString)(output.displayName),
        format: (0, smithy_client_1.expectString)(output.format),
        homePage: (0, smithy_client_1.expectString)(output.homePage),
        licenses: output.licenses != null ? deserializeAws_restJson1LicenseInfoList(output.licenses, context) : undefined,
        namespace: (0, smithy_client_1.expectString)(output.namespace),
        origin: output.origin != null ? deserializeAws_restJson1PackageVersionOrigin(output.origin, context) : undefined,
        packageName: (0, smithy_client_1.expectString)(output.packageName),
        publishedTime: output.publishedTime != null
            ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(output.publishedTime)))
            : undefined,
        revision: (0, smithy_client_1.expectString)(output.revision),
        sourceCodeRepository: (0, smithy_client_1.expectString)(output.sourceCodeRepository),
        status: (0, smithy_client_1.expectString)(output.status),
        summary: (0, smithy_client_1.expectString)(output.summary),
        version: (0, smithy_client_1.expectString)(output.version),
    };
};
const deserializeAws_restJson1PackageVersionError = (output, context) => {
    return {
        errorCode: (0, smithy_client_1.expectString)(output.errorCode),
        errorMessage: (0, smithy_client_1.expectString)(output.errorMessage),
    };
};
const deserializeAws_restJson1PackageVersionErrorMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1PackageVersionError(value, context),
        };
    }, {});
};
const deserializeAws_restJson1PackageVersionOrigin = (output, context) => {
    return {
        domainEntryPoint: output.domainEntryPoint != null
            ? deserializeAws_restJson1DomainEntryPoint(output.domainEntryPoint, context)
            : undefined,
        originType: (0, smithy_client_1.expectString)(output.originType),
    };
};
const deserializeAws_restJson1PackageVersionSummary = (output, context) => {
    return {
        origin: output.origin != null ? deserializeAws_restJson1PackageVersionOrigin(output.origin, context) : undefined,
        revision: (0, smithy_client_1.expectString)(output.revision),
        status: (0, smithy_client_1.expectString)(output.status),
        version: (0, smithy_client_1.expectString)(output.version),
    };
};
const deserializeAws_restJson1PackageVersionSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageVersionSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1RepositoryDescription = (output, context) => {
    return {
        administratorAccount: (0, smithy_client_1.expectString)(output.administratorAccount),
        arn: (0, smithy_client_1.expectString)(output.arn),
        description: (0, smithy_client_1.expectString)(output.description),
        domainName: (0, smithy_client_1.expectString)(output.domainName),
        domainOwner: (0, smithy_client_1.expectString)(output.domainOwner),
        externalConnections: output.externalConnections != null
            ? deserializeAws_restJson1RepositoryExternalConnectionInfoList(output.externalConnections, context)
            : undefined,
        name: (0, smithy_client_1.expectString)(output.name),
        upstreams: output.upstreams != null
            ? deserializeAws_restJson1UpstreamRepositoryInfoList(output.upstreams, context)
            : undefined,
    };
};
const deserializeAws_restJson1RepositoryExternalConnectionInfo = (output, context) => {
    return {
        externalConnectionName: (0, smithy_client_1.expectString)(output.externalConnectionName),
        packageFormat: (0, smithy_client_1.expectString)(output.packageFormat),
        status: (0, smithy_client_1.expectString)(output.status),
    };
};
const deserializeAws_restJson1RepositoryExternalConnectionInfoList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RepositoryExternalConnectionInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1RepositorySummary = (output, context) => {
    return {
        administratorAccount: (0, smithy_client_1.expectString)(output.administratorAccount),
        arn: (0, smithy_client_1.expectString)(output.arn),
        description: (0, smithy_client_1.expectString)(output.description),
        domainName: (0, smithy_client_1.expectString)(output.domainName),
        domainOwner: (0, smithy_client_1.expectString)(output.domainOwner),
        name: (0, smithy_client_1.expectString)(output.name),
    };
};
const deserializeAws_restJson1RepositorySummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RepositorySummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ResourcePolicy = (output, context) => {
    return {
        document: (0, smithy_client_1.expectString)(output.document),
        resourceArn: (0, smithy_client_1.expectString)(output.resourceArn),
        revision: (0, smithy_client_1.expectString)(output.revision),
    };
};
const deserializeAws_restJson1SuccessfulPackageVersionInfo = (output, context) => {
    return {
        revision: (0, smithy_client_1.expectString)(output.revision),
        status: (0, smithy_client_1.expectString)(output.status),
    };
};
const deserializeAws_restJson1SuccessfulPackageVersionInfoMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1SuccessfulPackageVersionInfo(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        key: (0, smithy_client_1.expectString)(output.key),
        value: (0, smithy_client_1.expectString)(output.value),
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1UpstreamRepositoryInfo = (output, context) => {
    return {
        repositoryName: (0, smithy_client_1.expectString)(output.repositoryName),
    };
};
const deserializeAws_restJson1UpstreamRepositoryInfoList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpstreamRepositoryInfo(entry, context);
    });
    return retVal;
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),
/* 786 */,
/* 787 */,
/* 788 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOServiceException = void 0;
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(688), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(363), exports);
tslib_1.__exportStar(__webpack_require__(808), exports);
tslib_1.__exportStar(__webpack_require__(789), exports);
var SSOServiceException_1 = __webpack_require__(421);
Object.defineProperty(exports, "SSOServiceException", { enumerable: true, get: function () { return SSOServiceException_1.SSOServiceException; } });


/***/ }),
/* 789 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(465), exports);
tslib_1.__exportStar(__webpack_require__(842), exports);
tslib_1.__exportStar(__webpack_require__(534), exports);


/***/ }),
/* 790 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomeDir = void 0;
const os_1 = __webpack_require__(87);
const path_1 = __webpack_require__(622);
const getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
    return (0, os_1.homedir)();
};
exports.getHomeDir = getHomeDir;


/***/ }),
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHostHeaderPlugin = exports.hostHeaderMiddlewareOptions = exports.hostHeaderMiddleware = exports.resolveHostHeaderConfig = void 0;
const protocol_http_1 = __webpack_require__(504);
function resolveHostHeaderConfig(input) {
    return input;
}
exports.resolveHostHeaderConfig = resolveHostHeaderConfig;
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!protocol_http_1.HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = "";
    }
    else if (!request.headers["host"]) {
        request.headers["host"] = request.hostname;
    }
    return next(args);
};
exports.hostHeaderMiddleware = hostHeaderMiddleware;
exports.hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.hostHeaderMiddleware)(options), exports.hostHeaderMiddlewareOptions);
    },
});
exports.getHostHeaderPlugin = getHostHeaderPlugin;


/***/ }),
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
var Endpoint;
(function (Endpoint) {
    Endpoint["IPv4"] = "http://169.254.169.254";
    Endpoint["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));


/***/ }),
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(743), exports);


/***/ }),
/* 809 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSsoProfile = void 0;
const property_provider_1 = __webpack_require__(948);
const validateSsoProfile = (profile) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new property_provider_1.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", ` +
            `"sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    }
    return profile;
};
exports.validateSsoProfile = validateSsoProfile;


/***/ }),
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UA_ESCAPE_REGEX = exports.SPACE = exports.X_AMZ_USER_AGENT = exports.USER_AGENT = void 0;
exports.USER_AGENT = "user-agent";
exports.X_AMZ_USER_AGENT = "x-amz-user-agent";
exports.SPACE = " ";
exports.UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;


/***/ }),
/* 814 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultRetryQuota = void 0;
const constants_1 = __webpack_require__(373);
const getDefaultRetryQuota = (initialRetryTokens, options) => {
    var _a, _b, _c;
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = (_a = options === null || options === void 0 ? void 0 : options.noRetryIncrement) !== null && _a !== void 0 ? _a : constants_1.NO_RETRY_INCREMENT;
    const retryCost = (_b = options === null || options === void 0 ? void 0 : options.retryCost) !== null && _b !== void 0 ? _b : constants_1.RETRY_COST;
    const timeoutRetryCost = (_c = options === null || options === void 0 ? void 0 : options.timeoutRetryCost) !== null && _c !== void 0 ? _c : constants_1.TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};
exports.getDefaultRetryQuota = getDefaultRetryQuota;


/***/ }),
/* 815 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(696), exports);


/***/ }),
/* 816 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.strictParseByte = exports.strictParseShort = exports.strictParseInt32 = exports.strictParseInt = exports.strictParseLong = exports.limitedParseFloat32 = exports.limitedParseFloat = exports.handleFloat = exports.limitedParseDouble = exports.strictParseFloat32 = exports.strictParseFloat = exports.strictParseDouble = exports.expectUnion = exports.expectString = exports.expectObject = exports.expectNonNull = exports.expectByte = exports.expectShort = exports.expectInt32 = exports.expectInt = exports.expectLong = exports.expectFloat32 = exports.expectNumber = exports.expectBoolean = exports.parseBoolean = void 0;
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
exports.parseBoolean = parseBoolean;
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}`);
};
exports.expectBoolean = expectBoolean;
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}`);
};
exports.expectNumber = expectNumber;
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = (0, exports.expectNumber)(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
exports.expectFloat32 = expectFloat32;
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}`);
};
exports.expectLong = expectLong;
exports.expectInt = exports.expectLong;
const expectInt32 = (value) => expectSizedInt(value, 32);
exports.expectInt32 = expectInt32;
const expectShort = (value) => expectSizedInt(value, 16);
exports.expectShort = expectShort;
const expectByte = (value) => expectSizedInt(value, 8);
exports.expectByte = expectByte;
const expectSizedInt = (value, size) => {
    const expected = (0, exports.expectLong)(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
exports.expectNonNull = expectNonNull;
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    throw new TypeError(`Expected object, got ${typeof value}`);
};
exports.expectObject = expectObject;
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    throw new TypeError(`Expected string, got ${typeof value}`);
};
exports.expectString = expectString;
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = (0, exports.expectObject)(value);
    const setKeys = Object.entries(asObject)
        .filter(([_, v]) => v !== null && v !== undefined)
        .map(([k, _]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
exports.expectUnion = expectUnion;
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return (0, exports.expectNumber)(parseNumber(value));
    }
    return (0, exports.expectNumber)(value);
};
exports.strictParseDouble = strictParseDouble;
exports.strictParseFloat = exports.strictParseDouble;
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return (0, exports.expectFloat32)(parseNumber(value));
    }
    return (0, exports.expectFloat32)(value);
};
exports.strictParseFloat32 = strictParseFloat32;
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return (0, exports.expectNumber)(value);
};
exports.limitedParseDouble = limitedParseDouble;
exports.handleFloat = exports.limitedParseDouble;
exports.limitedParseFloat = exports.limitedParseDouble;
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return (0, exports.expectFloat32)(value);
};
exports.limitedParseFloat32 = limitedParseFloat32;
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectLong)(parseNumber(value));
    }
    return (0, exports.expectLong)(value);
};
exports.strictParseLong = strictParseLong;
exports.strictParseInt = exports.strictParseLong;
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectInt32)(parseNumber(value));
    }
    return (0, exports.expectInt32)(value);
};
exports.strictParseInt32 = strictParseInt32;
const strictParseShort = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectShort)(parseNumber(value));
    }
    return (0, exports.expectShort)(value);
};
exports.strictParseShort = strictParseShort;
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return (0, exports.expectByte)(parseNumber(value));
    }
    return (0, exports.expectByte)(value);
};
exports.strictParseByte = strictParseByte;


/***/ }),
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collector = void 0;
const stream_1 = __webpack_require__(413);
class Collector extends stream_1.Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}
exports.Collector = Collector;


/***/ }),
/* 823 */,
/* 824 */
/***/ (function(module) {

module.exports = {"name":"@aws-sdk/client-sts","description":"AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native","version":"3.131.0","scripts":{"build":"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"2.0.0","@aws-crypto/sha256-js":"2.0.0","@aws-sdk/config-resolver":"3.130.0","@aws-sdk/credential-provider-node":"3.131.0","@aws-sdk/fetch-http-handler":"3.131.0","@aws-sdk/hash-node":"3.127.0","@aws-sdk/invalid-dependency":"3.127.0","@aws-sdk/middleware-content-length":"3.127.0","@aws-sdk/middleware-host-header":"3.127.0","@aws-sdk/middleware-logger":"3.127.0","@aws-sdk/middleware-recursion-detection":"3.127.0","@aws-sdk/middleware-retry":"3.127.0","@aws-sdk/middleware-sdk-sts":"3.130.0","@aws-sdk/middleware-serde":"3.127.0","@aws-sdk/middleware-signing":"3.130.0","@aws-sdk/middleware-stack":"3.127.0","@aws-sdk/middleware-user-agent":"3.127.0","@aws-sdk/node-config-provider":"3.127.0","@aws-sdk/node-http-handler":"3.127.0","@aws-sdk/protocol-http":"3.127.0","@aws-sdk/smithy-client":"3.127.0","@aws-sdk/types":"3.127.0","@aws-sdk/url-parser":"3.127.0","@aws-sdk/util-base64-browser":"3.109.0","@aws-sdk/util-base64-node":"3.55.0","@aws-sdk/util-body-length-browser":"3.55.0","@aws-sdk/util-body-length-node":"3.55.0","@aws-sdk/util-defaults-mode-browser":"3.127.0","@aws-sdk/util-defaults-mode-node":"3.130.0","@aws-sdk/util-user-agent-browser":"3.127.0","@aws-sdk/util-user-agent-node":"3.127.0","@aws-sdk/util-utf8-browser":"3.109.0","@aws-sdk/util-utf8-node":"3.109.0","entities":"2.2.0","fast-xml-parser":"3.19.0","tslib":"^2.3.1"},"devDependencies":{"@aws-sdk/service-client-documentation-generator":"3.58.0","@tsconfig/recommended":"1.0.1","@types/node":"^12.7.5","concurrently":"7.0.0","downlevel-dts":"0.7.0","rimraf":"3.0.2","typedoc":"0.19.2","typescript":"~4.6.2"},"engines":{"node":">=12.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sts"}};

/***/ }),
/* 825 */,
/* 826 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRepositoryCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class CreateRepositoryCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "CreateRepositoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateRepositoryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1CreateRepositoryCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1CreateRepositoryCommand)(output, context);
    }
}
exports.CreateRepositoryCommand = CreateRepositoryCommand;


/***/ }),
/* 827 */,
/* 828 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 829 */,
/* 830 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.splitEvery = void 0;
function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
            currentSegment = segments[i];
        }
        else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}
exports.splitEvery = splitEvery;


/***/ }),
/* 831 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeartifactClient = void 0;
const config_resolver_1 = __webpack_require__(529);
const middleware_content_length_1 = __webpack_require__(988);
const middleware_host_header_1 = __webpack_require__(795);
const middleware_logger_1 = __webpack_require__(263);
const middleware_recursion_detection_1 = __webpack_require__(481);
const middleware_retry_1 = __webpack_require__(286);
const middleware_signing_1 = __webpack_require__(307);
const middleware_user_agent_1 = __webpack_require__(105);
const smithy_client_1 = __webpack_require__(973);
const runtimeConfig_1 = __webpack_require__(121);
class CodeartifactClient extends smithy_client_1.Client {
    constructor(configuration) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration);
        const _config_1 = (0, config_resolver_1.resolveRegionConfig)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveEndpointsConfig)(_config_1);
        const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_3);
        const _config_5 = (0, middleware_signing_1.resolveAwsAuthConfig)(_config_4);
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_signing_1.getAwsAuthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.CodeartifactClient = CodeartifactClient;


/***/ }),
/* 832 */,
/* 833 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCredentialsFilepath = exports.ENV_CREDENTIALS_PATH = void 0;
const path_1 = __webpack_require__(622);
const getHomeDir_1 = __webpack_require__(790);
exports.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[exports.ENV_CREDENTIALS_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "credentials");
exports.getCredentialsFilepath = getCredentialsFilepath;


/***/ }),
/* 834 */,
/* 835 */
/***/ (function(module) {

module.exports = require("url");

/***/ }),
/* 836 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRepositoryCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DeleteRepositoryCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DeleteRepositoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteRepositoryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DeleteRepositoryCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DeleteRepositoryCommand)(output, context);
    }
}
exports.DeleteRepositoryCommand = DeleteRepositoryCommand;


/***/ }),
/* 837 */,
/* 838 */,
/* 839 */
/***/ (function(__unusedmodule, exports) {

"use strict";


const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*'
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.buildOptions = function(options, defaultOptions, props) {
  var newOptions = {};
  if (!options) {
    return defaultOptions; //if there are not options
  }

  for (let i = 0; i < props.length; i++) {
    if (options[props[i]] !== undefined) {
      newOptions[props[i]] = options[props[i]];
    } else {
      newOptions[props[i]] = defaultOptions[props[i]];
    }
  }
  return newOptions;
};

/**
 * Check if a tag name should be treated as array
 *
 * @param tagName the node tagname
 * @param arrayMode the array mode option
 * @param parentTagName the parent tag name
 * @returns {boolean} true if node should be parsed as array
 */
exports.isTagNameInArrayMode = function (tagName, arrayMode, parentTagName) {
  if (arrayMode === false) {
    return false;
  } else if (arrayMode instanceof RegExp) {
    return arrayMode.test(tagName);
  } else if (typeof arrayMode === 'function') {
    return !!arrayMode(tagName, parentTagName);
  }

  return arrayMode === "strict";
}

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;


/***/ }),
/* 840 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STSServiceException = void 0;
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(907), exports);
tslib_1.__exportStar(__webpack_require__(570), exports);
tslib_1.__exportStar(__webpack_require__(962), exports);
tslib_1.__exportStar(__webpack_require__(194), exports);
tslib_1.__exportStar(__webpack_require__(508), exports);
var STSServiceException_1 = __webpack_require__(360);
Object.defineProperty(exports, "STSServiceException", { enumerable: true, get: function () { return STSServiceException_1.STSServiceException; } });


/***/ }),
/* 841 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toUtf8 = exports.fromUtf8 = void 0;
const util_buffer_from_1 = __webpack_require__(59);
const fromUtf8 = (input) => {
    const buf = (0, util_buffer_from_1.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input) => (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
exports.toUtf8 = toUtf8;


/***/ }),
/* 842 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAccountRoles = void 0;
const ListAccountRolesCommand_1 = __webpack_require__(766);
const SSO_1 = __webpack_require__(688);
const SSOClient_1 = __webpack_require__(17);
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListAccountRolesCommand_1.ListAccountRolesCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listAccountRoles(input, ...args);
};
async function* paginateListAccountRoles(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSO_1.SSO) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSOClient_1.SSOClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSO | SSOClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListAccountRoles = paginateListAccountRoles;


/***/ }),
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.providerConfigFromInit = exports.DEFAULT_MAX_RETRIES = exports.DEFAULT_TIMEOUT = void 0;
exports.DEFAULT_TIMEOUT = 1000;
exports.DEFAULT_MAX_RETRIES = 0;
const providerConfigFromInit = ({ maxRetries = exports.DEFAULT_MAX_RETRIES, timeout = exports.DEFAULT_TIMEOUT, }) => ({ maxRetries, timeout });
exports.providerConfigFromInit = providerConfigFromInit;


/***/ }),
/* 847 */,
/* 848 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IMDS_REGION_PATH = exports.DEFAULTS_MODE_OPTIONS = exports.ENV_IMDS_DISABLED = exports.AWS_DEFAULT_REGION_ENV = exports.AWS_REGION_ENV = exports.AWS_EXECUTION_ENV = void 0;
exports.AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
exports.AWS_REGION_ENV = "AWS_REGION";
exports.AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
exports.DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
exports.IMDS_REGION_PATH = "/latest/meta-data/placement/region";


/***/ }),
/* 849 */,
/* 850 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


var net = __webpack_require__(631);
var tls = __webpack_require__(16);
var http = __webpack_require__(605);
var https = __webpack_require__(211);
var events = __webpack_require__(614);
var assert = __webpack_require__(357);
var util = __webpack_require__(669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),
/* 851 */,
/* 852 */,
/* 853 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(356), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(648), exports);
tslib_1.__exportStar(__webpack_require__(678), exports);
tslib_1.__exportStar(__webpack_require__(505), exports);
tslib_1.__exportStar(__webpack_require__(680), exports);
tslib_1.__exportStar(__webpack_require__(746), exports);


/***/ }),
/* 854 */,
/* 855 */,
/* 856 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsProviderError = void 0;
const ProviderError_1 = __webpack_require__(396);
class CredentialsProviderError extends ProviderError_1.ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}
exports.CredentialsProviderError = CredentialsProviderError;


/***/ }),
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SENSITIVE_STRING = void 0;
exports.SENSITIVE_STRING = "***SensitiveInformation***";


/***/ }),
/* 869 */,
/* 870 */,
/* 871 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.streamCollector = void 0;
const collector_1 = __webpack_require__(822);
const streamCollector = (stream) => new Promise((resolve, reject) => {
    const collector = new collector_1.Collector();
    stream.pipe(collector);
    stream.on("error", (err) => {
        collector.end();
        reject(err);
    });
    collector.on("error", reject);
    collector.on("finish", function () {
        const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
        resolve(bytes);
    });
});
exports.streamCollector = streamCollector;


/***/ }),
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRoleCredentialsCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(743);
const Aws_restJson1_1 = __webpack_require__(340);
class GetRoleCredentialsCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "GetRoleCredentialsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRoleCredentialsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRoleCredentialsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetRoleCredentialsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetRoleCredentialsCommand)(output, context);
    }
}
exports.GetRoleCredentialsCommand = GetRoleCredentialsCommand;


/***/ }),
/* 880 */,
/* 881 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isClockSkewed = void 0;
const getSkewCorrectedDate_1 = __webpack_require__(564);
const isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0, getSkewCorrectedDate_1.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 300000;
exports.isClockSkewed = isClockSkewed;


/***/ }),
/* 882 */,
/* 883 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRateLimiter = void 0;
const service_error_classification_1 = __webpack_require__(927);
class DefaultRateLimiter {
    constructor(options) {
        var _a, _b, _c, _d, _e;
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = (_a = options === null || options === void 0 ? void 0 : options.beta) !== null && _a !== void 0 ? _a : 0.7;
        this.minCapacity = (_b = options === null || options === void 0 ? void 0 : options.minCapacity) !== null && _b !== void 0 ? _b : 1;
        this.minFillRate = (_c = options === null || options === void 0 ? void 0 : options.minFillRate) !== null && _c !== void 0 ? _c : 0.5;
        this.scaleConstant = (_d = options === null || options === void 0 ? void 0 : options.scaleConstant) !== null && _d !== void 0 ? _d : 0.4;
        this.smooth = (_e = options === null || options === void 0 ? void 0 : options.smooth) !== null && _e !== void 0 ? _e : 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0, service_error_classification_1.isThrottlingError)(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}
exports.DefaultRateLimiter = DefaultRateLimiter;


/***/ }),
/* 884 */,
/* 885 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromProcess = void 0;
const shared_ini_file_loader_1 = __webpack_require__(388);
const resolveProcessCredentials_1 = __webpack_require__(914);
const fromProcess = (init = {}) => async () => {
    const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
    return (0, resolveProcessCredentials_1.resolveProcessCredentials)((0, shared_ini_file_loader_1.getProfileName)(init), profiles);
};
exports.fromProcess = fromProcess;


/***/ }),
/* 886 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoggerPlugin = exports.loggerMiddlewareOptions = exports.loggerMiddleware = void 0;
const loggerMiddleware = () => (next, context) => async (args) => {
    const { clientName, commandName, inputFilterSensitiveLog, logger, outputFilterSensitiveLog } = context;
    const response = await next(args);
    if (!logger) {
        return response;
    }
    if (typeof logger.info === "function") {
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger.info({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
    }
    return response;
};
exports.loggerMiddleware = loggerMiddleware;
exports.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.loggerMiddleware)(), exports.loggerMiddlewareOptions);
    },
});
exports.getLoggerPlugin = getLoggerPlugin;


/***/ }),
/* 887 */,
/* 888 */,
/* 889 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 890 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsForResourceCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class ListTagsForResourceCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "ListTagsForResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListTagsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListTagsForResourceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1ListTagsForResourceCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1ListTagsForResourceCommand)(output, context);
    }
}
exports.ListTagsForResourceCommand = ListTagsForResourceCommand;


/***/ }),
/* 891 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFloat = void 0;
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};
exports.serializeFloat = serializeFloat;


/***/ }),
/* 892 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const url_parser_1 = __webpack_require__(187);
const endpoints_1 = __webpack_require__(751);
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2019-06-10",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : endpoints_1.defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "SSO",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : url_parser_1.parseUrl,
    });
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),
/* 893 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = void 0;
const property_provider_1 = __webpack_require__(948);
const fromEnv_1 = __webpack_require__(698);
const fromSharedConfigFiles_1 = __webpack_require__(389);
const fromStatic_1 = __webpack_require__(448);
const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => (0, property_provider_1.memoize)((0, property_provider_1.chain)((0, fromEnv_1.fromEnv)(environmentVariableSelector), (0, fromSharedConfigFiles_1.fromSharedConfigFiles)(configFileSelector, configuration), (0, fromStatic_1.fromStatic)(defaultValue)));
exports.loadConfig = loadConfig;


/***/ }),
/* 894 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRetryPlugin = exports.retryMiddlewareOptions = exports.retryMiddleware = void 0;
const retryMiddleware = (options) => (next, context) => async (args) => {
    const retryStrategy = await options.retryStrategy();
    if (retryStrategy === null || retryStrategy === void 0 ? void 0 : retryStrategy.mode)
        context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
};
exports.retryMiddleware = retryMiddleware;
exports.retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add((0, exports.retryMiddleware)(options), exports.retryMiddlewareOptions);
    },
});
exports.getRetryPlugin = getRetryPlugin;


/***/ }),
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteProvider = exports.ENV_IMDS_DISABLED = void 0;
const credential_provider_imds_1 = __webpack_require__(146);
const property_provider_1 = __webpack_require__(948);
exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const remoteProvider = (init) => {
    if (process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]) {
        return (0, credential_provider_imds_1.fromContainerMetadata)(init);
    }
    if (process.env[exports.ENV_IMDS_DISABLED]) {
        return async () => {
            throw new property_provider_1.CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
    }
    return (0, credential_provider_imds_1.fromInstanceMetadata)(init);
};
exports.remoteProvider = remoteProvider;


/***/ }),
/* 899 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeHttpHandler = void 0;
const protocol_http_1 = __webpack_require__(504);
const querystring_builder_1 = __webpack_require__(979);
const http_1 = __webpack_require__(605);
const https_1 = __webpack_require__(211);
const constants_1 = __webpack_require__(702);
const get_transformed_headers_1 = __webpack_require__(458);
const set_connection_timeout_1 = __webpack_require__(204);
const set_socket_timeout_1 = __webpack_require__(233);
const write_request_body_1 = __webpack_require__(426);
class NodeHttpHandler {
    constructor(options) {
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            socketTimeout,
            httpAgent: httpAgent || new http_1.Agent({ keepAlive, maxSockets }),
            httpsAgent: httpsAgent || new https_1.Agent({ keepAlive, maxSockets }),
        };
    }
    destroy() {
        var _a, _b, _c, _d;
        (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.httpAgent) === null || _b === void 0 ? void 0 : _b.destroy();
        (_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.httpsAgent) === null || _d === void 0 ? void 0 : _d.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        return new Promise((resolve, reject) => {
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request.protocol === "https:";
            const queryString = (0, querystring_builder_1.buildQueryString)(request.query || {});
            const nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path: queryString ? `${request.path}?${queryString}` : request.path,
                port: request.port,
                agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
            };
            const requestFunc = isSSL ? https_1.request : http_1.request;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new protocol_http_1.HttpResponse({
                    statusCode: res.statusCode || -1,
                    headers: (0, get_transformed_headers_1.getTransformedHeaders)(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (constants_1.NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            (0, set_connection_timeout_1.setConnectionTimeout)(req, reject, this.config.connectionTimeout);
            (0, set_socket_timeout_1.setSocketTimeout)(req, reject, this.config.socketTimeout);
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.abort();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            (0, write_request_body_1.writeRequestBody)(req, request);
        });
    }
}
exports.NodeHttpHandler = NodeHttpHandler;


/***/ }),
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STS = void 0;
const AssumeRoleCommand_1 = __webpack_require__(378);
const AssumeRoleWithSAMLCommand_1 = __webpack_require__(213);
const AssumeRoleWithWebIdentityCommand_1 = __webpack_require__(650);
const DecodeAuthorizationMessageCommand_1 = __webpack_require__(491);
const GetAccessKeyInfoCommand_1 = __webpack_require__(439);
const GetCallerIdentityCommand_1 = __webpack_require__(133);
const GetFederationTokenCommand_1 = __webpack_require__(629);
const GetSessionTokenCommand_1 = __webpack_require__(222);
const STSClient_1 = __webpack_require__(570);
class STS extends STSClient_1.STSClient {
    assumeRole(args, optionsOrCb, cb) {
        const command = new AssumeRoleCommand_1.AssumeRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assumeRoleWithSAML(args, optionsOrCb, cb) {
        const command = new AssumeRoleWithSAMLCommand_1.AssumeRoleWithSAMLCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assumeRoleWithWebIdentity(args, optionsOrCb, cb) {
        const command = new AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    decodeAuthorizationMessage(args, optionsOrCb, cb) {
        const command = new DecodeAuthorizationMessageCommand_1.DecodeAuthorizationMessageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAccessKeyInfo(args, optionsOrCb, cb) {
        const command = new GetAccessKeyInfoCommand_1.GetAccessKeyInfoCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCallerIdentity(args, optionsOrCb, cb) {
        const command = new GetCallerIdentityCommand_1.GetCallerIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFederationToken(args, optionsOrCb, cb) {
        const command = new GetFederationTokenCommand_1.GetFederationTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSessionToken(args, optionsOrCb, cb) {
        const command = new GetSessionTokenCommand_1.GetSessionTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.STS = STS;


/***/ }),
/* 908 */,
/* 909 */,
/* 910 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayBuffer = void 0;
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
exports.isArrayBuffer = isArrayBuffer;


/***/ }),
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveProcessCredentials = void 0;
const property_provider_1 = __webpack_require__(948);
const child_process_1 = __webpack_require__(129);
const util_1 = __webpack_require__(669);
const getValidatedProcessCredentials_1 = __webpack_require__(532);
const resolveProcessCredentials = async (profileName, profiles) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = (0, util_1.promisify)(child_process_1.exec);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                }
                catch (_a) {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return (0, getValidatedProcessCredentials_1.getValidatedProcessCredentials)(profileName, data);
            }
            catch (error) {
                throw new property_provider_1.CredentialsProviderError(error.message);
            }
        }
        else {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
    }
    else {
        throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
    }
};
exports.resolveProcessCredentials = resolveProcessCredentials;


/***/ }),
/* 915 */,
/* 916 */,
/* 917 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEnv = exports.ENV_EXPIRATION = exports.ENV_SESSION = exports.ENV_SECRET = exports.ENV_KEY = void 0;
const property_provider_1 = __webpack_require__(948);
exports.ENV_KEY = "AWS_ACCESS_KEY_ID";
exports.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
exports.ENV_SESSION = "AWS_SESSION_TOKEN";
exports.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const fromEnv = () => async () => {
    const accessKeyId = process.env[exports.ENV_KEY];
    const secretAccessKey = process.env[exports.ENV_SECRET];
    const sessionToken = process.env[exports.ENV_SESSION];
    const expiry = process.env[exports.ENV_EXPIRATION];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
        };
    }
    throw new property_provider_1.CredentialsProviderError("Unable to find environment variable credentials.");
};
exports.fromEnv = fromEnv;


/***/ }),
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribePackageVersionCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class DescribePackageVersionCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "DescribePackageVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribePackageVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribePackageVersionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1DescribePackageVersionCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1DescribePackageVersionCommand)(output, context);
    }
}
exports.DescribePackageVersionCommand = DescribePackageVersionCommand;


/***/ }),
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransientError = exports.isThrottlingError = exports.isClockSkewError = exports.isRetryableByTrait = void 0;
const constants_1 = __webpack_require__(206);
const isRetryableByTrait = (error) => error.$retryable !== undefined;
exports.isRetryableByTrait = isRetryableByTrait;
const isClockSkewError = (error) => constants_1.CLOCK_SKEW_ERROR_CODES.includes(error.name);
exports.isClockSkewError = isClockSkewError;
const isThrottlingError = (error) => {
    var _a, _b;
    return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 ||
        constants_1.THROTTLING_ERROR_CODES.includes(error.name) ||
        ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
};
exports.isThrottlingError = isThrottlingError;
const isTransientError = (error) => {
    var _a;
    return constants_1.TRANSIENT_ERROR_CODES.includes(error.name) ||
        constants_1.TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
};
exports.isTransientError = isTransientError;


/***/ }),
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRetryDecider = void 0;
const service_error_classification_1 = __webpack_require__(927);
const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return (0, service_error_classification_1.isRetryableByTrait)(error) || (0, service_error_classification_1.isClockSkewError)(error) || (0, service_error_classification_1.isThrottlingError)(error) || (0, service_error_classification_1.isTransientError)(error);
};
exports.defaultRetryDecider = defaultRetryDecider;


/***/ }),
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(__webpack_require__(318));

var _sha = _interopRequireDefault(__webpack_require__(447));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports.default = _default;

/***/ }),
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(856), exports);
tslib_1.__exportStar(__webpack_require__(396), exports);
tslib_1.__exportStar(__webpack_require__(359), exports);
tslib_1.__exportStar(__webpack_require__(409), exports);
tslib_1.__exportStar(__webpack_require__(351), exports);


/***/ }),
/* 949 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = __webpack_require__(253);
var encode_1 = __webpack_require__(306);
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(306);
Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return encode_2.encodeXML; } });
Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } });
Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return encode_2.escape; } });
Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return encode_2.escapeUTF8; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
var decode_2 = __webpack_require__(253);
Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_2.decodeXML; } });
Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_2.decodeXML; } });


/***/ }),
/* 950 */,
/* 951 */,
/* 952 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSSO = void 0;
const property_provider_1 = __webpack_require__(948);
const shared_ini_file_loader_1 = __webpack_require__(388);
const isSsoProfile_1 = __webpack_require__(514);
const resolveSSOCredentials_1 = __webpack_require__(259);
const validateSsoProfile_1 = __webpack_require__(809);
const fromSSO = (init = {}) => async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName) {
        const profiles = await (0, shared_ini_file_loader_1.parseKnownFiles)(init);
        const profileName = (0, shared_ini_file_loader_1.getProfileName)(init);
        const profile = profiles[profileName];
        if (!(0, isSsoProfile_1.isSsoProfile)(profile)) {
            throw new property_provider_1.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name } = (0, validateSsoProfile_1.validateSsoProfile)(profile);
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({
            ssoStartUrl: sso_start_url,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new property_provider_1.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl",' +
            ' "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return (0, resolveSSOCredentials_1.resolveSSOCredentials)({ ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient });
    }
};
exports.fromSSO = fromSSO;


/***/ }),
/* 953 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(899), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(871), exports);


/***/ }),
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isFipsRegion = void 0;
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
exports.isFipsRegion = isFipsRegion;


/***/ }),
/* 961 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

const char = function(a) {
  return String.fromCharCode(a);
};

const chars = {
  nilChar: char(176),
  missingChar: char(201),
  nilPremitive: char(175),
  missingPremitive: char(200),

  emptyChar: char(178),
  emptyValue: char(177), //empty Premitive

  boundryChar: char(179),

  objStart: char(198),
  arrStart: char(204),
  arrayEnd: char(185),
};

const charsArr = [
  chars.nilChar,
  chars.nilPremitive,
  chars.missingChar,
  chars.missingPremitive,
  chars.boundryChar,
  chars.emptyChar,
  chars.emptyValue,
  chars.arrayEnd,
  chars.objStart,
  chars.arrStart,
];

const _e = function(node, e_schema, options) {
  if (typeof e_schema === 'string') {
    //premitive
    if (node && node[0] && node[0].val !== undefined) {
      return getValue(node[0].val, e_schema);
    } else {
      return getValue(node, e_schema);
    }
  } else {
    const hasValidData = hasData(node);
    if (hasValidData === true) {
      let str = '';
      if (Array.isArray(e_schema)) {
        //attributes can't be repeated. hence check in children tags only
        str += chars.arrStart;
        const itemSchema = e_schema[0];
        //var itemSchemaType = itemSchema;
        const arr_len = node.length;

        if (typeof itemSchema === 'string') {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = getValue(node[arr_i].val, itemSchema);
            str = processValue(str, r);
          }
        } else {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = _e(node[arr_i], itemSchema, options);
            str = processValue(str, r);
          }
        }
        str += chars.arrayEnd; //indicates that next item is not array item
      } else {
        //object
        str += chars.objStart;
        const keys = Object.keys(e_schema);
        if (Array.isArray(node)) {
          node = node[0];
        }
        for (let i in keys) {
          const key = keys[i];
          //a property defined in schema can be present either in attrsMap or children tags
          //options.textNodeName will not present in both maps, take it's value from val
          //options.attrNodeName will be present in attrsMap
          let r;
          if (!options.ignoreAttributes && node.attrsMap && node.attrsMap[key]) {
            r = _e(node.attrsMap[key], e_schema[key], options);
          } else if (key === options.textNodeName) {
            r = _e(node.val, e_schema[key], options);
          } else {
            r = _e(node.child[key], e_schema[key], options);
          }
          str = processValue(str, r);
        }
      }
      return str;
    } else {
      return hasValidData;
    }
  }
};

const getValue = function(a /*, type*/) {
  switch (a) {
    case undefined:
      return chars.missingPremitive;
    case null:
      return chars.nilPremitive;
    case '':
      return chars.emptyValue;
    default:
      return a;
  }
};

const processValue = function(str, r) {
  if (!isAppChar(r[0]) && !isAppChar(str[str.length - 1])) {
    str += chars.boundryChar;
  }
  return str + r;
};

const isAppChar = function(ch) {
  return charsArr.indexOf(ch) !== -1;
};

function hasData(jObj) {
  if (jObj === undefined) {
    return chars.missingChar;
  } else if (jObj === null) {
    return chars.nilChar;
  } else if (
    jObj.child &&
    Object.keys(jObj.child).length === 0 &&
    (!jObj.attrsMap || Object.keys(jObj.attrsMap).length === 0)
  ) {
    return chars.emptyChar;
  } else {
    return true;
  }
}

const x2j = __webpack_require__(170);
const buildOptions = __webpack_require__(839).buildOptions;

const convert2nimn = function(node, e_schema, options) {
  options = buildOptions(options, x2j.defaultOptions, x2j.props);
  return _e(node, e_schema, options);
};

exports.convert2nimn = convert2nimn;


/***/ }),
/* 962 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(378), exports);
tslib_1.__exportStar(__webpack_require__(213), exports);
tslib_1.__exportStar(__webpack_require__(650), exports);
tslib_1.__exportStar(__webpack_require__(491), exports);
tslib_1.__exportStar(__webpack_require__(439), exports);
tslib_1.__exportStar(__webpack_require__(133), exports);
tslib_1.__exportStar(__webpack_require__(629), exports);
tslib_1.__exportStar(__webpack_require__(222), exports);


/***/ }),
/* 963 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_queryGetSessionTokenCommand = exports.deserializeAws_queryGetFederationTokenCommand = exports.deserializeAws_queryGetCallerIdentityCommand = exports.deserializeAws_queryGetAccessKeyInfoCommand = exports.deserializeAws_queryDecodeAuthorizationMessageCommand = exports.deserializeAws_queryAssumeRoleWithWebIdentityCommand = exports.deserializeAws_queryAssumeRoleWithSAMLCommand = exports.deserializeAws_queryAssumeRoleCommand = exports.serializeAws_queryGetSessionTokenCommand = exports.serializeAws_queryGetFederationTokenCommand = exports.serializeAws_queryGetCallerIdentityCommand = exports.serializeAws_queryGetAccessKeyInfoCommand = exports.serializeAws_queryDecodeAuthorizationMessageCommand = exports.serializeAws_queryAssumeRoleWithWebIdentityCommand = exports.serializeAws_queryAssumeRoleWithSAMLCommand = exports.serializeAws_queryAssumeRoleCommand = void 0;
const protocol_http_1 = __webpack_require__(504);
const smithy_client_1 = __webpack_require__(973);
const entities_1 = __webpack_require__(949);
const fast_xml_parser_1 = __webpack_require__(989);
const models_0_1 = __webpack_require__(37);
const STSServiceException_1 = __webpack_require__(360);
const serializeAws_queryAssumeRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleRequest(input, context),
        Action: "AssumeRole",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAssumeRoleCommand = serializeAws_queryAssumeRoleCommand;
const serializeAws_queryAssumeRoleWithSAMLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleWithSAMLRequest(input, context),
        Action: "AssumeRoleWithSAML",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAssumeRoleWithSAMLCommand = serializeAws_queryAssumeRoleWithSAMLCommand;
const serializeAws_queryAssumeRoleWithWebIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleWithWebIdentityRequest(input, context),
        Action: "AssumeRoleWithWebIdentity",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAssumeRoleWithWebIdentityCommand = serializeAws_queryAssumeRoleWithWebIdentityCommand;
const serializeAws_queryDecodeAuthorizationMessageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDecodeAuthorizationMessageRequest(input, context),
        Action: "DecodeAuthorizationMessage",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDecodeAuthorizationMessageCommand = serializeAws_queryDecodeAuthorizationMessageCommand;
const serializeAws_queryGetAccessKeyInfoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetAccessKeyInfoRequest(input, context),
        Action: "GetAccessKeyInfo",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetAccessKeyInfoCommand = serializeAws_queryGetAccessKeyInfoCommand;
const serializeAws_queryGetCallerIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetCallerIdentityRequest(input, context),
        Action: "GetCallerIdentity",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetCallerIdentityCommand = serializeAws_queryGetCallerIdentityCommand;
const serializeAws_queryGetFederationTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetFederationTokenRequest(input, context),
        Action: "GetFederationToken",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetFederationTokenCommand = serializeAws_queryGetFederationTokenCommand;
const serializeAws_queryGetSessionTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSessionTokenRequest(input, context),
        Action: "GetSessionToken",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSessionTokenCommand = serializeAws_queryGetSessionTokenCommand;
const deserializeAws_queryAssumeRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleResponse(data.AssumeRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAssumeRoleCommand = deserializeAws_queryAssumeRoleCommand;
const deserializeAws_queryAssumeRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryAssumeRoleWithSAMLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleWithSAMLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAssumeRoleWithSAMLCommand = deserializeAws_queryAssumeRoleWithSAMLCommand;
const deserializeAws_queryAssumeRoleWithSAMLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "IDPRejectedClaimException":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context);
        case "InvalidIdentityTokenException":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryAssumeRoleWithWebIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleWithWebIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAssumeRoleWithWebIdentityCommand = deserializeAws_queryAssumeRoleWithWebIdentityCommand;
const deserializeAws_queryAssumeRoleWithWebIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "IDPCommunicationErrorException":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await deserializeAws_queryIDPCommunicationErrorExceptionResponse(parsedOutput, context);
        case "IDPRejectedClaimException":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context);
        case "InvalidIdentityTokenException":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryDecodeAuthorizationMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDecodeAuthorizationMessageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDecodeAuthorizationMessageCommand = deserializeAws_queryDecodeAuthorizationMessageCommand;
const deserializeAws_queryDecodeAuthorizationMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
            throw await deserializeAws_queryInvalidAuthorizationMessageExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryGetAccessKeyInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccessKeyInfoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetAccessKeyInfoCommand = deserializeAws_queryGetAccessKeyInfoCommand;
const deserializeAws_queryGetAccessKeyInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryGetCallerIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetCallerIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCallerIdentityResponse(data.GetCallerIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetCallerIdentityCommand = deserializeAws_queryGetCallerIdentityCommand;
const deserializeAws_queryGetCallerIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryGetFederationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetFederationTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetFederationTokenResponse(data.GetFederationTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetFederationTokenCommand = deserializeAws_queryGetFederationTokenCommand;
const deserializeAws_queryGetFederationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLargeException":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryGetSessionTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSessionTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSessionTokenResponse(data.GetSessionTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSessionTokenCommand = deserializeAws_queryGetSessionTokenCommand;
const deserializeAws_queryGetSessionTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            const $metadata = deserializeMetadata(output);
            const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
            response = new STSServiceException_1.STSServiceException({
                name: parsedBody.Error.code || parsedBody.Error.Code || errorCode || statusCode || "UnknowError",
                $fault: "client",
                $metadata,
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody.Error);
    }
};
const deserializeAws_queryExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryExpiredTokenException(body.Error, context);
    const exception = new models_0_1.ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryIDPCommunicationErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPCommunicationErrorException(body.Error, context);
    const exception = new models_0_1.IDPCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryIDPRejectedClaimExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPRejectedClaimException(body.Error, context);
    const exception = new models_0_1.IDPRejectedClaimException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryInvalidAuthorizationMessageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAuthorizationMessageException(body.Error, context);
    const exception = new models_0_1.InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryInvalidIdentityTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidIdentityTokenException(body.Error, context);
    const exception = new models_0_1.InvalidIdentityTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
    const exception = new models_0_1.MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryPackedPolicyTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPackedPolicyTooLargeException(body.Error, context);
    const exception = new models_0_1.PackedPolicyTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const deserializeAws_queryRegionDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRegionDisabledException(body.Error, context);
    const exception = new models_0_1.RegionDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const serializeAws_queryAssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName !== undefined && input.RoleSessionName !== null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TransitiveTagKeys !== undefined && input.TransitiveTagKeys !== null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TransitiveTagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExternalId !== undefined && input.ExternalId !== null) {
        entries["ExternalId"] = input.ExternalId;
    }
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode !== undefined && input.TokenCode !== null) {
        entries["TokenCode"] = input.TokenCode;
    }
    if (input.SourceIdentity !== undefined && input.SourceIdentity !== null) {
        entries["SourceIdentity"] = input.SourceIdentity;
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.PrincipalArn !== undefined && input.PrincipalArn !== null) {
        entries["PrincipalArn"] = input.PrincipalArn;
    }
    if (input.SAMLAssertion !== undefined && input.SAMLAssertion !== null) {
        entries["SAMLAssertion"] = input.SAMLAssertion;
    }
    if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName !== undefined && input.RoleSessionName !== null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.WebIdentityToken !== undefined && input.WebIdentityToken !== null) {
        entries["WebIdentityToken"] = input.WebIdentityToken;
    }
    if (input.ProviderId !== undefined && input.ProviderId !== null) {
        entries["ProviderId"] = input.ProviderId;
    }
    if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryDecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input.EncodedMessage !== undefined && input.EncodedMessage !== null) {
        entries["EncodedMessage"] = input.EncodedMessage;
    }
    return entries;
};
const serializeAws_queryGetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId !== undefined && input.AccessKeyId !== null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const serializeAws_queryGetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryGetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode !== undefined && input.TokenCode !== null) {
        entries["TokenCode"] = input.TokenCode;
    }
    return entries;
};
const serializeAws_querypolicyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryPolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input.arn !== undefined && input.arn !== null) {
        entries["arn"] = input.arn;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_querytagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querytagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const deserializeAws_queryAssumedRoleUser = (output, context) => {
    const contents = {
        AssumedRoleId: undefined,
        Arn: undefined,
    };
    if (output["AssumedRoleId"] !== undefined) {
        contents.AssumedRoleId = (0, smithy_client_1.expectString)(output["AssumedRoleId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithSAMLResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        Subject: undefined,
        SubjectType: undefined,
        Issuer: undefined,
        Audience: undefined,
        NameQualifier: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    if (output["Subject"] !== undefined) {
        contents.Subject = (0, smithy_client_1.expectString)(output["Subject"]);
    }
    if (output["SubjectType"] !== undefined) {
        contents.SubjectType = (0, smithy_client_1.expectString)(output["SubjectType"]);
    }
    if (output["Issuer"] !== undefined) {
        contents.Issuer = (0, smithy_client_1.expectString)(output["Issuer"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = (0, smithy_client_1.expectString)(output["Audience"]);
    }
    if (output["NameQualifier"] !== undefined) {
        contents.NameQualifier = (0, smithy_client_1.expectString)(output["NameQualifier"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithWebIdentityResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        SubjectFromWebIdentityToken: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        Provider: undefined,
        Audience: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["SubjectFromWebIdentityToken"] !== undefined) {
        contents.SubjectFromWebIdentityToken = (0, smithy_client_1.expectString)(output["SubjectFromWebIdentityToken"]);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    if (output["Provider"] !== undefined) {
        contents.Provider = (0, smithy_client_1.expectString)(output["Provider"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = (0, smithy_client_1.expectString)(output["Audience"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = (0, smithy_client_1.expectString)(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryCredentials = (output, context) => {
    const contents = {
        AccessKeyId: undefined,
        SecretAccessKey: undefined,
        SessionToken: undefined,
        Expiration: undefined,
    };
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = (0, smithy_client_1.expectString)(output["AccessKeyId"]);
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = (0, smithy_client_1.expectString)(output["SecretAccessKey"]);
    }
    if (output["SessionToken"] !== undefined) {
        contents.SessionToken = (0, smithy_client_1.expectString)(output["SessionToken"]);
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output["Expiration"]));
    }
    return contents;
};
const deserializeAws_queryDecodeAuthorizationMessageResponse = (output, context) => {
    const contents = {
        DecodedMessage: undefined,
    };
    if (output["DecodedMessage"] !== undefined) {
        contents.DecodedMessage = (0, smithy_client_1.expectString)(output["DecodedMessage"]);
    }
    return contents;
};
const deserializeAws_queryExpiredTokenException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryFederatedUser = (output, context) => {
    const contents = {
        FederatedUserId: undefined,
        Arn: undefined,
    };
    if (output["FederatedUserId"] !== undefined) {
        contents.FederatedUserId = (0, smithy_client_1.expectString)(output["FederatedUserId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryGetAccessKeyInfoResponse = (output, context) => {
    const contents = {
        Account: undefined,
    };
    if (output["Account"] !== undefined) {
        contents.Account = (0, smithy_client_1.expectString)(output["Account"]);
    }
    return contents;
};
const deserializeAws_queryGetCallerIdentityResponse = (output, context) => {
    const contents = {
        UserId: undefined,
        Account: undefined,
        Arn: undefined,
    };
    if (output["UserId"] !== undefined) {
        contents.UserId = (0, smithy_client_1.expectString)(output["UserId"]);
    }
    if (output["Account"] !== undefined) {
        contents.Account = (0, smithy_client_1.expectString)(output["Account"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = (0, smithy_client_1.expectString)(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryGetFederationTokenResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        FederatedUser: undefined,
        PackedPolicySize: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["FederatedUser"] !== undefined) {
        contents.FederatedUser = deserializeAws_queryFederatedUser(output["FederatedUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = (0, smithy_client_1.strictParseInt32)(output["PackedPolicySize"]);
    }
    return contents;
};
const deserializeAws_queryGetSessionTokenResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    return contents;
};
const deserializeAws_queryIDPCommunicationErrorException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryIDPRejectedClaimException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryInvalidAuthorizationMessageException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryInvalidIdentityTokenException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryPackedPolicyTooLargeException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeAws_queryRegionDisabledException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parsedObj = (0, fast_xml_parser_1.parse)(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : (0, entities_1.decodeHTML)(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return (0, smithy_client_1.getValueFromTextNode)(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => (0, smithy_client_1.extendedEncodeURIComponent)(key) + "=" + (0, smithy_client_1.extendedEncodeURIComponent)(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};


/***/ }),
/* 964 */,
/* 965 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBodyLength = void 0;
const fs_1 = __webpack_require__(747);
const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, fs_1.lstatSync)(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return (0, fs_1.fstatSync)(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};
exports.calculateBodyLength = calculateBodyLength;


/***/ }),
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(839);

const defaultOptions = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
};

const props = ['allowBooleanAttributes'];

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = util.buildOptions(options, defaultOptions, props);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }

  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value

      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "There is an unnecessary space between tag name and backward slash '</ ..'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, i));
          } else {
            const otg = tags.pop();
            if (tagName !== otg) {
              return getErrorObject('InvalidTag', "Closing tag '"+otg+"' is expected inplace of '"+tagName+"'.", getLineNumberForPosition(xmlData, i));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else {
            tags.push(tagName);
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else{
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if (xmlData[i] === ' ' || xmlData[i] === '\t' || xmlData[i] === '\n' || xmlData[i] === '\r') {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  } else if (tags.length > 0) {
    return getErrorObject('InvalidXml', "Invalid '"+JSON.stringify(tags, null, 4).replace(/\r?\n/g, '')+"' found.", 1);
  }

  return true;
};

/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  var start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      var tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

var doubleQuote = '"';
var singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
        continue;
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(attrStr, matches[i][0]))
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(attrStr, matches[i][0]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(attrStr, matches[i][0]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(attrStr, matches[i][0]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  var lines = xmlData.substring(0, index).split(/\r?\n/);
  return lines.length;
}

//this function returns the position of the last character of match within attrStr
function getPositionFromMatch(attrStr, match) {
  return attrStr.indexOf(match) + match.length;
}


/***/ }),
/* 972 */,
/* 973 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(634), exports);
tslib_1.__exportStar(__webpack_require__(118), exports);
tslib_1.__exportStar(__webpack_require__(868), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(270), exports);
tslib_1.__exportStar(__webpack_require__(633), exports);
tslib_1.__exportStar(__webpack_require__(116), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(710), exports);
tslib_1.__exportStar(__webpack_require__(333), exports);
tslib_1.__exportStar(__webpack_require__(765), exports);
tslib_1.__exportStar(__webpack_require__(816), exports);
tslib_1.__exportStar(__webpack_require__(891), exports);
tslib_1.__exportStar(__webpack_require__(830), exports);


/***/ }),
/* 974 */,
/* 975 */,
/* 976 */
/***/ (function(module) {

module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376};

/***/ }),
/* 977 */,
/* 978 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuthorizationTokenCommand = void 0;
const middleware_serde_1 = __webpack_require__(347);
const smithy_client_1 = __webpack_require__(973);
const models_0_1 = __webpack_require__(696);
const Aws_restJson1_1 = __webpack_require__(785);
class GetAuthorizationTokenCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeartifactClient";
        const commandName = "GetAuthorizationTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAuthorizationTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAuthorizationTokenResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1GetAuthorizationTokenCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1GetAuthorizationTokenCommand)(output, context);
    }
}
exports.GetAuthorizationTokenCommand = GetAuthorizationTokenCommand;


/***/ }),
/* 979 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryString = void 0;
const util_uri_escape_1 = __webpack_require__(392);
function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, util_uri_escape_1.escapeUri)(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${(0, util_uri_escape_1.escapeUri)(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0, util_uri_escape_1.escapeUri)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}
exports.buildQueryString = buildQueryString;


/***/ }),
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHeader = exports.getHeaderValue = exports.hasHeader = void 0;
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
exports.hasHeader = hasHeader;
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
exports.getHeaderValue = getHeaderValue;
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};
exports.deleteHeader = deleteHeader;


/***/ }),
/* 988 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentLengthPlugin = exports.contentLengthMiddlewareOptions = exports.contentLengthMiddleware = void 0;
const protocol_http_1 = __webpack_require__(504);
const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
exports.contentLengthMiddleware = contentLengthMiddleware;
exports.contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), exports.contentLengthMiddlewareOptions);
    },
});
exports.getContentLengthPlugin = getContentLengthPlugin;


/***/ }),
/* 989 */
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


const nodeToJson = __webpack_require__(727);
const xmlToNodeobj = __webpack_require__(170);
const x2xmlnode = __webpack_require__(170);
const buildOptions = __webpack_require__(839).buildOptions;
const validator = __webpack_require__(971);

exports.parse = function(xmlData, options, validationOption) {
  if( validationOption){
    if(validationOption === true) validationOption = {}
    
    const result = validator.validate(xmlData, validationOption);
    if (result !== true) {
      throw Error( result.err.msg)
    }
  }
  options = buildOptions(options, x2xmlnode.defaultOptions, x2xmlnode.props);
  const traversableObj = xmlToNodeobj.getTraversalObj(xmlData, options)
  //print(traversableObj, "  ");
  return nodeToJson.convertToJson(traversableObj, options);
};
exports.convertTonimn = __webpack_require__(961).convert2nimn;
exports.getTraversalObj = xmlToNodeobj.getTraversalObj;
exports.convertToJson = nodeToJson.convertToJson;
exports.convertToJsonString = __webpack_require__(207).convertToJsonString;
exports.validate = validator.validate;
exports.j2xParser = __webpack_require__(200);
exports.parseToNimn = function(xmlData, schema, options) {
  return exports.convertTonimn(exports.getTraversalObj(xmlData, options), schema, options);
};


function print(xmlNode, indentation){
  if(xmlNode){
    console.log(indentation + "{")
    console.log(indentation + "  \"tagName\": \"" + xmlNode.tagname + "\", ");
    if(xmlNode.parent){
      console.log(indentation + "  \"parent\": \"" + xmlNode.parent.tagname  + "\", ");
    }
    console.log(indentation + "  \"val\": \"" + xmlNode.val  + "\", ");
    console.log(indentation + "  \"attrs\": " + JSON.stringify(xmlNode.attrsMap,null,4)  + ", ");

    if(xmlNode.child){
      console.log(indentation + "\"child\": {")
      const indentation2 = indentation + indentation;
      Object.keys(xmlNode.child).forEach( function(key) {
        const node = xmlNode.child[key];

        if(Array.isArray(node)){
          console.log(indentation +  "\""+key+"\" :[")
          node.forEach( function(item,index) {
            //console.log(indentation + " \""+index+"\" : [")
            print(item, indentation2);
          })
          console.log(indentation + "],")  
        }else{
          console.log(indentation + " \""+key+"\" : {")
          print(node, indentation2);
          console.log(indentation + "},")  
        }
      });
      console.log(indentation + "},")
    }
    console.log(indentation + "},")
  }
}


/***/ }),
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveUserAgentConfig = void 0;
function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}
exports.resolveUserAgentConfig = resolveUserAgentConfig;


/***/ })
/******/ ]);