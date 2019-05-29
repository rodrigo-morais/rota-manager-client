import { render } from 'react-dom'
import App from './app.jsx'
import React from 'react'

const ROOT_ELEMENT_ID = 'react-tech-test'

render(<App />, document.getElementById(ROOT_ELEMENT_ID))
