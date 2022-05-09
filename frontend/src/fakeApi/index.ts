import { ReactElement } from 'react';

import Home from '../pages/Home'
import Books from '../pages/Books'
import NewBook from '../pages/NewPage'

interface IMenuItem {
    path: string,
    label: string,
    component: () => ReactElement,
    ignoreFromMenuItem?: boolean,
}

interface IMenuItems {
    allMenuItems: IMenuItem[],
    getAllRoutes: () => IMenuItem[],
    getAllMenuItems: () => IMenuItem[]
}

export const menuItems: IMenuItems = {
    allMenuItems: [
        {
            path: '/', label: 'Home', component: Home
        },
        {
            path: '/books', label: 'Books', component: Books
        },
        {
            path: '/books/new', label: 'New Book', component: NewBook
        },
        {
            path: "/book:id", label: 'Book', component: Books, ignoreFromMenuItem: true,
        }
    ],
    getAllMenuItems: () => menuItems.allMenuItems.filter((menuItem) => !!!menuItem.ignoreFromMenuItem && Object.assign({}, {...menuItem })),
    getAllRoutes: () => menuItems.allMenuItems
}