import { ReactElement, useState } from 'react'
import { useForm, Controller } from "react-hook-form";

import Button from '../../../../components/common/Button/Button';
import Input from "../../../../components/common/Input/Input";
import useApi from '../../../../api/useApi';
import styles from './Form.module.scss';
import { apiEndpoints } from '../../../../api/apiEndpoints';

function NewBookForm(): ReactElement {
    const [author, setAuthor] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const { response, isLoading, fetch } = useApi(apiEndpoints.insertNewBook, {
        method: "POST",
        data: {
            name: title,
            author
        }
    }, false)
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            title,
            author,
          }
    });

    function handleNewBeekAdd() {
        console.log('errors', errors)
        // fetch()
    }
    return (
        <form onSubmit={handleSubmit(() => handleNewBeekAdd())} className={styles.formContainer}>
            <Controller
                control={control}
                name="author"
                rules={{required: true}}
                render={({field}) => (
                    <Input
                        classNames={[styles.inputContainer]}
                        placeHolder="Author"
                        onChangeHandler={(author: string) => setAuthor(author)}
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="title"
                rules={{required: true}}
                render={({field}) => (
                    <Input
                        classNames={[styles.inputContainer]}
                        placeHolder="Title"
                        onChangeHandler={(title: string) => setTitle(title)}
                        {...field}
                    />
                )}
            />
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