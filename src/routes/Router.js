import html from '/html.js'
import PreactRouter from '/web_modules/preact-router.js'
import Lazy from '/components/Lazy.js'

const Home = () => import(`/routes/Home.js`)

const Router = () => {
  return html`
    <${PreactRouter}>
      <${Lazy} path="/" component=${Home} />
    <//>
  `
}

export default Router
