import {GET_TEACH,GET_ONE,EDIT_ONE} from "./action";

const initState = {
    details:[],
    info:"",
    edition:""
}
let data;
export const TeacherReducer = (state = initState,{type,payload}) =>
{
        switch(type)
        {   
            case GET_TEACH:
                return {...state,details:payload}
            case GET_ONE:
                return {...state,info:payload}
            case EDIT_ONE:
                return {...state,edition:payload}
            default:
                return state;
        }
}