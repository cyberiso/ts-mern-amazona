# Video 09: Fetch Products

1. install axios
   npm install axios
   in main.tsx 


   ```js
   axios.default.baseURL =
     process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/'
   ```  
   npm i --save-dev @types/node

2. define types in HomePage

   ```js
   type State = {
    products: { products: Product[] }
    loading: boolean
    error: string
   }

   type Action =
   | { type: 'FETCH_REQUEST' }
   | {
      type: 'FETCH_SUCCESS'
      payload: Product[]
    }
   | { type: 'FETCH_FAIL'; payload: string} 

   const initialState: State = {
     products: [],
     loading: true,
     error: '',
   }

   const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true}
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false}
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload}
      default:
        return state
    }
   }

4.  define get error function
    create types/ApiError.ts

    ```js
     export declare type ApiError = {
        message: string
        response: {
            data: {
                message: string
            }
        }
     }
    ```

    create utils.ts

    ```js
    export const getError = (error: ApiError) => {
    return error.response && error.response.data.message
    ? error.response.data.message
    : error.message
     }
   ```
5. fetch products

   ```js
   