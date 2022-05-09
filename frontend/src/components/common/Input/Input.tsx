import { ChangeEvent, ReactElement, forwardRef } from 'react'
import classnames from 'classnames';

import styles from './Input.module.scss';

type InputType = "text"

interface IInput {
    placeHolder: string,
    type?: InputType,
    value: string | undefined,
    onChangeHandler: (event: string) => void,
    classNames?: string[],
}

function Input({ placeHolder, type, value, onChangeHandler, classNames = [], ...rest}: IInput, ref: any): ReactElement {
    return (
        <div className={styles.inputContainer}>
            <input
                ref={ref}
                className={classnames(...classNames)}
                type={type}
                placeholder={placeHolder}
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeHandler(event.target.value)}
                {...rest}
            />
        </div>
    )
}

export default forwardRef(Input)