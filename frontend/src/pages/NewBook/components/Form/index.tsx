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
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const { handleSubmit, formState: { errors }, control, getValues } = useForm({
        defaultValues: {
            title: "",
            author: "",
          }
    });
    const { response, isLoading, fetch } = useApi(apiEndpoints.insertNewBook, {
        method: "POST",
    }, false)

    async function handleNewBookkAdd(data: any) {
        if (Object.keys(errors).length === 0) {
            await fetch({
                method: "POST",
                data: {
                    name: getValues().title,
                    author: getValues().author
                }
            });
            setIsSuccess(true)
        }
    }
    return (
        <form onSubmit={handleSubmit((data) => handleNewBookkAdd(data))} className={styles.formContainer}>
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
                            {...field}
                        />
                    )}
                />
            </div>
            <Button
                variant="success"
                type="submit"
                label={en.newBook.saveBookCta}
                // onClickHandler={() => handleNewBookkAdd()}
            />
        </form>
    )
}

export default NewBookForm;