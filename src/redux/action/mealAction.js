import axios from 'axios'

export const getPopularMeals = () => {
    return (dispatch) => {
        axios('https://645bdb7a99b618d5f327dbf0.mockapi.io/macaronnaya/categories')
            .then(({data}) => {
                dispatch({type: 'GET_MEALS', payload: data[0]})
            })
    }
}

export const getMeal = (id) => {
    return (dispatch) => {
        axios('https://645bdb7a99b618d5f327dbf0.mockapi.io/macaronnaya/categories')
            .then(({data}) => {
                dispatch({type: 'GET_MEALS', payload: data[0]})
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
export const getBreakfast = () => {
    return (dispatch) => {
        axios('https://645bdb7a99b618d5f327dbf0.mockapi.io/macaronnaya/categories')
            .then(({ data }) => {
                const breakfasts = data.map((category) => category.breakfast);
                dispatch({ type: 'GET_BREAKFAST', payload: breakfasts });
            });
    };
};

