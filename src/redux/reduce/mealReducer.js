const initialState = {
    meals: [],
    popular_meals: []
}

export default  function MealReducer(state = initialState, action ) {
    switch (action.type) {
        case 'GET_POPULAR_MEALS':
            return {...state, popular_meals: action.payload[0].populary_meals}
        default:
            return state
    }
}