export const JSON_API_PRODUCTS = 'http://localhost:8000/Products'
export const JSON_API_ORDER = 'http://localhost:8000/orderHistory'
export const JOSN_API_BROWSER= 'http://localhost:8000/browsinHistory'
export const AUTH_API_REG = 'https://intense-retreat-64750.herokuapp.com/auth/registration'
export const AUTH_API_LOGI = "https://intense-retreat-64750.herokuapp.com/auth/login"

export const ACTIONS = {
    GET_PRODUCTS: "GET_PRODUCTS",
    GET_PRODUCT_DETAILS: "GET_PRODUCT_DETAILS",
    GET_CART: "GET_CART",
    GET_FAV: "GET_FAV",
    GET_REC: "GET_REC",
    GET_BROWSING_HISTORY: "GET_BROWSING_HISTORY",
    AUTH_SUCCES: "AUTH_SUCCES",
    AUTH_LOADING: "AUTH_LOADING",
    AUTH_ERROR: "AUTH_ERROR",
    CLEAR_AUTH_STATE: 'CLEAR_AUTH_STATE',
    AUTH_LOGOUT: 'AUTH_LOGOUT'
}

export const PRODUCTLIMIT = 3;