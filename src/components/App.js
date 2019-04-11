import html from '/html.js'
import Router from '/routes/Router.js'
import { Container, Row, Col } from '/lib/Bootstrap.js'

const App = () => html`
  <${Container} class="App">
    <${Row} class="h-100">
      <${Col} class="align-self-center">
        <${Router} />
      <//>
    <//>
  <//>
`

export default App
