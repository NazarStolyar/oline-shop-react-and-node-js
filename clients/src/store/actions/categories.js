import { GET_CATEGORIES } from "../types";

import categories from '../../mock/categories.json'

export function getCategories () {
    return dispatch => {
        dispatch(fetchGetCategories(categories))
    }
}

const fetchGetCategories = (payload) => {
    return {
        type: GET_CATEGORIES,
        payload
    }
}
