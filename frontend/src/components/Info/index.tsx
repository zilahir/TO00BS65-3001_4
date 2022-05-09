import { ReactElement } from 'react'

import styles from './Info.module.scss';
import InfoApi from '../../api/info';

function Info(): ReactElement {
    const basicInfo = InfoApi.getBasicInfo()
    const i18nKeys = InfoApi.getAlli18nKey()
    const previousAssignments = InfoApi.getAllPreviousAssignments()
    return (
        <div className={styles.infoContainer}>
            <div className={styles.basicInfo}>
                {
                    Object.keys(basicInfo).map((key) => (
                        <p key={basicInfo.key} className={styles.meta}>
                            <span>
                                {i18nKeys[key]}:
                            </span>
                            <span>
                            {basicInfo[key]}
                            </span>
                        </p>
                    ))
                }
            </div>
            <div className={styles.basicInfo}>
                <div className={styles.prevAssignMents}>
                    {
                        previousAssignments.map(({ key, name, githubUrl }, index) => (
                            <div key={key} className={styles.singlePreviousAssignment}>
                                <p>
                                    {index+1}: {name}
                                </p>
                                <p>
                                    <a rel="noopener noreferrer" target="_blank" href={githubUrl}>[github url]</a>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Info