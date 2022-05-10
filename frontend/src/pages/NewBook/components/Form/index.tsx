import { ReactElement, useState } from 'react'
import { useForm, Controller } from "react-hook-form";

import Button from '../../../../components/common/Button/Button';
import Input from "../../../../components/common/Input/Input";
import useApi from '../../../../api/useApi';
import styles from './Form.module.scss';
import { apiEndpoints } from '../../../../api/apiEndpoints';
import Error from '../../../../components/common/Error';
import SuccessNotification from '../../../../components/common/SuccessNotification';
import { en } from '../../../../i18n/en';
import { ERROR, NORMAL } from '../../../../utils/consts';

function NewBookForm(): ReactElement {
    const [author, setAuthor] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
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

    async function handleNewBookkAdd() {
        if (Object.keys(errors).length === 0) {
            await fetch();
            setIsSuccess(true)
        }
    }
    return (
        <form onSubmit={handleSubmit(() => handleNewBookkAdd())} className={styles.formContainer}>
            <div>
                {errors && errors.author && <Error message={en.newBook.requiredField} />}
                {isSuccess && <SuccessNotification messages={[...en.newBook.successMessages]} />}
                <Controller
                    control={control}
                    name="author"
                    rules={{required: true}}
                    render={({field}) => (
                        <Input
                            classNames={[styles.inputContainer]}
                            placeHolder={en.book.author}
                            state={errors && errors.author ? ERROR : NORMAL}
                            onChangeHandler={(author: string) => setAuthor(author)}
                            {...field}
                        />
                    )}
                />
            </div>
            <div>
                {errors && errors.title && <Error message={en.newBook.requiredField} />}
                <Controller
                    control={control}
                    name="title"
                    rules={{required: true}}
                    render={({field}) => (
                        <Input
                            classNames={[styles.inputContainer]}
                            placeHolder={en.book.title}
                            state={errors && errors.title ? ERROR : NORMAL}
                            onChangeHandler={(title: string) => setTitle(title)}
                            {...field}
                        />
                    )}
                />
            </div>
            <Button
                variant="success"
                type="submit"
                label={en.newBook.saveBookCta}
                onClickHandler={() => handleNewBookkAdd()}
            />
        </form>
    )
}

export default NewBookForm;