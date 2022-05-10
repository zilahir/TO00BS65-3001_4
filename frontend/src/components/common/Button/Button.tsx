import { ReactElement } from 'react'
import classnames from 'classnames'

import styles from './Button.module.scss';

type ButtonType = "submit" | "button"
type Variant = "default" | "success" | "error";

interface IButton {
    label: string
    classNames?: string[],
    onClickHandler?: () => void;
    type: ButtonType;
    variant?: Variant
}

function Button({ label, onClickHandler, classNames = [], type, variant = "default" }: IButton): ReactElement {
    return (
        <div className={styles.buttonContainer}>
            <button
                type={type}
                onClick={onClickHandler}
                className={classnames(
                    [
                        styles.button, styles[variant],
                        ...classNames
                    ]
                )}
                >
                {label}
            </button>
        </div>
    )
}

export default Button