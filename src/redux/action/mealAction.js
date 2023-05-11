import axios from 'axios'

export const getPopularMeals = () => {
    return (dispatch) => {
        axios('https://645bdb7a99b618d5f327dbf0.mockapi.io/macaronnaya/categories')
            .then(({data}) => {
                dispatch({type: 'GET_POPULAR_MEALS', payload: data})
            })
    }
}

export const getCategories = () => {
    return (dispatch) => {
        axios('https://645bdb7a99b618d5f327dbf0.mockapi.io/macaronnaya/categories')
            .then(({data}) => {
                dispatch({type: 'GET_CATEGORIES', payload: data})
            })
    }
}