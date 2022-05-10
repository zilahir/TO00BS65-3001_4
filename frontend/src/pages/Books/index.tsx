import useApi from '../../api/useApi';
import { apiEndpoints } from '../../api/apiEndpoints';

function Book() {
    const { response: books, isLoading } = useApi(apiEndpoints.getAllBook, {
        method: "GET"
    })
    return !isLoading && Array.isArray(books) && books.length > 0 ? (
        <p>book</p>
    ) : <p>loading</p>
}

export default Book