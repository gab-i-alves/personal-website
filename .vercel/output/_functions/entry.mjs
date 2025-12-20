import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CVDm-na3.mjs';
import { manifest } from './manifest_BJHsXrin.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/achievements.astro.mjs');
const _page3 = () => import('./pages/api/proxy.astro.mjs');
const _page4 = () => import('./pages/atom.xml.astro.mjs');
const _page5 = () => import('./pages/bookmarks.astro.mjs');
const _page6 = () => import('./pages/daily-logs.astro.mjs');
const _page7 = () => import('./pages/daily-logs/_---slug_.astro.mjs');
const _page8 = () => import('./pages/now.astro.mjs');
const _page9 = () => import('./pages/open-graph/_---route_.astro.mjs');
const _page10 = () => import('./pages/posts.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/tasks.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const _page14 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/achievements.astro", _page2],
    ["src/pages/api/proxy.ts", _page3],
    ["src/pages/atom.xml.ts", _page4],
    ["src/pages/bookmarks.astro", _page5],
    ["src/pages/daily-logs.astro", _page6],
    ["src/pages/daily-logs/[...slug].astro", _page7],
    ["src/pages/now.astro", _page8],
    ["src/pages/open-graph/[...route].ts", _page9],
    ["src/pages/posts.astro", _page10],
    ["src/pages/rss.xml.ts", _page11],
    ["src/pages/tasks.astro", _page12],
    ["src/pages/index.astro", _page13],
    ["src/pages/[...slug].astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3e127877-ca6a-4ce3-af1a-bcdd657ca26e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
