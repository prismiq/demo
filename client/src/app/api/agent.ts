import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/routes";

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    const {data, status} = error.response as AxiosResponse;

    switch (status) {
        case 400:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            router.navigate('/server-error', )
            break;

        }
    return Promise.reject(error.response)
})

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.get(url).then(responseBody),
    put: (url: string, body: {}) => axios.get(url).then(responseBody),
    delete: (url: string) => axios.get(url).then(responseBody)
}

const Catalog = {
    list: () => request.get('products'),
    details: (id: number) => request.get(`products/${id}`)
}
const TestErrors = {
    get400Error: () => request.get('buggy/bad-request'),
    get401Error: () => request.get('buggy/unauthorized'),
    get500Error: () => request.get('buggy/server-error'),
    getValidationError: () => request.get('buggy/validation-error')
}
const Basket = {
   get: () => request.get('basket'),
   addItem: (productId: number, quantity = 1) => request.post(`basket?productId=${productId}&quantity=${quantity}&none=1`, {}),
   removeItem: (productId: number, quantity = 1) => request.delete(`basket?productId=${productId}&quantity=${quantity}`) 
}

const agent = {
    Catalog,
    TestErrors,
    Basket
}

export default agent;