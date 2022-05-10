import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';

import { axiosInstance } from './api';

const { CancelToken } = axios;

interface IUseApi {
    response: undefined | AxiosResponse<any, any>,
    error: undefined | Error,
    isLoading: boolean
}

function useApi(url: string, config = {}, initialFetch = true) {
    const [state, setState] = useState<IUseApi>({
        response: undefined,
        error: undefined,
        isLoading: true
      });

      const source = CancelToken.source();

      function fetch() {
        return new Promise((resolve, reject) => {
          axiosInstance(url, {
            ...config,
            cancelToken: source.token
          })
            .then(response => {
              setState({ error: undefined, response, isLoading: false });
              resolve(response)
            })
            .catch(error => {
              if (axios.isCancel(error)) {
                console.log('Request canceled by cleanup: ', error.message);
              } else {
                setState({ error, response: undefined, isLoading: false });
              }
              reject(error)
            });
        })
      }

      useEffect(() => {
        setState({ ...state, isLoading: true });
    
        if (initialFetch) {
          fetch();
        }
    
        return () => {
          source.cancel('useEffect cleanup.');
        };
      }, [url]);

      const { response, error, isLoading } = state;

      function setData(newData: AxiosResponse<any, any>) {
        // Used to update state from component
        const newResponse = newData;
        setState({ ...state, response: newResponse });
      }

      const data = response ? response.data : undefined;
      return { data, response, error, isLoading, setData, fetch };
    
}

export default useApi;