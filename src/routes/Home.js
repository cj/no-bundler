import html from '/html.js'
import {Button} from '/lib/Bootstrap.js'
import {useState, useCallback} from '/web_modules/preact/hooks.js'

const Header = ({name}) =>
  html`
    <header><h2>${name} List</h2></header>
  `
const Footer = props =>
  html`
    <footer ...${props} />
  `
const TodoList = ({todos}) =>
  todos.map(
    todo => html`
      <li class="list-group-item">${todo}</li>
    `,
  )

export const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = useCallback(
    () => setTodos(preTodos => [...preTodos, `Item ${preTodos.length}`]),
    [todos],
  )

  return html`
    <div class="text-center">
      <${Header} name="Todo List" />

      <ul class="list-group mb-2">
        ${todos.length
          ? html`
              <${TodoList} todos=${todos} />
            `
          : html`
              <li class="list-group-item">No Todos</li>
            `}
      </ul>

      <${Button} onClick=${addTodo}>✨ Add Item<//>
      <${Footer}>This is a footer.<//>
    </div>
  `
}

export default Home
