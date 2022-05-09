

import { menuItems } from "../../../fakeApi"
import MenuItem from "./components/MenuItem";
import styles from './TopHeader.module.scss';

function TopHeader() {
    const menu = menuItems.getAllMenuItems();
    return (
        <div className={styles.topHeaderRootContainer}>
            <ul>
                {
                    menu.map(({ path, label }) => (
                        <li key={path}>
                            <MenuItem label={label} path={path} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TopHeader