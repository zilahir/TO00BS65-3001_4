import { ReactElement, useState } from 'react'

import Input from "../../../../components/common/Input/Input";

function NewBookForm(): ReactElement {
    const [author, setAuthor] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    return (
        <form>
            <Input value={author} placeHolder="Author" onChangeHandler={(author: string) => setAuthor(author)}  />
            <Input value={title} placeHolder="Title" onChangeHandler={(title: string) => setTitle(title)}  />
        </form>
    )
}

export default NewBookForm;