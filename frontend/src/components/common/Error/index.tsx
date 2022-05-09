import { ReactElement } from 'react'

import styles from './Error.module.scss';


interface IError {
    message: string
}

function Error({message}: IError): ReactElement {
    return (
        <div className={styles.errorContainer}>
            <p>
                {message}
            </p>
        </div>
    )
}

export default Error