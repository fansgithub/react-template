import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'

import App from '@shared/App'
import registerServiceWorker from './sw'
import './index.less'

registerServiceWorker()
configure({ enforceActions: 'observed' })

const render = (Component: React.ComponentType) => {
    ReactDOM.render(<Component />, document.getElementById('app'))
}

render(App)