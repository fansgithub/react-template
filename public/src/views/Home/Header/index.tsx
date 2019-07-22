import * as React from 'react'
import { observer } from 'mobx-react'
import { Layout, Icon } from 'antd'

import useRootStore from '@store/useRootStore'
import './index.less'

function Header() {
    const { globalStore, authStore } = useRootStore()
    return (
        <Layout.Header className="header">
            <Icon
                className="trigger"
                type={globalStore.sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={globalStore.toggleSideBarCollapsed}
            />
            <div className="right">
                <Icon className="rightIcon" type="logout" theme="outlined" onClick={authStore.logout} />
            </div>
        </Layout.Header>
    )
}

export default observer(Header)
