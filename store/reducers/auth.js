import { LOG_IN, UPDATE_USER } from '../actions/auth';

const initialState = {
    user: null,
    jwt: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user: action.user,
                jwt: action.jwt,
            };

        case UPDATE_USER:
            return {
                ...state,
                user: action.user,
            };
    }

    return state;
};
