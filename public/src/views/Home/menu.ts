import Loadable from 'react-loadable'

import PageLoading from '@components/PageLoading'

const loadComponent = (loader: () => Promise<any>) => Loadable({ loader, loading: PageLoading })

export const asynchronousComponents = {
    user: loadComponent(() => import(/* webpackChunkName: "user" */ '@views/User')),
    menu2: loadComponent(() => import(/* webpackChunkName: "menu2" */ '@views/User')),
    menu3: loadComponent(() => import(/* webpackChunkName: "menu3" */ '@views/User'))
}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface IMenu {
    title: string
    id: number
    pid?: number
    path?: string
    icon?: string
    component?: AsynchronousComponentKeys
    exact?: boolean
}

export interface IMenuInTree extends IMenu {
    children?: IMenuInTree[]
}

export const menu: IMenu[] = [
    {
        id: 1,
        path: '/',
        title: 'users',
        icon: 'user',
        component: 'user',
        exact: true,
    },
    {
        id: 2,
        path: '/menu2',
        title: 'menu2',
        icon: 'user',
        component: 'menu2',
        exact: true
    },
    {
        id: 3,
        pid: 2,
        path: '/menu3',
        title: 'menu3',
        icon: 'user',
        component: 'menu3',
        exact: true
    }
]

export default menu
