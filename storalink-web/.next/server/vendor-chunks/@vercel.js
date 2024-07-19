"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Analytics,track auto */ // src/react.tsx\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.1.1\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.va) return;\n    window.va = function a(...params) {\n        (window.vaq = window.vaq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n    if (mode === \"auto\") {\n        window.vam = detectEnvironment();\n        return;\n    }\n    window.vam = mode;\n}\nfunction getMode() {\n    const mode = isBrowser() ? window.vam : detectEnvironment();\n    return mode || \"production\";\n}\nfunction isProduction() {\n    return getMode() === \"production\";\n}\nfunction isDevelopment() {\n    return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n    return rest;\n}\nfunction parseProperties(properties, options) {\n    if (!properties) return void 0;\n    let props = properties;\n    const errorProperties = [];\n    for (const [key, value] of Object.entries(properties)){\n        if (typeof value === \"object\" && value !== null) {\n            if (options.strip) {\n                props = removeKey(key, props);\n            } else {\n                errorProperties.push(key);\n            }\n        }\n    }\n    if (errorProperties.length > 0 && !options.strip) {\n        throw Error(`The following properties are not valid: ${errorProperties.join(\", \")}. Only strings, numbers, booleans, and null are allowed.`);\n    }\n    return props;\n}\n// src/generic.ts\nfunction inject(props = {\n    debug: true\n}) {\n    var _a;\n    if (!isBrowser()) return;\n    setMode(props.mode);\n    initQueue();\n    if (props.beforeSend) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const src = isDevelopment() ? \"https://va.vercel-scripts.com/v1/script.debug.js\" : \"/_vercel/insights/script.js\";\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return;\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.setAttribute(\"data-sdkn\", name);\n    script.setAttribute(\"data-sdkv\", version);\n    script.onerror = ()=>{\n        const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);\n    };\n    if (isDevelopment() && props.debug === false) {\n        script.setAttribute(\"data-debug\", \"false\");\n    }\n    document.head.appendChild(script);\n}\nfunction track(name2, properties) {\n    var _a, _b;\n    if (!isBrowser()) {\n        const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n        if (isProduction()) {\n            console.warn(msg);\n        } else {\n            throw new Error(msg);\n        }\n        return;\n    }\n    if (!properties) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"event\", {\n            name: name2\n        });\n        return;\n    }\n    try {\n        const props = parseProperties(properties, {\n            strip: isProduction()\n        });\n        (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n            name: name2,\n            data: props\n        });\n    } catch (err) {\n        if (err instanceof Error && isDevelopment()) {\n            console.error(err);\n        }\n    }\n}\n// src/react.tsx\nfunction Analytics({ beforeSend, debug = true, mode = \"auto\" }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        inject({\n            beforeSend,\n            debug,\n            mode\n        });\n    }, [\n        beforeSend,\n        debug,\n        mode\n    ]);\n    return null;\n}\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7cUVBRUEsZ0JBQWdCO0FBQ2tCO0FBRWxDLGVBQWU7QUFDZixJQUFJQyxPQUFPO0FBQ1gsSUFBSUMsVUFBVTtBQUVkLGVBQWU7QUFDZixJQUFJQyxZQUFZO0lBQ2QsSUFBSUMsT0FBT0MsRUFBRSxFQUNYO0lBQ0ZELE9BQU9DLEVBQUUsR0FBRyxTQUFTQyxFQUFFLEdBQUdDLE1BQU07UUFDN0JILENBQUFBLE9BQU9JLEdBQUcsR0FBR0osT0FBT0ksR0FBRyxJQUFJLEVBQUUsRUFBRUMsSUFBSSxDQUFDRjtJQUN2QztBQUNGO0FBRUEsZUFBZTtBQUNmLFNBQVNHO0lBQ1AsT0FBTyxnQkFBa0I7QUFDM0I7QUFDQSxTQUFTQztJQUNQLElBQUk7UUFDRixNQUFNQyxNQXhCVjtRQXlCSSxJQUFJQSxRQUFRLGlCQUFpQkEsUUFBUSxRQUFRO1lBQzNDLE9BQU87UUFDVDtJQUNGLEVBQUUsT0FBT0MsR0FBRyxDQUNaO0lBQ0EsT0FBTztBQUNUO0FBQ0EsU0FBU0MsUUFBUUMsT0FBTyxNQUFNO0lBQzVCLElBQUlBLFNBQVMsUUFBUTtRQUNuQlgsT0FBT1ksR0FBRyxHQUFHTDtRQUNiO0lBQ0Y7SUFDQVAsT0FBT1ksR0FBRyxHQUFHRDtBQUNmO0FBQ0EsU0FBU0U7SUFDUCxNQUFNRixPQUFPTCxjQUFjTixPQUFPWSxHQUFHLEdBQUdMO0lBQ3hDLE9BQU9JLFFBQVE7QUFDakI7QUFDQSxTQUFTRztJQUNQLE9BQU9ELGNBQWM7QUFDdkI7QUFDQSxTQUFTRTtJQUNQLE9BQU9GLGNBQWM7QUFDdkI7QUFDQSxTQUFTRyxVQUFVQyxHQUFHLEVBQUUsRUFBRSxDQUFDQSxJQUFJLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxNQUFNO0lBQzNDLE9BQU9BO0FBQ1Q7QUFDQSxTQUFTQyxnQkFBZ0JDLFVBQVUsRUFBRUMsT0FBTztJQUMxQyxJQUFJLENBQUNE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dEIsT0FBTyxNQUFNLEVBQ2Q7SUFDQ2YsZ0RBQVNBLENBQUM7UUFDUm9DLE9BQU87WUFBRUc7WUFBWUY7WUFBT3RCO1FBQUs7SUFDbkMsR0FBRztRQUFDd0I7UUFBWUY7UUFBT3RCO0tBQUs7SUFDNUIsT0FBTztBQUNUO0FBSUUsQ0FDRixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yYWxpbmstd2ViLy4vbm9kZV9tb2R1bGVzL0B2ZXJjZWwvYW5hbHl0aWNzL2Rpc3QvcmVhY3QvaW5kZXguanM/ODM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gc3JjL3JlYWN0LnRzeFxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIHBhY2thZ2UuanNvblxudmFyIG5hbWUgPSBcIkB2ZXJjZWwvYW5hbHl0aWNzXCI7XG52YXIgdmVyc2lvbiA9IFwiMS4xLjFcIjtcblxuLy8gc3JjL3F1ZXVlLnRzXG52YXIgaW5pdFF1ZXVlID0gKCkgPT4ge1xuICBpZiAod2luZG93LnZhKVxuICAgIHJldHVybjtcbiAgd2luZG93LnZhID0gZnVuY3Rpb24gYSguLi5wYXJhbXMpIHtcbiAgICAod2luZG93LnZhcSA9IHdpbmRvdy52YXEgfHwgW10pLnB1c2gocGFyYW1zKTtcbiAgfTtcbn07XG5cbi8vIHNyYy91dGlscy50c1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGRldGVjdEVudmlyb25tZW50KCkge1xuICB0cnkge1xuICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIGlmIChlbnYgPT09IFwiZGV2ZWxvcG1lbnRcIiB8fCBlbnYgPT09IFwidGVzdFwiKSB7XG4gICAgICByZXR1cm4gXCJkZXZlbG9wbWVudFwiO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBcInByb2R1Y3Rpb25cIjtcbn1cbmZ1bmN0aW9uIHNldE1vZGUobW9kZSA9IFwiYXV0b1wiKSB7XG4gIGlmIChtb2RlID09PSBcImF1dG9cIikge1xuICAgIHdpbmRvdy52YW0gPSBkZXRlY3RFbnZpcm9ubWVudCgpO1xuICAgIHJldHVybjtcbiAgfVxuICB3aW5kb3cudmFtID0gbW9kZTtcbn1cbmZ1bmN0aW9uIGdldE1vZGUoKSB7XG4gIGNvbnN0IG1vZGUgPSBpc0Jyb3dzZXIoKSA/IHdpbmRvdy52YW0gOiBkZXRlY3RFbnZpcm9ubWVudCgpO1xuICByZXR1cm4gbW9kZSB8fCBcInByb2R1Y3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzUHJvZHVjdGlvbigpIHtcbiAgcmV0dXJuIGdldE1vZGUoKSA9PT0gXCJwcm9kdWN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc0RldmVsb3BtZW50KCkge1xuICByZXR1cm4gZ2V0TW9kZSgpID09PSBcImRldmVsb3BtZW50XCI7XG59XG5mdW5jdGlvbiByZW1vdmVLZXkoa2V5LCB7IFtrZXldOiBfLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIHJlc3Q7XG59XG5mdW5jdGlvbiBwYXJzZVByb3BlcnRpZXMocHJvcGVydGllcywgb3B0aW9ucykge1xuICBpZiAoIXByb3BlcnRpZXMpXG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgbGV0IHByb3BzID0gcHJvcGVydGllcztcbiAgY29uc3QgZXJyb3JQcm9wZXJ0aWVzID0gW107XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BlcnRpZXMpKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuc3RyaXApIHtcbiAgICAgICAgcHJvcHMgPSByZW1vdmVLZXkoa2V5LCBwcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvclByb3BlcnRpZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZXJyb3JQcm9wZXJ0aWVzLmxlbmd0aCA+IDAgJiYgIW9wdGlvbnMuc3RyaXApIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB2YWxpZDogJHtlcnJvclByb3BlcnRpZXMuam9pbihcbiAgICAgICAgXCIsIFwiXG4gICAgICApfS4gT25seSBzdHJpbmdzLCBudW1iZXJzLCBib29sZWFucywgYW5kIG51bGwgYXJlIGFsbG93ZWQuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHByb3BzO1xufVxuXG4vLyBzcmMvZ2VuZXJpYy50c1xuZnVuY3Rpb24gaW5qZWN0KHByb3BzID0ge1xuICBkZWJ1ZzogdHJ1ZVxufSkge1xuICB2YXIgX2E7XG4gIGlmICghaXNCcm93c2VyKCkpXG4gICAgcmV0dXJuO1xuICBzZXRNb2RlKHByb3BzLm1vZGUpO1xuICBpbml0UXVldWUoKTtcbiAgaWYgKHByb3BzLmJlZm9yZVNlbmQpIHtcbiAgICAoX2EgPSB3aW5kb3cudmEpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHdpbmRvdywgXCJiZWZvcmVTZW5kXCIsIHByb3BzLmJlZm9yZVNlbmQpO1xuICB9XG4gIGNvbnN0IHNyYyA9IGlzRGV2ZWxvcG1lbnQoKSA/IFwiaHR0cHM6Ly92YS52ZXJjZWwtc2NyaXB0cy5jb20vdjEvc2NyaXB0LmRlYnVnLmpzXCIgOiBcIi9fdmVyY2VsL2luc2lnaHRzL3NjcmlwdC5qc1wiO1xuICBpZiAoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjKj1cIiR7c3JjfVwiXWApKVxuICAgIHJldHVybjtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgc2NyaXB0LnNyYyA9IHNyYztcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtc2RrblwiLCBuYW1lKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtc2RrdlwiLCB2ZXJzaW9uKTtcbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gaXNEZXZlbG9wbWVudCgpID8gXCJQbGVhc2UgY2hlY2sgaWYgYW55IGFkIGJsb2NrZXJzIGFyZSBlbmFibGVkIGFuZCB0cnkgYWdhaW4uXCIgOiBcIkJlIHN1cmUgdG8gZW5hYmxlIFdlYiBBbmFseXRpY3MgZm9yIHlvdXIgcHJvamVjdCBhbmQgZGVwbG95IGFnYWluLiBTZWUgaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvYW5hbHl0aWNzL3F1aWNrc3RhcnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCI7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgW1ZlcmNlbCBXZWIgQW5hbHl0aWNzXSBGYWlsZWQgdG8gbG9hZCBzY3JpcHQgZnJvbSAke3NyY30uICR7ZXJyb3JNZXNzYWdlfWBcbiAgICApO1xuICB9O1xuICBpZiAoaXNEZXZlbG9wbWVudCgpICYmIHByb3BzLmRlYnVnID09PSBmYWxzZSkge1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRlYnVnXCIsIFwiZmFsc2VcIik7XG4gIH1cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuZnVuY3Rpb24gdHJhY2sobmFtZTIsIHByb3BlcnRpZXMpIHtcbiAgdmFyIF9hLCBfYjtcbiAgaWYgKCFpc0Jyb3dzZXIoKSkge1xuICAgIGNvbnN0IG1zZyA9IFwiW1ZlcmNlbCBXZWIgQW5hbHl0aWNzXSBQbGVhc2UgaW1wb3J0IGB0cmFja2AgZnJvbSBgQHZlcmNlbC9hbmFseXRpY3Mvc2VydmVyYCB3aGVuIHVzaW5nIHRoaXMgZnVuY3Rpb24gaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnRcIjtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghcHJvcGVydGllcykge1xuICAgIChfYSA9IHdpbmRvdy52YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBcImV2ZW50XCIsIHsgbmFtZTogbmFtZTIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BlcnRpZXMocHJvcGVydGllcywge1xuICAgICAgc3RyaXA6IGlzUHJvZHVjdGlvbigpXG4gICAgfSk7XG4gICAgKF9iID0gd2luZG93LnZhKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbCh3aW5kb3csIFwiZXZlbnRcIiwge1xuICAgICAgbmFtZTogbmFtZTIsXG4gICAgICBkYXRhOiBwcm9wc1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgaXNEZXZlbG9wbWVudCgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbi8vIHNyYy9yZWFjdC50c3hcbmZ1bmN0aW9uIEFuYWx5dGljcyh7XG4gIGJlZm9yZVNlbmQsXG4gIGRlYnVnID0gdHJ1ZSxcbiAgbW9kZSA9IFwiYXV0b1wiXG59KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5qZWN0KHsgYmVmb3JlU2VuZCwgZGVidWcsIG1vZGUgfSk7XG4gIH0sIFtiZWZvcmVTZW5kLCBkZWJ1ZywgbW9kZV0pO1xuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCB7XG4gIEFuYWx5dGljcyxcbiAgdHJhY2tcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwibmFtZSIsInZlcnNpb24iLCJpbml0UXVldWUiLCJ3aW5kb3ciLCJ2YSIsImEiLCJwYXJhbXMiLCJ2YXEiLCJwdXNoIiwiaXNCcm93c2VyIiwiZGV0ZWN0RW52aXJvbm1lbnQiLCJlbnYiLCJlIiwic2V0TW9kZSIsIm1vZGUiLCJ2YW0iLCJnZXRNb2RlIiwiaXNQcm9kdWN0aW9uIiwiaXNEZXZlbG9wbWVudCIsInJlbW92ZUtleSIsImtleSIsIl8iLCJyZXN0IiwicGFyc2VQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIm9wdGlvbnMiLCJwcm9wcyIsImVycm9yUHJvcGVydGllcyIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInN0cmlwIiwibGVuZ3RoIiwiRXJyb3IiLCJqb2luIiwiaW5qZWN0IiwiZGVidWciLCJfYSIsImJlZm9yZVNlbmQiLCJjYWxsIiwic3JjIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZlciIsInNldEF0dHJpYnV0ZSIsIm9uZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJ0cmFjayIsIm5hbWUyIiwiX2IiLCJtc2ciLCJ3YXJuIiwiZGF0YSIsImVyciIsImVycm9yIiwiQW5hbHl0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ e0),
/* harmony export */   track: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/yunzezhao/Code/storalink-web/storalink-web/node_modules/@vercel/analytics/dist/react/index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/yunzezhao/Code/storalink-web/storalink-web/node_modules/@vercel/analytics/dist/react/index.js#Analytics`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/yunzezhao/Code/storalink-web/storalink-web/node_modules/@vercel/analytics/dist/react/index.js#track`);


/***/ })

};
;