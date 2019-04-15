import html from '/html.js'
import PreactRouter from '/web_modules/preact-router.js'
import Lazy from '/components/Lazy.js'
import asyncImport from '/lib/async-import.js'

const Home = () => asyncImport('/routes/Home.js')

const Router = () => {
  return html`
    <${PreactRouter}>
      <${Lazy} path="/" component=${Home} />
    <//>
  `
}

export default Router
