import { createRoot } from 'react-dom/client'
import { createElement } from 'react';
import App from './App.jsx'

const linkElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const ReactElement = createElement(
  'a', { href: 'https://google.com', target: '_blank' }, 'Click to visit google', '2'
)

const AnotherElement =
  <a href='https://google.com' target='_blank'>Visit Google</a>

createRoot(document.getElementById('root')).render(
  ReactElement
);