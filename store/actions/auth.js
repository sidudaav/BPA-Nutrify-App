export const LOG_IN = 'LOG_IN';
export const UPDATE_USER = 'UPDATE_USER';

export const login = (user, jwt) => {
    return {
        type: LOG_IN,
        user: user,
        jwt: jwt,
    };
};

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user: user,
    };
};
