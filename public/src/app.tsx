import * as React from 'react'
import Loadable from 'react-loadable'
import { HashRouter, Switch, Route } from 'react-router-dom'
import PageLoading from '@components/PageLoading'
import Error from '@components/Error'
import './app.less'

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@views/Home'),
    loading: PageLoading
})
const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '@views/Login'),
    loading: PageLoading
})

const AppWrapper = ({ children }: { children?: React.ReactNode }) => <div className="appWrapper">{children}</div>

function App() {
    return (
          <AppWrapper>
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/" component={Home} />
                    <Route component={Error} />
                </Switch>
            </HashRouter>
          </AppWrapper>
    )
}

export default App
