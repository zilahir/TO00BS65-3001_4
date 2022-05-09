import { ReactElement } from 'react'
import classnames from 'classnames'

import styles from './Button.module.scss';

type ButtonType = "submit" | "button"

interface IButton {
    label: string
    classNames?: string[],
    onClickHandler: () => void;
    type: ButtonType;
}

function Button({ label, onClickHandler, classNames = [], type }: IButton): ReactElement {
    return (
        <div className={styles.buttonContainer}>
            <button type={type} onClick={onClickHandler} className={classnames([styles.button, ...classNames])}>
                {label}
            </button>
        </div>
    )
}

export default Button