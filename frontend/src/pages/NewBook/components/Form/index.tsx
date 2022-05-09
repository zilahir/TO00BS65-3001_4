import { ReactElement, useState } from 'react'

import Button from '../../../../components/common/Button/Button';
import Input from "../../../../components/common/Input/Input";
import styles from './Form.module.scss';

function NewBookForm(): ReactElement {
    const [author, setAuthor] = useState<string>("")
    const [title, setTitle] = useState<string>("")

    function handleNewBeekAdd() {
        console.log('pressed')
    }
    return (
        <form className={styles.formContainer}>
            <Input classNames={[styles.inputContainer]} value={author} placeHolder="Author" onChangeHandler={(author: string) => setAuthor(author)}  />
            <Input classNames={[styles.inputContainer]} value={title} placeHolder="Title" onChangeHandler={(title: string) => setTitle(title)}  />
            <Button
                variant="success"
                type="submit"
                label="Save new book"
                onClickHandler={() => handleNewBeekAdd()}
            />
        </form>
    )
}

export default NewBookForm;