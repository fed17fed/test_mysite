// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("e:\\Gatsby\\mysite\\node_modules\\gatsby-plugin-offline\\app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-index-jsx": () => import("e:\\Gatsby\\mysite\\src\\pages\\index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import("e:\\Gatsby\\mysite\\.cache\\data.json")

