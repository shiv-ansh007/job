(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_d0eed8._.js", {

"[project]/app/landing/page.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/landing/page.js'

Expression expected`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/app/landing/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/hey-listen/dist/hey-listen.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "invariant": (()=>invariant),
    "warning": (()=>warning)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var warning = function() {};
var invariant = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    warning = function(check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function(check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveElements": (()=>resolveElements)
});
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else {
            elements = document.querySelectorAll(elements);
        }
    } else if (elements instanceof Element) {
        elements = [
            elements
        ];
    }
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/is-function.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isFunction": (()=>isFunction)
});
const isFunction = (value)=>typeof value === "function";
;
}}),
"[project]/node_modules/@motionone/dom/dist/gestures/in-view.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "inView": (()=>inView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-function.es.js [app-client] (ecmascript)");
;
;
const thresholds = {
    any: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "any" } = {}) {
    /**
     * If this browser doesn't support IntersectionObserver, return a dummy stop function.
     * Default triggering of onStart is tricky - it could be used for starting/stopping
     * videos, lazy loading content etc. We could provide an option to enable a fallback, or
     * provide a fallback callback option.
     */ if (typeof IntersectionObserver === "undefined") {
        return ()=>{};
    }
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$utils$2f$resolve$2d$elements$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(newOnEnd)) {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dispatchPointerEvent": (()=>dispatchPointerEvent),
    "dispatchViewEvent": (()=>dispatchViewEvent),
    "motionEvent": (()=>motionEvent)
});
const motionEvent = (name, target)=>new CustomEvent(name, {
        detail: {
            target
        }
    });
function dispatchPointerEvent(element, name, event) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEvent: event
        }
    }));
}
function dispatchViewEvent(element, name, entry) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEntry: entry
        }
    }));
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/gestures/in-view.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "inView": (()=>inView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/gestures/in-view.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
;
;
;
const inView = {
    isActive: (options)=>Boolean(options.inView),
    subscribe: (element, { enable, disable }, { inViewOptions = {} })=>{
        const { once } = inViewOptions, viewOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(inViewOptions, [
            "once"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(element, (enterEntry)=>{
            enable();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchViewEvent"])(element, "viewenter", enterEntry);
            if (!once) {
                return (leaveEntry)=>{
                    disable();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchViewEvent"])(element, "viewleave", leaveEntry);
                };
            }
        }, viewOptions);
    }
};
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/gestures/hover.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hover": (()=>hover)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
;
const mouseEvent = (element, name, action)=>(event)=>{
        if (event.pointerType && event.pointerType !== "mouse") return;
        action();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchPointerEvent"])(element, name, event);
    };
const hover = {
    isActive: (options)=>Boolean(options.hover),
    subscribe: (element, { enable, disable })=>{
        const onEnter = mouseEvent(element, "hoverstart", enable);
        const onLeave = mouseEvent(element, "hoverend", disable);
        element.addEventListener("pointerenter", onEnter);
        element.addEventListener("pointerleave", onLeave);
        return ()=>{
            element.removeEventListener("pointerenter", onEnter);
            element.removeEventListener("pointerleave", onLeave);
        };
    }
};
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/gestures/press.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "press": (()=>press)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
;
const press = {
    isActive: (options)=>Boolean(options.press),
    subscribe: (element, { enable, disable })=>{
        const onPointerUp = (event)=>{
            disable();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchPointerEvent"])(element, "pressend", event);
            window.removeEventListener("pointerup", onPointerUp);
        };
        const onPointerDown = (event)=>{
            enable();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchPointerEvent"])(element, "pressstart", event);
            window.addEventListener("pointerup", onPointerUp);
        };
        element.addEventListener("pointerdown", onPointerDown);
        return ()=>{
            element.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }
};
;
}}),
"[project]/node_modules/@motionone/utils/dist/array.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addUniqueItem": (()=>addUniqueItem),
    "removeItem": (()=>removeItem)
});
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/utils/schedule.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "scheduleAnimation": (()=>scheduleAnimation),
    "unscheduleAnimation": (()=>unscheduleAnimation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/array.es.js [app-client] (ecmascript)");
;
let scheduled = undefined;
function processScheduledAnimations() {
    if (!scheduled) return;
    const generators = scheduled.sort(compareByDepth).map(fireAnimateUpdates);
    generators.forEach(fireNext);
    generators.forEach(fireNext);
    scheduled = undefined;
}
function scheduleAnimation(state) {
    if (!scheduled) {
        scheduled = [
            state
        ];
        requestAnimationFrame(processScheduledAnimations);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(scheduled, state);
    }
}
function unscheduleAnimation(state) {
    scheduled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(scheduled, state);
}
const compareByDepth = (a, b)=>a.getDepth() - b.getDepth();
const fireAnimateUpdates = (state)=>state.animateUpdates();
const fireNext = (iterator)=>iterator.next();
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/utils/is-variant.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isVariant": (()=>isVariant)
});
function isVariant(definition) {
    return typeof definition === "object";
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveVariant": (()=>resolveVariant)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$is$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/is-variant.es.js [app-client] (ecmascript)");
;
function resolveVariant(definition, variants) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$is$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariant"])(definition)) {
        return definition;
    } else if (definition && variants) {
        return variants[definition];
    }
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/options.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getOptions": (()=>getOptions)
});
const getOptions = (options, key)=>/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */ options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/utils/has-changed.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hasChanged": (()=>hasChanged),
    "shallowCompare": (()=>shallowCompare)
});
function hasChanged(a, b) {
    if (typeof a !== typeof b) return true;
    if (Array.isArray(a) && Array.isArray(b)) return !shallowCompare(a, b);
    return a !== b;
}
function shallowCompare(next, prev) {
    const prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(let i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "noop": (()=>noop),
    "noopReturn": (()=>noopReturn)
});
const noop = ()=>{};
const noopReturn = (v)=>v;
;
}}),
"[project]/node_modules/@motionone/types/dist/MotionValue.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */ __turbopack_esm__({
    "MotionValue": (()=>MotionValue)
});
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 ? void 0 : animation.finished.then(()=>this.clearAnimation()).catch(()=>{});
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/data.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAnimationData": (()=>getAnimationData),
    "getMotionValue": (()=>getMotionValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$types$2f$dist$2f$MotionValue$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/types/dist/MotionValue.es.js [app-client] (ecmascript)");
;
const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) {
        data.set(element, {
            transforms: [],
            values: new Map()
        });
    }
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) {
        motionValues.set(name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$types$2f$dist$2f$MotionValue$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]());
    }
    return motionValues.get(name);
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addTransformToElement": (()=>addTransformToElement),
    "asTransformCssVar": (()=>asTransformCssVar),
    "axes": (()=>axes),
    "buildTransformTemplate": (()=>buildTransformTemplate),
    "compareTransformOrder": (()=>compareTransformOrder),
    "isTransform": (()=>isTransform),
    "transformAlias": (()=>transformAlias),
    "transformDefinitions": (()=>transformDefinitions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/data.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/array.es.js [app-client] (ecmascript)");
;
;
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */ const axes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */ const order = [
    "translate",
    "scale",
    "rotate",
    "skew"
];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v)=>v + "deg"
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v)=>v + "px"
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"]
    },
    skew: rotation
};
const transformDefinitions = new Map();
const asTransformCssVar = (name)=>`--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */ const transforms = [
    "x",
    "y",
    "z"
];
order.forEach((name)=>{
    axes.forEach((axis)=>{
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */ const compareTransformOrder = (a, b)=>transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */ const transformLookup = new Set(transforms);
const isTransform = (name)=>transformLookup.has(name);
const addTransformToElement = (element, name)=>{
    // Map x to translateX etc
    if (transformAlias[name]) name = transformAlias[name];
    const { transforms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationData"])(element);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$array$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */ element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms)=>transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name)=>`${template} ${name}(var(${asTransformCssVar(name)}))`;
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStyleName": (()=>getStyleName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
;
function getStyleName(key) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key]) key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransform"])(key) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTransformCssVar"])(key) : key;
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isCssVar": (()=>isCssVar),
    "registerCssVariable": (()=>registerCssVariable),
    "registeredProperties": (()=>registeredProperties)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
;
const isCssVar = (name)=>name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name)) return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].has(name) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(name) : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue
        });
    } catch (e) {}
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/style.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "style": (()=>style)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
;
;
;
const style = {
    get: (element, name)=>{
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleName"])(name);
        let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCssVar"])(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
        // TODO Decide if value can be 0
        if (!value && value !== 0) {
            const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(name);
            if (definition) value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value)=>{
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleName"])(name);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCssVar"])(name)) {
            element.style.setProperty(name, value);
        } else {
            element.style[name] = value;
        }
    }
};
;
}}),
"[project]/node_modules/@motionone/utils/dist/defaults.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaults": (()=>defaults)
});
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "supports": (()=>supports)
});
const testAnimation = (keyframes, options)=>document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: ()=>typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            testAnimation({
                opacity: [
                    1
                ]
            });
        } catch (e) {
            return false;
        }
        return true;
    },
    finished: ()=>Boolean(testAnimation({
            opacity: [
                0,
                1
            ]
        }, {
            duration: 0.001
        }).finished),
    linearEasing: ()=>{
        try {
            testAnimation({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            });
        } catch (e) {
            return false;
        }
        return true;
    }
};
const results = {};
const supports = {};
for(const key in featureTests){
    supports[key] = ()=>{
        if (results[key] === undefined) results[key] = featureTests[key]();
        return results[key];
    };
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stopAnimation": (()=>stopAnimation)
});
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished") return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) {
            animation.stop();
        } else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    } catch (e) {}
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/is-easing-generator.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isEasingGenerator": (()=>isEasingGenerator)
});
const isEasingGenerator = (easing)=>typeof easing === "object" && Boolean(easing.createAnimation);
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hydrateKeyframes": (()=>hydrateKeyframes),
    "keyframesList": (()=>keyframesList)
});
function hydrateKeyframes(keyframes, readInitialValue) {
    for(let i = 0; i < keyframes.length; i++){
        if (keyframes[i] === null) {
            keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
        }
    }
    return keyframes;
}
const keyframesList = (keyframes)=>Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
;
}}),
"[project]/node_modules/@motionone/utils/dist/is-string.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isString": (()=>isString)
});
const isString = (value)=>typeof value === "string";
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUnitConverter": (()=>getUnitConverter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-string.es.js [app-client] (ecmascript)");
;
function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"];
    const finalKeyframe = keyframes[keyframes.length - 1];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$string$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit) toUnit = (value)=>value + unit;
    }
    return toUnit;
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isNumber": (()=>isNumber)
});
const isNumber = (value)=>typeof value === "number";
;
}}),
"[project]/node_modules/@motionone/utils/dist/is-easing-list.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isEasingList": (()=>isEasingList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
;
const isEasingList = (easing)=>Array.isArray(easing) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(easing[0]);
;
}}),
"[project]/node_modules/@motionone/utils/dist/time.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "time": (()=>time)
});
const time = {
    ms: (seconds)=>seconds * 1000,
    s: (milliseconds)=>milliseconds / 1000
};
;
}}),
"[project]/node_modules/@motionone/utils/dist/progress.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "progress": (()=>progress)
});
const progress = (min, max, value)=>max - min === 0 ? 1 : (value - min) / (max - min);
;
}}),
"[project]/node_modules/@motionone/utils/dist/is-cubic-bezier.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isCubicBezier": (()=>isCubicBezier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
;
const isCubicBezier = (easing)=>Array.isArray(easing) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(easing[0]);
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/easing.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertEasing": (()=>convertEasing),
    "cubicBezierAsString": (()=>cubicBezierAsString),
    "generateLinearEasingPoints": (()=>generateLinearEasingPoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/progress.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-function.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-cubic-bezier.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/defaults.es.js [app-client] (ecmascript)");
;
;
// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration)=>{
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for(let i = 0; i < numPoints; i++){
        points += easing((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, numPoints - 1, i)) + ", ";
    }
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(easing)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].easing;
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCubicBezier"])(easing) ? cubicBezierAsString(easing) : easing;
    }
};
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/animate-style.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "animateStyle": (()=>animateStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/defaults.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/data.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$stop$2d$animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-generator.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$unit$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-function.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-list.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/time.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/easing.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].duration, delay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].delay, endDelay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].endDelay, repeat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].repeat, easing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].easing, persist = false, direction, offset, allowWebkitAcceleration = false, autoplay = true } = options;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationData"])(element);
    const valueIsTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransform"])(key);
    let canAnimateNatively = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */ valueIsTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTransformToElement"])(element, key);
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$style$2d$name$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleName"])(key);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$data$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotionValue"])(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */ const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$stop$2d$animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopAnimation"])(motionValue.animation, !((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingGenerator"])(easing) && motionValue.generator) && options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */ return ()=>{
        const readInitialValue = ()=>{
            var _a, _b;
            return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
        };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */ let keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrateKeyframes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$keyframes$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframesList"])(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */ const toUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$get$2d$unit$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitConverter"])(keyframes, definition);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingGenerator"])(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCssVar"])(name)) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].cssRegisterProperty()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$css$2d$var$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCssVariable"])(name);
            } else {
                canAnimateNatively = false;
            }
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */ if (valueIsTransform && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].linearEasing() && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(easing) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) && easing.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"]))) {
            canAnimateNatively = false;
        }
        /**
         * If we can animate this value with WAAPI, do so.
         */ if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */ if (definition) {
                keyframes = keyframes.map((value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value) ? definition.toDefaultUnit(value) : value);
            }
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */ if (keyframes.length === 1 && (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$feature$2d$detection$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supports"].partialKeyframes() || isRecording)) {
                keyframes.unshift(readInitialValue());
            }
            const animationOptions = {
                delay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].ms(delay),
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].ms(duration),
                endDelay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$time$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].ms(endDelay),
                easing: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertEasing"])(easing, duration) : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both"
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) ? easing.map((thisEasing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertEasing"])(thisEasing, duration)) : undefined
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */ if (!animation.finished) {
                animation.finished = new Promise((resolve, reject)=>{
                    animation.onfinish = resolve;
                    animation.oncancel = reject;
                });
            }
            const target = keyframes[keyframes.length - 1];
            animation.finished.then(()=>{
                if (persist) return;
                // Apply styles to target
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */ if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
        /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */ } else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */ keyframes = keyframes.map((value)=>typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */ if (keyframes.length === 1) {
                keyframes.unshift(parseFloat(readInitialValue()));
            }
            animation = new AnimationPolyfill((latest)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), {
                duration,
                easing
            }));
        } else {
            const target = keyframes[keyframes.length - 1];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].set(element, name, definition && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(target) ? definition.toDefaultUnit(target) : target);
        }
        if (isRecording) {
            record(element, key, keyframes, {
                duration,
                delay: delay,
                easing,
                repeat,
                offset
            }, "motion-one");
        }
        motionValue.setAnimation(animation);
        if (animation && !autoplay) animation.pause();
        return animation;
    };
}
;
}}),
"[project]/node_modules/@motionone/easing/dist/cubic-bezier.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cubicBezier": (()=>cubicBezier)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
;
/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/clamp.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clamp": (()=>clamp)
});
const clamp = (min, max, v)=>Math.min(Math.max(v, min), max);
;
}}),
"[project]/node_modules/@motionone/easing/dist/steps.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "steps": (()=>steps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$clamp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/clamp.es.js [app-client] (ecmascript)");
;
const steps = (steps, direction = "end")=>(progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * steps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$clamp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, rounded / steps);
    };
;
}}),
"[project]/node_modules/@motionone/animation/dist/utils/easing.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEasingFunction": (()=>getEasingFunction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/easing/dist/cubic-bezier.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-function.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-cubic-bezier.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$steps$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/easing/dist/steps.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
;
;
const namedEasings = {
    ease: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.25, 0.1, 0.25, 1.0),
    "ease-in": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0.0, 0.58, 1.0),
    "ease-out": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.0, 0.0, 0.58, 1.0)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
    // If already an easing function, return
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$function$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(definition)) return definition;
    // If an easing curve definition, return bezier function
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCubicBezier"])(definition)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$cubic$2d$bezier$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(...definition);
    // If we have a predefined easing function, return
    const namedEasing = namedEasings[definition];
    if (namedEasing) return namedEasing;
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$easing$2f$dist$2f$steps$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"])(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"];
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/mix.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mix": (()=>mix)
});
const mix = (min, max, progress)=>-progress * min + progress * max + min;
;
}}),
"[project]/node_modules/@motionone/utils/dist/offset.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultOffset": (()=>defaultOffset),
    "fillOffset": (()=>fillOffset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/progress.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$mix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/mix.es.js [app-client] (ecmascript)");
;
;
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, remaining, i);
        offset.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$mix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [
        0
    ];
    fillOffset(offset, length - 1);
    return offset;
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/wrap.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "wrap": (()=>wrap)
});
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
;
}}),
"[project]/node_modules/@motionone/utils/dist/easing.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEasingForSegment": (()=>getEasingForSegment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-list.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$wrap$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/wrap.es.js [app-client] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$wrap$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
}}),
"[project]/node_modules/@motionone/utils/dist/interpolate.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "interpolate": (()=>interpolate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/offset.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$clamp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/clamp.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/progress.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/easing.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$mix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/mix.es.js [app-client] (ecmascript)");
;
;
;
;
;
;
function interpolate(output, input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(output.length), easing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"]) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */ const remainder = length - input.length;
    remainder > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$offset$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"])(input, remainder);
    return (t)=>{
        let i = 0;
        for(; i < length - 2; i++){
            if (t < input[i + 1]) break;
        }
        let progressInRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$clamp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$progress$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(input[i], input[i + 1], t));
        const segmentEasing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$mix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(output[i], output[i + 1], progressInRange);
    };
}
;
}}),
"[project]/node_modules/@motionone/animation/dist/Animation.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Animation": (()=>Animation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/defaults.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-generator.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-easing-list.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/animation/dist/utils/easing.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$interpolate$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/interpolate.es.js [app-client] (ecmascript)");
;
;
class Animation {
    constructor(output, keyframes = [
        0,
        1
    ], { easing, duration: initialDuration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].duration, delay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].delay, endDelay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].endDelay, repeat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].repeat, offset, direction = "normal", autoplay = true } = {}){
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"];
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$defaults$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"].easing;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$generator$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingGenerator"])(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingFunction"])(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$interpolate$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(keyframes, offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$easing$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingList"])(easing) ? easing.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$utils$2f$easing$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingFunction"]) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopReturn"]);
        this.tick = (timestamp)=>{
            var _a;
            // TODO: Temporary fix for OptionsResolver typing
            delay = delay;
            let t = 0;
            if (this.pauseTime !== undefined) {
                t = this.pauseTime;
            } else {
                t = (timestamp - this.startTime) * this.rate;
            }
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */ if (this.playState === "finished" && this.pauseTime === undefined) {
                t = this.totalDuration;
            }
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
                iterationProgress = 1 - iterationProgress;
            }
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
            } else if (this.playState !== "idle") {
                this.frameRequestId = requestAnimationFrame(this.tick);
            }
        };
        if (autoplay) this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) {
            this.startTime = now - this.pauseTime;
        } else if (!this.startTime) {
            this.startTime = now;
        }
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) {
            cancelAnimationFrame(this.frameRequestId);
        }
        (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) {
            this.pauseTime = t;
        } else {
            this.startTime = performance.now() - t / this.rate;
        }
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}
;
}}),
"[project]/node_modules/@motionone/dom/dist/state/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMotionState": (()=>createMotionState),
    "mountedStates": (()=>mountedStates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hey$2d$listen$2f$dist$2f$hey$2d$listen$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/hey-listen/dist/hey-listen.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/gestures/in-view.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$hover$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/gestures/hover.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$press$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/gestures/press.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/schedule.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$resolve$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/options.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$has$2d$changed$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/has-changed.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/animate-style.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$Animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/animation/dist/Animation.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/utils/events.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/noop.es.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const gestures = {
    inView: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$in$2d$view$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"],
    hover: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$hover$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hover"],
    press: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$gestures$2f$press$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["press"]
};
/**
 * A list of state types, in priority order. If a value is defined in
 * a righter-most type, it will override any definition in a lefter-most.
 */ const stateTypes = [
    "initial",
    "animate",
    ...Object.keys(gestures),
    "exit"
];
/**
 * A global store of all generated motion states. This can be used to lookup
 * a motion state for a given Element.
 */ const mountedStates = new WeakMap();
function createMotionState(options = {}, parent) {
    /**
     * The element represented by the motion state. This is an empty reference
     * when we create the state to support SSR and allow for later mounting
     * in view libraries.
     *
     * @ts-ignore
     */ let element;
    /**
     * Calculate a depth that we can use to order motion states by tree depth.
     */ let depth = parent ? parent.getDepth() + 1 : 0;
    /**
     * Track which states are currently active.
     */ const activeStates = {
        initial: true,
        animate: true
    };
    /**
     * A map of functions that, when called, will remove event listeners for
     * a given gesture.
     */ const gestureSubscriptions = {};
    /**
     * Initialise a context to share through motion states. This
     * will be populated by variant names (if any).
     */ const context = {};
    for (const name of stateTypes){
        context[name] = typeof options[name] === "string" ? options[name] : parent === null || parent === void 0 ? void 0 : parent.getContext()[name];
    }
    /**
     * If initial is set to false we use the animate prop as the initial
     * animation state.
     */ const initialVariantSource = options.initial === false ? "animate" : "initial";
    /**
     * Destructure an initial target out from the resolved initial variant.
     */ let _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$resolve$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(options[initialVariantSource] || context[initialVariantSource], options.variants) || {}, target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "transition"
    ]);
    /**
     * The base target is a cached map of values that we'll use to animate
     * back to if a value is removed from all active state types. This
     * is usually the initial value as read from the DOM, for instance if
     * it hasn't been defined in initial.
     */ const baseTarget = Object.assign({}, target);
    /**
     * A generator that will be processed by the global animation scheduler.
     * This yields when it switches from reading the DOM to writing to it
     * to prevent layout thrashing.
     */ function* animateUpdates() {
        var _a, _b;
        const prevTarget = target;
        target = {};
        const animationOptions = {};
        for (const name of stateTypes){
            if (!activeStates[name]) continue;
            const variant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$resolve$2d$variant$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(options[name]);
            if (!variant) continue;
            for(const key in variant){
                if (key === "transition") continue;
                target[key] = variant[key];
                animationOptions[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$options$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptions"])((_b = (_a = variant.transition) !== null && _a !== void 0 ? _a : options.transition) !== null && _b !== void 0 ? _b : {}, key);
            }
        }
        const allTargetKeys = new Set([
            ...Object.keys(target),
            ...Object.keys(prevTarget)
        ]);
        const animationFactories = [];
        allTargetKeys.forEach((key)=>{
            var _a;
            if (target[key] === undefined) {
                target[key] = baseTarget[key];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$has$2d$changed$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(prevTarget[key], target[key])) {
                (_a = baseTarget[key]) !== null && _a !== void 0 ? _a : baseTarget[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["style"].get(element, key);
                animationFactories.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$animate$2d$style$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateStyle"])(element, key, target[key], animationOptions[key], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$animation$2f$dist$2f$Animation$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]));
            }
        });
        // Wait for all animation states to read from the DOM
        yield;
        const animations = animationFactories.map((factory)=>factory()).filter(Boolean);
        if (!animations.length) return;
        const animationTarget = target;
        element.dispatchEvent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionEvent"])("motionstart", animationTarget));
        Promise.all(animations.map((animation)=>animation.finished)).then(()=>{
            element.dispatchEvent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionEvent"])("motioncomplete", animationTarget));
        }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$noop$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    const setGesture = (name, isActive)=>()=>{
            activeStates[name] = isActive;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAnimation"])(state);
        };
    const updateGestureSubscriptions = ()=>{
        for(const name in gestures){
            const isGestureActive = gestures[name].isActive(options);
            const remove = gestureSubscriptions[name];
            if (isGestureActive && !remove) {
                gestureSubscriptions[name] = gestures[name].subscribe(element, {
                    enable: setGesture(name, true),
                    disable: setGesture(name, false)
                }, options);
            } else if (!isGestureActive && remove) {
                remove();
                delete gestureSubscriptions[name];
            }
        }
    };
    const state = {
        update: (newOptions)=>{
            if (!element) return;
            options = newOptions;
            updateGestureSubscriptions();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAnimation"])(state);
        },
        setActive: (name, isActive)=>{
            if (!element) return;
            activeStates[name] = isActive;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAnimation"])(state);
        },
        animateUpdates,
        getDepth: ()=>depth,
        getTarget: ()=>target,
        getOptions: ()=>options,
        getContext: ()=>context,
        mount: (newElement)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hey$2d$listen$2f$dist$2f$hey$2d$listen$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(newElement), "Animation state must be mounted with valid Element");
            element = newElement;
            mountedStates.set(element, state);
            updateGestureSubscriptions();
            return ()=>{
                mountedStates.delete(element);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$utils$2f$schedule$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unscheduleAnimation"])(state);
                for(const key in gestureSubscriptions){
                    gestureSubscriptions[key]();
                }
            };
        },
        isMounted: ()=>Boolean(element)
    };
    return state;
}
;
}}),
"[project]/node_modules/@motionone/react/dist/context.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MotionContext": (()=>MotionContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const MotionContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
}}),
"[project]/node_modules/@motionone/dom/dist/animate/utils/style-object.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createStyles": (()=>createStyles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/utils/dist/is-number.es.js [app-client] (ecmascript)");
;
;
function createStyles(keyframes) {
    const initialKeyframes = {};
    const transformKeys = [];
    for(let key in keyframes){
        const value = keyframes[key];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransform"])(key)) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key]) key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAlias"][key];
            transformKeys.push(key);
            key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asTransformCssVar"])(key);
        }
        let initialKeyframe = Array.isArray(value) ? value[0] : value;
        /**
         * If this is a number and we have a default value type, convert the number
         * to this type.
         */ const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDefinitions"].get(key);
        if (definition) {
            initialKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$utils$2f$dist$2f$is$2d$number$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value) ? definition.toDefaultUnit(value) : value;
        }
        initialKeyframes[key] = initialKeyframe;
    }
    if (transformKeys.length) {
        initialKeyframes.transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$transforms$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransformTemplate"])(transformKeys);
    }
    return initialKeyframes;
}
;
}}),
"[project]/node_modules/@motionone/react/dist/utils/events.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addDomEvent": (()=>addDomEvent),
    "useEvents": (()=>useEvents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return ()=>target.removeEventListener(eventName, handler, options);
}
const domEventName = (propName)=>propName.replace("on", "").toLowerCase();
function useEvents(ref, handlers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEvents.useEffect": ()=>{
            const subscriptions = Object.keys(handlers).map({
                "useEvents.useEffect.subscriptions": (name)=>addDomEvent(ref.current, domEventName(name), handlers[name])
            }["useEvents.useEffect.subscriptions"]);
            return ({
                "useEvents.useEffect": ()=>{
                    subscriptions.forEach({
                        "useEvents.useEffect": (subscription)=>subscription()
                    }["useEvents.useEffect"]);
                }
            })["useEvents.useEffect"];
        }
    }["useEvents.useEffect"]);
}
;
}}),
"[project]/node_modules/@motionone/react/dist/component.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMotionComponent": (()=>createMotionComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/state/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$react$2f$dist$2f$context$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/react/dist/context.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$object$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/dom/dist/animate/utils/style-object.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$react$2f$dist$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/react/dist/utils/events.es.js [app-client] (ecmascript)");
;
;
;
;
;
;
function createMotionComponent(Component) {
    function Motion(_a, externalRef) {
        var { initial, animate, press, hover, inView, inViewOptions, variants, style, transition, onMotionStart, onMotionComplete, onHoverStart, onHoverEnd, onPressStart, onPressEnd, onViewEnter, onViewLeave } = _a, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
            "initial",
            "animate",
            "press",
            "hover",
            "inView",
            "inViewOptions",
            "variants",
            "style",
            "transition",
            "onMotionStart",
            "onMotionComplete",
            "onHoverStart",
            "onHoverEnd",
            "onPressStart",
            "onPressEnd",
            "onViewEnter",
            "onViewLeave"
        ]);
        const options = {
            initial,
            animate,
            press,
            hover,
            inView,
            inViewOptions,
            variants,
            transition
        };
        const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$state$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionState"])(options, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$react$2f$dist$2f$context$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"]));
        const initialStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "createMotionComponent.Motion.useMemo[initialStyle]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$dom$2f$dist$2f$animate$2f$utils$2f$style$2d$object$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(state.getTarget())
        }["createMotionComponent.Motion.useMemo[initialStyle]"], []);
        const ref = externalRef || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "createMotionComponent.Motion.useEffect": ()=>state.mount(ref.current)
        }["createMotionComponent.Motion.useEffect"], []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "createMotionComponent.Motion.useEffect": ()=>state.update(options)
        }["createMotionComponent.Motion.useEffect"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$react$2f$dist$2f$utils$2f$events$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvents"])(ref, {
            onMotionStart,
            onMotionComplete,
            onHoverStart,
            onHoverEnd,
            onPressStart,
            onPressEnd,
            onViewEnter,
            onViewLeave
        });
        const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component, Object.assign(Object.assign({}, props), {
            ref,
            style: Object.assign(Object.assign({}, style), initialStyle)
        }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$react$2f$dist$2f$context$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"].Provider, {
            value: state
        }, element);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(Motion);
}
;
}}),
"[project]/node_modules/@motionone/react/dist/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "motion": (()=>motion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$react$2f$dist$2f$component$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@motionone/react/dist/component.es.js [app-client] (ecmascript)");
;
const components = new Map();
const motion = new Proxy({}, {
    get: (_, key)=>{
        !components.has(key) && components.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$motionone$2f$react$2f$dist$2f$component$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionComponent"])(key));
        return components.get(key);
    }
});
;
}}),
}]);

//# sourceMappingURL=_d0eed8._.js.map