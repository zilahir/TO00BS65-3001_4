import NewBookForm from './components/Form';
import styles from './NewBook.module.scss';

function NewBook() {
    return (
        <div className={styles.newBookContainer}>
            <NewBookForm />
        </div>
    )
}

export default NewBook;