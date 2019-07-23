import * as React from 'react'
import Loadable from 'react-loadable'
import { HashRouter, Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'

import * as store from '@store/index'
import PageLoading from '@components/PageLoading'
import Error from '@components/Error'
import Provider from './Provider'
import IntlWrapper from './IntlWrapper'
import './index.less'

const hashHistory = createHashHistory()
const history = syncHistoryWithStore(hashHistory, store.routerStore)

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@views/Home'),
    loading: PageLoading,
})
const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '@views/Login'),
    loading: PageLoading
})

function App() {
    return (
        <Provider>
            {/* 将页面的store通过context API 传递下去 */}
            <IntlWrapper>
                {/* alibaba 多语言切换组件 */}
                <div className="appWrapper">
                    <Router history={history}>
                        <HashRouter>
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <Route path="/" component={Home} />
                                <Route component={Error} />
                            </Switch>
                        </HashRouter>
                    </Router>
                </div>
            </IntlWrapper>
        </Provider>
    )
}

export default App
