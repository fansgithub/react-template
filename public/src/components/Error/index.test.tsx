import * as React from 'react'
import * as enzyme from 'enzyme'
import Error from './'

it('renders the correct text', () => {
    const component = enzyme.shallow(<Error />)
    const avatars = component.find('.title')
    expect(avatars.text()).toEqual('Ooooops!')
})
