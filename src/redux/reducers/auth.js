import { LOGIN_REQUEST, LOGOUT_REQUEST_FAIL, LOGIN_SUCCESS } from './../constants/actions';
const initialState = {
    email: "",
    password: "",
}

// const userInfo = (state = userState, {type , payload}) => {
const userInfo = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return {
                email: payload.email,
                password: payload.password,
            };
        case LOGOUT_REQUEST_FAIL:
            return {
                email: "",
                password: "",
            };
        default:
            return state;
    }
}

export default userInfo