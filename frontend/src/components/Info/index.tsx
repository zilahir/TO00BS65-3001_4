import { ReactElement } from 'react'

import styles from './Info.module.scss';
import InfoApi from '../../api/info';

function Info(): ReactElement {
    const basicInfo = InfoApi.getBasicInfo()
    const i18nKeys = InfoApi.getAlli18nKey()
    return (
        <div className={styles.infoContainer}>
            <div className={styles.basicInfo}>
                {
                    Object.keys(basicInfo).map((key) => (
                        <p className={styles.meta}>
                            <span>
                                {i18nKeys[key]}
                            </span>
                            <span>
                            {basicInfo[key]}
                            </span>
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default Info