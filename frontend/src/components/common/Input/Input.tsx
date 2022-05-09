import { ChangeEvent, ReactElement } from 'react'
import classnames from 'classnames';

import styles from './Input.module.scss';

type InputType = "text"

interface IInput {
    placeHolder: string,
    type?: InputType,
    value: string,
    onChangeHandler: (event: string) => void,
    classNames?: string[],
}

function Input({ placeHolder, type, value, onChangeHandler, classNames = []}: IInput): ReactElement {
    return (
        <div className={styles.inputContainer}>
            <input
                className={classnames(...classNames)}
                type={type}
                placeholder={placeHolder}
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeHandler(event.target.value)}
            />
        </div>
    )
}

export default Input