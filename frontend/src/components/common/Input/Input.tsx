import { ChangeEvent, ReactElement } from 'react'

import styles from './Input.module.scss';

type InputType = "text"

interface IInput {
    placeHolder: string,
    type?: InputType,
    value: string,
    onChangeHandler: (event: string) => void
}

function Input({ placeHolder, type, value, onChangeHandler}: IInput): ReactElement {
    return (
        <div className={styles.inputContainer}>
            <input
                type={type}
                placeholder={placeHolder}
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeHandler(event.target.value)}
            />
        </div>
    )
}

export default Input