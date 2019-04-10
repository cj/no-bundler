import { render } from "/web_modules/preact.js"
import { polyfill } from '/web_modules/@brad-jones/dynamic-polyfill-sync.js'
import html from '/html.js'
import Router from '/routes/Router.js'
import eventBus from '/lib/event-bus.js'

import App from '/components/App.js'

polyfill(['Promise'])

const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
  // This is just to preload the async routes before hydrating into the dom to
  // prevent a "flash"
  const hydrate = () => {
    eventBus.off('async:loaded', hydrate)
    render(html`<${App} />`, rootElement, rootElement.firstElementChild)
  }
  eventBus.on('async:loaded', hydrate)
  render(html`<${Router} />`, document.createElement('div'))
} else {
  render(html`<${App} />`, rootElement)
}
