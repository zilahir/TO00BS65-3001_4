import { useLocation } from "react-router-dom";
import classnames from 'classnames';

import { menuItems } from "../../../fakeApi"
import MenuItem from "./components/MenuItem";
import styles from './TopHeader.module.scss';

function TopHeader() {
    const menu = menuItems.getAllMenuItems();
    const location = useLocation()
    return (
        <div className={styles.topHeaderRootContainer}>
            <ul>
                {
                    menu.map(({ path, label }) => (
                        <li className={classnames(location.pathname === path && styles.activeMenuItem)} key={path}>
                            <MenuItem label={label} path={path} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TopHeader