import * as React from 'react'
import classnames from 'classnames'
import { observer } from 'mobx-react'
import { Layout, Icon, Switch } from 'antd'

import useRootStore from '@store/useRootStore'
import SiderMenu from './Menu'
import './index.less'


function Sider() {
    const { sideBarCollapsed, sideBarTheme, changeSiderTheme } = useRootStore().globalStore

    const ChangeTheme = (
        <div className={classnames('changeTheme', sideBarTheme === 'dark' && 'dark')}>
            Switch Theme
            <Switch
                checkedChildren="dark"
                unCheckedChildren="light"
                checked={sideBarTheme === 'dark'}
                onChange={val => changeSiderTheme(val ? 'dark' : 'light')}
            />
        </div>
    )
    return (
        <Layout.Sider
            className="sider"
            trigger={null}
            theme={sideBarTheme}
            collapsible
            collapsed={sideBarCollapsed}
        >
            <div className={classnames('logoBox', sideBarTheme === 'dark' && 'dark')}>
                <Icon type="ant-design" />
            </div>
            <SiderMenu />
            {!sideBarCollapsed && ChangeTheme}
        </Layout.Sider>
    )
}

export default observer(Sider)
