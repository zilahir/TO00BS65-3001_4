import { ReactElement } from 'react'

import useApi from '../../api/useApi';
import { apiEndpoints } from '../../api/apiEndpoints';
import Book, { IBook } from '../../components/common/Book'

import styles from './Books.module.scss'

function Books(): ReactElement {
    const { data, isLoading } = useApi(apiEndpoints.getAllBook, {
        method: "GET"
    })

    return !isLoading && data  && Array.isArray(data.books) && data.books.length > 0 ? (
        <div className={styles.booksRootContainer}>
            <div className={styles.metaContainer}>
                <p>
                    Total number of books: {data.books.length}
                </p>
            </div>
            {
                [...data.books].reverse().map(({name, author, _id: id}: IBook) => (
            <Book key={id} name={name} author={author} />
        ))
            }
        </div>
        
    ) : <p>loading</p>
}

export default Books