const initialState = {
    meals: [],
    popular_meals: [],
    breakfasts: []
}

export default  function MealReducer(state = initialState, action ) {
    switch (action.type) {
        case 'GET_POPULAR_MEALS':
            return {...state, popular_meals: action.payload[0].populary_meals}
        case 'GET_CATEGORIES':
            console.log(action.payload[0])
            return {...state, popular_meals: action.payload[0]}
        case 'GET_BREAKFAST':
            return {...state, breakfasts: action.payload}
        default:
            return state
    }
}