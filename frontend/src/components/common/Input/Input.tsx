import { ChangeEvent, ReactElement, forwardRef } from 'react'
import classnames from 'classnames';

import { ERROR, NORMAL } from '../../../utils/consts';

import styles from './Input.module.scss';

type InputType = "text"
type State = typeof ERROR | typeof NORMAL
interface IInput {
    placeHolder: string,
    type?: InputType,
    value: string | undefined,
    onChangeHandler: (event: string) => void,
    classNames?: string[],
    state?: State
}

function Input({ placeHolder, type, value, onChangeHandler, classNames = [], state = NORMAL, ...rest}: IInput, ref: any): ReactElement {
    return (
        <div className={styles.inputContainer}>
            <input
                ref={ref}
                className={classnames([styles[state], ...classNames])}
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