import {useState, useEffect} from '/web_modules/preact/hooks.js'
import html from '/html.js'
import Delay from '/components/Delay.js'
import eventBus from '/lib/event-bus.js'

const Loading = () =>
  html`
    <${Delay}>Loading ...<//>
  `

const cache = {}

const Lazy = ({component: asyncComponent, path}) => {
  const [component, setComponent] = useState(cache[path] || Loading)

  useEffect(() => {
    if (cache[path]) return

    asyncComponent().then(module => {
      cache[path] = html`
        <${module.default} />
      `
      setComponent(cache[path])
      eventBus.emit('async:loaded')
    })
  }, [])

  return html`
    ${component}
  `
}

export default Lazy
