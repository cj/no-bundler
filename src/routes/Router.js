import html from '/html.js'
import { useCallback } from '/web_modules/preact/hooks.js'
import PreactRouter from '/web_modules/preact-router.js'
import Async from '/components/Async.js'
import eventBus from '/lib/event-bus.js'
import asyncImport from '/lib/async-import.js'

const Home = () => asyncImport(`/routes/Home.js`)

export const Router = () => {
  return html`
    <${PreactRouter}>
      <${Async} path="/" component=${Home} />
    <//>
  `
}

export default Router
