import { ReactElement, useState } from 'react'
import { useForm, Controller } from "react-hook-form";

import Button from '../../../../components/common/Button/Button';
import Input from "../../../../components/common/Input/Input";
import useApi from '../../../../api/useApi';
import styles from './Form.module.scss';
import { apiEndpoints } from '../../../../api/apiEndpoints';
import Error from '../../../../components/common/Error';

function NewBookForm(): ReactElement {
    const [author, setAuthor] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
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

    function handleNewBookkAdd() {
        if (Object.keys(errors).length === 0) {
            fetch()
        }
    }
    return (
        <form onSubmit={handleSubmit(() => handleNewBookkAdd())} className={styles.formContainer}>
            <div>
                {errors && errors.author && <Error message="This field is required" />}
                <Controller
                    control={control}
                    name="author"
                    rules={{required: true}}
                    render={({field}) => (
                        <Input
                            classNames={[styles.inputContainer]}
                            placeHolder="Author"
                            state={errors && errors.author ? "error" : "normal"}
                            onChangeHandler={(author: string) => setAuthor(author)}
                            {...field}
                        />
                    )}
                />
            </div>
            <div>
                {errors && errors.title && <Error message="This field is required" />}
                <Controller
                    control={control}
                    name="title"
                    rules={{required: true}}
                    render={({field}) => (
                        <Input
                            classNames={[styles.inputContainer]}
                            placeHolder="Title"
                            state={errors && errors.title ? "error" : "normal"}
                            onChangeHandler={(title: string) => setTitle(title)}
                            {...field}
                        />
                    )}
                />
            </div>
            <Button
                variant="success"
                type="submit"
                label="Save new book"
                onClickHandler={() => handleNewBookkAdd()}
            />
        </form>
    )
}

export default NewBookForm;