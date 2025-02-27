(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_9a359c._.js", {

"[project]/app/comp/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/firebase'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
(()=>{
    const e = new Error("Cannot find module '../components/AuthModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$dfc2d82f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__onAuthStateChanged$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/auth/dist/esm2017/index-dfc2d82f.js [app-client] (ecmascript) <export y as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$dfc2d82f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__signOut$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/auth/dist/esm2017/index-dfc2d82f.js [app-client] (ecmascript) <export C as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const Navbar = ({ showProfile, setShowProfile })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProfileOpen, setIsProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$dfc2d82f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(auth, {
                "Navbar.useEffect.unsubscribe": (currentUser)=>{
                    setUser(currentUser);
                }
            }["Navbar.useEffect.unsubscribe"]);
            return ({
                "Navbar.useEffect": ()=>unsubscribe()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleLogout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$dfc2d82f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__signOut$3e$__["signOut"])(auth);
        setIsProfileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex justify-between items-center bg-gray-100 p-4 shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lg:hidden border-0 bg-transparent px-2 text-black/50 dark:text-white",
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/app/comp/Navbar.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/comp/Navbar.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/comp/Navbar.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center text-xl font-bold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://rajasthan.gov.in/assets/images/raj-logo.png",
                            className: "h-20",
                            alt: "TE Logo"
                        }, void 0, false, {
                            fileName: "[project]/app/comp/Navbar.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/comp/Navbar.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: `lg:flex lg:space-x-6 absolute lg:static bg-gray-100 w-full lg:w-auto top-14 left-0 lg:flex-row flex-col shadow-md lg:shadow-none ${isMobileMenuOpen ? "flex" : "hidden"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/dashboard",
                                    className: "block px-4 py-2 text-black/60 hover:text-black",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/comp/Navbar.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/comp/Navbar.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/jobs",
                                    className: "block px-4 py-2 text-black/60 hover:text-black",
                                    children: "Jobs"
                                }, void 0, false, {
                                    fileName: "[project]/app/comp/Navbar.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/comp/Navbar.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/intership",
                                    className: "block px-4 py-2 text-black/60 hover:text-black",
                                    children: "Internships"
                                }, void 0, false, {
                                    fileName: "[project]/app/comp/Navbar.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/comp/Navbar.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/mentor",
                                    className: "block px-4 py-2  text-black/60 hover:text-black",
                                    children: "Mentorship & Counseling"
                                }, void 0, false, {
                                    fileName: "[project]/app/comp/Navbar.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/comp/Navbar.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/comp/Navbar.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center space-x-4",
                        children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsProfileOpen(!isProfileOpen),
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user.photoURL || "https://tecdn.b-cdn.net/img/new/avatars/2.jpg",
                                        className: "rounded-full w-8 h-8",
                                        alt: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/comp/Navbar.jsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/comp/Navbar.jsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                isProfileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "absolute right-0 bg-white shadow-md rounded-md w-40 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onClick: ()=>setShowProfile(true),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "",
                                                className: "block px-4 py-2 hover:bg-gray-200",
                                                children: "Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/comp/Navbar.jsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/comp/Navbar.jsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/settings",
                                                className: "block px-4 py-2 hover:bg-gray-200",
                                                children: "Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/app/comp/Navbar.jsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/comp/Navbar.jsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "block w-full px-4 py-2 hover:bg-gray-200 text-left",
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/app/comp/Navbar.jsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/comp/Navbar.jsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/comp/Navbar.jsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/comp/Navbar.jsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAuthModalOpen(true),
                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                            children: "Sign In / Register"
                        }, void 0, false, {
                            fileName: "[project]/app/comp/Navbar.jsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/comp/Navbar.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/comp/Navbar.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthModal, {
                isOpen: isAuthModalOpen,
                onClose: ()=>setIsAuthModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/comp/Navbar.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(Navbar, "RxdU3yZVoGa0pg59dI71Jhf92J0=");
_c = Navbar;
Navbar.propTypes = {
    setShowProfile: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    showProfile: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool.isRequired
};
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_refresh__.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/landingpagec/page.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/landingpagec/page.js'

Expression expected`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/app/landingpagec/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/react-tabs/esm/helpers/elementTypes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isTab": (()=>isTab),
    "isTabList": (()=>isTabList),
    "isTabPanel": (()=>isTabPanel)
});
function makeTypeChecker(tabsRole) {
    return (element)=>!!element.type && element.type.tabsRole === tabsRole;
}
const isTab = makeTypeChecker("Tab");
const isTabList = makeTypeChecker("TabList");
const isTabPanel = makeTypeChecker("TabPanel");
}}),
"[project]/node_modules/react-tabs/esm/helpers/childrenDeepMap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deepForEach": (()=>deepForEach),
    "deepMap": (()=>deepMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/elementTypes.js [app-client] (ecmascript)");
;
;
function isTabChild(child) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTab"])(child) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabList"])(child) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabPanel"])(child);
}
function deepMap(children, callback) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>{
        if (child === null) return null;
        if (isTabChild(child)) {
            return callback(child);
        }
        if (child.props && child.props.children && typeof child.props.children === "object") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, Object.assign({}, child.props, {
                children: deepMap(child.props.children, callback)
            }));
        }
        return child;
    });
}
function deepForEach(children, callback) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if (child === null) return;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTab"])(child) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabPanel"])(child)) {
            callback(child);
        } else if (child.props && child.props.children && typeof child.props.children === "object") {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabList"])(child)) callback(child);
            deepForEach(child.props.children, callback);
        }
    });
}
}}),
"[project]/node_modules/react-tabs/esm/helpers/propTypes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "childrenPropType": (()=>childrenPropType),
    "onSelectPropType": (()=>onSelectPropType),
    "selectedIndexPropType": (()=>selectedIndexPropType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/childrenDeepMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/elementTypes.js [app-client] (ecmascript)");
;
;
function childrenPropType(props, propName, componentName) {
    let error;
    let tabsCount = 0;
    let panelsCount = 0;
    let tabListFound = false;
    const listTabs = [];
    const children = props[propName];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepForEach"])(children, (child)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabList"])(child)) {
            if (child.props && child.props.children && typeof child.props.children === "object") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepForEach"])(child.props.children, (listChild)=>listTabs.push(listChild));
            }
            if (tabListFound) {
                error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
            }
            tabListFound = true;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTab"])(child)) {
            if (!tabListFound || listTabs.indexOf(child) === -1) {
                error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components " + "have to be inside the 'TabList' component.");
            }
            tabsCount++;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabPanel"])(child)) {
            panelsCount++;
        }
    });
    if (!error && tabsCount !== panelsCount) {
        error = new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${componentName}\`. ` + `Received ${tabsCount} 'Tab' and ${panelsCount} 'TabPanel'.`);
    }
    return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
    const prop = props[propName];
    const name = propFullName || propName;
    let error = null;
    if (prop && typeof prop !== "function") {
        error = new Error(`Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied ` + `to \`${componentName}\`, expected \`function\`.`);
    } else if (props.selectedIndex != null && prop == null) {
        error = new Error(`The ${location} \`${name}\` is marked as required in \`${componentName}\`, but ` + `its value is \`undefined\` or \`null\`.\n` + `\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will ` + `make the tabs not do anything, as \`selectedIndex\` indicates that you want to ` + `handle the selected tab yourself.\n` + `If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`);
    }
    return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
    const prop = props[propName];
    const name = propFullName || propName;
    let error = null;
    if (prop != null && typeof prop !== "number") {
        error = new Error(`Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied to ` + `\`${componentName}\`, expected \`number\`.`);
    } else if (props.defaultIndex != null && prop != null) {
        return new Error(`The ${location} \`${name}\` cannot be used together with \`defaultIndex\` ` + `in \`${componentName}\`.\n` + `Either remove \`${name}\` to let \`${componentName}\` handle the selected ` + `tab internally or remove \`defaultIndex\` to handle it yourself.`);
    }
    return error;
}
}}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clsx": (()=>clsx),
    "default": (()=>__TURBOPACK__default__export__)
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}}),
"[project]/node_modules/react-tabs/esm/helpers/count.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTabsCount": (()=>getTabsCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/childrenDeepMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/elementTypes.js [app-client] (ecmascript)");
;
;
function getTabsCount(children) {
    let tabCount = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepForEach"])(children, (child)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTab"])(child)) tabCount++;
    });
    return tabCount;
}
}}),
"[project]/node_modules/react-tabs/esm/components/UncontrolledTabs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$propTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/propTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$count$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/count.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/childrenDeepMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/elementTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
const _excluded = [
    "children",
    "className",
    "disabledTabClassName",
    "domRef",
    "focus",
    "forceRenderTabPanel",
    "onSelect",
    "selectedIndex",
    "selectedTabClassName",
    "selectedTabPanelClassName",
    "environment",
    "disableUpDownKeys",
    "disableLeftRightKeys"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
function isNode(node) {
    return node && "getAttribute" in node;
}
function isTabNode(node) {
    return isNode(node) && node.getAttribute("data-rttab");
}
function isTabDisabled(node) {
    return isNode(node) && node.getAttribute("aria-disabled") === "true";
}
let canUseActiveElement;
function determineCanUseActiveElement(environment) {
    const env = environment || (typeof window !== "undefined" ? window : undefined);
    try {
        canUseActiveElement = !!(typeof env !== "undefined" && env.document && env.document.activeElement);
    } catch (e) {
        canUseActiveElement = false;
    }
}
const defaultProps = {
    className: "react-tabs",
    focus: false
};
const propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$propTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["childrenPropType"]
};
const UncontrolledTabs = (props)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPropTypes"])(propTypes, props, "prop", "UncontrolledTabs");
    let tabNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    let tabIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    function setSelected(index, event) {
        if (index < 0 || index >= getTabsCount()) return;
        const { onSelect, selectedIndex } = props;
        onSelect(index, selectedIndex, event);
    }
    function getNextTab(index) {
        const count = getTabsCount();
        for(let i = index + 1; i < count; i++){
            if (!isTabDisabled(getTab(i))) {
                return i;
            }
        }
        for(let i = 0; i < index; i++){
            if (!isTabDisabled(getTab(i))) {
                return i;
            }
        }
        return index;
    }
    function getPrevTab(index) {
        let i = index;
        while(i--){
            if (!isTabDisabled(getTab(i))) {
                return i;
            }
        }
        i = getTabsCount();
        while(i-- > index){
            if (!isTabDisabled(getTab(i))) {
                return i;
            }
        }
        return index;
    }
    function getFirstTab() {
        const count = getTabsCount();
        for(let i = 0; i < count; i++){
            if (!isTabDisabled(getTab(i))) {
                return i;
            }
        }
        return null;
    }
    function getLastTab() {
        let i = getTabsCount();
        while(i--){
            if (!isTabDisabled(getTab(i))) {
                return i;
            }
        }
        return null;
    }
    function getTabsCount() {
        const { children } = props;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$count$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabsCount"])(children);
    }
    function getTab(index) {
        return tabNodes.current[`tabs-${index}`];
    }
    function getChildren() {
        let index = 0;
        const { children, disabledTabClassName, focus, forceRenderTabPanel, selectedIndex, selectedTabClassName, selectedTabPanelClassName, environment } = props;
        tabIds.current = tabIds.current || [];
        let diff = tabIds.current.length - getTabsCount();
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
        while(diff++ < 0){
            tabIds.current.push(`${id}${tabIds.current.length}`);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMap"])(children, (child)=>{
            let result = child;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabList"])(child)) {
                let listIndex = 0;
                let wasTabFocused = false;
                if (canUseActiveElement == null) {
                    determineCanUseActiveElement(environment);
                }
                const env = environment || (typeof window !== "undefined" ? window : undefined);
                if (canUseActiveElement && env) {
                    wasTabFocused = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(child.props.children).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTab"]).some((tab, i)=>env.document.activeElement === getTab(i));
                }
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$childrenDeepMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMap"])(child.props.children, (tab)=>{
                        const key = `tabs-${listIndex}`;
                        const selected = selectedIndex === listIndex;
                        const props = {
                            tabRef: (node)=>{
                                tabNodes.current[key] = node;
                            },
                            id: tabIds.current[listIndex],
                            selected,
                            focus: selected && (focus || wasTabFocused)
                        };
                        if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
                        if (disabledTabClassName) props.disabledClassName = disabledTabClassName;
                        listIndex++;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(tab, props);
                    })
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$elementTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabPanel"])(child)) {
                const props = {
                    id: tabIds.current[index],
                    selected: selectedIndex === index
                };
                if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
                if (selectedTabPanelClassName) props.selectedClassName = selectedTabPanelClassName;
                index++;
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, props);
            }
            return result;
        });
    }
    function handleKeyDown(e) {
        const { direction, disableUpDownKeys, disableLeftRightKeys } = props;
        if (isTabFromContainer(e.target)) {
            let { selectedIndex: index } = props;
            let preventDefault = false;
            let useSelectedIndex = false;
            if (e.code === "Space" || e.keyCode === 32 || e.code === "Enter" || e.keyCode === 13) {
                preventDefault = true;
                useSelectedIndex = false;
                handleClick(e);
            }
            if (!disableLeftRightKeys && (e.keyCode === 37 || e.code === "ArrowLeft") || !disableUpDownKeys && (e.keyCode === 38 || e.code === "ArrowUp")) {
                if (direction === "rtl") {
                    index = getNextTab(index);
                } else {
                    index = getPrevTab(index);
                }
                preventDefault = true;
                useSelectedIndex = true;
            } else if (!disableLeftRightKeys && (e.keyCode === 39 || e.code === "ArrowRight") || !disableUpDownKeys && (e.keyCode === 40 || e.code === "ArrowDown")) {
                if (direction === "rtl") {
                    index = getPrevTab(index);
                } else {
                    index = getNextTab(index);
                }
                preventDefault = true;
                useSelectedIndex = true;
            } else if (e.keyCode === 35 || e.code === "End") {
                index = getLastTab();
                preventDefault = true;
                useSelectedIndex = true;
            } else if (e.keyCode === 36 || e.code === "Home") {
                index = getFirstTab();
                preventDefault = true;
                useSelectedIndex = true;
            }
            if (preventDefault) {
                e.preventDefault();
            }
            if (useSelectedIndex) {
                setSelected(index, e);
            }
        }
    }
    function handleClick(e) {
        let node = e.target;
        do {
            if (isTabFromContainer(node)) {
                if (isTabDisabled(node)) {
                    return;
                }
                const index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);
                setSelected(index, e);
                return;
            }
        }while ((node = node.parentNode) != null)
    }
    function isTabFromContainer(node) {
        if (!isTabNode(node)) {
            return false;
        }
        let nodeAncestor = node.parentElement;
        do {
            if (nodeAncestor === ref.current) return true;
            if (nodeAncestor.getAttribute("data-rttabs")) break;
            nodeAncestor = nodeAncestor.parentElement;
        }while (nodeAncestor)
        return false;
    }
    const _defaultProps$props = Object.assign({}, defaultProps, props), { className, domRef } = _defaultProps$props, attributes = _objectWithoutPropertiesLoose(_defaultProps$props, _excluded);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, attributes, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className),
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        ref: (node)=>{
            ref.current = node;
            if (domRef) domRef(node);
        },
        "data-rttabs": true
    }), getChildren());
};
const __TURBOPACK__default__export__ = UncontrolledTabs;
}}),
"[project]/node_modules/react-tabs/esm/components/Tabs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$propTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/propTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$UncontrolledTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/UncontrolledTabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$count$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/helpers/count.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
const _excluded = [
    "children",
    "defaultFocus",
    "defaultIndex",
    "focusTabOnClick",
    "onSelect"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
const MODE_CONTROLLED = 0;
const MODE_UNCONTROLLED = 1;
const propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$propTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["childrenPropType"],
    onSelect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$propTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSelectPropType"],
    selectedIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$propTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedIndexPropType"]
};
const defaultProps = {
    defaultFocus: false,
    focusTabOnClick: true,
    forceRenderTabPanel: false,
    selectedIndex: null,
    defaultIndex: null,
    environment: null,
    disableUpDownKeys: false,
    disableLeftRightKeys: false
};
const getModeFromProps = (props)=>{
    return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
};
const checkForIllegalModeChange = (props, mode)=>{
    if (("TURBOPACK compile-time value", "development") !== "production" && mode != undefined && mode !== getModeFromProps(props)) {
        throw new Error(`Switching between controlled mode (by using \`selectedIndex\`) and uncontrolled mode is not supported in \`Tabs\`.
For more information about controlled and uncontrolled mode of react-tabs see https://github.com/reactjs/react-tabs#controlled-vs-uncontrolled-mode.`);
    }
};
const Tabs = (props)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPropTypes"])(propTypes, props, "prop", "Tabs");
    const _defaultProps$props = Object.assign({}, defaultProps, props), { children, defaultFocus, defaultIndex, focusTabOnClick, onSelect } = _defaultProps$props, attributes = _objectWithoutPropertiesLoose(_defaultProps$props, _excluded);
    const [focus, setFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultFocus);
    const [mode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getModeFromProps(attributes));
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mode === MODE_UNCONTROLLED ? defaultIndex || 0 : null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            setFocus(false);
        }
    }["Tabs.useEffect"], []);
    if (mode === MODE_UNCONTROLLED) {
        const tabsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$helpers$2f$count$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabsCount"])(children);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "Tabs.useEffect": ()=>{
                if (selectedIndex != null) {
                    const maxTabIndex = Math.max(0, tabsCount - 1);
                    setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
                }
            }
        }["Tabs.useEffect"], [
            tabsCount
        ]);
    }
    checkForIllegalModeChange(attributes, mode);
    const handleSelected = (index, last, event)=>{
        if (typeof onSelect === "function") {
            if (onSelect(index, last, event) === false) return;
        }
        if (focusTabOnClick) {
            setFocus(true);
        }
        if (mode === MODE_UNCONTROLLED) {
            setSelectedIndex(index);
        }
    };
    let subProps = Object.assign({}, props, attributes);
    subProps.focus = focus;
    subProps.onSelect = handleSelected;
    if (selectedIndex != null) {
        subProps.selectedIndex = selectedIndex;
    }
    delete subProps.defaultFocus;
    delete subProps.defaultIndex;
    delete subProps.focusTabOnClick;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$UncontrolledTabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], subProps, children);
};
Tabs.tabsRole = "Tabs";
const __TURBOPACK__default__export__ = Tabs;
}}),
"[project]/node_modules/react-tabs/esm/components/TabList.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
const _excluded = [
    "children",
    "className"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
const defaultProps = {
    className: "react-tabs__tab-list"
};
const TabList = (props)=>{
    const _defaultProps$props = Object.assign({}, defaultProps, props), { children, className } = _defaultProps$props, attributes = _objectWithoutPropertiesLoose(_defaultProps$props, _excluded);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", Object.assign({}, attributes, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className),
        role: "tablist"
    }), children);
};
TabList.tabsRole = "TabList";
const __TURBOPACK__default__export__ = TabList;
}}),
"[project]/node_modules/react-tabs/esm/components/Tab.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
const _excluded = [
    "children",
    "className",
    "disabled",
    "disabledClassName",
    "focus",
    "id",
    "selected",
    "selectedClassName",
    "tabIndex",
    "tabRef"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
const DEFAULT_CLASS = "react-tabs__tab";
const defaultProps = {
    className: DEFAULT_CLASS,
    disabledClassName: `${DEFAULT_CLASS}--disabled`,
    focus: false,
    id: null,
    selected: false,
    selectedClassName: `${DEFAULT_CLASS}--selected`
};
const Tab = (props)=>{
    let nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const _defaultProps$props = Object.assign({}, defaultProps, props), { children, className, disabled, disabledClassName, focus, id, selected, selectedClassName, tabIndex, tabRef } = _defaultProps$props, attributes = _objectWithoutPropertiesLoose(_defaultProps$props, _excluded);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tab.useEffect": ()=>{
            if (selected && focus) {
                nodeRef.current.focus();
            }
        }
    }["Tab.useEffect"], [
        selected,
        focus
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", Object.assign({}, attributes, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, {
            [selectedClassName]: selected,
            [disabledClassName]: disabled
        }),
        ref: (node)=>{
            nodeRef.current = node;
            if (tabRef) tabRef(node);
        },
        role: "tab",
        id: `tab${id}`,
        "aria-selected": selected ? "true" : "false",
        "aria-disabled": disabled ? "true" : "false",
        "aria-controls": `panel${id}`,
        tabIndex: tabIndex || (selected ? "0" : null),
        "data-rttab": true
    }), children);
};
Tab.tabsRole = "Tab";
const __TURBOPACK__default__export__ = Tab;
}}),
"[project]/node_modules/react-tabs/esm/components/TabPanel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
const _excluded = [
    "children",
    "className",
    "forceRender",
    "id",
    "selected",
    "selectedClassName"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
const DEFAULT_CLASS = "react-tabs__tab-panel";
const defaultProps = {
    className: DEFAULT_CLASS,
    forceRender: false,
    selectedClassName: `${DEFAULT_CLASS}--selected`
};
const TabPanel = (props)=>{
    const _defaultProps$props = Object.assign({}, defaultProps, props), { children, className, forceRender, id, selected, selectedClassName } = _defaultProps$props, attributes = _objectWithoutPropertiesLoose(_defaultProps$props, _excluded);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, attributes, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, {
            [selectedClassName]: selected
        }),
        role: "tabpanel",
        id: `panel${id}`,
        "aria-labelledby": `tab${id}`
    }), forceRender || selected ? children : null);
};
TabPanel.tabsRole = "TabPanel";
const __TURBOPACK__default__export__ = TabPanel;
}}),
"[project]/node_modules/react-tabs/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/node_modules/react-tabs/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/Tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/TabList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/Tab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/TabPanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/react-tabs/esm/components/Tabs.js [app-client] (ecmascript) <export default as Tabs>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tabs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/Tabs.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/react-tabs/esm/components/TabList.js [app-client] (ecmascript) <export default as TabList>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TabList": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/TabList.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/react-tabs/esm/components/Tab.js [app-client] (ecmascript) <export default as Tab>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/Tab.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/react-tabs/esm/components/TabPanel.js [app-client] (ecmascript) <export default as TabPanel>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TabPanel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tabs$2f$esm$2f$components$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-tabs/esm/components/TabPanel.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_9a359c._.js.map