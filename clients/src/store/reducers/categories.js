import { GET_CATEGORIES } from "../types";

const initialState = {
    categories: [],
    nesState: 'test',
}

export default function categoriesReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}
