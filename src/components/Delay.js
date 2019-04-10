import { useState, useEffect } from '/web_modules/preact/hooks.js'
import html from '/html.js'

const Delay = ({ delay = 1000, children }) => {
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setWaiting(false), delay)

    return () => clearTimeout(timer)
  }, [children, delay])

  return html`
    ${!waiting && children}
  `
}

export default Delay
