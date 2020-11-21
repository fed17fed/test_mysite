const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/alexey/A_WORK/Progects/MySite/test_mysite/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/alexey/A_WORK/Progects/MySite/test_mysite/src/pages/index.jsx")))
}

