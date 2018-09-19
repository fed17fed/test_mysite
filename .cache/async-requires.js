// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("E:\\Gatsby\\Test_mysite\\node_modules\\gatsby-plugin-offline\\app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-index-jsx": () => import("E:\\Gatsby\\Test_mysite\\src\\pages\\index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import("E:\\Gatsby\\Test_mysite\\.cache\\data.json")

