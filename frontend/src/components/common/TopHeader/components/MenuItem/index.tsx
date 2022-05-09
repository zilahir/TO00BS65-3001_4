import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

import styles from './MenuItem.module.scss';

interface IMenuItem {
    label: string;
    path: string;
}

function MenuItem({ label, path }: IMenuItem): ReactElement {
    return (
        <Link className={styles.menuItem} to={path}>{label}</Link>
    )
}
export default MenuItem;