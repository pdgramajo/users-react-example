import { Api } from '../api';
import * as actionTypes from './constants';

export const GetCountries = () => {
    return (dispatch) => {
        return Api.get('https://restcountries.eu/rest/v2/all').then(response => {
            dispatch({ type: actionTypes.GET_COUNTRIES, countries: response.data })
        }).catch(error => {
            throw (error);
        });
    };
}

export const GetUsers = () => {
    return (dispatch) => {
        let x = localStorage.getItem("users");
        return  dispatch({ type: actionTypes.GET_USERS, users: x!=null? JSON.parse(x):[] })
    };
}
