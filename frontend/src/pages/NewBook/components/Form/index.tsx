import { ReactElement, useState } from 'react'

import Button from '../../../../components/common/Button/Button';
import Input from "../../../../components/common/Input/Input";

function NewBookForm(): ReactElement {
    const [author, setAuthor] = useState<string>("")
    const [title, setTitle] = useState<string>("")

    function handleNewBeekAdd() {
        console.log('pressed')
    }
    return (
        <form>
            <Input value={author} placeHolder="Author" onChangeHandler={(author: string) => setAuthor(author)}  />
            <Input value={title} placeHolder="Title" onChangeHandler={(title: string) => setTitle(title)}  />
            <Button
                type="submit"
                label="Save new book"
                onClickHandler={() => handleNewBeekAdd()}
            />
        </form>
    )
}

export default NewBookForm;