import html from '/html.js'
import { useCallback } from '/web_modules/preact/hooks.js'
import PreactRouter from '/web_modules/preact-router.js'
import Async from '/lib/async.js'
import eventBus from '/lib/event-bus.js'

const Home = () => import(`./Home.js`)

export const Router = () => {
  return html`
    <${PreactRouter}>
      <${Async} path="/" component=${Home} />
    <//>
  `
}

export default Router
