import {render} from '/web_modules/preact.js'
import html from '/html.js'
import Router from '/routes/Router.js'
import eventBus from '/lib/event-bus.js'
import asyncImport from '/lib/async-import.js'
import App from '/components/App.js'
import '/.app/process.js'

window.asyncImport = asyncImport

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  // This is just to preload the async routes before hydrating into the dom to
  // prevent a "flash"
  const hydrate = () => {
    eventBus.off('async:loaded', hydrate)
    render(
      html`
        <${App} />
      `,
      rootElement,
    )
  }
  eventBus.on('async:loaded', hydrate)
  render(
    html`
      <${Router} />
    `,
    document.createElement('div'),
  )
} else {
  render(
    html`
      <${App} />
    `,
    rootElement,
  )
}
