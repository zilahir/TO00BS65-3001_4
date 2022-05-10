import { ReactElement } from 'react'
import { en } from '../../../i18n/en';

import styles from './Book.module.scss';

export interface IBook {
    author: string;
    name: string;
    _id?: string;
}

function Book({author, name}: IBook): ReactElement {
    return (
        <div className={styles.singleBook}>
            <p>
                <span>
                    <span>
                        {en.book.author}
                    </span>
                    <span>
                        {author}
                    </span>
                </span>
                <span>
                    <span>
                        {en.book.title}
                    </span>
                    <span>
                        {name}
                    </span>
                </span>
            </p>
        </div>
    )
}

export default Book;