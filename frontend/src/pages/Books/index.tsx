import useApi from '../../api/useApi';
import { apiEndpoints } from '../../api/apiEndpoints';

function Book() {
    const { data, isLoading } = useApi(apiEndpoints.getAllBook, {
        method: "GET"
    })
    // @ts-ignore
    console.log(data)
    return !isLoading && data  && Array.isArray(data.books) && data.books.length > 0 ? (
        <p>book</p>
    ) : <p>loading</p>
}

export default Book