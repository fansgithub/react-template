import * as React from 'react'
import { Button } from 'antd'

import UserModal from './../UserModal'
import './index.less'

function Header() {
    const [modalVisible, setModalVisible] = React.useState(false)

    function toggleModalVisible() {
        setModalVisible(visible => !visible)
    }

    return (
        <div className="header">
            <Button type="primary" onClick={toggleModalVisible}>
                add user
            </Button>
            <UserModal visible={modalVisible} onCancel={toggleModalVisible} />
        </div>
    )
}

export default Header
