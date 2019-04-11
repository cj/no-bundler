import html from '/html.js'
import {
  Container as RContainer,
  Col as RCol,
  Row as RRow,
  Button as RButton,
} from '/web_modules/react-bootstrap.js'

const addClassName = Component => ({ class: className = '', ...props }) =>
  html`
    <${Component} className="${className}" ...${props} />
  `

export const Col = addClassName(RCol)
export const Container = addClassName(RContainer)
export const Row = addClassName(RRow)
export const Button = addClassName(RButton)
