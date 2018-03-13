import * as actionTypes from './constants';

const initialState = {
    countries: [],
    users: []
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_COUNTRIES:
            return Object.assign({}, state, { countries: action.countries });
        case actionTypes.GET_USERS:
            return Object.assign({}, state, { users: action.users });
        default:
            return state;
    }
}
