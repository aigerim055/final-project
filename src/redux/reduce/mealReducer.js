const initialState = {
    meals: [],
    popular_meals: []
}

export default  function MealReducer(state = initialState, action ) {
    switch (action.type) {
        case 'GET_MEALS':
            return {...state, meals: action.payload}
        default:
            return state
    }
}