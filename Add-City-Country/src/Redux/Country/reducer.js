import {ADD_CITIES,ADD_COUNTRIES,GET_COUNTRY} from "./action";

const initState = {
    cities:[],
    countries:[],
    country:""
}

export const CityReducer = (store = initState,{type,payload}) =>
{
    switch (type){
        case ADD_COUNTRIES:
            return {...store,countries:payload}
        case ADD_CITIES:
            return{...store,cities:payload};
        case GET_COUNTRY:
            return {...store,country:payload}
        default:
            return store;
    }
}
