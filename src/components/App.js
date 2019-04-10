import html from '/html.js'
import Router from '/routes/Router.js'

export const App = () => html`
  <div class="App">
    <${Router} />
  </div>
`

export default App
