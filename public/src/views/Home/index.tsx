import * as React from 'react'
import { Layout } from 'antd'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Error from '@components/Error'
import menu, { asynchronousComponents } from './menu'
import Header from './Header'
import Sider from './Sider'
import './index.less'

function Home() {
    return (
        <Layout>
            <Sider />
            <Layout>
                <Header />
                <Layout.Content className="home-content">
                    <Router>
                        <Switch>
                            {menu.map(m => {
                                if (!m.path) {
                                    return null
                                }
                                return (
                                    <Route
                                        key={m.id}
                                        exact={m.exact}
                                        path={m.path}
                                        component={m.component ? asynchronousComponents[m.component] : null}
                                    />
                                )
                            })}
                            <Route component={Error} />
                        </Switch>
                    </Router>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}


export default Home
