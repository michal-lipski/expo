export default function user(state = {accessToken: undefined}, action = {}) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                accessToken: action.accessToken
            };
        default:
            return state;
    }
}
