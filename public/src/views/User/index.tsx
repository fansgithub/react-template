import * as React from 'react'

import Header from './Header'
import UserTable from './UserTable'
import AutoSizer from '@components/AutoSizer'
import './index.less'

export default function Users() {
    return (
        <div className="container">
            <Header />
            <AutoSizer className="tableBox">{({ height }) => <UserTable scrollY={height - 120} />}</AutoSizer>
        </div>
    )
}
