import * as React from 'react'
import { observer } from 'mobx-react'
import { Form, Icon, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import loginStore from './store'
import './index.less'

const FormItem = Form.Item

interface IProps extends FormComponentProps {}

function Login({ form }: IProps) {

    const [loading, setLoading] = React.useState(false)

    const submit = (e: React.FormEvent<any>): void => {
        e.preventDefault()
        form.validateFields(
            async (err, values): Promise<any> => {
                if (!err) {
                    setLoading(true)
                    try {
                        await loginStore.login(values)
                    } finally {
                        setLoading(false)
                    }
                }
            }
        )
    }

    const { getFieldDecorator } = form
    return (
        <div className="login">
            <Form onSubmit={submit} className="form">
                <div className="logoBox">
                    <Icon type="ant-design" />
                </div>
                <FormItem hasFeedback>
                    {getFieldDecorator('account', {
                        rules: [{ required: true }]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="account"
                        />
                    )}
                </FormItem>
                <FormItem hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [{ required: true }]
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="password"
                        />
                    )}
                </FormItem>
                <FormItem>
                    <div className="tips">
                        <span>用户名: admin</span>
                        <span>密码: admin</span>
                    </div>
                    <Button type="primary" htmlType="submit" block loading={loading}>
                        登录
                    </Button>
                </FormItem>
            </Form>
        </div>
    )
}

export default Form.create<IProps>()(observer(Login))
