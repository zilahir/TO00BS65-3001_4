import { ReactElement } from 'react';

import Home from '../pages/Home'
import Books from '../pages/Books'

interface IMenuItem {
    path: string,
    label: string,
    component: () => ReactElement
}

export const menuItems: ReadonlyArray<IMenuItem> = [
    {
        path: '/', label: 'Home', component: Home
    },
    {
        path: '/books', label: 'Books', component: Books
    }
]